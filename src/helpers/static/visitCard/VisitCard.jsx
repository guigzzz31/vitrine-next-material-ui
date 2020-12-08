import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import AvatarGenerator from "../../generators/AvatarGenerator";
import SkillGenerator from "../../generators/SkillGenerator";
import CardName from "./CardName";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function VisitCard(props) {
  const classes = useStyles();
  const { name, avatarPath, skills, specialities } = props;
  return (
    <Box p={2}>
      <Paper elevation={2} square={false}>
        <Grid
          alignItems="center"
          className={classes.root}
          direction="row"
          spacing={2}
          container
        >
          <Grid item>
            <AvatarGenerator avatarPath={avatarPath} />
          </Grid>
          <Grid item>
            <Box p={1}>
              <CardName title={name} />
              <SkillGenerator skills={skills} specialities={specialities} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
