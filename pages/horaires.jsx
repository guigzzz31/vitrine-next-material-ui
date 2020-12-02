import data from "../src/data/data";
import FeedPage from "../src/components/feedpage/FeedPage";

export default function horaires() {
  const infoPage = data.find((category) => category.pageName === "Horaires");
  return <FeedPage infoPage={infoPage} />;
}
