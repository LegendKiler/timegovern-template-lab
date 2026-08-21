# How to start template testing

## 1. Clone the lab (new folder — not your production folder)

```powershell
cd "C:\Users\Superman\Documents"
mkdir "TIMEGOVERN TEMPLATE LAB"
cd "TIMEGOVERN TEMPLATE LAB"
git clone https://github.com/LegendKiler/timegovern-template-lab.git .
```

## 2. Tell Grok which style to build first

Reply with one:

- **Classic** — light, blue header, closer to timeanddate.com
- **Corporate** — white + indigo, SaaS style
- **Minimal** — lots of white space, few buttons
- **Dark pro** — dark slate, cyan accents (current production feel, cleaned)

## 3. We only add features after the shell looks good

Order:
1. Logo + fonts + header layout
2. Nav tabs
3. One page (e.g. World Clock mock)
4. Then other sections one by one

Production (`timegovern-GROK-2026-08-20`) stays as-is until you say **promote to production**.
