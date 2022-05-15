// contentlayer.config.ts
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true }
  },
  computedFields
}));
//# sourceMappingURL=compiled-contentlayer-config-GK2PACDL.mjs.map
