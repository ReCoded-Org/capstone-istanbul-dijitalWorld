import React from "react";
import Carousel from "../../components/carousel/carousel";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Carousel
        header1={t("home.carousel.header.header1")}
        header2={t("home.carousel.header.header2")}
        header3={t("home.carousel.header.header3")}
        header4={t("home.carousel.header.header4")}
        button={t("home.carousel.button")}
      />
    </div>
  );
}
