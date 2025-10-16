# Usage Guide - ChatGPT Appearance Manager

## Getting Started

### Launching the Application

After installation, launch the application using:
```bash
npm start
```

The application window will open with two main panels:
- **Left Panel**: Customization controls
- **Right Panel**: Live preview

## Features Guide

### 1. Theme Selection

Five pre-built themes are available:

- **Light**: Clean white background with blue accents
- **Dark**: Dark background with green accents (default)
- **Solarized**: Solarized dark theme
- **Monokai**: Popular code editor theme
- **Nord**: Arctic-inspired color palette

**How to use:**
1. Click any theme button at the top of the controls panel
2. The preview will instantly update
3. Color pickers will adjust to match the theme

### 2. Font Settings

#### Font Family
Choose from popular fonts:
- System Default (native to your OS)
- Inter (modern sans-serif)
- Roboto (Google's font)
- Open Sans (readable and friendly)
- Helvetica (classic)
- Arial (universal)
- Georgia (elegant serif)
- Monospace (code-friendly)

**How to use:**
1. Select a font from the "Font Family" dropdown
2. The preview text updates immediately

#### Font Size
Adjust text size from 12px to 24px

**How to use:**
1. Drag the "Font Size" slider
2. Current size displays next to the label
3. Preview updates in real-time

### 3. Layout Options

#### Chat Width
Control the maximum width of chat content:

- **Narrow** (700px): Best for focused reading
- **Default** (900px): Balanced option
- **Wide** (1200px): More content visible
- **Full Width**: Uses entire screen width

**Best practices:**
- Narrow: Single monitor, focused work
- Default: Most users
- Wide/Full: Large monitors, multiple conversations

#### Message Spacing
Control vertical space between messages:

- **Compact**: Minimal spacing, see more messages
- **Default**: Standard comfortable spacing
- **Spacious**: Extra breathing room

### 4. Custom Colors

Fine-tune your experience with custom colors:

#### Background Color
- The main background of the chat interface
- Click the color picker to select any color
- Default dark theme: `#1a1a1a`

#### Text Color
- Color for all text content
- Ensure good contrast with background
- Default dark theme: `#ececec`

#### Accent Color
- Used for buttons and highlights
- Adds personality to the interface
- Default dark theme: `#10a37f`

**Color Tips:**
- Maintain sufficient contrast (WCAG AA: 4.5:1)
- Test readability in preview
- Dark backgrounds usually need light text

### 5. Quick Preview

The right panel shows a live preview with:
- Sample user messages
- Sample assistant responses
- All your current settings applied

**Features:**
- Updates in real-time as you adjust settings
- Click "Quick Preview" button to refresh
- Accurately represents final appearance

### 6. Export CSS

Generate CSS code to use in ChatGPT:

**Steps:**
1. Adjust all settings to your preference
2. Click "Export CSS" button
3. A modal appears with generated CSS
4. Click "Copy to Clipboard"
5. Use in your styling tool

**Generated CSS includes:**
- Font settings
- Color scheme
- Layout adjustments
- Message spacing
- Scrollbar styling

### 7. Reset to Default

Return to default settings:

**Steps:**
1. Click "Reset to Default" button
2. All settings return to dark theme defaults
3. Confirmation notification appears

## Applying Styles

### Method 1: Browser Extension (Stylus)

1. Install [Stylus](https://add0n.com/stylus.html)
2. Navigate to `chat.openai.com`
3. Click Stylus extension icon
4. Select "Write style for: chat.openai.com"
5. Paste your exported CSS
6. Save

### Method 2: Browser Extension (Tampermonkey)

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Create new script
3. Add URL match: `https://chat.openai.com/*`
4. Wrap CSS in JavaScript:
```javascript
// ==UserScript==
// @name         ChatGPT Custom Style
// @match        https://chat.openai.com/*
// ==/UserScript==

(function() {
    const style = document.createElement('style');
    style.textContent = `
        /* Paste your exported CSS here */
    `;
    document.head.appendChild(style);
})();
```

### Method 3: Browser DevTools (Temporary)

1. Open ChatGPT website
2. Press F12 (DevTools)
3. Go to "Console" tab
4. Paste:
```javascript
const style = document.createElement('style');
style.textContent = `/* Your CSS here */`;
document.head.appendChild(style);
```
5. Press Enter

**Note:** This is temporary and resets on page reload

### Method 4: ChatGPT Desktop App

Specific methods vary by desktop app version:

**Option A - User Styles (if supported):**
1. Check app settings for "Custom CSS" or "User Styles"
2. Paste your exported CSS
3. Save and restart app

**Option B - Config File (advanced):**
1. Locate app config directory
2. Look for custom styles support
3. Add CSS file or configuration

## Keyboard Shortcuts

While the app is in focus:
- `Ctrl/Cmd + R`: Refresh preview
- `Ctrl/Cmd + E`: Export CSS
- `Ctrl/Cmd + D`: Reset to default
- `Esc`: Close modal

*(Note: Shortcuts to be implemented in future versions)*

## Tips and Best Practices

### For Readability
- Use sufficient contrast between text and background
- Larger font sizes (16-18px) are easier to read
- Default or spacious message spacing reduces eye strain

### For Productivity
- Compact spacing to see more messages
- Wider layouts on large monitors
- Monospace fonts for code-heavy conversations

### For Aesthetics
- Match your IDE or editor theme
- Consistent color schemes reduce context switching
- Preview before exporting

## Troubleshooting

### Preview Not Updating
- Click "Quick Preview" button
- Check browser console for errors
- Restart application

### CSS Not Working in ChatGPT
- Verify CSS syntax in export
- Check that styling tool is active
- Clear browser cache
- Ensure correct URL match pattern

### Colors Look Different
- CSS export generates specific selectors
- ChatGPT's HTML structure may change
- Update selectors if needed
- Check browser's dark mode settings

### Application Won't Start
- Verify Node.js and npm are installed
- Run `npm install` again
- Check console for error messages
- Try deleting `node_modules` and reinstalling

## Saving and Loading

### Automatic Save
- Settings save automatically to localStorage
- Preserved between sessions
- Stored locally in application data

### Manual Export/Import (Future Feature)
- Export settings as JSON file
- Share themes with others
- Import community themes

## Advanced Usage

### Creating Custom Themes

1. Adjust all settings to desired values
2. Note the color values
3. Create JSON file in `themes/custom/`
4. Format:
```json
{
  "id": "my-theme",
  "name": "My Custom Theme",
  "description": "My personal theme",
  "colors": {
    "backgroundColor": "#hex",
    "textColor": "#hex",
    "accentColor": "#hex"
  }
}
```

### Modifying Generated CSS

The exported CSS can be edited:
- Add custom selectors
- Override specific elements
- Add animations
- Include media queries for responsive design

### Using with Multiple ChatGPT Accounts

Browser extensions support multiple profiles:
- Create separate styles per account
- Use different themes for work/personal
- Quick toggle between styles

## Support and Community

- Report issues on GitHub
- Share your themes
- Request features
- Contribute to development

---

For more information, see the main [README.md](README.md)
