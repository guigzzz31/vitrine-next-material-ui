import data from "../src/data/data";
import { useTabs } from "../src/contexts/context";
import FeedIndex from "../src/components/FeedIndex";
import FeedContact from "../src/components/FeedContact";
import FeedPage from "../src/components/FeedPage";
import { Box } from "@mui/material";

export default function index() {
  const { currentTab } = useTabs();

  const infoPage = data.find((p) => p.path === currentTab);

  const renderTab = () => {
    switch (currentTab) {
      case "/":
        return <FeedIndex infoPage={infoPage} />;
      case "/contact":
        return <FeedContact infoPage={infoPage} />;
      default:
        return <FeedPage infoPage={infoPage} />;
    }
  };

  return <Box sx={{ paddingTop: 4 }}>{renderTab()}</Box>;
}
