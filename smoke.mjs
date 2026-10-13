/**
 * Assert converted Material snippets are valid Zed-shaped JSON with a-md-* prefixes.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const html = JSON.parse(
  fs.readFileSync(path.join(root, "snippets", "html.json"), "utf8"),
);
const ts = JSON.parse(
  fs.readFileSync(path.join(root, "snippets", "typescript.json"), "utf8"),
);
const toml = fs.readFileSync(path.join(root, "extension.toml"), "utf8");

assert.match(toml, /snippets\s*=\s*\[/);
assert.match(toml, /html\.json/);
assert.match(toml, /typescript\.json/);

function prefixes(obj) {
  return Object.values(obj).map((s) => {
    assert.ok(s.prefix, "snippet missing prefix");
    assert.ok(s.body != null, "snippet missing body");
    return s.prefix;
  });
}

const htmlP = prefixes(html);
const tsP = prefixes(ts);

for (const p of ["a-md-button", "a-md-card", "a-md-auto-complete"]) {
  assert.ok(htmlP.includes(p), `missing html ${p}`);
}
for (const p of ["a-md-dialog", "a-md-snackbar", "a-md-bottom-sheet"]) {
  assert.ok(tsP.includes(p), `missing ts ${p}`);
}
assert.ok(htmlP.every((p) => String(p).startsWith("a-md-")));
assert.ok(tsP.every((p) => String(p).startsWith("a-md-")));

console.log("angular-material-snippets smoke OK:", {
  html: htmlP.length,
  typescript: tsP.length,
  sample: "a-md-button → " + JSON.stringify(html.matButton.body),
});
