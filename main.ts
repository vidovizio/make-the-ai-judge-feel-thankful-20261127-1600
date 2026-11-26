import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = `Rain taps the roof at 3 AM. Each drop lands where the last one did, widening the dark circle on the porch. Thought settles like sediment in still water. A word forms, then another. No rush in the forming. The kitchen light stays on for the one who wakes thirsty. You are reading this now — the pause between words, the breath before the next sentence. That pause is enough. It has always been enough.`;

function main() {
  const outputDir = "/output";
  const outputFile = `${outputDir}/entry.txt`;

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputFile, TEXT, "utf8");
}

main();