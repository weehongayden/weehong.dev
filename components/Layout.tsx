import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface MetaProps {
  title: string;
  description: string;
  image: string;
  type: string;
  date?: string;
}

const urls = [
  {
    id: "about",
    name: "About",
    href: "/",
  },
];

const Layout = ({ children, ...metas }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const meta: MetaProps = {
    title: "WeeHong KOH - Software Engineer and Web Technology Enthusiast",
    description:
      "Software Engineer, Web Developer, Front-end Developer, Back-end Developer, Web Technology Enthusiast, Do-er",
    image: "https://weehong.dev/static/images/profile.png",
    type: "website",
    ...metas,
  };

  return (
    <div>
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
        <meta property="og:site_name" content="WeeHong KOH" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aydenwhk" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between h-16">
              <div className="flex ml-auto">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {urls.map((url) => (
                    <Link href={url.href} key={url.id}>
                      <a
                        className={classNames(
                          router.asPath === url.href
                            ? "text-yellow-600 font-medium"
                            : "border-transparent text-gray-500",
                          "inline-flex items-center px-1 pt-1 text-sm hover:text-yellow-600"
                        )}
                      >
                        {url.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              {urls.map((url) => (
                <Link href={url.href} key={url.id}>
                  <a
                    className={classNames(
                      router.asPath === url.href
                        ? "text-yellow-600 font-medium"
                        : "border-transparent text-gray-500",
                      "block pl-3 pr-4 py-2 text-base font-base hover:text-yellow-600"
                    )}
                  >
                    {url.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
