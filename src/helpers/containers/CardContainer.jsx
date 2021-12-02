import { makeStyles, propsToClassKey } from "@mui/styles";

import { Box } from "@mui/material";
import { Children } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "9px 9px 18px #c9c8c3, -9px -9px 18px #ffffff",
    paddingBottom: theme.spacing(2),
  },
}));

export default function CardContainer(props) {
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      my={2}
      mx={1}
      py={2}
      px={1}
      minWidth={280}
      minHeight={132}
    >
      {props.children}
    </Box>
  );
}
