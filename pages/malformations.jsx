import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";

export default function malformations() {
  const infoPage = data.find(
    (category) => category.pageName === "Malformations du pied"
  );
  return <FeedPage infoPage={infoPage} />;
}
