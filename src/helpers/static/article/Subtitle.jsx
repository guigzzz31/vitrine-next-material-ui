import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontFamily: "Lato",
    color: theme.palette.text.secondary,
  },
}));

export default function Subtitle(props) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.subtitle}
      fontSize={["18px", "22px", "24px", "26px", "28px"]}
      pt={[2, 3, 4]}
      pl={[2, 4, 8]}
    >
      {props.subtitle}
    </Typography>
  );
}
