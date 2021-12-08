import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
  divider01: {
    backgroundColor: theme.palette.primary.main,
    height: 3,
    width: 120,
    marginBottom: 10,
    boxShadow: "rgb(74, 142, 137) 0px 8px 27px 1px",
  },
  divider02: {
    backgroundColor: theme.palette.error.main,
    height: 3,
    width: 120,
    marginBottom: 10,
    boxShadow: "rgb(218, 98, 125) 0px 8px 27px 1px",
  },
}));

export default function CardName(props) {
  const classes = useStyles();
  return (
    <Box mb={2}>
      <Grid direction="column" justify="center" alignItems="center" container>
        <Typography
          align="center"
          className={classes.title}
          color="textPrimary"
          fontSize={["22px", "24px", "28px", "32px"]}
          gutterBottom
        >
          {props.title}
        </Typography>
        <Box
          className={
            props.title === "Carole Richou"
              ? classes.divider01
              : classes.divider02
          }
        ></Box>
      </Grid>
    </Box>
  );
}
