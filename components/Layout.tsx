import classNames from "classnames";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";

interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  publishedAt?: string;
}

const urls = [
  {
    id: "about",
    name: "About",
    href: "/",
  },
  {
    id: "article",
    name: "Article",
    href: "/article",
  },
  {
    id: "review",
    name: "Review",
    shortDescription: "LeetCode",
    href: "/review",
  },
];

const Layout: FC<{ children: ReactNode; metas?: MetaProps | undefined }> = ({
  children,
  ...metas
}) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const meta: MetaProps = {
    title: "Wee Hong KOH - Software Engineer and Web Enthusiast",
    description:
      "Software Engineer, Web Developer, Front-end Developer, Back-end Developer, Web Technology Enthusiast, Do-er",
    image: "https://weehong.dev/static/images/banner.jpg",
    type: "website",
    ...metas,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://weehong.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://weehong.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Wee Hong KOH" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aydenwhk" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.publishedAt && (
          <meta property="article:published_time" content={meta.publishedAt} />
        )}
      </Head>
      <nav className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between h-16">
              <div className="flex items-center mr-auto sm:mr-0 sm:ml-auto">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-1">
                  {urls.map((url) => (
                    <Link href={url.href} key={url.id}>
                      <a
                        className={classNames(
                          router.asPath === url.href && "active",
                          "flex flex-col justify-center items-center text-center leading-3 px-3"
                        )}
                      >
                        {url.name}
                        {url.shortDescription && (
                          <span className="text-gray-500 text-xs">
                            {url.shortDescription}
                          </span>
                        )}
                      </a>
                    </Link>
                  ))}
                </div>
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all bg-slate-900 dark:bg-white sm:ml-3"
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-white dark:text-slate-700"
                    >
                      {resolvedTheme === "dark" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-white hover:text-gray-500 ml-2"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div
            className="border-y-2 border-gray-200 dark:border-slate-700 sm:hidden"
            id="mobile-menu"
          >
            <div className="py-2 space-y-1">
              {urls.map((url) => (
                <Link href={url.href} key={url.id}>
                  <a
                    className={classNames(
                      router.asPath === url.href && "active font-medium",
                      "block pl-3 pr-4 py-2"
                    )}
                  >
                    {url.name}
                    {url.shortDescription && (
                      <span className="block">{url.shortDescription}</span>
                    )}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
