import { EmptySubChain } from "./monomer-chains/EmptySubChain";
import { BaseSequenceItemRenderer } from "../../application/render/renderers/sequence/BaseSequenceItemRenderer";
import { EmptyMonomer } from "./EmptyMonomer";
export declare class EmptySequenceNode {
    renderer?: BaseSequenceItemRenderer;
    monomer: EmptyMonomer;
    constructor();
    get SubChainConstructor(): typeof EmptySubChain;
    get firstMonomerInNode(): EmptyMonomer;
    get lastMonomerInNode(): EmptyMonomer;
    get hovered(): boolean;
    get selected(): boolean;
    get monomerItem(): {
        props: {
            MonomerNaturalAnalogCode: null;
        };
    };
    get monomers(): never[];
    setRenderer(renderer: any): void;
    get modified(): boolean;
}
