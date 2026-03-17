import { BaseSubChain } from "./BaseSubChain";
import { BaseMonomer, SubChainNode, Nucleoside, Nucleotide, MonomerSequenceNode, EmptySequenceNode, LinkerSequenceNode, PolymerBond } from "./..";
import { EmptySubChain } from "./EmptySubChain";
export declare class Chain {
    subChains: BaseSubChain[];
    firstMonomer?: BaseMonomer;
    isCyclic: boolean;
    id: number;
    private nodesChanged;
    private nodesCache;
    private monomersCache;
    private bondsCache;
    constructor(firstMonomer?: BaseMonomer, isCyclic?: boolean);
    private recalculateNodes;
    private createSubChainIfNeed;
    add(monomer: BaseMonomer): void;
    addNode(node: SubChainNode): this;
    private fillSubChains;
    get lastSubChain(): BaseSubChain;
    get nodes(): SubChainNode[];
    get lastNode(): EmptySequenceNode | MonomerSequenceNode | Nucleoside | Nucleotide | LinkerSequenceNode | undefined;
    get lastNonEmptyNode(): SubChainNode | undefined;
    get firstSubChain(): BaseSubChain;
    get firstNode(): SubChainNode;
    get length(): number;
    get isEmpty(): boolean;
    get isAntisense(): boolean;
    forEachNode(callback: ({ node, subChain, }: {
        node: SubChainNode;
        subChain: BaseSubChain;
        nodeIndex: number;
    }) => void): void;
    forEachNodeReversed(callback: ({ node, subChain, }: {
        node: SubChainNode;
        subChain: BaseSubChain;
        nodeIndex: number;
    }) => void): void;
    static createChainWithEmptyNode(): {
        emptyChain: Chain;
        emptySubChain: EmptySubChain;
        emptySequenceNode: EmptySequenceNode;
    };
    get isNewSequenceChain(): boolean;
    get monomers(): BaseMonomer[];
    get bonds(): PolymerBond[];
}
