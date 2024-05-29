import { ToolEventHandlerName } from "./tools/Tool";
import { CoreEditor } from "./Editor";
export declare let editorEvents: any;
export declare function resetEditorEvents(): void;
export declare const renderersEvents: ToolEventHandlerName[];
export declare const hotkeysConfiguration: {
    exit: {
        shortcut: string[];
        handler: (editor: CoreEditor) => void;
    };
    undo: {
        shortcut: string;
        handler: (editor: CoreEditor) => void;
    };
    redo: {
        shortcut: string[];
        handler: (editor: CoreEditor) => void;
    };
    erase: {
        shortcut: string[];
        handler: (editor: CoreEditor) => void;
    };
    clear: {
        shortcut: string[];
        handler: (editor: CoreEditor) => void;
    };
    'zoom-plus': {
        shortcut: string;
        handler: () => void;
    };
    'zoom-minus': {
        shortcut: string;
        handler: () => void;
    };
    'zoom-reset': {
        shortcut: string;
        handler: () => void;
    };
    'select-all': {
        shortcut: string;
        handler: (editor: CoreEditor) => void;
    };
};
