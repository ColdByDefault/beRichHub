// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface BlogListProps {
  userId?: string; // Optional userId to fetch posts for specific user
  isOwnProfile?: boolean; // Whether the current user is viewing their own profile
}

export function BlogList({ userId, isOwnProfile = false }: BlogListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  // Fetch posts
  const load = useCallback(async () => {
    try {
      const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load posts.");
      setPosts(await res.json());
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Could not load posts.";
      setError(errorMessage);
    }
  }, [userId]);

  useEffect(() => {
    load();

    // whenever a new post is created elsewhere, re-fetch
    const onAdded = () => load();
    window.addEventListener("postAdded", onAdded);
    return () => {
      window.removeEventListener("postAdded", onAdded);
    };
  }, [load]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed.");
      await load();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Delete failed.";
      setError(errorMessage);
    }
  };

  if (error) {
    return <p className="text-destructive">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col h-full justify-between">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <time className="text-xs">
              {new Date(post.createdAt).toLocaleString()}
            </time>
          </CardHeader>
          <CardContent>{post.content}</CardContent>
          {isOwnProfile && (
            <CardFooter>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setPostToDelete(post.id);
                  setDeleteDialogOpen(true);
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => {
          setDeleteDialogOpen(open);
          if (!open) setPostToDelete(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this post? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (postToDelete) handleDelete(postToDelete);
                setDeleteDialogOpen(false);
                setPostToDelete(null);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
