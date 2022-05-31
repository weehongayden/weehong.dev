import ContentCard from "components/ContentCard";
import { pick } from "contentlayer/client";
import type { Review } from "contentlayer/generated";
import { allReviews } from "contentlayer/generated";
import ArticleLayout from "layouts/ArticleLayout";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const Review: NextPage<{ reviews: Array<Review> }> = ({ reviews }) => {
  const meta = {
    title: "Review - Wee Hong KOH",
    description:
      "Wee Hong KOH constantly practice his data structure and algorithm daily to sharpen his mindset and ready for upcoming challenge",
  };
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    return setSearchText(searchString);
  };

  const filteredContents = reviews
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter(({ title, description, tags, isPublished }) => {
      if (isPublished) {
        const searchString = `${title.toLowerCase()} ${description.toLowerCase()} ${tags
          ?.join(" ")
          .toLowerCase()}`;
        return searchString.includes(searchText.toLowerCase());
      }
    });
  return (
    <ArticleLayout
      title="Review"
      description="A place to share my learning, insight and tips based on LeetCode question"
      metas={meta}
    >
      <div className="mt-6">
        <label htmlFor="email" className="sr-only">
          Search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="shadow-sm border-gray-300 focus:ring-transparent focus:border-blue-500 block w-full sm:text-sm rounded-md dark:border-gray-500 dark:focus:border-green-500 dark:text-white dark:bg-slate-900"
          placeholder="Enter any text"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
      <div className="pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        {!filteredContents.length && (
          <h2 className="mb-4">No contents found.</h2>
        )}
        {filteredContents.map((content) => (
          <ContentCard key={content.title} content={content} path="review" />
        ))}
      </div>
    </ArticleLayout>
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
