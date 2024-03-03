import { join } from "path";
import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkSmartypants from "remark-smartypants";
import remarkRehype from "remark-rehype";
import rehypeFigure from "rehype-figure";
import rehypeDocument from "rehype-document";
import rehypeStringify from "rehype-stringify";

const filename = join(process.cwd(), "example.md");
const stylesheet = join(process.cwd(), "globals.css");
const styles = String(await read(stylesheet));

const documentOptions = {
  css: "https://example.com/index.css",
  style: styles,
  title: "0xADADA",
  language: "en-US",
  link: [
    { href: "/favicon.ico", rel: "icon", sizes: "any" },
    { href: "/icon.svg", rel: "icon", type: "image/svg+xml" },
  ],
  meta: [{ content: "rehype-document", name: "generator" }],
};

const file = await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkSlug)
  .use(remarkSmartypants)
  .use(remarkRehype)
  .use(rehypeFigure, { className: "rehype-figure" })
  .use(rehypeDocument, documentOptions)
  .use(rehypeStringify)
  .process(await read(filename));

console.log(String(file));
