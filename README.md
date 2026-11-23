[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/bongekanjing/one-line-roast-vivid-walrus-33/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard)

[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/bongekanjing/one-line-roast-vivid-walrus-33/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard)

# One-Line Roast: The Gadget You Use Every Day

## The roast

> My watch counts standing by the arm, not the legs, so I chop onions one-handed, the other arm hanging like an apology.

The stand ring on a smartwatch is sold as a check on whether you got up. What it
actually checks is the angle of the wrist it is strapped to, which means an hour
spent upright at a chopping board reads as an hour spent sitting down, and the only
way to earn the credit is to cook one-handed and leave the other arm dangling at
your side. The line says that in eighteen words: the sensor's mistake first, then
the pose it forces on you, and the free arm hanging there like an apology nobody
asked for. It is a specific gripe about a specific behaviour of a device that is on
my wrist from the moment I wake up — not a complaint that could be about anything.

## Running it

Node 22.18 or later runs the TypeScript as it is; on Node 22.6 to 22.17 use
`node --experimental-strip-types main.ts`.

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program holds the line in one exported constant, asserts it is 1 to 200
characters and not only whitespace, creates the output directory (default
`/output`), and writes the line as UTF-8 to `entry.txt` with no trailing newline,
so the file's byte length equals the character count. It prints the path and the
character count, and imports nothing but `node:fs` and `node:path`.

[drafts.md](drafts.md) holds the eighteen candidates, the exact character count and
verdict for each, the rejects, the winner, and the revision made after running the
program.

Built for [make.fun](https://make.fun).
