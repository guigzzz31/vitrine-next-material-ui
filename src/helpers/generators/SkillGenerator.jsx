import React from "react";
import Skill from "../static/visitCard/Skill";

export default function SkillGenerator(props) {
  const { skills } = props;
  return (
    <>
      {skills
        ? skills.map((item) => {
            return <Skill key={item.skill_id} skill={item.skill} />;
          })
        : null}
    </>
  );
}
