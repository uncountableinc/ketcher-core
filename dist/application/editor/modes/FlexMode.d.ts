import { LayoutMode } from "./types";
import { BaseMode } from "./internal";
export declare class FlexMode extends BaseMode {
    constructor(previousMode?: LayoutMode);
    initialize(): import("../../../domain/entities/Command").Command;
    onKeyDown(_event: KeyboardEvent): void;
}
