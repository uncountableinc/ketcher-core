import { ChainsCollection } from "../../../../domain/entities/monomer-chains/ChainsCollection";
import { BaseMonomer, Vec2 } from "../../../../domain/entities";
import { BaseSequenceItemRenderer } from "./BaseSequenceItemRenderer";
import { Chain } from "../../../../domain/entities/monomer-chains/Chain";
import { SubChainNode } from "../../../../domain/entities/monomer-chains/types";
import { RestoreSequenceCaretPositionOperation } from "../../../editor/operations/modes";
import { BaseSubChain } from "../../../../domain/entities/monomer-chains/BaseSubChain";
import { Command } from "../../../../domain/entities/Command";
export declare type SequencePointer = number;
export declare type NumberOfSymbolsInRow = number;
export declare type SequenceLastCaretPosition = number;
export declare type NodeSelection = {
    node: SubChainNode;
    nodeIndexOverall: number;
    isNucleosideConnectedAndSelectedWithPhosphate?: boolean;
    hasR1Connection?: boolean;
};
export declare type NodesSelection = NodeSelection[][];
export declare class SequenceRenderer {
    static caretPosition: SequencePointer;
    static lastUserDefinedCaretPosition: SequenceLastCaretPosition;
    static chainsCollection: ChainsCollection;
    static lastChainStartPosition: Vec2;
    private static emptySequenceItemRenderers;
    private static newSequenceButtons;
    static show(chainsCollection: ChainsCollection, emptyChainIndex?: number): void;
    static removeEmptyNodes(): void;
    static removeNewSequenceButtons(): void;
    private static showNodes;
    static getNextChainPosition(currentChainStartPosition?: Vec2, lastChain?: Chain): Vec2;
    private static showBonds;
    static setCaretPosition(caretPosition: SequencePointer): void;
    static forEachNode(forEachCallback: (params: {
        chainIndex: number;
        subChainIndex: number;
        nodeIndex: number;
        nodeIndexOverall: number;
        node: SubChainNode;
        subChain: BaseSubChain;
        chain: Chain;
    }) => void): void;
    static setCaretPositionBySequenceItemRenderer(sequenceItemRenderer: BaseSequenceItemRenderer): void;
    static setCaretPositionByMonomer(monomer: BaseMonomer): void;
    static setCaretPositionByNode(nodeToCompare: SubChainNode): void;
    static getMonomersByCaretPositionRange(startCaretPosition: SequencePointer, endCaretPosition: any): BaseMonomer[];
    static resetLastUserDefinedCaretPosition(): void;
    private static get nodesGroupedByRows();
    private static getNodeIndexInRowByGlobalIndex;
    private static get currentChainRow();
    private static get previousRowOfNodes();
    private static get nextRowOfNodes();
    static moveCaretUp(): void;
    static moveCaretDown(): void;
    static moveCaretForward(): RestoreSequenceCaretPositionOperation;
    static moveCaretBack(): RestoreSequenceCaretPositionOperation;
    static get currentChainIndex(): number;
    static get lastNodeCaretPosition(): SequencePointer | undefined;
    static getNodeByPointer(sequencePointer?: SequencePointer): any;
    static get currentEdittingNode(): any;
    static get previousFromCurrentEdittingMonomer(): any;
    static get currentChain(): Chain;
    static get previousChain(): Chain;
    static get nextChain(): Chain;
    static getLastNonEmptyNode(chain: Chain): SubChainNode;
    static getLastNode(chain: Chain): SubChainNode;
    static get nextNode(): any;
    static get previousNode(): any;
    static get nextNodeInSameChain(): SubChainNode | undefined;
    static get previousNodeInSameChain(): SubChainNode | undefined;
    private static get nextCaretPosition();
    static get previousCaretPosition(): number | undefined;
    static get lastChain(): Chain;
    static startNewSequence(indexOfRowBefore?: number): void;
    static getPreviousNodeInSameChain(nodeToCompare: SubChainNode): SubChainNode | undefined;
    static getNextNodeInSameChain(nodeToCompare: SubChainNode): SubChainNode;
    static getPreviousNode(nodeToCompare: SubChainNode): any;
    static getNextNode(nodeToCompare: SubChainNode): any;
    static shiftArrowSelectionInEditMode(event: any): void;
    private static getShiftArrowChanges;
    static unselectEmptySequenceNodes(): Command;
    static get selections(): NodesSelection;
    static getRenderedStructuresBbox(): {
        left: any;
        right: any;
        top: any;
        bottom: any;
        width: number;
        height: number;
    };
    static getRendererByMonomer(monomer: BaseMonomer): any;
    static showNewSequenceButton(indexOfRowBefore: number): void;
}