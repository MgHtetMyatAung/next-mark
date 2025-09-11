import React from "react";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  if (!slug) {
    return (
      <div>
        <h1>Welcome to the Blog Homepage</h1>
        <p>This page handles the base `/blog` route.</p>
      </div>
    );
  }

  const path = slug.join("/");

  return (
    <div>
      <h1>Blog Post</h1>
      <p>You navigated to: **`/blog/${path}`**</p>
      <p>Slug array: **`[${slug?.map((s) => `'${s}'`).join(", ")}]`**</p>
    </div>
  );
}
