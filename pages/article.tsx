import { allArticles } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";

const Article = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(articles);
  return (
    <Layout>
      <Container>
        <h1>Article</h1>
        <hr className="my-10 border-1 border-gray-300" />
        <div className="grid sm:grid-cols-3 gap-5">
          {articles.map((article: any, index: number) => {
            console.log(article);
            return (
              <Link href={`article/${article.slug}`}>
                <div key={index}>
                  <h2>{article.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default Article;

export function getStaticProps() {
  const articles = allArticles;
  // .sort(
  //   (a, b) =>
  //     Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  // );

  return { props: { articles } };
}
