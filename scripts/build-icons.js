const fs = require('fs');
const path = require('path');
const { dashToCamelConverter } = require('../lib/utils/case');
const { heroiconTemplate } = require('../lib/icon/heroicon-template');

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
  const iconTypes = ['outline', 'solid'];
  // delete the solid and outline folders if they exist
  fs.rmSync(path.join(folder, 'solid'), { recursive: true, force: true });
  fs.rmSync(path.join(folder, 'outline'), { recursive: true, force: true });
  fs.mkdirSync(path.join(folder, 'solid'), { recursive: true });
  fs.mkdirSync(path.join(folder, 'outline'), { recursive: true });

  iconTypes.forEach((type) => {
    const iconsPath = path.join(folder, 'svg', type);
    fs.readdirSync(iconsPath).forEach((file) => {
      const svgContent = fs.readFileSync(path.join(iconsPath, file), 'utf8');
      const svgPathMatch = svgContent.match(/<path[^>]*d="([^"]*)"[^>]*>/);
      if (svgPathMatch) {
        let svgPath = svgPathMatch[0];
        if(type === 'outline') {
          svgPath = svgPath.replace('<path', '<path fill="none"');
        }
        const iconName = dashToCamelConverter(file.replace('.svg', ''));
        const iconComponent = heroiconTemplate(iconName, svgPath);
        fs.writeFileSync(path.join(folder, type, `${iconName}.tsx`), iconComponent);
      }
    });
  });
};

generateIcons(path.join(__dirname, '../lib/icon/heroicons'));
