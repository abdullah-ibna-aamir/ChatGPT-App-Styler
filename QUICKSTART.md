# Quick Start Guide

## Installation & Running (5 minutes)

### Step 1: Prerequisites
Ensure you have Node.js installed:
```bash
node --version  # Should be v16 or higher
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Step 2: Clone & Install
```bash
git clone https://github.com/abdullah-ibna-aamir/ChatGPT-App-Styler.git
cd ChatGPT-App-Styler
npm install
```

### Step 3: Run the App
```bash
npm start
```

The application window will open!

## First-Time Usage

### 1. Choose a Theme (5 seconds)
Click any theme button:
- **Dark** - Default dark theme (recommended)
- **Light** - Clean light theme
- **Solarized** - Popular Solarized Dark
- **Monokai** - Code editor favorite
- **Nord** - Arctic-inspired colors

### 2. Customize (2 minutes)
Adjust to your preference:
- **Font**: Select from dropdown
- **Size**: Drag slider (12-24px)
- **Layout**: Choose chat width
- **Colors**: Click color pickers

Watch the **Live Preview** update in real-time!

### 3. Export & Apply (1 minute)

#### Option A: Browser Extension (Recommended)

**For Chrome/Edge/Brave:**
1. Install [Stylus extension](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
2. In ChatGPT Appearance Manager, click **Export CSS**
3. Click **Copy to Clipboard**
4. Visit [chat.openai.com](https://chat.openai.com)
5. Click Stylus icon → "Write style for chat.openai.com"
6. Paste CSS → Save
7. ✅ Done! Refresh ChatGPT

**For Firefox:**
1. Install [Stylus extension](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
2. Follow steps 2-7 above

#### Option B: Quick Test (Temporary)
1. Open [chat.openai.com](https://chat.openai.com)
2. Press `F12` (DevTools)
3. Go to **Console** tab
4. Paste this code:
```javascript
const style = document.createElement('style');
style.textContent = `/* Paste your exported CSS here */`;
document.head.appendChild(style);
```
5. Press Enter

*Note: This resets when you refresh the page*

## Building Executables

Create standalone apps for distribution:

### Windows
```bash
npm run build:win
```
Creates: `dist/ChatGPT Appearance Manager Setup.exe`

### macOS
```bash
npm run build:mac
```
Creates: `dist/ChatGPT Appearance Manager.dmg`

### Linux
```bash
npm run build:linux
```
Creates: `dist/ChatGPT Appearance Manager.AppImage`

### All Platforms
```bash
npm run build
```

## Troubleshooting

### "npm: command not found"
→ Install Node.js from [nodejs.org](https://nodejs.org/)

### "electron: not found"
→ Run `npm install` in the project directory

### Preview not showing?
→ Click "Quick Preview" button

### CSS not working in ChatGPT?
→ Ensure browser extension is enabled
→ Check that URL matches `chat.openai.com`
→ Clear browser cache

### Application won't start?
→ Delete `node_modules` folder
→ Run `npm install` again
→ Try `npm start`

## Tips

💡 **Dark theme**: Best for night usage
💡 **Wider layout**: Better for large screens
💡 **Compact spacing**: See more messages at once
💡 **Save often**: Click "Export CSS" to backup your style

## Next Steps

- Read [USAGE.md](USAGE.md) for detailed features
- Check [CONTRIBUTING.md](CONTRIBUTING.md) to add themes
- Visit GitHub for updates and support

## Common Use Cases

### For Reading/Research
- Font Size: 18px
- Layout: Default or Wide
- Spacing: Spacious

### For Coding
- Font: Monospace
- Theme: Monokai or Nord
- Spacing: Compact

### For Presentation
- Font Size: 20px
- Layout: Full Width
- Theme: Light

---

**Need help?** Open an issue on [GitHub](https://github.com/abdullah-ibna-aamir/ChatGPT-App-Styler/issues)

**Love it?** Star the project! ⭐
