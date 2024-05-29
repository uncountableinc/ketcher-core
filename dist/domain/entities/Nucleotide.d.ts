import { RNABase } from "./RNABase";
import { Phosphate } from "./Phosphate";
import { Sugar } from "./Sugar";
import { SubChainNode } from "./monomer-chains/types";
import { Vec2 } from "./vec2";
export declare class Nucleotide {
    sugar: Sugar;
    rnaBase: RNABase;
    phosphate: Phosphate;
    constructor(sugar: Sugar, rnaBase: RNABase, phosphate: Phosphate);
    static fromSugar(sugar: Sugar, needValidation?: boolean): Nucleotide;
    static createOnCanvas(rnaBaseName: string, position: Vec2): {
        modelChanges: import("./Command").Command;
        node: Nucleotide;
    };
    isMonomerTypeDifferentForChaining(monomerToChain: SubChainNode): boolean;
    get SubChainConstructor(): typeof import("./monomer-chains/RnaSubChain").RnaSubChain;
    get monomer(): Sugar;
    get monomers(): (Sugar | RNABase | Phosphate)[];
    get firstMonomerInNode(): Sugar;
    get lastMonomerInNode(): Phosphate;
    get renderer(): import("../..").BaseMonomerRenderer | import("../../application/render/renderers/sequence/BaseSequenceItemRenderer").BaseSequenceItemRenderer | undefined;
    get modified(): boolean;
}
