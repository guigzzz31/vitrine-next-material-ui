import data from "../src/data/data";
import { useTabs } from "../src/contexts/context";
import FeedIndex from "../src/components/FeedIndex";
import FeedHoraires from "../src/components/FeedHoraires";
import FeedContact from "../src/components/FeedContact";
import FeedPage from "../src/components/FeedPage";

export default function index() {
  const { currentTab, setCurrentTab } = useTabs();

  const infoPage = data.find((p) => p.path === currentTab);

  console.log("currentTab", currentTab);

  const renderTab = () => {
    switch (currentTab) {
      case "/":
        return <FeedIndex infoPage={infoPage} />;
      case "/horaires":
        return <FeedHoraires infoPage={infoPage} />;
      case "/contact":
        return <FeedContact infoPage={infoPage} />;
      default:
        return <FeedPage infoPage={infoPage} />;
    }
  };

  return <>{renderTab()}</>;
}
