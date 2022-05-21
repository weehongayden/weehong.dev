import Container from "components/Container";
import Layout from "components/Layout";
import { pick } from "contentlayer/client";
import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Home.module.css";

const Home: NextPage<{ articles: Array<Article> }> = ({ articles }) => {
  const metas = {
    title: "Wee Hong KOH - Software Engineer and Web Enthusiast",
    description:
      "Wee Hong KOH is a software engineer who based in Singapore. He enjoys developing web applications, automating trivia stuff, and reading others' source code and grinding data structure and algorithms. He always gets his hands dirty when discovering something interesting.",
  };
  return (
    <Layout {...metas}>
      <Container>
        <div className="grid gap-0 grid-cols-1 sm:gap-5 sm:grid-cols-3">
          <div className="flex flex-col order-2 col-span-2 sm:order-first">
            <h1 className="text-center font-bold sm:text-left">Wee Hong KOH</h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300 text-center my-1 sm:text-left">
              Software Engineer at{" "}
              <span className={`${styles.dbsColor} text-lg text-center`}>
                DBS Bank
              </span>
            </h2>
            <h3 className="text-2xl my-4 text-center sm:text-left">
              Enjoy developing web application, automating trivia stuff and
              reading others&apos; source code
            </h3>
          </div>
          <div className="w-[176px] relative mx-auto mb-8 sm:ml-auto sm:mr-0 sm:my-auto">
            <Image
              alt="Wee Hong KOH"
              height={176}
              width={176}
              src="/profile.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <div className="font-bold mt-14">
          <h2>Recent Published</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {!articles.length && <h2 className="mb-4">No posts found.</h2>}
            {articles.map((article) => (
              <div className="border border-2 rounded p-5" key={article.title}>
                <div className="flex gap-2">
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
                  <p className="text-lg font-semibold">{article.title}</p>
                </div>
                <div className="mt-3 text-right sm:text-left">
                  <Link href={`article/${article.slug}`}>
                    <a className="text-sm font-semibold text-blue-500 dark:text-green-400 hover:text-blue-600 hover:Dark:text-green-500">
                      Read full story
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="block text-center mt-8">
            <Link href="/article">
              <a className="text-lg text-centerfont-semibold text-blue-500 dark:text-green-400 hover:text-blue-600 hover:Dark:text-green-500">
                Read all articles
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;

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
    )
    .slice(0, 2);

  return { props: { articles } };
}
