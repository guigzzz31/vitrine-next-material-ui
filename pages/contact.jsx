import data from "../src/data/data";
import FeedContact from "../src/components/FeedContact";

import { useTabs } from "../src/contexts/context";

export default function contact() {
  const { currentTab, setCurrentTab } = useTabs();

  console.log("context in contact", currentTab);

  const infoPage = data.find((category) => category.pageName === "Contact");
  return <FeedContact infoPage={infoPage} />;
}
