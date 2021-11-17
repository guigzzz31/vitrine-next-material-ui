import data from "../src/data/data";
import FeedIndex from "../src/components/FeedIndex";

export default function index() {
  const infoPage = data.find((category) => category.pageName === "Accueil");

  return <FeedIndex infoPage={infoPage} />;
}
