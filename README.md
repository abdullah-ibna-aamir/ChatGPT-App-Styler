# ChatGPT Appearance Manager

A cross-platform GUI desktop application that lets you customize the appearance of your ChatGPT desktop/web experience with themes, fonts, layout tweaks, and quick previews.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)

## Features

- 🎨 **Theme Selection**: Choose from multiple pre-built themes (Dark, Light, Solarized, Monokai, Nord)
- 🔤 **Font Customization**: Select font family and adjust font size
- 📐 **Layout Controls**: Adjust chat width and message spacing
- 🎯 **Color Picker**: Customize background, text, and accent colors
- 👁️ **Live Preview**: See changes in real-time before applying
- 📤 **CSS Export**: Generate and copy CSS for use in ChatGPT
- 💾 **Persistent Settings**: Your preferences are automatically saved
- 🖥️ **Cross-Platform**: Native-like experience on Windows, macOS, and Linux

## Screenshots

The application provides an intuitive interface with two panels:
- **Left Panel**: All customization controls (themes, fonts, layout, colors)
- **Right Panel**: Live preview showing how your changes will look in ChatGPT

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/abdullah-ibna-aamir/ChatGPT-App-Styler.git
cd ChatGPT-App-Styler
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

## Building from Source

Build executables for different platforms:

### Windows
```bash
npm run build:win
```
This creates `.exe` installer and portable version in the `dist` folder.

### macOS
```bash
npm run build:mac
```
This creates `.dmg` and `.zip` packages in the `dist` folder.

### Linux
```bash
npm run build:linux
```
This creates `.AppImage` and `.deb` packages in the `dist` folder.

### Build for all platforms
```bash
npm run build
```

## Usage

1. **Select a Theme**: Click on one of the theme buttons (Light, Dark, Solarized, Monokai, Nord)

2. **Customize Fonts**:
   - Choose your preferred font family from the dropdown
   - Adjust font size using the slider

3. **Adjust Layout**:
   - Set chat width (Narrow, Default, Wide, Full Width)
   - Control message spacing (Compact, Default, Spacious)

4. **Custom Colors**:
   - Pick custom background color
   - Choose text color
   - Select accent color for buttons and highlights

5. **Preview Changes**: 
   - See real-time preview in the right panel
   - Click "Quick Preview" to refresh

6. **Export CSS**:
   - Click "Export CSS" button
   - Copy the generated CSS code
   - Use it with browser extensions or ChatGPT desktop app

## Applying Styles to ChatGPT

### For ChatGPT Web (Browser)

1. Install a browser extension like [Stylus](https://add0n.com/stylus.html) or [Tampermonkey](https://www.tampermonkey.net/)
2. Click "Export CSS" in the app
3. Copy the generated CSS
4. Create a new style in your extension for `chat.openai.com`
5. Paste the CSS and save

### For ChatGPT Desktop App

The ChatGPT desktop application may support custom CSS injection through:
- Application settings (if available)
- Configuration files in the app's data directory
- Third-party tools designed for desktop app customization

*Note: Methods may vary based on the ChatGPT desktop app version.*

## Development

### Project Structure
```
ChatGPT-App-Styler/
├── main.js              # Electron main process
├── preload.js           # Preload script for IPC
├── renderer/            # Frontend UI
│   ├── index.html       # Main HTML
│   ├── styles.css       # Application styles
│   └── app.js           # Application logic
├── themes/              # Theme definitions
│   ├── dark.json
│   ├── light.json
│   └── custom/          # User-created themes
├── icons/               # Application icons
│   └── icon.svg
└── package.json         # Project configuration
```

### Technologies Used
- **Electron**: Cross-platform desktop framework
- **HTML/CSS/JavaScript**: Frontend implementation
- **electron-builder**: Building and packaging

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the need to customize ChatGPT's appearance
- Built with Electron for cross-platform compatibility
- Designed with user experience in mind

## Support

If you encounter any issues or have questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed information
3. Provide system information and steps to reproduce

## Roadmap

- [ ] Import/Export theme files
- [ ] More pre-built themes
- [ ] Advanced CSS customization options
- [ ] Integration with ChatGPT desktop app
- [ ] Auto-update functionality
- [ ] Dark/Light mode for the app itself

---

Made with ❤️ for the ChatGPT community 
