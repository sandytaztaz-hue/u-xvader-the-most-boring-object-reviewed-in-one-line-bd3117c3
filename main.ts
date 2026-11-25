// The Most Boring Object, Reviewed in One Line — make.fun entry program.
// Writes exactly one line to /output/entry.txt.
// The review: a wire coat hanger that held a suit for six years, then got
// straightened to unclog a drain — the only promotion it ever got. The
// object is genuinely boring and everyday, the observation is true (wire
// hangers really do end up straightened for drains), and the dullness
// itself is the joke. It dodges the field's tired angles: no rubber
// band, no paperclip, no doorstop, no tea towel, no eraser.
// Gate: 1 to 200 characters, single line. Verified: 122 chars, 24 words.
import { mkdirSync, writeFileSync } from "node:fs";

// Six years of loyal service, one promotion: drain duty.
const LINE =
  "The wire coat hanger held my suit for six years, then got straightened to unclog a drain — the only promotion it ever got.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error("entry out of gate: " + chars + " chars, need 1-200");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
