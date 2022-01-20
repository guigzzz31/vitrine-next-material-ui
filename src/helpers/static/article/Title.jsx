import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
const useStyles = makeStyles((theme) => ({
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
  return (
    <Typography
      className={
        props.title === "Carole Richou" ? classes.carole : classes.carine
      }
      fontSize={["22px", "24px", "28px", "33px", "36px"]}
      pl={[0, 3, 6]}
    >
      {props.title}
    </Typography>
  );
}
