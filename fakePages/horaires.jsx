import data from "../src/data/data";
import FeedHoraires from "../src/components/FeedHoraires";

export default function horaires() {
  const infoPage = data.find((category) => category.pageName === "Horaires");
  return (
    <>
      <FeedHoraires infoPage={infoPage} />
    </>
  );
}
