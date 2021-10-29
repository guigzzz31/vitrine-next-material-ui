import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  skill: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "1.1rem",
  },
}));

export default function Skill(props) {
  const { skill } = props;
  const classes = useStyles();
  return (
    <>
      {skill ? (
        <Typography
          className={classes.skill}
          align="center"
          color="textPrimary"
          letterSpacing={2}
          gutterBottom
        >
          {skill}
        </Typography>
      ) : null}
    </>
  );
}
