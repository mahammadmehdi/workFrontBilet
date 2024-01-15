import React from "react";
import BestItSolution from "../../components/BestItSolution";
import ItServices from "../../components/ItServices";
import InsightHelps from "../../components/InsightHelps";
import GlobalBrands from "../../components/GlobalBrands";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LetsWork from "../../components/LetsWork";

function Home() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>

      <BestItSolution></BestItSolution>
      <ItServices></ItServices>
      <InsightHelps></InsightHelps>
      <GlobalBrands></GlobalBrands>
      <LetsWork></LetsWork>
    </div>
  );
}

export default Home;
