import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  speciality01: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },
  speciality02: {
    fontWeight: 400,
    color: theme.palette.error.main,
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
          className={
            speciality === "réflexologie"
              ? classes.speciality01
              : classes.speciality02
          }
        >
          Spécialisée en {speciality}
        </Typography>
      ) : null}
    </>
  );
}
