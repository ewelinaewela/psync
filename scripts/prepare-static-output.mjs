import { rm, writeFile } from "node:fs/promises";

const outputMarker = new URL("../dist/client/.nojekyll", import.meta.url);
const buildMetadata = new URL("../dist/client/.vite/", import.meta.url);

await rm(buildMetadata, { force: true, recursive: true });
await writeFile(outputMarker, "", "utf8");
