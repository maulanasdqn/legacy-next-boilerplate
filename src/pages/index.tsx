import type { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <h1 data-testid="unocss-test" className="text-red-700 text-6xl">
        Test UnoCSS
      </h1>
    </>
  );
};

export default Home;
