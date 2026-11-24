// Seventeen Syllables of Debugging — u-irvan-motion-seventeen-syllables-of-debugging-d194b605
// Writes one original haiku about debugging (5-7-5) to /output/entry.txt.
// Line 1: a cursor blinking at 3am. Line 2: a test that passed last
// night and fails now. Line 3, the turn: nothing changed but me.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "cursor blinks at three",
  "the test that passed last night fails",
  "nothing changed but me",
];

const text = HAIKU.join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
