import ContentCard from "components/ContentCard";
import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import ArticleLayout from "layouts/ArticleLayout";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const Article: NextPage<{ articles: Array<Article> }> = ({ articles }) => {
  const meta = {
    title: "Article - Wee Hong KOH",
    description:
      "Wee Hong KOH constantly learning and reading from other platforms and people. This is the place he shares his thought, learning and insight on the programming, web technology, data structures and algorithms",
  };
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    return setSearchText(searchString);
  };

  const filteredContents = articles
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
      title="Article"
      description="Thought, learning and insight on the programming, web
    technology, data structures and algorithms"
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
          <ContentCard key={content.title} content={content} path="article" />
        ))}
      </div>
    </ArticleLayout>
  );
};

export default Article;

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
  > = allArticles.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { articles } };
}
