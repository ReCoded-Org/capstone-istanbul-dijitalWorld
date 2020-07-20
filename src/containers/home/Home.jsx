import React from "react";
import { useTranslation } from "react-i18next";
import Quotes from "../../components/quotes/Quotes";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Quotes
        quote1={t("home.quotes.sayHerName")}
        quote2={t("home.quotes.openLetter")}
        quote3={t("home.quotes.girlsFight")}
      />
    </div>
  );
};

export default Home;
