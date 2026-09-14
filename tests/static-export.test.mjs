import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const outputRoot = new URL("../dist/client/", import.meta.url);
const basePath = process.env.PSYNC_BASE_PATH ?? "";

const routes = [
  ["index.html", "Train your mind"],
  ["imagery.html", "Why is imagery useful?"],
  ["inner-voice.html", "What is self-talk?"],
  ["anxiety.html", "Make room for the challenge"],
  ["anxiety/balance.html", "What are demands and resources?"],
  ["anxiety/pressure.html", "Why practise a pressure situation?"],
  ["about.html", "Mental skills should be easier to practise"],
  ["privacy.html", "Your reflections remain yours"],
  ["safety.html", "Psync is practice"],
];

test("exports every public route as static HTML", async () => {
  for (const [path, expectedText] of routes) {
    const file = new URL(path, outputRoot);
    await access(file);
    const html = await readFile(file, "utf8");
    assert.match(html, new RegExp(expectedText, "i"), `${path} should contain its primary content`);
  }
});

test("uses the configured project path for navigation and public assets", async () => {
  const home = await readFile(new URL("index.html", outputRoot), "utf8");
  assert.match(home, new RegExp(`href=["']${basePath}/imagery/?["']`));
  assert.match(home, new RegExp(`src=["']${basePath}/imagery\\.svg["']`));
  assert.match(home, new RegExp(`href=["']${basePath}/privacy/?["']`));
  assert.match(home, new RegExp(`href=["']${basePath}/anxiety/?["']`));
  assert.match(home, new RegExp(`src=["']${basePath}/anxiety\\.svg["']`));
  assert.match(home, new RegExp(`(?:src|href)=["']${basePath}/_next/static/`));

  const anxiety = await readFile(new URL("anxiety.html", outputRoot), "utf8");
  assert.match(anxiety, new RegExp(`href=["']${basePath}/anxiety/balance/?["']`));
  assert.match(anxiety, new RegExp(`href=["']${basePath}/anxiety/pressure/?["']`));
  assert.doesNotMatch(anxiety, /check your anxiety level|check your stats/i);

  await access(new URL("_next/static/", outputRoot));
  if (basePath) {
    const scopedStaticPath = `${basePath.replace(/^\//, "")}/_next/`;
    await assert.rejects(access(new URL(scopedStaticPath, outputRoot)));
  }
});

test("keeps private protocols and generated output out of Git", async () => {
  const gitignore = await readFile(new URL(".gitignore", projectRoot), "utf8");
  assert.match(gitignore, /^\/Psync_content\/$/m);
  assert.match(gitignore, /^\/dist\/$/m);
});

test("prepares GitHub Pages static hosting markers", async () => {
  await access(new URL(".nojekyll", outputRoot));
  await access(new URL("404.html", outputRoot));
  await assert.rejects(access(new URL(".vite/", outputRoot)));

  const workflow = await readFile(
    new URL(".github/workflows/deploy-pages.yml", projectRoot),
    "utf8",
  );
  assert.match(workflow, /^\s+include-hidden-files: true$/m);
});

test("contains no starter preview or data-service references", async () => {
  const [readme, packageJson] = await Promise.all([
    readFile(new URL("README.md", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
  ]);
  assert.doesNotMatch(readme, /vinext-starter|ChatGPT Sign-In|Drizzle D1/i);
  assert.doesNotMatch(packageJson, /drizzle|react-loading-skeleton|wrangler/i);
});
