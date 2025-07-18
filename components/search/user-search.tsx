// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, User } from "lucide-react";

interface SearchUser {
  id: string;
  email: string;
  username?: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  picture?: string;
}

interface UserSearchProps {
  preventAutoFocus?: boolean;
}

export function UserSearch({ preventAutoFocus = false }: UserSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { isAuthenticated } = useKindeBrowserClient();

  // Search function
  const performSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setError(null);
        setHasSearched(false);
        return;
      }

      // Check if user is authenticated
      if (!isAuthenticated) {
        setError("Please log in to search for users");
        return;
      }

      setIsLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        const response = await fetch(
          `/api/search-user?q=${encodeURIComponent(searchQuery.trim())}`
        );

        if (!response.ok) {
          throw new Error(
            `Search failed: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (err: unknown) {
        console.error("Search error:", err);
        const errorMessage =
          err instanceof Error ? err.message : "Failed to search users";
        setError(errorMessage);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [isAuthenticated]
  );

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setResults([]);
        setError(null);
        setHasSearched(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    performSearch(query);
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    if (!newQuery.trim()) {
      setResults([]);
      setError(null);
      setHasSearched(false);
    }
  };

  const handleUserClick = (userId: string) => {
    // Close the search results by resetting the state
    setResults([]);
    setQuery("");
    setError(null);
    setHasSearched(false);

    router.push(`/profile/${userId}`);
  };

  const getInitials = (user: SearchUser) => {
    const firstName = user.first_name || user.full_name?.split(" ")[0] || "";
    const lastName = user.last_name || user.full_name?.split(" ")[1] || "";
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getDisplayName = (user: SearchUser) => {
    return (
      user.full_name ||
      `${user.first_name || ""} ${user.last_name || ""}`.trim() ||
      user.username ||
      user.email
    );
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto">
      <div className="flex space-x-2 gap-1">
        <Input
          placeholder="Search users..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          disabled={isLoading}
          autoFocus={false}
          {...(preventAutoFocus && {
            inputMode: "none",
            autoComplete: "off",
            onFocus: (e) => {
              // Prevent keyboard from appearing on mobile
              e.target.setAttribute("readonly", "true");
              setTimeout(() => {
                e.target.removeAttribute("readonly");
              }, 100);
            },
          })}
        />
        <Button
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
          size="icon"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Floating results container */}
      {(error ||
        results.length > 0 ||
        isLoading ||
        (query.trim() && !hasSearched) ||
        (hasSearched && results.length === 0 && !error && !isLoading)) && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          {error && (
            <Card className="border-destructive shadow-lg">
              <CardContent className="pt-4">
                <p className="text-sm text-destructive">{error}</p>
              </CardContent>
            </Card>
          )}

          {results.length > 0 && (
            <Card className="shadow-lg max-h-80 overflow-y-auto">
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {results.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                      onClick={() => handleUserClick(user.id)}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={user.picture}
                          alt={getDisplayName(user)}
                        />
                        <AvatarFallback>
                          {getInitials(user) || <User className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {getDisplayName(user)}
                        </p>
                        {user.username && (
                          <p className="text-xs text-muted-foreground truncate">
                            @{user.username}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {query.trim() && !hasSearched && !isLoading && (
            <Card className="shadow-lg">
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Press Enter to search
                </p>
              </CardContent>
            </Card>
          )}

          {isLoading && (
            <Card className="shadow-lg">
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Searching...
                </p>
              </CardContent>
            </Card>
          )}

          {hasSearched && results.length === 0 && !error && !isLoading && (
            <Card className="shadow-lg">
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  No users found
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
