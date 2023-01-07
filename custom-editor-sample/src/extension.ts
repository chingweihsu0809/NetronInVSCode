import * as vscode from 'vscode';
import { TorchModelVisualizer } from './torchModelVisualizer';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(TorchModelVisualizer.register(context));
}
