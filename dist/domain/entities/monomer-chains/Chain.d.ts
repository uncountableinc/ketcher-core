import { BaseSubChain } from "./BaseSubChain";
import { BaseMonomer } from "./..";
export declare class Chain {
    subChains: BaseSubChain[];
    firstMonomer: BaseMonomer | null;
    isCyclic: boolean;
    constructor(firstMonomer?: BaseMonomer, isCyclic?: boolean);
    add(monomer: BaseMonomer): void;
    private fillSubChains;
    get lastSubChain(): BaseSubChain;
    get lastNode(): import("./..").SubChainNode;
    get firstSubChain(): BaseSubChain;
    get firstNode(): import("./..").SubChainNode;
    get length(): number;
    get isEmpty(): boolean;
    forEachNode(callback: ({ node, subChain }: {
        node: any;
        subChain: any;
    }) => void): void;
}
