import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";

export default function honoraires() {
  const infoPage = data.find((category) => category.pageName === "Honoraires");
  return <FeedPage infoPage={infoPage} />;
}
