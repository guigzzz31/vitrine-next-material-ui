import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

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
          color="error"
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
