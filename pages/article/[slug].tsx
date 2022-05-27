import ContentLayout from "components/ContentLayout";
import Layout from "components/Layout";
import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import { NextPage } from "next";

const Content: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <Layout {...article}>
      <ContentLayout content={article} />
    </Layout>
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
