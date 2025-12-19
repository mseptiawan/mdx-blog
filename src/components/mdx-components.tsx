// src/components/mdx-components.tsx
import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
  // Kustomisasi tag HTML standar
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900" {...props} />
  ),
  a: ({ href, children, ...props }: any) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-blue-600 underline" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
        {...props}
      >
        {children}
      </a>
    );
  },

  // Komponen kustom buatan sendiri
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning";
  }) => (
    <div
      className={`p-4 my-6 rounded-lg border-l-4 ${
        type === "warning"
          ? "bg-yellow-50 border-yellow-500 text-yellow-900"
          : "bg-blue-50 border-blue-500 text-blue-900"
      }`}
    >
      {children}
    </div>
  ),

  // Optimasi Image Next.js
  img: (props: any) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      width={800}
      height={400}
      className="rounded-lg my-8"
      {...props}
      alt={props.alt || "Blog image"}
    />
  ),
};
