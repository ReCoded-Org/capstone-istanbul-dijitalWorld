import React from "react";
import { useTranslation } from "react-i18next";
import Quotes from "../../components/quotes/Quotes";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Quotes quotes={t("home.quotes")} />
    </div>
  );
};

export default Home;
