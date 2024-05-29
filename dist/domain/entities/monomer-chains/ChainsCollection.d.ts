import { Chain } from "./Chain";
import { BaseMonomer, Chem, Peptide, Phosphate, RNABase, Sugar } from "./..";
export declare class ChainsCollection {
    chains: Chain[];
    rearrange(): void;
    add(chain: Chain): void;
    static fromMonomers(monomers: BaseMonomer[]): ChainsCollection;
    static getFirstMonomersInChains(monomers: BaseMonomer[], MonomerTypes?: Array<typeof Peptide | typeof Chem | typeof Phosphate | typeof Sugar | typeof RNABase>): BaseMonomer[][];
    get firstNode(): import("./..").SubChainNode;
    private static getFirstMonomersInRegularChains;
    private static getFirstMonomersInCycledChains;
    private static getMonomerWithLowerCoordsFromMonomerList;
}
