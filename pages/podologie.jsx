import React from "react";
import data from "../src/data/data";
import FeedPage from "../src/components/feedpage/FeedPage";

export default function podologie() {
  const infoPage = data.find((category) => category.pageName === "Podologie");
  return <FeedPage infoPage={infoPage} />;
}
