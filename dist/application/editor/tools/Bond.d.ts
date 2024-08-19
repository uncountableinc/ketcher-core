import { CoreEditor, EditorHistory } from "../internal";
import { BaseMonomer } from "../../../domain/entities/BaseMonomer";
import { BaseTool } from "./Tool";
import { AttachmentPointName } from "../../../domain/types";
declare class PolymerBond implements BaseTool {
    private editor;
    private bondRenderer?;
    private isBondConnectionModalOpen;
    history: EditorHistory;
    constructor(editor: CoreEditor);
    mouseDownAttachmentPoint(event: any): void;
    private removeBond;
    mousedown(event: any): void;
    mousemove(): void;
    mouseLeavePolymerBond(event: any): void;
    mouseOverPolymerBond(event: any): void;
    mouseOverMonomer(event: any): void;
    mouseOverAttachmentPoint(event: any): void;
    mouseLeaveMonomer(event: any): void;
    mouseLeaveAttachmentPoint(event: any): void;
    mouseUpAttachmentPoint(event: any): void;
    private finishBondCreation;
    mouseup(): void;
    mouseUpMonomer(event: any): void;
    handleBondCreation: (payload: {
        firstMonomer: BaseMonomer;
        secondMonomer: BaseMonomer;
        firstSelectedAttachmentPoint: AttachmentPointName;
        secondSelectedAttachmentPoint: AttachmentPointName;
    }) => void;
    handleBondCreationCancellation: (secondMonomer: BaseMonomer) => void;
    destroy(): void;
    private shouldInvokeModal;
}
export { PolymerBond };
