import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './renderer/App';

const container = document.body;
const root = createRoot(container);
root.render(<App />);