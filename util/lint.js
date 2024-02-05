import child_process from 'child_process';

const color = {
  FgGreen: '\x1b[32m',
  FgRed: '\x1b[31m',
  Reset: '\x1b[0m',
};

console.log('\n*** JS ***');
const childEs = child_process.spawnSync('npx', ['eslint', '.', '--ext js,cjs,mjs,ts', '--max-warnings=0'], { cwd: new URL('../', import.meta.url), stdio: 'inherit', shell: true });
if (!childEs.status) {
  console.log(`${color.FgGreen}eslint passed${color.Reset}`);
}

console.log('\n*** Markdown ***');
const childMd = child_process.spawnSync('npx', ['markdownlint', '.', '-i', 'node_modules/'], { cwd: new URL('../', import.meta.url), stdio: 'inherit', shell: true });
if (!childMd.status) {
  console.log(`${color.FgGreen}markdownlint passed${color.Reset}`);
}

console.log('');

if (childEs.status || childMd.status) {
  process.exit(1);
}
