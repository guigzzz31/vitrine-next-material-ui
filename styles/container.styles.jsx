import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "../src/hooks/useWindowDimensions";

export default function ContainerStyle() {
  const { height, width } = useWindowDimensions();
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      top: 12,
      height: height - 160,
    },
    title: {
      paddingTop: theme.spacing(1),
    },
  }));
  return useStyles;
}
