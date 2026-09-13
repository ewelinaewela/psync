import { writeFile } from "node:fs/promises";

const outputMarker = new URL("../dist/client/.nojekyll", import.meta.url);

await writeFile(outputMarker, "", "utf8");
