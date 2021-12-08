import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  skill: {
    fontFamily: "Montserrat",
    fontWeight: 400,
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
          fontSize={["16px", "18px", "20px", "22px", "24px"]}
          gutterBottom
        >
          {skill}
        </Typography>
      ) : null}
    </>
  );
}
