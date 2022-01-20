import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { useTabs } from "../../contexts/context";
import { Box } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   logo: {
//     color: theme.palette.secondary.main,
//   },
// }));

export default function Logo() {
  //const classes = useStyles();

  const { handleClick } = useTabs();
  const size = ["64", "72", "84"];
  return (
    <Box onClick={() => handleClick("/")}>
      <Image src="/logoFoot.svg" alt="pédicurie" width="64" height="64" />;
    </Box>
  );
}
