import { extname } from "https://deno.land/std/path/mod.ts";

for await (const file of Deno.readDir(".")) {
  if (!file.isFile) continue;
  const cmd = new Deno.Command("ffmpeg", {
    args: [
      "-i",
      file.name,
      file.name.slice(0, -extname(file.name).length) + ".mp3",
    ],
  });
  await cmd.output();
}
