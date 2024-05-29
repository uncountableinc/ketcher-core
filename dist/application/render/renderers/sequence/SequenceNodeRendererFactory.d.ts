import { Vec2 } from "../../../../domain/entities";
import { SubChainNode } from "../../../../domain/entities/monomer-chains/types";
import { BaseSubChain } from "../../../../domain/entities/monomer-chains/BaseSubChain";
import { BaseMonomerRenderer } from "../..";
import { BaseSequenceItemRenderer } from "./BaseSequenceItemRenderer";
export declare class SequenceNodeRendererFactory {
    static fromNode(node: SubChainNode, firstMonomerInChainPosition: Vec2, monomerIndexInChain: number, isLastMonomerInChain: boolean, subChain: BaseSubChain, isEditingSymbol: boolean, renderer?: BaseMonomerRenderer | BaseSequenceItemRenderer): any;
}
