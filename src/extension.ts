import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('boilerkit.insertBoilerplate', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage("No active editor found.");
      return;
    }

    const lang = editor.document.languageId;

    const boilerplates: Record<string, string> = {
      cpp: `#include<bits/stdc++.h>
using namespace std;

int main(){
    
    return 0;
}`,
      python: `if __name__ == "__main__":
    pass`,
      javascript: `console.log("Hello, world!");`,
    };

    const content = boilerplates[lang] || "// Boilerplate not available for this language.";

    editor.insertSnippet(new vscode.SnippetString(content));
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
