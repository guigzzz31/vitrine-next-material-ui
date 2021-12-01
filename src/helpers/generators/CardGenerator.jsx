import { makeStyles } from "@mui/styles";

import { Box, useMediaQuery } from "@mui/material";
import CardCoord from "../static/cardContact/CardCoord";
import CardAdress from "../static/cardContact/CardAdress";
import CardAcces from "../static/cardContact/CardAcces";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

export default function CardGenerator(props) {
  const { info } = props;
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <Box
      flexDirection={matches ? "row" : "column"}
      className={classes.container}
    >
      <CardCoord contact={info.contact} />
      <CardAdress adress={info.adress} />
      <CardAcces acces={info.acces} />
    </Box>
  );
}
