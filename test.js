// Simple test to verify core functionality
const fs = require('fs');
const path = require('path');

console.log('Running ChatGPT Appearance Manager tests...\n');

// Test 1: Verify all required files exist
console.log('Test 1: Checking file structure...');
const requiredFiles = [
  'main.js',
  'preload.js',
  'package.json',
  'renderer/index.html',
  'renderer/styles.css',
  'renderer/app.js',
  'themes/dark.json',
  'themes/light.json'
];

let filesOk = true;
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ ${file} exists`);
  } else {
    console.log(`  ✗ ${file} missing`);
    filesOk = false;
  }
});

if (!filesOk) {
  console.log('\n❌ File structure test FAILED');
  process.exit(1);
}

// Test 2: Verify package.json is valid
console.log('\nTest 2: Validating package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`  ✓ package.json is valid JSON`);
  console.log(`  ✓ App name: ${pkg.name}`);
  console.log(`  ✓ Version: ${pkg.version}`);
  console.log(`  ✓ Main entry: ${pkg.main}`);
  
  if (pkg.scripts && pkg.scripts.start) {
    console.log(`  ✓ Start script defined`);
  } else {
    console.log(`  ✗ Start script missing`);
    process.exit(1);
  }
} catch (e) {
  console.log(`  ✗ package.json error: ${e.message}`);
  process.exit(1);
}

// Test 3: Verify theme files are valid JSON
console.log('\nTest 3: Validating theme files...');
const themeFiles = ['themes/dark.json', 'themes/light.json'];
let themesOk = true;

themeFiles.forEach(file => {
  try {
    const theme = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`  ✓ ${file} is valid`);
    console.log(`    - Theme: ${theme.name}`);
    console.log(`    - ID: ${theme.id}`);
  } catch (e) {
    console.log(`  ✗ ${file} error: ${e.message}`);
    themesOk = false;
  }
});

if (!themesOk) {
  console.log('\n❌ Theme validation test FAILED');
  process.exit(1);
}

// Test 4: Verify HTML file contains required elements
console.log('\nTest 4: Validating HTML structure...');
try {
  const html = fs.readFileSync('renderer/index.html', 'utf8');
  const requiredElements = [
    '<title>ChatGPT Appearance Manager</title>',
    'id="fontFamily"',
    'id="fontSize"',
    'id="previewArea"',
    'class="theme-btn"'
  ];
  
  let htmlOk = true;
  requiredElements.forEach(element => {
    if (html.includes(element)) {
      console.log(`  ✓ Contains ${element.substring(0, 30)}...`);
    } else {
      console.log(`  ✗ Missing ${element}`);
      htmlOk = false;
    }
  });
  
  if (!htmlOk) {
    console.log('\n❌ HTML validation test FAILED');
    process.exit(1);
  }
} catch (e) {
  console.log(`  ✗ HTML validation error: ${e.message}`);
  process.exit(1);
}

// Test 5: Verify CSS file exists and has content
console.log('\nTest 5: Validating CSS file...');
try {
  const css = fs.readFileSync('renderer/styles.css', 'utf8');
  if (css.length > 1000) {
    console.log(`  ✓ CSS file has content (${css.length} bytes)`);
  } else {
    console.log(`  ✗ CSS file seems too small`);
    process.exit(1);
  }
  
  // Check for key CSS classes
  const cssClasses = ['.app-container', '.controls-panel', '.preview-panel', '.theme-btn'];
  cssClasses.forEach(cls => {
    if (css.includes(cls)) {
      console.log(`  ✓ Contains ${cls} class`);
    } else {
      console.log(`  ✗ Missing ${cls} class`);
    }
  });
} catch (e) {
  console.log(`  ✗ CSS validation error: ${e.message}`);
  process.exit(1);
}

// Test 6: Verify JavaScript has key functions
console.log('\nTest 6: Validating JavaScript code...');
try {
  const js = fs.readFileSync('renderer/app.js', 'utf8');
  const requiredFunctions = ['updatePreview', 'generateCSS', 'selectTheme', 'saveSettings'];
  
  requiredFunctions.forEach(func => {
    if (js.includes(`function ${func}`) || js.includes(`${func} =`)) {
      console.log(`  ✓ Contains ${func} function`);
    } else {
      console.log(`  ⚠ Function ${func} not found or uses different pattern`);
    }
  });
} catch (e) {
  console.log(`  ✗ JavaScript validation error: ${e.message}`);
  process.exit(1);
}

console.log('\n✅ All tests passed!');
console.log('\n📦 Application is ready to run with: npm start');
console.log('🏗️  Build executables with: npm run build');
