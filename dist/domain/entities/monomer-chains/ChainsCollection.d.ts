import { Chain } from "./Chain";
import { AmbiguousMonomer, BaseMonomer, Chem, Peptide, Phosphate, RNABase, SubChainNode, Sugar, UnresolvedMonomer, UnsplitNucleotide } from "./..";
import { BaseSubChain } from "./BaseSubChain";
export interface ComplimentaryChainsWithData {
    complimentaryChain: Chain;
    chain: Chain;
    firstConnectedNode: SubChainNode;
    firstConnectedComplimentaryNode: SubChainNode;
    chainIdxConnection: number;
}
export declare type GrouppedChain = {
    group: number;
    chain: Chain;
};
export declare class ChainsCollection {
    chains: Chain[];
    private get monomerToChain();
    get monomerToNode(): Map<BaseMonomer, SubChainNode>;
    rearrange(): void;
    add(chain: Chain): this;
    static fromMonomers(monomers: BaseMonomer[]): ChainsCollection;
    static getFirstMonomersInChains(monomers: BaseMonomer[], MonomerTypes?: Array<typeof Peptide | typeof Chem | typeof Phosphate | typeof Sugar | typeof RNABase | typeof UnresolvedMonomer | typeof UnsplitNucleotide | typeof AmbiguousMonomer>): BaseMonomer[][];
    private static getFirstMonomersInMiddleOfChains;
    get firstNode(): SubChainNode;
    private static getFirstMonomersInRegularChains;
    private static getFirstMonomersInCycledChains;
    private static getMonomerWithLowerCoordsFromMonomerList;
    get lastNode(): SubChainNode;
    get length(): number;
    forEachNode(forEachCallback: (params: {
        chainIndex: number;
        subChainIndex: number;
        nodeIndex: number;
        nodeIndexOverall: number;
        node: SubChainNode;
        subChain: BaseSubChain;
        chain: Chain;
    }) => void): void;
    private getFirstAntisenseMonomerInNode;
    private getComplimentaryChainIfNucleotide;
    private reorderChainsPutSenseChainOrderInAccordanceAntisenseConnection;
    getAllChainsWithConnectionInBlock(c: Chain): GrouppedChain[];
    getChainByMonomer(monomer: BaseMonomer): Chain | undefined;
    getComplimentaryChainsWithData(chain: Chain): ComplimentaryChainsWithData[];
}
