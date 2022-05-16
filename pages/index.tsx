import Layout from "components/Layout";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid gap-0 grid-cols-1 sm:gap-5 sm:grid-cols-3">
        <div className="flex flex-col order-2 col-span-2 sm:order-first">
          <h1 className="text-center font-bold sm:text-left">Wee Hong KOH</h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-300 text-center my-1 sm:text-left">
            Software Engineer at{" "}
            <span className={`${styles.dbsColor} text-lg text-center`}>
              DBS Bank
            </span>
          </h2>
          <h3 className="text-2xl my-4 text-center sm:text-left">
            Enjoy developing web application, automating trivia stuff and
            reading others' source code
          </h3>
        </div>
        <div className="w-[176px] relative mx-auto mb-8 sm:ml-auto sm:mr-0 sm:my-auto">
          <Image
            alt="Wee Hong KOH"
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
