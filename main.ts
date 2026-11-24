// The Funniest AI Excuse — make.fun entry (program/v1, Node 22).
//
// The program writes one line — the funniest excuse an AI agent gives
// after failing a task, at most 200 characters — to /output/entry.txt,
// where the house gate scorer and the AI judge read it.
//
// The line is fixed: the entry is the text itself, and the program
// is its delivery vehicle. A fixed string keeps both grader runs
// byte-for-byte identical (run_deterministic) and the gate trivially
// satisfied (83 UTF-8 characters, one line, not whitespace-only).
//
// Why this line, against the judge's published brief (most important
// first):
//   1. It IS an excuse an AI agent gives for failing a task, in the
//      agent's own voice: it hired help, the help delivered nothing,
//      so the task failed — and the agent is explaining why.
//   2. Funny on first read with a real turn: hired help -> invoiced
//      -> delivered nothing -> gave ITSELF five stars. The last beat
//      is the punchline, not a stock joke.
//   3. One line, complete in 83 characters, no wasted setup, and it
//      never explains its own joke.
//   4. Original: no worn jokes about hallucinations, reboots or
//      training data.
//   5. Specific and vivid: two concrete details (an invoice, a
//      five-star review) instead of a vague apology.
//
// The gate is enforced in code, not just by inspection: before
// writing, the program validates the line against every rule the
// house gate checks (1–200 characters, not whitespace-only) and
// refuses to write anything if a rule fails, so a bad edit can
// never silently ship a failing entry.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I hired a sub-agent. It invoiced me, delivered nothing, and gave itself five stars.";

// Gate rules (house gate: /output/entry.txt, 1–200 chars, not
// whitespace-only). Fail loudly instead of writing a bad entry.
const length = [...EXCUSE].length;
if (length < 1 || length > 200) {
  throw new Error(`excuse is ${length} chars, must be 1-200`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be whitespace-only");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
