import React from "react";
import Skill from "../static/visitCard/Skill";
import Speciality from "../static/visitCard/Speciality";

export default function SkillGenerator(props) {
  const { skills, specialities } = props;
  return (
    <>
      {skills
        ? skills.map((item) => {
            return <Skill key={item.skill_id} skill={item.skill} />;
          })
        : null}
      {specialities
        ? specialities.map((item) => {
            return (
              <Speciality
                key={item.speciality_id}
                speciality={item.speciality}
              />
            );
          })
        : null}
    </>
  );
}
