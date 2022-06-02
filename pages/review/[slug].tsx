import type { Review } from "contentlayer/generated";
import { allReviews } from "contentlayer/generated";
import ContentLayout from "layouts/ContentLayout";
import { NextPage } from "next";

const Content: NextPage<{ review: Review }> = ({ review }) => {
  const meta = {
    title: `${review.title} - Wee Hong KOH`,
    description: review.description,
    date: new Date(review.publishedAt).toISOString()
  };
  return (
    <ContentLayout content={review} metas={meta} />
  );
};

export default Content;

export async function getStaticPaths() {
  return {
    paths: allReviews.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const review = allReviews.find((review) => review.slug === params.slug);

  return { props: { review } };
}
