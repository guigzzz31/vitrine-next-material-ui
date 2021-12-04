import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignContent: "center",
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "9px 9px 18px #c9c8c3, -9px -9px 18px #ffffff",
  },
}));

export default function CardContainer(props) {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      my={2}
      mx={1}
      py={0.5}
      px={0.5}
      width={["280px", "340px", "360px", "420px", "480px"]}
      minHeight={["144px", "160px", "192px", "236px"]}
    >
      {props.children}
    </Box>
  );
}
