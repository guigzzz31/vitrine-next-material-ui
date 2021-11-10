import { makeStyles } from "@mui/styles";
import { Grid, Box } from "@mui/material";
import CardCoord from "../static/cardContact/CardCoord";
import CardAdress from "../static/cardContact/CardAdress";
import CardAcces from "../static/cardContact/CardAcces";

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
