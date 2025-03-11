import * as fs from 'fs';
import * as path from 'path';

async function buildExtension() {
    // Build for Visual Studio
    await buildVisualStudioExtension();
    
    // Build for Cursor
    await buildCursorExtension();
}

async function buildVisualStudioExtension() {
    // Build VSIX package
    // ... existing VS build code ...
}

async function buildCursorExtension() {
    // Build Cursor extension
    // Compile TypeScript
    // Package extension
}

buildExtension().catch(console.error);