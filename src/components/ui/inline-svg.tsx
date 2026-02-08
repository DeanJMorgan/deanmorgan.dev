import fs from "fs";
import path from "path";

export default function InlineSVG({
  path: svgPath,
  className,
}: {
  path: string;
  className?: string;
}) {
  const filePath = path.join(process.cwd(), "public", svgPath);
  let cleanSvg: string | null = null;

  try {
    const svgContent = fs.readFileSync(filePath, "utf8");
    // Remove potential XML declarations and inject the SVG
    // Also remove width and height attributes to allow CSS control
    cleanSvg = svgContent
      .replace(/<\?xml.*?\?>|<\!DOCTYPE.*?>/gi, "")
      .replace(/width="[^"]*"/gi, "")
      .replace(/height="[^"]*"/gi, "");
  } catch (e) {
    console.error(`Error loading SVG: ${svgPath}`, e);
    return <span className="text-xs text-red-500">Icon not found</span>;
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanSvg }}
    />
  );
}
