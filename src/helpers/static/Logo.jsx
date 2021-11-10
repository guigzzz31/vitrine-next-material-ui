import Image from "next/image";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  logo: {
    color: theme.palette.secondary.main,
  },
}));

export default function Logo() {
  const classes = useStyles();
  
  return (
    <Image
      src="/logo.svg"
      alt="pédicurie"
      width="64"
      height="64"
      className={classes.logo}
    />
  );
}
