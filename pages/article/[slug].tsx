import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import ContentLayout from "layouts/ContentLayout";
import { NextPage } from "next";

const Content: NextPage<{ article: Article }> = ({ article }) => {
  const meta = {
    title: `${article.title} - Wee Hong KOH`,
    description: article.description,
    date: new Date(article.publishedAt).toISOString()
  };
  return (
    <ContentLayout content={article} metas={meta} />
  );
};

export default Content;

export async function getStaticPaths() {
  return {
    paths: allArticles.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const article = allArticles.find((article) => article.slug === params.slug);

  return { props: { article } };
}
