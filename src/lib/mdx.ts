import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as {
        title: string;
        date: string;
        category: string;
        summary: string;
      }),
    };
  });
}

// src/lib/mdx.ts
export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch (e) {
    throw new Error(`Post dengan slug ${slug} tidak ditemukan`);
  }
}
