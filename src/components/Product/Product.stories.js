import React from "react";
import { storiesOf } from "@storybook/react";
import {Product} from "./Product";
import {Item} from './Item.jsx'


storiesOf("Product", module)
    .add("Hero Product", () => (
        <Product   />
    ))
    .add("Item", () => (
        <Item />
    )


    );
