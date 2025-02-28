const { cpSync, rmSync } = require('node:fs');
const path = require('node:path');

const jasmineSrc = path.join(path.dirname(require.resolve('jasmine-core')), 'jasmine-core');
const jasmineDest = path.join(__dirname, '..', 'www', 'assets', 'jasmine');

cpSync(jasmineSrc, jasmineDest, { recursive: true, force: true });
rmSync(path.join(jasmineDest, 'example'), { recursive: true, force: true });

const bootstrapSrc = path.join(path.dirname(require.resolve('bootstrap')), '..');
const bootstrapDest = path.join(__dirname, '..', 'www', 'assets', 'bootstrap');

const bootstrapFiles = [
    path.join('js', 'bootstrap.bundle.min.js'),
    path.join('js', 'bootstrap.bundle.min.js.map'),
    path.join('css', 'bootstrap.min.css'),
    path.join('css', 'bootstrap.min.css.map')
];

for (const file of bootstrapFiles) {
    cpSync(
        path.join(bootstrapSrc, file),
        path.join(bootstrapDest, path.basename(file)),
        { recursive: true, force: true }
    );
}
