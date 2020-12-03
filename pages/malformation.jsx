import data from "../src/data/data";
import FeedPage from "../src/components/feedpage/FeedPage";

export default function malformations() {
  const infoPage = data.find(
    (category) => category.pageName === "MalFormations"
  );
  return <FeedPage infoPage={infoPage} />;
}
