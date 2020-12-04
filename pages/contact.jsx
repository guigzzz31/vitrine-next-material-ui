import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";

export default function contact() {
  const infoPage = data.find((category) => category.pageName === "Contact");
  return <FeedPage infoPage={infoPage} />;
}
