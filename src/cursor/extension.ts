import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('winsparkle-template.createProject', async () => {
        // Get project name
        const projectName = await vscode.window.showInputBox({
            prompt: 'Enter project name',
            validateInput: (value: string) => {
                if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(value)) {
                    return 'Project name must start with a letter and contain only letters, numbers, and underscores';
                }
                return null;
            }
        });

        if (!projectName) {
            return;
        }

        // Get company name
        const companyName = await vscode.window.showInputBox({
            prompt: 'Enter company name',
            value: 'Example Company'
        });

        if (!companyName) {
            return;
        }

        // Get appcast domain
        const appcastDomain = await vscode.window.showInputBox({
            prompt: 'Enter appcast domain (e.g., updates.example.com)',
            validateInput: (value: string) => {
                if (!/^[a-zA-Z0-9][a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}$/.test(value)) {
                    return 'Please enter a valid domain name';
                }
                return null;
            }
        });

        if (!appcastDomain) {
            return;
        }

        // Get workspace folder
        const workspaceFolder = await vscode.window.showWorkspaceFolderPick();
        if (!workspaceFolder) {
            return;
        }

        // Create project structure
        const projectPath = path.join(workspaceFolder.uri.fsPath, projectName);
        
        try {
            // Create directories
            fs.mkdirSync(projectPath);
            fs.mkdirSync(path.join(projectPath, 'cmake'));
            fs.mkdirSync(path.join(projectPath, 'appcast'));

            // Copy template files
            const templatePath = path.join(context.extensionPath, 'templates');
            
            // Replace placeholders in template files
            const replacements = {
                '{{PROJECT_NAME}}': projectName,
                '{{COMPANY_NAME}}': companyName,
                '{{PROJECT_DOMAIN}}': appcastDomain,
                '{{PROJECT_VERSION}}': '1.0.0',
                '{{PROJECT_TITLE}}': projectName
            };

            // Copy and process each template file
            const templateFiles = [
                'CMakeLists.txt',
                'main.cpp',
                'Resource.rc',
                'cmake/FindWinSparkle.cmake',
                'cmake/WinSparkleConfig.cmake',
                'appcast/appcast.xml',
                'README.md'
            ];

            for (const file of templateFiles) {
                const content = fs.readFileSync(
                    path.join(templatePath, file),
                    'utf8'
                );
                
                const processedContent = Object.entries(replacements)
                    .reduce((acc, [key, value]) => 
                        acc.replace(new RegExp(key, 'g'), value),
                        content
                    );

                const targetPath = path.join(projectPath, file);
                fs.mkdirSync(path.dirname(targetPath), { recursive: true });
                fs.writeFileSync(targetPath, processedContent);
            }

            // Open the project in a new window
            vscode.commands.executeCommand(
                'vscode.openFolder',
                vscode.Uri.file(projectPath),
                true
            );

            vscode.window.showInformationMessage(
                `Successfully created WinSparkle project: ${projectName}`
            );

        } catch (error) {
            vscode.window.showErrorMessage(
                `Failed to create project: ${error.message}`
            );
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}