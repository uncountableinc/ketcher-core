import { BaseMonomer } from './BaseMonomer';
import { AttachmentPointName } from "../types";
import { RnaSubChain } from "./monomer-chains/RnaSubChain";
import { SubChainNode } from "./monomer-chains/types";
export declare class Sugar extends BaseMonomer {
    getValidSourcePoint(secondMonomer: BaseMonomer): AttachmentPointName | undefined;
    getValidTargetPoint(firstMonomer: BaseMonomer): AttachmentPointName | undefined;
    private getValidPoint;
    get SubChainConstructor(): typeof RnaSubChain;
    isMonomerTypeDifferentForChaining(monomerToChain: SubChainNode): boolean;
    get isPartOfRna(): boolean;
}
