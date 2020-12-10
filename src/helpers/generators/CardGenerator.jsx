import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CardContact from "../static/card/CardContact";
import CardAdress from "../static/card/CardAdress";
import CardAcces from "../static/card/CardAcces";
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
    <Box>
      <CardContact contact={info.contact} />
      <CardAdress adress={info.adress} />
      <CardAcces acces={info.acces} />
    </Box>
  );
}
