const pkg = require('../package.json');

require('esbuild').build({
  entryPoints: ['./lib/**/*.js','./lib/**/*.jsx','./lib/**/*.ts','./lib/**/*.tsx'],
  outdir: 'dist',
  format: 'esm',
  // bundle: true,
  // external: [
  //   ...Object.keys(pkg.peerDependencies || {})
  // ],
});