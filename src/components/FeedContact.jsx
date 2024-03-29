import { makeStyles } from "@mui/styles";

import { Box, useMediaQuery } from "@mui/material";

import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContactCardGenerator from "../helpers/generators/ContactCardGenerator";
import VisitCardGenerator from "../helpers/generators/VisitCardGenerator";
import ScheduleGenerator from "../helpers/generators/ScheduleGenerator";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 88,
    marginBottom: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function FeedContact(props) {
  const classes = useStyles();
  const { infoPage } = props;
  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <Box className={classes.container}>
      {/* {matches && <PageNameGenerator pageName={infoPage.pageName} />} */}
      <InfoTipGenerator infoTip={infoPage.infoTip} />
      {infoPage.users && <VisitCardGenerator users={infoPage.users} />}
      <Box paddingY={4}>
        {infoPage.schedule && (
          <ScheduleGenerator schedule={infoPage.schedule} />
        )}
      </Box>
      {infoPage.profil && <ContactCardGenerator cards={infoPage.cards} />}
    </Box>
  );
}
