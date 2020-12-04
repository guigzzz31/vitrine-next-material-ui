import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";
import ScheduleGenerator from "../src/helpers/generators/ScheduleGenerator";

export default function horaires() {
  const infoPage = data.find((category) => category.pageName === "Horaires");
  return (
    <>
      <FeedPage infoPage={infoPage} />
      <ScheduleGenerator schedule={infoPage.schedule} />
    </>
  );
}
