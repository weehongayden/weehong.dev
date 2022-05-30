import Container from "components/Container";
import ContentCard from "components/ContentCard";
import Subscribe from "components/Subscribe";
import type { Article, Review } from "contentlayer/generated";
import { MetaProps } from "interfaces/MetaProps";
import Layout from "layouts/Layout";
import { NextPage } from "next";

const ArticleLayout: NextPage<{
  title: string;
  description: string;
  contents: Array<Article> | Array<Review>;
  metas: MetaProps;
  path: string;
}> = ({ title, description, contents, metas, path }) => {
  const meta = {
    title: metas.title,
    description: metas.description,
  };
  return (
    <Layout {...meta}>
      <Container>
        <div>
          <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
            {title}
          </h1>
          {description &&
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <h2 className="text-xl">{description}</h2>
            <Subscribe />
          </div>
          }
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {!contents.length && <h2 className="mb-4">No posts found.</h2>}
          {contents.map((content) => (
            <ContentCard key={content.title} content={content} path={path} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ArticleLayout;
