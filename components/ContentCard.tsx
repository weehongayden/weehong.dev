import type { Article } from "contentlayer/generated";
import Link from "next/link";
import { FC } from "react";

const ContentCard: FC<{ content: Article; path: string }> = ({
  content,
  path,
}) => {
  return (
    <div key={content.title}>
      <div className="flex justify-between">
        <p className="text-sm">
          <time dateTime={content.publishedAt}>{content.publishedAt}</time>
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
          <span className="text-sm ml-1">{content.readingTime.text}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 my-3">
        {content.tags &&
          content.tags.map((tag: string, index: number) => {
            return (
              <span
                key={`${tag}-${index}`}
                className="bg-slate-900 rounded-full px-2 py-1 text-white dark:bg-gray-500"
              >
                {tag}
              </span>
            );
          })}
      </div>
      <div className="block">
        <p className="text-xl font-semibold">{content.title}</p>
        <p className="mt-3 text-gray-500 dark:text-gray-300 text-base line-clamp-3">
          {content.description}
        </p>
      </div>
      <div className="mt-3 text-right sm:text-left">
        <Link href={`/${path}/${content.slug}`}>
          <a className="text-base font-semibold text-blue-500 dark:text-green-400 hover:text-blue-600 hover:Dark:text-green-500">
            {path === "review" ? "Read review" : "Read full story"}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;
