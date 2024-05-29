/// <reference types="lodash" />
import { SequenceType, Struct, Vec2 } from "../../domain/entities";
import { BaseTool, Tool, ToolEventHandlerName } from "./tools/Tool";
import { MonomerItemType } from "../../domain/types";
import { RenderersManager } from "../render/renderers/RenderersManager";
import { DrawingEntitiesManager } from "../../domain/entities/DrawingEntitiesManager";
import ZoomTool from './tools/Zoom';
import { HistoryOperationType } from './EditorHistory';
import { BaseMode } from "./modes/internal";
interface ICoreEditorConstructorParams {
    theme: any;
    canvas: SVGSVGElement;
}
export declare class CoreEditor {
    events: any;
    renderersContainer: RenderersManager;
    drawingEntitiesManager: DrawingEntitiesManager;
    lastCursorPosition: Vec2;
    lastCursorPositionOfCanvas: Vec2;
    _monomersLibrary: MonomerItemType[];
    canvas: SVGSVGElement;
    canvasOffset: DOMRect;
    theme: any;
    zoomTool: ZoomTool;
    private tool?;
    get selectedTool(): Tool | BaseTool | undefined;
    mode: BaseMode;
    sequenceTypeEnterMode: SequenceType;
    private micromoleculesEditor;
    private hotKeyEventHandler;
    constructor({ theme, canvas }: ICoreEditorConstructorParams);
    static provideEditorInstance(): CoreEditor;
    setMonomersLibrary(monomersLibrary: MonomerItemType[]): void;
    get monomersLibrary(): import("lodash").Dictionary<{
        label: string;
        colorScheme?: import("../../domain/types").MonomerColorScheme | undefined;
        favorite?: boolean | undefined;
        struct: Struct;
        props: {
            id?: string | undefined;
            MonomerNaturalAnalogCode: string;
            MonomerName: string;
            MonomerFullName?: string | undefined;
            Name: string;
            BranchMonomer?: string | undefined;
            MonomerCaps?: {
                [key: string]: string;
            } | undefined;
            MonomerCode?: string | undefined;
            MonomerType?: string | undefined;
            MonomerClass?: string | undefined;
            isMicromoleculeFragment?: boolean | undefined;
        };
        attachmentPoints?: import("../formatters/types/ket").IKetAttachmentPoint[] | undefined;
        seqId?: number | undefined;
    }[]>;
    private handleHotKeyEvents;
    private setupKeyboardEvents;
    private setupHotKeysEvents;
    private setupContextMenuEvents;
    private subscribeEvents;
    private onEditSequence;
    private onStartNewSequence;
    private onChangeSequenceTypeEnterMode;
    private onSelectMonomer;
    private onSelectRNAPreset;
    onSelectTool(tool: string): void;
    private onCreateBond;
    private onCancelBondCreation;
    private onSelectMode;
    setMode(mode: BaseMode): void;
    get isSequenceEditMode(): boolean;
    onSelectHistory(name: HistoryOperationType): void;
    selectTool(name: string, options?: any): void;
    unsubscribeEvents(): void;
    get trackedDomEvents(): {
        target: Element | Document;
        eventName: string;
        toolEventHandler: ToolEventHandlerName;
    }[];
    private domEventSetup;
    private updateLastCursorPosition;
    private useToolIfNeeded;
    private useModeIfNeeded;
    switchToMicromolecules(): void;
    private switchToMacromolecules;
}
export {};
