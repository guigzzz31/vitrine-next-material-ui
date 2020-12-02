import data from "../src/data/data";
import FeedPage from "../src/components/feedpage/FeedPage";

export default function posturologie() {
  const infoPage = data.find(
    (category) => category.pageName === "Posturologie"
  );
  return <FeedPage infoPage={infoPage} />;
}
