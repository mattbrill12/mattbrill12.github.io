const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const rootDir = path.join(__dirname, '..');

// Files/folders to copy from build to root
const filesToCopy = [
  'index.html',
  'static',
  'asset-manifest.json',
  'manifest.json',
  'robots.txt',
  'site.webmanifest',
  'favicon.ico',
  'favicon.html',
  'logo.png',
  'logo192.png',
  'logo512.png',
  'beverage-bar-1.png',
  'beverage-bar-2.png',
  'beverage-bar-3.png',
  'hot-chocolate-bar-1.png',
  'hot-chocolate-bar-2.png',
  'hot-chocolate-bar-3.png',
  'mobile-charcuterie-cart-1.png',
  'mobile-charcuterie-cart-2.png',
  'mobile-charcuterie-cart-3.png'
];

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyFile(src, dest) {
  const srcPath = path.join(buildDir, src);
  const destPath = path.join(rootDir, src);

  if (fs.existsSync(srcPath)) {
    const stats = fs.statSync(srcPath);
    if (stats.isDirectory()) {
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }
      copyRecursiveSync(srcPath, destPath);
      console.log(`✓ Copied directory: ${src}`);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied file: ${src}`);
    }
  } else {
    console.log(`⚠ File not found: ${src}`);
  }
}

console.log('Starting build copy process...\n');

// Copy all files from build directory
filesToCopy.forEach(file => {
  copyFile(file, file);
});

// Also copy any additional files that might exist in build
if (fs.existsSync(buildDir)) {
  const buildFiles = fs.readdirSync(buildDir);
  buildFiles.forEach(file => {
    if (!filesToCopy.includes(file)) {
      const srcPath = path.join(buildDir, file);
      const destPath = path.join(rootDir, file);
      const stats = fs.statSync(srcPath);
      
      if (stats.isDirectory() && file !== 'build') {
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        copyRecursiveSync(srcPath, destPath);
        console.log(`✓ Copied additional directory: ${file}`);
      } else if (!stats.isDirectory()) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✓ Copied additional file: ${file}`);
      }
    }
  });
}

console.log('\n✓ Build copy completed!');

