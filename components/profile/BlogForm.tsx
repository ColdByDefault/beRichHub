// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import type React from "react";
import { useState } from "react";
import { createBlog } from "@/actions/blogs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function BlogForm() {
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
      window.dispatchEvent(new Event("postAdded"));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-8 h-[500px]">
      <CardHeader>
        <CardTitle>
          <h2 className="text-lg font-semibold">Create a Blog Post</h2>
        </CardTitle>
        <CardDescription>
          Share your thoughts with the community
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col h-full overflow-hidden">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          {error && (
            <Alert
              variant="destructive"
              className="border-red-200 bg-red-50 flex-shrink-0"
            >
              {error}
            </Alert>
          )}
          <div className="grid w-full gap-4 flex-1">
            <div className="flex flex-col space-y-1">
              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your post title..."
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2 flex-1 flex flex-col">
              <Label
                htmlFor="content"
                className="text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Content
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind? Share your thoughts..."
                maxLength={500}
                required
                className="text-base border-gray-200 resize-none h-[180px]"
              />
              <div className="flex justify-between items-center text-xs text-gray-900 dark:text-gray-400 flex-shrink-0">
                <span>Maximum 500 characters</span>
                <span className={content.length > 450 ? "font-medium" : ""}>
                  {content.length}/500
                </span>
              </div>
            </div>
          </div>
          <CardFooter className="pt-4">
            <Button type="submit" variant="outline">
              Post
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
