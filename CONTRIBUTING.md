# Contributing to ChatGPT Appearance Manager

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 🎨 Create and share themes
- 📝 Improve documentation
- 💻 Submit code improvements
- 🧪 Add tests
- 🌍 Translate to other languages

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm (comes with Node.js)
- Git
- A code editor (VS Code recommended)

### Setting Up Development Environment

1. Fork the repository on GitHub

2. Clone your fork:
```bash
git clone https://github.com/YOUR-USERNAME/ChatGPT-App-Styler.git
cd ChatGPT-App-Styler
```

3. Install dependencies:
```bash
npm install
```

4. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

5. Start the application in development mode:
```bash
npm start
```

## Project Structure

```
ChatGPT-App-Styler/
├── main.js              # Electron main process
├── preload.js           # IPC bridge (security layer)
├── renderer/            # Frontend code
│   ├── index.html       # UI structure
│   ├── styles.css       # Styling
│   └── app.js           # Application logic
├── themes/              # Theme definitions
│   ├── *.json          # Built-in themes
│   └── custom/         # User themes
├── icons/               # Application icons
├── package.json         # Dependencies and scripts
└── test.js             # Test suite
```

## Development Guidelines

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Add comments for complex logic
- Follow existing code patterns

### JavaScript Best Practices

```javascript
// Good
const userName = getUserName();
if (userName) {
  displayWelcome(userName);
}

// Avoid
var userName = getUserName()
if(userName){
  displayWelcome(userName)
}
```

### CSS Best Practices

- Use meaningful class names
- Group related styles
- Comment complex CSS
- Maintain responsive design
- Use CSS variables for theme colors

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(themes): add dracula theme
fix(preview): correct color contrast calculation
docs(readme): update installation instructions
```

## Testing

### Running Tests

```bash
node test.js
```

### Adding Tests

When adding features, update `test.js` with appropriate tests:

```javascript
// Test new feature
console.log('\nTest X: Testing new feature...');
try {
  // Your test code
  console.log('  ✓ Feature works correctly');
} catch (e) {
  console.log(`  ✗ Feature test failed: ${e.message}`);
  process.exit(1);
}
```

## Creating Themes

### Theme File Format

Create a JSON file in `themes/` directory:

```json
{
  "id": "theme-id",
  "name": "Theme Display Name",
  "description": "Brief description",
  "colors": {
    "backgroundColor": "#hex-color",
    "textColor": "#hex-color",
    "accentColor": "#hex-color"
  }
}
```

### Theme Guidelines

- Test contrast ratios (use tools like [WebAIM](https://webaim.org/resources/contrastchecker/))
- Ensure readability
- Test with actual ChatGPT interface
- Provide clear description
- Use semantic theme names

### Popular Theme Requests

Check issues tagged with `theme-request` for community suggestions.

## Submitting Changes

### Pull Request Process

1. **Before submitting:**
   - Run tests: `node test.js`
   - Test the application: `npm start`
   - Update documentation if needed
   - Check for console errors

2. **Create pull request:**
   - Push your branch to your fork
   - Open PR against `main` branch
   - Fill out the PR template
   - Link related issues

3. **PR Description should include:**
   - What changes were made
   - Why the changes were made
   - How to test the changes
   - Screenshots (if UI changes)

4. **After submission:**
   - Respond to review comments
   - Make requested changes
   - Keep PR updated with main branch

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Tests pass (`node test.js`)
- [ ] Application runs without errors
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow convention
- [ ] No unnecessary files committed
- [ ] Screenshots included (for UI changes)

## Reporting Bugs

### Before Reporting

- Check existing issues
- Try latest version
- Verify it's not a ChatGPT website change

### Bug Report Should Include

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Numbered steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**:
  - OS (Windows/macOS/Linux)
  - Node.js version
  - Electron version
  - Application version
- **Screenshots**: If applicable
- **Console Output**: Any error messages

### Bug Report Template

```markdown
## Bug Description
Brief description of the issue

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: Windows 10 / macOS 13 / Ubuntu 22.04
- Node.js: vX.X.X
- App Version: vX.X.X

## Screenshots
[If applicable]

## Additional Context
Any other relevant information
```

## Feature Requests

### Suggesting Features

- Check if feature already requested
- Explain the use case
- Describe expected behavior
- Consider implementation complexity

### Feature Request Template

```markdown
## Feature Description
What feature would you like to see?

## Use Case
Why is this feature needed?

## Proposed Solution
How should it work?

## Alternatives Considered
Any alternative solutions?

## Additional Context
Any other information
```

## Documentation

### Improving Documentation

Documentation improvements are always welcome:
- Fix typos
- Clarify instructions
- Add examples
- Update outdated information
- Translate to other languages

### Documentation Files

- `README.md`: Project overview and quick start
- `USAGE.md`: Detailed usage instructions
- `CONTRIBUTING.md`: This file
- Code comments: Inline documentation

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on the project goals
- Help others learn

### Getting Help

- GitHub Issues: For bugs and features
- Discussions: For questions and ideas
- Code Comments: For implementation details

## Release Process

(For maintainers)

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Run tests
4. Create git tag
5. Build distributions
6. Create GitHub release
7. Update documentation

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in relevant commits

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue for any questions about contributing!

---

Thank you for contributing to ChatGPT Appearance Manager! 🎉
