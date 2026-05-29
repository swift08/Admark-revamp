const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../src/assets');

async function convert() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const webpName = `${name}.webp`;
      
      const inPath = path.join(dir, file);
      const outPath = path.join(dir, webpName);
      
      console.log(`Converting ${file} -> ${webpName}...`);
      await sharp(inPath)
        .webp({ quality: 80, force: true })
        .toFile(outPath);
        
      console.log(`Deleting ${file}...`);
      fs.unlinkSync(inPath);
    }
  }
  console.log("All done!");
}

convert().catch(console.error);
