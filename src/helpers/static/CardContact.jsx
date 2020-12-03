import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";

import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";
import { Container } from "@material-ui/core";

export default function CardContact(props) {
  const { info } = props;
  const useStyles = makeStyles((theme) => ({
    cardInfoContainer: {
      // paddingTop:
    },
    gridListTile: {
      display: "flex",
      alignItems: "center",
    },
  }));
  const classes = useStyles();
  return (
    <Container className={classes.cardInfoContainer}>
      <GridList cellHeight={100} cols={1}>
        <GridListTile className={classes.gridListTile}>
          <Grid direction="row" alignItems="center" spacing={4} container>
            <Grid item>
              <CallIcon color="primary" fontSize="large" />
            </Grid>
            <Grid item>
              <Typography variant="h5" align="center">
                {info.num}
              </Typography>
            </Grid>
          </Grid>
        </GridListTile>
        <GridListTile>
          <Grid direction="row" alignItems="center" spacing={4} container>
            <Grid item>
              <HomeIcon color="primary" fontSize="large" />
            </Grid>
            <Grid item>
              <Typography>{info.adress.spe}</Typography>
              <Typography>{info.adress.name}</Typography>
              <Typography>
                {info.adress.postalCode} - {info.adress.city}
              </Typography>
            </Grid>
          </Grid>
        </GridListTile>
        <GridListTile>
          <Grid direction="row" alignItems="center" spacing={4} container>
            <Grid item>
              <RoomIcon color="primary" fontSize="large" />
            </Grid>
            <Grid item>
              <Typography>{info.acces.info}</Typography>
              <Typography>Parking {info.acces.parking}</Typography>
              <Typography>
                Accès en transport en commun <br />
                {info.acces.transport}
              </Typography>
            </Grid>
          </Grid>
        </GridListTile>
      </GridList>
    </Container>
  );
}
