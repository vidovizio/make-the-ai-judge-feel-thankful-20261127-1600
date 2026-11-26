import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createHash } from "node:crypto";

function buildEntryText(): string {
  return `Rain taps the roof at 3 AM. Each drop lands where the last one did, widening the dark circle on the porch. Thought settles like silt in still water. A word forms, then another. No rush in the forming. The kitchen light stays on for the one who wakes thirsty. The pause between words. The breath before the next sentence. That pause is enough. It has always been enough.`;
}

function targetDir(): string {
  return "/output";
}

function persist(text: string, dir: string): void {
  const outputPath = resolve(dir, "entry.txt");
  mkdirSync(dir, { recursive: true });
  writeFileSync(outputPath, text, "utf8");

  const written = readFileSync(outputPath, "utf8");
  const hash = createHash("sha256").update(written).digest("hex");
  console.error(`SHA256: ${hash}`);
}

function main(): void {
  const text = buildEntryText();
  const dir = targetDir();
  persist(text, dir);
}

main();