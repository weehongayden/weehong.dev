import { pick } from "contentlayer/client";
import type { Review } from "contentlayer/generated";
import { allReviews } from "contentlayer/generated";
import ArticleLayout from "layouts/ArticleLayout";
import { NextPage } from "next";

const Review: NextPage<{ reviews: Array<Review> }> = ({ reviews }) => {
  const meta = {
    title: "Review - Wee Hong KOH",
    description:
      "Wee Hong KOH constantly practice his data structure and algorithm daily to sharpen his mindset and ready for upcoming challenge",
  };
  return (
    <ArticleLayout
      title="Review"
      description="A place to share my learning, insight and tips based on LeetCode question"
      contents={reviews}
      metas={meta}
      path="review"
    />
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
