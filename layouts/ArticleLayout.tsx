import Container from "components/Container";
import ContentCard from "components/ContentCard";
import Subscribe from "components/Subscribe";
import { ArticleType } from "interfaces/ArticleProps";
import { MetaProps } from "interfaces/MetaProps";
import Layout from "layouts/Layout";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const ArticleLayout: NextPage<{
  title: string;
  description: string;
  contents: Array<ArticleType>;
  metas: MetaProps;
  path: string;
}> = ({ title, description, contents, metas, path }) => {
  const meta = {
    title: metas.title,
    description: metas.description,
  };

  const [searchText, setSearchText] = useState("");

  const filteredContents = contents
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    return setSearchText(searchString);
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
            <ContentCard key={content.title} content={content} path={path} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default ArticleLayout;
