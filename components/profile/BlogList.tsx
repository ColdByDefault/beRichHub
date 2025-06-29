"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);


  // Fetch posts
  const load = async () => {
    try {
      const res = await fetch("/api/posts", { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load posts.");
      setPosts(await res.json());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed.");
      // Refresh list
      await load();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (error) {
    return <p className="text-destructive">{error}</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>{post.title}</CardTitle>
            <time className="text-xs text-muted-foreground">
              {new Date(post.createdAt).toLocaleString()}
            </time>
          </CardHeader>
          <CardContent>{post.content}</CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(post.id)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
