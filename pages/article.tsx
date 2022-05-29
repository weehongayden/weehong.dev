import { pick } from "contentlayer/client";
import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import ArticleLayout from "layouts/ArticleLayout";
import { NextPage } from "next";

const Article: NextPage<{ articles: Array<Article> }> = ({ articles }) => {
  const meta = {
    title: "Article - Wee Hong KOH",
    description:
      "Wee Hong KOH constantly learning and reading from other platforms and people. This is the place he shares his thought, learning and insight on the programming, web technology, data structures and algorithms",
  };
  return (
    <ArticleLayout
      title="Article"
      description="Thought, learning and insight on the programming, web
    technology, data structures and algorithms"
      contents={articles}
      metas={meta}
      path="article"
    />
  );
};

export default Article;

export function getStaticProps() {
  const articles: Array<
    Pick<
      Article,
      | "slug"
      | "title"
      | "description"
      | "publishedAt"
      | "wordCount"
      | "readingTime"
    >
  > = allArticles
    .filter((article) => {
      if (article.isPublished) {
        return pick(article, [
          "slug",
          "title",
          "description",
          "publishedAt",
          "wordCount",
          "readingTime",
        ]);
      }
    })
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
