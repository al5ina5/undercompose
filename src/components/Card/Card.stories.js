import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Card from ".";

storiesOf("Card", module).add("Primary", () => (
  <Card variant={"primary"} />
))
storiesOf("Card", module).add("Secondary", () => (
  <Card variant={"secondary"} />
))
