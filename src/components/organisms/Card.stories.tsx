import { Story } from "@storybook/react";
import React from "react";
import { Card } from "./Card";

const Template: Story = (args) => <Card {...args} />;

export const Index: Story = Template.bind({});
Index.storyName = "useSwr connected component";

export default {
  title: "Card",
};
