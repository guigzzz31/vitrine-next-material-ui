import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

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
