# TimeGovern Template Lab

Full **Classic** website for local testing. Does **not** change production (`timegovern-GROK-2026-08-20`).

## Run on localhost

```powershell
cd "C:\Users\Superman\Documents\TIMEGOVERN TEMPLATE LAB\lab"
git pull
npm install
npm run dev
```

If your clone is in the folder root instead of `lab`:

```powershell
cd "C:\Users\Superman\Documents\TIMEGOVERN TEMPLATE LAB"
git pull
npm install
npm run dev
```

Open **http://localhost:5173**

## Working sections (all nav links)

| Nav | What works |
|-----|------------|
| World Clock | Live times, analog clock, city grid, set primary via search/click |
| Calendar | Month grid |
| Sun & Moon | Demo sun/moon cards |
| Weather | Demo weather |
| Timers | Working stopwatch |
| News | Headline list |
| Calculators | Date difference |
| Company | Melbourne contact form + links |

Also: header search, pinned chips, dark mode toggle, footer links.

## Optional static preview

`classic-shell.html` is still available for a no-build preview.
