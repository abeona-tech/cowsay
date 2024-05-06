const { exec } = require('child_process');

// exec('ts-node say.ts && npm run cowsay && npm run tweet', (error, stdout, stderr) => {
// exec('npm run clean && npm run compile && npm run say', (error, stdout, stderr) => {
// exec('npm run say', (error, stdout, stderr) => {
exec('npm run clean && npm run compile && npm run say && npm run cowsay && npm run tweet', (error, stdout, stderr) => {
  console.log('Starting app...');
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
