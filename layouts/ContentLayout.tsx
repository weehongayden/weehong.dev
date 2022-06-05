import ContentBackground from "components/ContentBackground";
import components from "components/MDXComponent";
import type { Article } from "contentlayer/generated";
import { MetaProps } from "interfaces/MetaProps";
import { useMDXComponent } from "next-contentlayer/hooks";
import { FC } from "react";
import Layout from "./Layout";

const ContentLayout: FC<{
  metas: MetaProps;
  content: Article;
}> = ({ metas, content }) => {
  const Component = useMDXComponent(content.body.code);
  const meta = {
    title: metas.title,
    description: metas.description,
    date: metas.date,
    type: "article"
  };
  return (
    <Layout {...meta}>
      <div className="relative px-4 pt-8 pb-20 overflow-hidden items-start sm:px-6 lg:pt-16">
        <ContentBackground />
        <div className="relative">
          <div className="text-lg max-w-prose mx-auto">
            <h1 className="mt-2 block text-blue-500 text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl dark:text-green-500">
              {content.title}
            </h1>
            <p className="mt-8 text-xl text-gray-500 dark:text-gray-300 leading-8">
              {content.description}
            </p>

            <div className="relative mt-10 pb-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
            </div>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-gray-300 mx-auto">
            <Component components={components} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContentLayout;
