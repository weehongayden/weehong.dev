import Container from "components/Container";
import Layout from "components/Layout";
import Subscribe from "components/Subscribe";
import { pick } from "contentlayer/client";
import type { Review } from "contentlayer/generated";
import { allReviews } from "contentlayer/generated";
import { NextPage } from "next";
import Link from "next/link";

const Review: NextPage<{ reviews: Array<Review> }> = ({ reviews }) => {
  const meta = {
    title: "Review - Wee Hong KOH",
    description:
      "Wee Hong KOH constantly practice his data structure and algorithm daily to sharpen his mindset and ready for upcoming challenge",
  };
  return (
    <Layout {...meta}>
      <Container>
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
              Review
            </h1>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <h2 className="text-xl">
                Thought, learning and insight on the LeetCode questions. Sharing
                the thought process for reviewing purpose.
              </h2>
              <Subscribe />
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {!reviews.length && <h2 className="mb-4">No posts found.</h2>}
            {reviews.map((review) => (
              <div key={review.title}>
                <div className="flex justify-between">
                  <p className="text-sm">
                    <time dateTime={review.publishedAt}>
                      {review.publishedAt}
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
                      {review.readingTime.text}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 my-3">
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
                <div className="block">
                  <p className="text-xl font-semibold">{review.title}</p>
                  <p className="mt-3 dark:text-gray-300 text-base">
                    {review.description}
                  </p>
                </div>
                <div className="mt-3 text-right sm:text-left">
                  <Link href={`review/${review.slug}`}>
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

export default Review;

export function getStaticProps() {
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
    .filter((review) => {
      if (review.isPublished) {
        return pick(review, [
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

  return { props: { reviews } };
}
