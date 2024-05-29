import { Operation } from "./Operation";
import { RenderersManager } from "../../application/render/renderers/RenderersManager";
export declare class Command {
    operations: Operation[];
    private undoOperationReverse;
    addOperation(operation: Operation): void;
    merge(command: Command): void;
    setUndoOperationReverse(): void;
    invert(renderersManagers: RenderersManager): void;
    execute(renderersManagers: RenderersManager): void;
}
