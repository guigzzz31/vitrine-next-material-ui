import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";

export default function reflexologie() {
  const infoPage = data.find(
    (category) => category.pageName === "Réflexologie"
  );
  return <FeedPage infoPage={infoPage} />;
}
