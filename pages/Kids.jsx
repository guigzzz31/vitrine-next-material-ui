import data from "../src/data/data";
import FeedPage from "../src/components/feedpage/FeedPage";

export default function Kids() {
  const infoPage = data.find((category) => category.pageName === "Enfants");
  return <FeedPage infoPage={infoPage} />;
}
