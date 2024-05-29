import { RNABase } from "./RNABase";
import { Sugar } from "./Sugar";
import { SubChainNode } from "./monomer-chains/types";
import { Vec2 } from "./vec2";
import { Command } from "./Command";
export declare class Nucleoside {
    sugar: Sugar;
    rnaBase: RNABase;
    constructor(sugar: Sugar, rnaBase: RNABase);
    static fromSugar(sugar: Sugar, needValidation?: boolean): Nucleoside;
    static createOnCanvas(rnaBaseName: string, position: Vec2): {
        modelChanges: Command;
        node: Nucleoside;
    };
    isMonomerTypeDifferentForChaining(monomerToChain: SubChainNode): boolean;
    get SubChainConstructor(): typeof import("./monomer-chains/RnaSubChain").RnaSubChain;
    get monomer(): Sugar;
    get monomers(): (Sugar | RNABase)[];
    get firstMonomerInNode(): Sugar;
    get lastMonomerInNode(): Sugar;
    get renderer(): import("../..").BaseMonomerRenderer | import("../../application/render/renderers/sequence/BaseSequenceItemRenderer").BaseSequenceItemRenderer | undefined;
    get modified(): boolean;
}
