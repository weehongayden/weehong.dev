import Container from "components/Container";
import Subscribe from "components/Subscribe";
import { MetaProps } from "interfaces/MetaProps";
import Layout from "layouts/Layout";
import { NextPage } from "next";
import { ReactNode } from "react";

const ArticleLayout: NextPage<{
  title: string;
  description: string;
  metas: MetaProps;
  children: ReactNode;
}> = ({ title, description, metas, children }) => {
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
          {description && (
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <h2 className="text-xl">{description}</h2>
              <Subscribe />
            </div>
          )}
        </div>
        {children}
      </Container>
    </Layout>
  );
};

export default ArticleLayout;
