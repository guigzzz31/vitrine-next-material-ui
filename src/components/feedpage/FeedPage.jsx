import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PageName from "./PageName";
import Definition from "./Definition";
import Troubles from "./Troubles";
import Solutions from "./Solutions";
import ProTip from "../../helpers/ProTip";

export default function FeedPage(props) {
  const { infoPage } = props;
  return (
    <Container>
      <Grid container>
        <Grid item>
          <PageName pageName={infoPage.pageName} />
        </Grid>
        {infoPage.infoBulle ? (
          <Grid item>
            <ProTip info={infoPage.infoBulle} />
          </Grid>
        ) : null}
        <Grid item>
          <Definition definition={infoPage.content.part1.paragraph} />
        </Grid>
        <Grid item>
          <Troubles items={infoPage.content.part2.reasons} />
        </Grid>
        <Grid item>
          <Solutions solutions={infoPage.content.part2.solutions} />
        </Grid>
      </Grid>
    </Container>
  );
}
