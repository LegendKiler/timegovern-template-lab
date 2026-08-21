# Screenshot analysis (21 Aug 2026)

## Problems circled in red

### 1. Logo block (top-left)
- Long tagline under logo fights the search bar
- "GLOBAL PLATFORM" badge adds noise
- **Fix:** Short logo + short tagline only

### 2. Search + "Set Primary" (top-right)
- Yellow "Set Primary" sits in the corner, disconnected from city results
- Ctrl+K hint competes for space
- **Fix:** Search is one field; choosing a city FROM THE LIST sets primary (no separate corner button)

### 3. Top utility strip
- Template / Gallery / Light / SSL / QR / Account / Architecture / Shortcuts all labeled
- **Fix:** Icon-only tools; optional overflow menu

### 4. Main nav
- 11 items with numbers looks like a control panel, not a product
- **Fix:** Simple text tabs, horizontal scroll on mobile

### 5. Left / right ad columns + purple CTAs
- "Start Free Trial" / "Get API Key" float over content
- Skyscrapers crush the main column on laptop widths
- **Fix in lab:** Hide side ads by default; one optional top banner only

### 6. Pinned strip under search
- OK conceptually, but competes with nav
- **Fix:** Keep under search, smaller chips

## Target layout (Classic)

```
[ UTC ] [ Primary city ] .................... [ icons only ]
[ Logo ]     [======== Search city ========]
[ World Clock | Calendar | Sun | Weather | ... | Company ]
[ optional slim ad banner ]
[           MAIN CONTENT FULL WIDTH              ]
```
