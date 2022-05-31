import Container from "components/Container";
import { pick } from "contentlayer/client";
import type { Article, Review } from "contentlayer/generated";
import { allArticles, allReviews } from "contentlayer/generated";
import Layout from "layouts/Layout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Home.module.css";

const Home: NextPage<{ articles: Array<Article>; reviews: Array<Review> }> = ({
  articles,
  reviews,
}) => {
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
            <section id="fav-quote" className="my-5">
              <div className="max-w-4xl p-4 text-white dark:text-gray-800 bg-slate-900 dark:bg-white rounded-lg shadow">
                <h4 className="text-center mb-1">Favourite Quote</h4>
                <div className="h-3 text-3xl text-left text-gray-200 dark:text-gray-600">
                  “
                </div>
                <p className="px-4 text-center text-gray-200 dark:text-gray-600">
                  曾子曰：“吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”
                </p>
                <div className="h-3 text-3xl text-right text-gray-200 dark:text-gray-600">
                  ”
                </div>
              </div>
            </section>
            <h3 className="text-2xl mb-4 text-center sm:text-left">
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
          <h2 className="text-center md:text-left">Recent Published Article</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {!articles.length && <h3 className="mb-4">No posts found.</h3>}
            {articles.map((article) => (
              <Link href={`article/${article.slug}`} key={article.title}>
                <a className="border border-2 rounded p-5">
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
                  <div className="block text-center sm:text-left">
                    <p className="text-xl font-semibold mb-3 dark:text-green-400">
                      {article.title}
                    </p>
                    <span className="font-normal text-base text-slate-500 dark:text-gray-300">
                      {article.description}
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          {articles.length > 0 && (
            <div className="block text-center mt-8">
              <Link href="/article">
                <a className="text-lg text-centerfont-semibold text-blue-500 dark:text-green-400 hover:text-blue-600 hover:Dark:text-green-500">
                  Read all articles
                </a>
              </Link>
            </div>
          )}
        </div>
        <div className="font-bold mt-14">
          <h2 className="text-center md:text-left">Recent Published Review</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {!reviews.length && <h3 className="mb-4">No content found.</h3>}
            {reviews.map((review) => (
              <Link href={`review/${review.slug}`} key={review.title}>
                <a className="border border-2 rounded p-5">
                  <div className="flex gap-2">
                    {review.tags &&
                      review.tags.map((tag: string, index: number) => {
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
                  <div className="block text-center sm:text-left">
                    <p className="text-xl font-semibold mb-3 dark:text-green-400">
                      {review.title}
                    </p>
                    <span className="font-normal text-base text-slate-500 dark:text-gray-300">
                      {review.description}
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          {articles.length > 0 && (
            <div className="block text-center mt-8">
              <Link href="/review">
                <a className="text-lg text-centerfont-semibold text-blue-500 dark:text-green-400 hover:text-blue-600 hover:Dark:text-green-500">
                  Read all reviews
                </a>
              </Link>
            </div>
          )}
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

  const reviews: Array<
    Pick<
      Review,
      | "slug"
      | "title"
      | "description"
      | "publishedAt"
      | "wordCount"
      | "readingTime"
    >
  > = allReviews
    .map((review) =>
      pick(review, [
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

  return { props: { articles, reviews } };
}
