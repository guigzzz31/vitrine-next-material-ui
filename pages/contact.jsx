import data from "../src/data/data";
import FeedContact from "../src/components/FeedContact";

export default function contact() {
  const infoPage = data.find((category) => category.pageName === "Contact");
  return <FeedContact infoPage={infoPage} />;
}
