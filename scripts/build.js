const pkg = require('../package.json');

require('esbuild').build({
  entryPoints: ['lib/index.tsx'],
  outfile: 'dist/index.js',
  bundle: true,
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ],
});