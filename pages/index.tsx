import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid gap-0 my-10 grid-cols-1 sm:gap-5 sm:grid-cols-3">
        <div className="flex flex-col order-2 col-span-2 sm:order-first">
          <h1 className="font-calendas text-3xl text-center font-bold sm:text-left">
            WeeHong KOH
          </h1>
          <h2 className="text-lg text-gray-700 text-center my-1 sm:text-left">
            Software Engineer at{" "}
            <span className={`${styles.dbsColor} text-center`}>DBS Bank</span>
          </h2>
          <h3 className="text-gray-700 text-2xl my-4 text-center sm:text-left">
            Enjoy developing web application and automating trivia stuff
          </h3>
          <div className="flex mt-5">
            <Link href="https://github.com/WeeHong/">
              <a
                className="text-amber-600 text-lg mr-5 hover:text-amber-700"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/weehongayden/">
              <a
                className="text-amber-600 text-lg mx-5 hover:text-amber-700"
                target="_blank"
                rel="noreferrer"
              >
                Linked In
              </a>
            </Link>
            <Link href="https://medium.weehong.me/">
              <a
                className="text-amber-600 text-lg mx-5 hover:text-amber-700"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </Link>
          </div>
        </div>
        <div className="w-[80px] sm:w-[176px] relative sm:mb-0 mx-auto sm:mb-8">
          <Image
            alt="WeeHong KOH"
            height={176}
            width={176}
            src="/profile.jpg"
            className="rounded-full filter grayscale"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
