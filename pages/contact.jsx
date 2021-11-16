import data from "../src/data/data";
import FeedContact from "../src/components/FeedContact";

export default function contact() {
  console.log("je viens fotre un zbeul")
  const infoPage = data.find((category) => category.pageName === "Contact");
  return <FeedContact infoPage={infoPage} />;
}
