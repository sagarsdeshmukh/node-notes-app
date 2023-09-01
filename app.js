const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.0.1");

yargs.command({
  command: "add",
  describe: "add a notes",
  builder: {
    title: {
      describe: "Notes title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a notes",
  builder: {
    title: {
      describe: "Notes title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.parse();
