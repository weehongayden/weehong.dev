import Layout from "components/Layout";
import Subscribe from "components/Subscribe";
import { NextPage } from "next";
import Link from "next/link";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    tags: ["JavaScript", "Java"],
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    tags: ["JavaScript", "Java"],
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    tags: ["JavaScript", "Java"],
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
  },
  {
    title: "Writing effective landing page copy",
    href: "#",
    description:
      "Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.",
    tags: ["JavaScript", "Java"],
    date: "Jan 29, 2020",
    datetime: "2020-01-29",
  },
];

const Article: NextPage = () => {
  const meta = {
    title: "Article - WeeHong KOH",
    description:
      "Thought, learning and insight on the programming, web technology, data structures and algorithms",
  };
  return (
    <Layout {...meta}>
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
            Article
          </h1>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <h2 className="text-xl">
              Thought, learning and insight on the programming, web technology,
              data structures and algorithms
            </h2>
            <Subscribe />
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <div className="flex gap-2 my-3">
                {post.tags.map((tag: string, index: number) => {
                  return (
                    <span
                      key={`${tag}-${index}`}
                      className="bg-gray-500 rounded-full px-2 py-1 text-white dark:text-slate-900"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="block">
                <p className="text-xl font-semibold">{post.title}</p>
                <p className="mt-3 dark:text-gray-300 text-base">
                  {post.description}
                </p>
              </div>
              <div className="mt-3">
                <Link href={post.href}>
                  <a className="text-base font-semibold text-blue-500 hover:text-blue-600">
                    Read full story
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Article;
