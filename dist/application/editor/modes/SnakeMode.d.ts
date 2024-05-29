import { BaseMode } from "./BaseMode";
import { LayoutMode } from "./";
export declare class SnakeMode extends BaseMode {
    constructor(previousMode?: LayoutMode);
    initialize(): import("../../../domain/entities/Command").Command;
    onKeyDown(_event: KeyboardEvent): void;
}
