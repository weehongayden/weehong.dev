import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "article/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    isPublished: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields,
}));

export const Review = defineDocumentType(() => ({
  name: "Review",
  filePathPattern: "review/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    isPublished: { type: "string", required: true },
    description: { type: "string", required: false },
    image: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Review],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
