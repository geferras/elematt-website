#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '../src/i18n');
const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));

let hasErrors = false;

files.forEach(file => {
  const filePath = path.join(i18nDir, file);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    JSON.parse(content);
    console.log(`✓ ${file}`);
  } catch (error) {
    console.error(`❌ ${file}: ${error.message}`);
    hasErrors = true;
  }
});

if (hasErrors) {
  process.exit(1);
}

console.log('\n✓ All JSON files are valid');

