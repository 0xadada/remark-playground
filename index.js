import { join } from "path";
import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const filename = join(process.cwd(), "example.md");

const file = await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkSlug)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(await read(filename));

console.log(String(file));
