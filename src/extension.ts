// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {	
	//on Save pop-up message feature:
	//*disposable is a clean-up object used when this extension is deactivated. Acts as a secure back up for cleaning up memory usage, a second cleanup.
	let disposable = vscode.workspace.onWillSaveTextDocument((event: vscode.TextDocumentWillSaveEvent) => {
		vscode.window.showInformationMessage('chin-check! Is your code EASY-TO-CHANGE?? -Pragmatic Principle');
	});
	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
export function deactivate() {}