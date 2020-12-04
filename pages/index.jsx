import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";

export default function index() {
  const infoPage = data.find(
    (category) => category.pageName === "Présentation"
  );
  return <FeedPage infoPage={infoPage} />;
}
