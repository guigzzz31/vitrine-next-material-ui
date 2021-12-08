import { makeStyles } from "@mui/styles";

import { Box, Typography, useMediaQuery } from "@mui/material";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import VisitCardGenerator from "../helpers/generators/VisitCardGenerator";

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
export default function FeedIndex(props) {
  const classes = useStyles();
  const { infoPage } = props;

  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <Box className={classes.container}>
      <Box>
        <Typography>Carole Richou & Carine Da Costa</Typography>
      </Box>
      {infoPage.users ? (
        <Box item>
          <VisitCardGenerator users={infoPage.users} />
        </Box>
      ) : null}
    </Box>
  );
}
