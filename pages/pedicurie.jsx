import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";

export default function pedicurie() {
  const infoPage = data.find((category) => category.pageName === "Pédicurie");
  return <FeedPage infoPage={infoPage} />;
}
