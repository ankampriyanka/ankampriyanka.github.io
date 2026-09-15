import { readFile } from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "assests",
    "pdf",
    "Ankam_Priyanka_Resume.pdf"
  );

  const pdf = await readFile(filePath);
  const url = new URL(request.url);
  const download = url.searchParams.get("download") === "1";

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="Ankam_Priyanka_Resume.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
