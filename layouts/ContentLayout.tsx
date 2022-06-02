import components from "components/MDXComponent";
import type { Article, Review } from "contentlayer/generated";
import { MetaProps } from "interfaces/MetaProps";
import { useMDXComponent } from "next-contentlayer/hooks";
import { FC } from "react";
import Layout from "./Layout";

const ContentLayout: FC<{
  metas: MetaProps; 
  content: Review | Article;
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
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
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
