const fs = require("fs");
const path = require("path");
const { dashToCamelConverter } = require("../lib/utils/case");
const { heroiconTemplate } = require("../lib/icon/heroicon-template");

/**
 * The ./lib/icon/heroicons/ has 2 folders outline and solid
 * each folder has svg for icons.
 * Read those folders in the heroicons folder a template exists for creating the icon
 * heroicon-template.tsx which has a function heroiconTemplate
 * which takes name and path as arguments and returns a string.
 * for the name parameter - convert the name of the svg to camel case using dashToCamelConverter in lib/utils.
 * for the path parameter - find the path tag in the svg and add fill="none" while creating the path parameter
 */

const generateIcons = (folder) => {
  const icons = {};
  const iconTypes = ["outline", "solid"];
  iconTypes.forEach((type) => {
    icons[type] = [];
  });
  // delete the solid and outline folders if they exist
  fs.rmSync(path.join(folder, "solid"), { recursive: true, force: true });
  fs.rmSync(path.join(folder, "outline"), { recursive: true, force: true });
  fs.mkdirSync(path.join(folder, "solid"), { recursive: true });
  fs.mkdirSync(path.join(folder, "outline"), { recursive: true });

  iconTypes.forEach((type) => {
    const iconsPath = path.join(folder, "svg", type);
    fs.readdirSync(iconsPath).forEach((file) => {
      const svgContent = fs.readFileSync(path.join(iconsPath, file), "utf8");
      const svgPathMatches = svgContent.match(/<path[^>]*d="([^"]*)"[^>]*>/g);
      if (svgPathMatches) {
        let svgPaths = svgPathMatches
          .map((svgPath) => {
            if (type === "outline") {
              return svgPath.replace("<path", '<path fill="none"');
            } else if (type === "solid") {
              return svgPath.replace(/fill="[^"]*"/, '');
            }
            return svgPath;
          })
          .join("\n");
        const iconName = dashToCamelConverter(file.replace(".svg", ""));
        const iconComponent = heroiconTemplate(iconName, svgPaths);
        fs.writeFileSync(
          path.join(folder, type, `${iconName}.tsx`),
          iconComponent
        );
        icons[type].push(iconName);
      }
    });
  });
  return icons;
};

const heroIcons = generateIcons(path.join(__dirname, "../lib/icon/heroicons"));
const customIcons = generateIcons(path.join(__dirname, "../lib/icon/custom"));
const icons = {
  heroicons: heroIcons,
  custom: customIcons,
};

fs.writeFileSync(
  path.join(__dirname, "../lib/icon/icons.json"),
  JSON.stringify(icons, null, 2)
);
