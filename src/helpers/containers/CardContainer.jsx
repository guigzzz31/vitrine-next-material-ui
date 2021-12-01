import { makeStyles, propsToClassKey } from "@mui/styles";

import { Box } from "@mui/material";
import { Children } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "20px 20px 60px #d9d7d2, -20px -20px 60px #ffffff",
    paddingBottom: theme.spacing(2),
  },
}));

export default function CardContainer(props) {
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      m={0.5}
      p={1}
      minWidth={280}
      minHeight={132}
    >
      {props.children}
    </Box>
  );
}
