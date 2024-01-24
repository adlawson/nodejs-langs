import child_process from 'child_process';

process.stdout.write('\nLinking test directories to project root...');

child_process.execSync('npm i --no-package-lock', { cwd: new URL('./test/cjs', import.meta.url) });
child_process.execSync('npm i --no-package-lock', { cwd: new URL('./test/esm', import.meta.url) });

process.stdout.write('Done.');