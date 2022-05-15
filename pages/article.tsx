import TagList from "components/TagList";
import { allArticles } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Layout from "../components/Layout";

const Article = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title="Article - WeeHong KOH"
      description="Thoughts, learning and insight about programming, web technology, data structure and algorithms"
    >
      <Container>
        <h1>Article</h1>
        <h3 className="text-gray-500 dark:text-gray-300">
          Thoughts, learning and insight about programming, web technology, data
          structures and algorithms
        </h3>
        <hr className="my-10 border-1 border-gray-300" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {!articles.length && <h3>No article found.</h3>}
          {articles.map((article: any, index: number) => {
            return (
              <div key={index}>
                <Link href={`article/${article.slug}`} passHref>
                  <h2 className="cursor-pointer">{article.title}</h2>
                </Link>
                <TagList tags={article.tags} />
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {article.summary}
                </p>
              </div>
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
