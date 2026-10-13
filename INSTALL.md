# Install (Angular Material v22 snippets)

Declarative Zed port of [hardikpthv.AngularMaterial](https://marketplace.visualstudio.com/items?itemName=hardikpthv.AngularMaterial). **Snippets only** — no WASM, no language server.

## Install in Zed

1. Zed → Extensions → **Install Dev Extension**
2. Select this folder: `out/angular-material-snippets`
3. Open an **HTML** or **TypeScript** buffer
4. Type a prefix (e.g. `a-md-button`) → accept the completion / snippet

Zed scopes snippets by filename → language: `html.json` → HTML, `typescript.json` → TypeScript.

## Example prefixes

| Prefix | Scope |
|--------|--------|
| `a-md-button` | HTML |
| `a-md-card` | HTML |
| `a-md-auto-complete` | HTML |
| `a-md-dialog` | TypeScript |
| `a-md-snackbar` | TypeScript |

Full list: open `snippets/html.json` / `snippets/typescript.json`.

## Smoke (no Zed)

```bash
node smoke.mjs
```

## Notes

- Not a replacement for Zed’s `angular` LS or general `angular-snippets` — Material `a-md-*` only
- Gaps: none from convert (see `GAP_REPORT.md`)
