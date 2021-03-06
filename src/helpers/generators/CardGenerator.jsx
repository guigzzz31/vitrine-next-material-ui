import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CardCoord from "../static/cardContact/CardCoord";
import CardAdress from "../static/cardContact/CardAdress";
import CardAcces from "../static/cardContact/CardAcces";
import { Container } from "@material-ui/core";

export default function CardGenerator(props) {
  const { info } = props;
  const useStyles = makeStyles((theme) => ({
    cardInfoContainer: {
      // paddingTop:
    },
  }));
  const classes = useStyles();
  return (
    <Box m={1}>
      <Grid spacing={2} justify="center" container>
        <Grid item>
          <CardCoord contact={info.contact} />
        </Grid>
        <Grid item>
          <CardAdress adress={info.adress} />
        </Grid>
        <Grid item>
          <CardAcces acces={info.acces} />
        </Grid>
      </Grid>
    </Box>
  );
}
