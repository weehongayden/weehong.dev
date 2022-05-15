// contentlayer.config.ts
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "article/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true }
  }
}));
//# sourceMappingURL=compiled-contentlayer-config-L5VFU236.mjs.map
