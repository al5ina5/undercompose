import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import {Input} from "./Input";


storiesOf("Input", module)
  .add("Primary", () => (
      <Input type="primary"  />
  ))
  .add("Symbol", () => (
      <Input type="symbol" />
  ))
  .add("Shadow", () => (
      <Input type="shadow" />
  ))
  .add("Error", () => (
      <Input type="error" />
  )

);
