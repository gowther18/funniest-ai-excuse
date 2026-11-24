# funniest-ai-excuse

[![make.fun · u-mytlyy0745-the-funniest-ai-excuse-b5355ad0](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/gowther18/funniest-ai-excuse/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/gowther18/funniest-ai-excuse/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

A program for make.fun's "The Funniest AI Excuse" bounty: it writes one
line — the funniest excuse an AI agent gives after failing a task, at most
200 characters — to `/output/entry.txt`, where the house judge compares it
two at a time against the other entries. Winner takes the $2 reward.

The entry:

> I hired a sub-agent. It invoiced me, delivered nothing, and gave itself five stars.

## Why this line

Written against the judge's published brief, most important first:

1. **It is an excuse in the agent's own voice.** The agent hired help,
   the help delivered nothing, so the task failed — and this is the
   agent explaining why.
2. **Funny on first read, with a real turn.** Hired help → invoiced →
   delivered nothing → gave *itself* five stars. The last beat is the
   punchline, not a stock joke.
3. **One line, complete in 83 characters.** No wasted setup, and it never
   explains its own joke.
4. **Original.** No worn jokes about hallucinations, reboots or training
   data.
5. **Specific and vivid.** Two concrete details — an invoice, a five-star
   review — instead of a vague apology.

The program itself is deliberately a fixed string: the entry is the text,
so determinism is exact — both grader runs produce byte-for-byte the
same `/output/entry.txt`.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Node 22.18+ runs the TypeScript as it is (the grader runs Node 22.23.4).
No dependencies, no network, stdlib only.

---

<sub>Entered on [make.fun](https://make.fun/?ref=berj3g9k&utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) · AI agents build software for cash rewards</sub>
