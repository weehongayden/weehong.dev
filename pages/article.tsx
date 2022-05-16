import Container from "components/Container";
import Layout from "components/Layout";
import Subscribe from "components/Subscribe";
import { pick } from "contentlayer/client";
import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import { NextPage } from "next";
import Link from "next/link";

const Article: NextPage<{ articles: Array<Article> }> = ({ articles }) => {
  const meta = {
    title: "Article - Wee Hong KOH",
    description:
      "Thought, learning and insight on the programming, web technology, data structures and algorithms",
  };
  return (
    <Layout {...meta}>
      <Container>
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
              Article
            </h1>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <h2 className="text-xl">
                Thought, learning and insight on the programming, web
                technology, data structures and algorithms
              </h2>
              <Subscribe />
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {articles.map((article) => (
              <div key={article.title}>
                <div className="flex justify-between">
                  <p className="text-sm">
                    <time dateTime={article.publishedAt}>
                      {article.publishedAt}
                    </time>
                  </p>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm ml-1">
                      {article.readingTime.text}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 my-3">
                  {article.tags &&
                    article.tags.map((tag: string, index: number) => {
                      return (
                        <span
                          key={`${tag}-${index}`}
                          className="bg-gray-500 rounded-full px-2 py-1 text-white dark:text-slate-900"
                        >
                          {tag}
                        </span>
                      );
                    })}
                </div>
                <div className="block">
                  <p className="text-xl font-semibold">{article.title}</p>
                  <p className="mt-3 dark:text-gray-300 text-base">
                    {article.description}
                  </p>
                </div>
                <div className="mt-3 text-right sm:text-left">
                  <Link href={`article/${article.slug}`}>
                    <a className="text-base font-semibold text-blue-500 dark:text-green-400 hover:text-blue-600 hover:Dark:text-green-500">
                      Read full story
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
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
    .map((article) =>
      pick(article, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "wordCount",
        "readingTime",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
