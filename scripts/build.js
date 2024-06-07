const pkg = require('../package.json');

require('esbuild').build({
  entryPoints: ['lib/index.tsx'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ],
});