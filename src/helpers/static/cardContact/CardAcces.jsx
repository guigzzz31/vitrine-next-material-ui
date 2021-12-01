import { makeStyles } from "@mui/styles";

import { Grid, Typography, Link } from "@mui/material";
import CardContainer from "../../containers/CardContainer";

import RoomIcon from "@mui/icons-material/Room";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  icon: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
  link: {
    fontFamily: "Montserrat",
    fontSize: 15,
  },
}));

export default function CardAcces(props) {
  const { acces } = props;
  const classes = useStyles();
  return (
    <CardContainer>
      <Grid justify="space-around" alignItems="center" container>
        <Grid item xs={3}>
          <RoomIcon className={classes.icon} fontSize="large" />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Accès
          </Typography>
          <Typography>{acces.info}</Typography>
          {acces.handicap ? <Typography>Accès handicapé</Typography> : null}
          <Typography>Parking - {acces.parking}</Typography>
          <Link
            underline="hover"
            color="error"
            href="https://www.tisseo.fr/sites/default/files/ligne87.html"
            className={classes.link}
          >
            {acces.transport}
          </Link>
        </Grid>
      </Grid>
    </CardContainer>
  );
}
