export function injectStyles(args, context){
    const argTypes = context.argTypes;
    const vars = Object.keys(argTypes);
    const cssVars = vars.filter(v => v.startsWith("--"));
    const styles = [];
    cssVars.forEach(cssVar => {
        if (args[cssVar] != undefined){
            styles.push(`${cssVar}: ${args[cssVar]};`);
        }
    });
    if (styles.length > 0){
        return styles.join(' ');
    }
    return undefined;
}