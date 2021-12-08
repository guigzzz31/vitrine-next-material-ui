import { makeStyles } from "@mui/styles";

import { Box, useMediaQuery } from "@mui/material";
import ContactCard from "../static/article/ContactCard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
  },
}));

export default function CardGenerator(props) {
  const { cards } = props;
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <Box
      flexDirection={matches ? "row" : "column"}
      justifyContent={matches ? "space-around" : "center"}
      className={classes.container}
    >
      {cards &&
        cards.map((card) => {
          return <ContactCard card={card} />;
        })}
    </Box>
  );
}
