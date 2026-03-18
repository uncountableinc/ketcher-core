import { ChainsCollection } from "../monomer-chains/ChainsCollection";
import { BaseMonomer, Chain } from "./..";
export interface SnakeLayoutNode {
    monomers: BaseMonomer[];
}
export interface TwoStrandedSnakeLayoutNode {
    senseNode?: SnakeLayoutNode;
    antisenseNode?: SnakeLayoutNode;
    chain: Chain;
}
export declare class SnakeLayoutModel {
    private nodes;
    private monomerToTwoStrandedSnakeLayoutNode;
    constructor(chainsCollection: ChainsCollection);
    private addNode;
    private getSnakeLayoutNodesFromChainNode;
    private fillSenseNodes;
    private fillAntisenseNodes;
    private fillNodes;
    forEachNode(callback: (node: TwoStrandedSnakeLayoutNode, index: number) => void): void;
}
