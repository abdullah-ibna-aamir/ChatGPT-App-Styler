// Application state
const state = {
  theme: 'dark',
  fontSize: 16,
  fontFamily: 'system-ui',
  chatWidth: 'default',
  messageSpacing: 'default',
  backgroundColor: '#1a1a1a',
  textColor: '#ececec',
  accentColor: '#10a37f'
};

// Theme presets
const themePresets = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#1a1a1a',
    accentColor: '#0066cc'
  },
  dark: {
    backgroundColor: '#1a1a1a',
    textColor: '#ececec',
    accentColor: '#10a37f'
  },
  solarized: {
    backgroundColor: '#002b36',
    textColor: '#839496',
    accentColor: '#268bd2'
  },
  monokai: {
    backgroundColor: '#272822',
    textColor: '#f8f8f2',
    accentColor: '#a6e22e'
  },
  nord: {
    backgroundColor: '#2e3440',
    textColor: '#d8dee9',
    accentColor: '#88c0d0'
  }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  initializeControls();
  loadSavedSettings();
  updatePreview();
});

function initializeControls() {
  // Theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      selectTheme(theme);
    });
  });

  // Font family
  document.getElementById('fontFamily').addEventListener('change', (e) => {
    state.fontFamily = e.target.value;
    updatePreview();
  });

  // Font size
  const fontSizeSlider = document.getElementById('fontSize');
  const fontSizeValue = document.getElementById('fontSizeValue');
  fontSizeSlider.addEventListener('input', (e) => {
    state.fontSize = parseInt(e.target.value);
    fontSizeValue.textContent = `${state.fontSize}px`;
    updatePreview();
  });

  // Chat width
  document.getElementById('chatWidth').addEventListener('change', (e) => {
    state.chatWidth = e.target.value;
    updatePreview();
  });

  // Message spacing
  document.getElementById('messageSpacing').addEventListener('change', (e) => {
    state.messageSpacing = e.target.value;
    updatePreview();
  });

  // Color pickers
  document.getElementById('backgroundColor').addEventListener('input', (e) => {
    state.backgroundColor = e.target.value;
    updatePreview();
  });

  document.getElementById('textColor').addEventListener('input', (e) => {
    state.textColor = e.target.value;
    updatePreview();
  });

  document.getElementById('accentColor').addEventListener('input', (e) => {
    state.accentColor = e.target.value;
    updatePreview();
  });

  // Action buttons
  document.getElementById('previewBtn').addEventListener('click', () => {
    updatePreview();
    showNotification('Preview updated!');
  });

  document.getElementById('exportBtn').addEventListener('click', () => {
    showCSSModal();
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    resetToDefaults();
  });

  // Modal controls
  document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('cssModal').classList.remove('active');
  });

  document.getElementById('copyCssBtn').addEventListener('click', () => {
    const cssText = document.getElementById('cssOutput').value;
    navigator.clipboard.writeText(cssText).then(() => {
      showNotification('CSS copied to clipboard!');
    });
  });

  // Close modal when clicking outside
  document.getElementById('cssModal').addEventListener('click', (e) => {
    if (e.target.id === 'cssModal') {
      e.target.classList.remove('active');
    }
  });
}

function selectTheme(themeName) {
  state.theme = themeName;
  
  // Update UI
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-theme="${themeName}"]`).classList.add('active');
  
  // Apply theme preset
  if (themePresets[themeName]) {
    const preset = themePresets[themeName];
    state.backgroundColor = preset.backgroundColor;
    state.textColor = preset.textColor;
    state.accentColor = preset.accentColor;
    
    // Update color pickers
    document.getElementById('backgroundColor').value = preset.backgroundColor;
    document.getElementById('textColor').value = preset.textColor;
    document.getElementById('accentColor').value = preset.accentColor;
  }
  
  updatePreview();
}

function updatePreview() {
  const previewArea = document.getElementById('previewArea');
  
  // Apply styles to preview area
  previewArea.style.backgroundColor = state.backgroundColor;
  previewArea.style.color = state.textColor;
  previewArea.style.fontSize = `${state.fontSize}px`;
  previewArea.style.fontFamily = state.fontFamily;
  
  // Apply chat width
  if (state.chatWidth === 'narrow') {
    previewArea.style.maxWidth = '700px';
    previewArea.style.margin = '0 auto';
  } else if (state.chatWidth === 'wide') {
    previewArea.style.maxWidth = '1200px';
    previewArea.style.margin = '0 auto';
  } else if (state.chatWidth === 'full') {
    previewArea.style.maxWidth = '100%';
  } else {
    previewArea.style.maxWidth = '900px';
    previewArea.style.margin = '0 auto';
  }
  
  // Apply message spacing
  const messages = previewArea.querySelectorAll('.chat-message');
  messages.forEach(msg => {
    if (state.messageSpacing === 'compact') {
      msg.style.marginBottom = '10px';
    } else if (state.messageSpacing === 'spacious') {
      msg.style.marginBottom = '40px';
    } else {
      msg.style.marginBottom = '20px';
    }
  });
  
  // Apply accent color to avatars
  const userAvatars = previewArea.querySelectorAll('.user-message .message-avatar');
  userAvatars.forEach(avatar => {
    avatar.style.background = state.accentColor;
  });
  
  // Update message content styles
  const messageContents = previewArea.querySelectorAll('.message-content');
  messageContents.forEach(content => {
    content.style.color = state.textColor;
  });
  
  const userMessages = previewArea.querySelectorAll('.user-message .message-content');
  userMessages.forEach(msg => {
    msg.style.backgroundColor = adjustColorBrightness(state.backgroundColor, 10);
  });
  
  const assistantMessages = previewArea.querySelectorAll('.assistant-message .message-content');
  assistantMessages.forEach(msg => {
    msg.style.backgroundColor = adjustColorBrightness(state.backgroundColor, 15);
    msg.style.borderColor = adjustColorBrightness(state.backgroundColor, 20);
  });
  
  // Save settings
  saveSettings();
}

function adjustColorBrightness(color, percent) {
  // Convert hex to RGB
  const num = parseInt(color.replace('#', ''), 16);
  const r = (num >> 16) + Math.round(2.55 * percent);
  const g = ((num >> 8) & 0x00FF) + Math.round(2.55 * percent);
  const b = (num & 0x0000FF) + Math.round(2.55 * percent);
  
  // Clamp values
  const clamp = (val) => Math.min(255, Math.max(0, val));
  
  return `#${((clamp(r) << 16) | (clamp(g) << 8) | clamp(b)).toString(16).padStart(6, '0')}`;
}

function generateCSS() {
  return `/* ChatGPT Appearance Manager - Custom Styles */
/* Generated: ${new Date().toLocaleString()} */

/* Base font settings */
body,
.markdown,
.prose,
.text-base,
[class*="text-"] {
  font-family: ${state.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  font-size: ${state.fontSize}px !important;
}

/* Background color */
body,
.dark,
[data-theme="dark"],
main,
.flex.flex-col {
  background-color: ${state.backgroundColor} !important;
}

/* Text color */
body,
.markdown,
.prose,
p,
div,
span,
.text-gray-800,
.text-gray-900,
[class*="text-"] {
  color: ${state.textColor} !important;
}

/* Accent color for buttons and interactive elements */
button.btn-primary,
.bg-blue-500,
.bg-green-500,
button[type="submit"] {
  background-color: ${state.accentColor} !important;
}

/* Chat width settings */
${state.chatWidth === 'narrow' ? `
.mx-auto.max-w-3xl,
.container,
main > div {
  max-width: 700px !important;
}
` : ''}

${state.chatWidth === 'wide' ? `
.mx-auto.max-w-3xl,
.container,
main > div {
  max-width: 1200px !important;
}
` : ''}

${state.chatWidth === 'full' ? `
.mx-auto.max-w-3xl,
.container,
main > div {
  max-width: 100% !important;
  padding: 0 2rem !important;
}
` : ''}

/* Message spacing */
${state.messageSpacing === 'compact' ? `
.group.w-full,
[class*="mb-"],
[class*="my-"] {
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem !important;
}
` : ''}

${state.messageSpacing === 'spacious' ? `
.group.w-full,
[class*="mb-"],
[class*="my-"] {
  margin-bottom: 2.5rem !important;
  margin-top: 2.5rem !important;
}
` : ''}

/* Message bubbles */
.markdown.prose {
  background-color: ${adjustColorBrightness(state.backgroundColor, 10)} !important;
  border-radius: 12px;
  padding: 1rem;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${adjustColorBrightness(state.backgroundColor, 5)};
}

::-webkit-scrollbar-thumb {
  background: ${adjustColorBrightness(state.backgroundColor, 30)};
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${adjustColorBrightness(state.backgroundColor, 40)};
}`;
}

function showCSSModal() {
  const css = generateCSS();
  document.getElementById('cssOutput').value = css;
  document.getElementById('cssModal').classList.add('active');
}

function saveSettings() {
  localStorage.setItem('chatgpt-appearance-settings', JSON.stringify(state));
}

function loadSavedSettings() {
  const saved = localStorage.getItem('chatgpt-appearance-settings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
      
      // Update UI controls
      document.getElementById('fontFamily').value = state.fontFamily;
      document.getElementById('fontSize').value = state.fontSize;
      document.getElementById('fontSizeValue').textContent = `${state.fontSize}px`;
      document.getElementById('chatWidth').value = state.chatWidth;
      document.getElementById('messageSpacing').value = state.messageSpacing;
      document.getElementById('backgroundColor').value = state.backgroundColor;
      document.getElementById('textColor').value = state.textColor;
      document.getElementById('accentColor').value = state.accentColor;
      
      // Update theme button
      document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      const activeBtn = document.querySelector(`[data-theme="${state.theme}"]`);
      if (activeBtn) {
        activeBtn.classList.add('active');
      }
    } catch (e) {
      console.error('Error loading saved settings:', e);
    }
  }
}

function resetToDefaults() {
  state.theme = 'dark';
  state.fontSize = 16;
  state.fontFamily = 'system-ui';
  state.chatWidth = 'default';
  state.messageSpacing = 'default';
  state.backgroundColor = '#1a1a1a';
  state.textColor = '#ececec';
  state.accentColor = '#10a37f';
  
  // Update UI
  document.getElementById('fontFamily').value = state.fontFamily;
  document.getElementById('fontSize').value = state.fontSize;
  document.getElementById('fontSizeValue').textContent = `${state.fontSize}px`;
  document.getElementById('chatWidth').value = state.chatWidth;
  document.getElementById('messageSpacing').value = state.messageSpacing;
  document.getElementById('backgroundColor').value = state.backgroundColor;
  document.getElementById('textColor').value = state.textColor;
  document.getElementById('accentColor').value = state.accentColor;
  
  selectTheme('dark');
  showNotification('Settings reset to defaults');
}

function showNotification(message) {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    font-weight: 500;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
