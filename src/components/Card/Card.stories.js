import React from "react";

import { storiesOf } from "@storybook/react";

import Card from ".";

storiesOf("Card", module).add("Primary", () => (
  <Card variant={"primary"} />
))
storiesOf("Card", module).add("Secondary", () => (
  <Card variant={"secondary"} />
))
storiesOf("Card", module).add("Info", () => (
    <Card variant={"info"} />
))

storiesOf("Card", module).add("Confirm", () => (
    <Card variant={"confirm"} />
))

storiesOf("Card", module).add("Announcement", () => (
    <Card variant={"announcement"} />
))
storiesOf("Card", module).add("Dashboard", () => (
    <Card variant={"dashboard"} />
))
storiesOf("Card", module).add("Ban", () => (
    <Card variant={"ban"} />
))
