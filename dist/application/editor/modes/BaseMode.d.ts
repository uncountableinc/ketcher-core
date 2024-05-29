import { Command } from "../../../domain/entities/Command";
import { LayoutMode } from "./";
export declare abstract class BaseMode {
    modeName: LayoutMode;
    previousMode: LayoutMode;
    protected constructor(modeName: LayoutMode, previousMode?: LayoutMode);
    private changeMode;
    initialize(): Command;
    abstract onKeyDown(event: KeyboardEvent): void;
    destroy(): void;
}
