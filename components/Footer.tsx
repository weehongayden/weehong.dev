import Link from "next/link";
import { FC } from "react";

interface SVGProps {
  className: string;
}

const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/weehongayden/",
    icon: (props: SVGProps) => (
      <svg viewBox="0 0 30 30" {...props}>
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/WeeHong/",
    icon: (props: SVGProps) => (
      <svg viewBox="0 0 30 30" {...props}>
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    href: "https://medium.weehong.me/",
    icon: (props: SVGProps) => (
      <svg viewBox="0 0 30 30" {...props}>
        <path d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z" />
      </svg>
    ),
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="h-10 w-10 fill-slate-900 dark:fill-white"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center text-slate-500 dark:text-gray-300">
            <span>
              Copyrights &copy; Wee Hong KOH. Built with{" "}
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                NextJs
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                TailwindCSS
              </a>
              , deployed on{" "}
              <a href="https://vercel.com/" target="_blank" rel="noreferrer">
                Vercel
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
