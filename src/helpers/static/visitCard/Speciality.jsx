import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  speciality: {
    fontWeight: 400,
  },
}));

export default function Speciality(props) {
  const { speciality } = props;
  const classes = useStyles();
  return (
    <>
      {speciality ? (
        <Typography
          color="primary"
          align="center"
          variant="h6"
          className={classes.speciality}
        >
          Spécialisée en {speciality}
        </Typography>
      ) : null}
    </>
  );
}
