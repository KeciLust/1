#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();

const items = yargs(hideBin(process.argv))
  .options("y", {
    alias: "year",
    type: "Boolean",
    description: "The year now",
  })
  .options("m", {
    alias: "month",
    type: "Boolean",
    description: "The month now",
  })
  .options("d", {
    alias: "date",
    type: "Boolean",
    description: "The day now",
  }).argv;

if (items._[0] == "current") {
  if (items.year || items.month || items.date) {
    console.log(
      (items.year ? "Год: " + year : "") +
        (items.month ? "Месяц: " + month : "") +
        (items.date ? "День: " + date : "")
    );
  } else {
    console.log(new Date());
  }
} else if (items._[0] == "sub") {
  if (items.year || items.month || items.date) {
    console.log(
      (items.year ? "Год: " + (year - items.year) : "") +
        (items.month ? "Месяц: " + (month - items.month) : "") +
        (items.date ? "День: " + (date - items.date) : "")
    );
  }
} else if (items._[0] == "add") {
  if (items.year || items.month || items.date) {
    console.log(
      (items.year ? "Год: " + (year + items.year) : "") +
        (items.month ? "Месяц: " + (month + items.month) : "") +
        (items.date ? "День: " + (date + items.date) : "")
    );
  }
}
