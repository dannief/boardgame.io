var shell = require('shelljs');

shell.cp('packages/server.d.ts', 'dist/server.d.ts');
shell.cp('packages/client.d.ts', 'dist/client.d.ts');
shell.cp('packages/core.d.ts', 'dist/core.d.ts');
shell.cp('packages/ui.d.ts', 'dist/ui.d.ts');
shell.cp('packages/react.d.ts', 'dist/react.d.ts');
shell.cp('packages/react-native.d.ts', 'dist/react-native.d.ts');
