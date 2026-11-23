import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The entry.
 *
 * Why these words: the stand ring on a smartwatch does not measure whether you
 * are upright, it measures the angle of the wrist it is strapped to, so anyone
 * cooking with one hand on the counter gets told they have not stood for an
 * hour. "Counts standing by the arm, not the legs" states that absurdity in
 * nine words and hands the rest of the line to a picture instead of a
 * complaint. "Chop onions one-handed" is the specific posture, not generic
 * housework, and "the other arm hanging like an apology" makes the free arm
 * the apology rather than something it merely does — the arm is being
 * punished for the watch's mistake. The second clause is absolute, not a new
 * verb: "and let" was the only word in the line not earning its place, and
 * dropping it puts the hanging arm in the same breath as the chopping hand
 * and stops the sentence on the image. No filler, one turn.
 */
export const LINE =
  "My watch counts standing by the arm, not the legs, so I chop onions one-handed, the other arm hanging like an apology.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function assertValid(line: string): void {
  if (typeof line !== "string") {
    throw new TypeError("entry line must be a string");
  }
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new RangeError(
      `entry line must be ${MIN_LENGTH}..${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
}

assertValid(LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
// No trailing newline: the file's byte length equals the character count.
writeFileSync(outputPath, LINE, { encoding: "utf8" });

console.log(outputPath);
console.log(LINE.length);
