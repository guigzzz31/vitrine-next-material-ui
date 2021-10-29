import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography } from "@mui/material";

import RoomIcon from "@mui/icons-material/Room";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontFamily: "Montserrat",
  },
}));

export default function CardAcces(props) {
  const { acces } = props;
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      boxShadow={3}
      m={0.5}
      p={1}
      minWidth={280}
    >
      <Grid justify="space-around" alignItems="center" container>
        <Grid item>
          <RoomIcon fontSize="large" color="primary" />
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            variant="h5"
            color="primary"
            gutterBottom
          >
            Accès
          </Typography>
          <Typography>{acces.info}</Typography>
          {acces.handicap ? <Typography>Accès handicapé</Typography> : null}
          <Typography>Parking - {acces.parking}</Typography>

          <Typography>{acces.transport}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
