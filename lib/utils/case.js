function dashToCamelConverter(str) {
  const camelCase = str
    .trim()
    .replace(/^[^a-zA-Z]+/, "")
    .replace(/[^a-zA-Z0-9]+$/, "")
    .replace(/-+/g, '-')
    .replace(/-([a-zA-Z0-9])/g, (match, group1) => group1.toUpperCase());
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

module.exports = {
  dashToCamelConverter,
};

