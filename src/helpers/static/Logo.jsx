import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#000",
    // width: "auto"
  },
}));

export default function Logo() {
    const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Image src="/logo.svg" alt="pédicurie" width="64" height="64" />
    </Box>
  );
}
