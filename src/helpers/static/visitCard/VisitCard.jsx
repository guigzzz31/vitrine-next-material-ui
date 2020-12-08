import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import AvatarGenerator from "../../generators/AvatarGenerator";
import SkillGenerator from "../../generators/SkillGenerator";
import Title from "../article/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1, 1),
    backgroundColor: theme.palette.background,
  },
}));

export default function VisitCard(props) {
  const classes = useStyles();
  const { name, avatarPath, skills } = props;
  return (
    <Box mx={2}>
      <Paper elevation={2} square={false}>
        <Box className={classes.root}>
          <Grid direction="column" container>
            <Grid item>
              <AvatarGenerator avatarPath={avatarPath} />
            </Grid>
            <Grid item>
              <Title title={name} />
              <SkillGenerator skills={skills} />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
