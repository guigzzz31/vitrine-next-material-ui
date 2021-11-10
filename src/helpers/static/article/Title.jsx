import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Theme from "../../../../styles/theme"
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
  },
  carole: {
    fontFamily: "Montserrat",
    color: theme.palette.primary.main,
  },
  carine: {
    fontFamily: "Montserrat",
    color: theme.palette.error.main,
  },
}));

export default function Title(props) {
  const classes = useStyles();
  const theme = useTheme(Theme);
  console.log("primary", theme.palette.primary.main)
  return (
    <Typography
      className={props.title === "Carole Richou" ? classes.carole : classes.carine}
      variant="h5"
    >
      {props.title}
    </Typography>
  );
}
