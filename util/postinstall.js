import child_process from 'child_process';
import { existsSync } from 'node:fs';

const color = {
  FgGray: '\x1b[90m',
  FgYellow: '\x1b[33m',
  Reset: '\x1b[0m',
};

if (process.env.NODE_ENV === 'development') {
  const cjsLinked = existsSync(new URL('../test/cjs/node_modules', import.meta.url));
  const esmLinked = existsSync(new URL('../test/esm/node_modules', import.meta.url));
  if (cjsLinked && esmLinked) {
    process.stdout.write(`${color.FgGray}`);
    process.stdout.write('Test directories already linked.');
  } else {
    process.stdout.write(`\n${color.FgYellow}`);
    process.stdout.write('Linking test directories to project root...');

    if (!cjsLinked) {
      child_process.execSync('npm i --no-package-lock', { cwd: new URL('../test/cjs', import.meta.url) });
    }
    if (!esmLinked) {
      child_process.execSync('npm i --no-package-lock', { cwd: new URL('../test/esm', import.meta.url) });
    }

    process.stdout.write('Done.');
  }

  process.stdout.write(`\n${color.Reset}`);
}
