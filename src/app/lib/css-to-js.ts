export default function cssToJsStyles(
  cssString: string,
  elementName: string = 'element',
): string {
  let jsStyles = '';
  const styleDeclarations = cssString.split(';');

  for (const declaration of styleDeclarations) {
    if (declaration.includes(':')) {
      const [rawProp, rawValue] = declaration.split(':');
      const prop = rawProp?.trim();
      let value = rawValue?.trim();

      if (!prop || !value) continue;

      // Remove surrounding quotes if they exist
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      const parts = prop.split('-');
      const camelCaseProp =
        parts[0] +
        parts
          .slice(1)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');

      jsStyles += `${elementName}.style.${camelCaseProp} = "${value}";\n`;
    }
  }

  return jsStyles;
}
