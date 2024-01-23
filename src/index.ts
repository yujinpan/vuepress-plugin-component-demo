import highlight from '@vuepress/markdown/lib/highlight';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

const vuepressPluginComponentDemo = (options = {}, ctx) => ({
  clientDynamicModules() {
    const CODES = glob
      .sync(path.resolve(ctx.sourceDir, './.vuepress/components/**/*.vue'))
      .reduce((prev, next) => {
        const relative = path.relative(
          path.resolve(ctx.sourceDir, './.vuepress/components'),
          next,
        );
        const name = relative.slice(0, -path.extname(relative).length);
        const content = fs.readFileSync(next).toString();
        const code = highlight(content, 'vue');

        return {
          ...prev,
          [name]: code,
        };
      }, {});

    return {
      name: 'demo-codes.js',
      content: `export const CODES = ${JSON.stringify(CODES)}`,
    };
  },
  enhanceAppFiles: [path.resolve(__dirname, `./enhanceAppFile.js`)],
});

export default vuepressPluginComponentDemo;
