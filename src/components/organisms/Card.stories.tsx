import React from "react";
import { Card } from "./Card";

const Template = (args) => <Card {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
export default {
  title: "Card",
  component: Card,
};
