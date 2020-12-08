import { Box } from "@material-ui/core";
import React from "react";
import VisitCard from "../static/visitCard/VisitCard";

export default function VisitCardGenerator(props) {
  const { users } = props;
  return (
    <Box py={4} my={1}>
      {users
        ? users.map((item) => {
            return (
              <VisitCard
                key={item.user_id}
                name={item.name}
                avatarPath={item.avatarPath}
                skills={item.skills}
                specialities={item.specialities}
              />
            );
          })
        : null}
    </Box>
  );
}
