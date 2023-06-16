import { Struct } from "../../domain/entities";
export declare class RenderStruct {
    /**
     * for S-Groups we want to show expanded structure
     * without brackets
     */
    static prepareStruct(struct: Struct): Struct;
    static render(el: HTMLElement | null, struct: Struct | null, options?: any): void;
}
