import { BaseMonomer } from "./BaseMonomer";
import { ChemSubChain } from "./monomer-chains/ChemSubChain";
export declare class RNABase extends BaseMonomer {
    getValidSourcePoint(): import("../types").AttachmentPointName | undefined;
    getValidTargetPoint(): import("../types").AttachmentPointName | undefined;
    get SubChainConstructor(): typeof ChemSubChain;
    get isPartOfRna(): boolean;
}
