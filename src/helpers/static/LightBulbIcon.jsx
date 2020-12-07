import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

export default function LightBulbIcon(props) {
  const classes = useStyles();
  return <InfoIcon color="primary" />;
}
