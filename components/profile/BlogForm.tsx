"use client";

import { useState } from "react";
import { createBlog } from "@/actions/blogs";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

export function BlogForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await createBlog(title, content);
      setTitle("");
      setContent("");
      router.refresh(); // re-load the list
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      {error && <Alert variant="destructive">{error}</Alert>}
      <div>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
        />
      </div>
      <div>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your post (max 500 chars)"
          maxLength={500}
          required
          rows={4}
        />
      </div>
      <Button type="submit">Create Post</Button>
    </form>
  );
}
