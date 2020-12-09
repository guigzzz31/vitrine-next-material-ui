import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import GridListTile from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";

import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";

import CardContact from "../static/card/CardContact";
import CardAdress from "../static/card/CardAdress";
import CardAcces from "../static/card/CardAcces";
import { Container } from "@material-ui/core";

export default function CardGenerator(props) {
  const { info } = props;
  console.log("info", info);
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
    <Box>
      <CardContact contact={info.contact} />
      {/* <CardAdress adress={info.adress} />
      <CardAcces acces={info.acces} /> */}
    </Box>
  );
}
