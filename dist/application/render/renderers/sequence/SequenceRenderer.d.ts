import { ChainsCollection } from "../../../../domain/entities/monomer-chains/ChainsCollection";
import { BaseMonomer } from "../../../../domain/entities";
import { BaseSequenceItemRenderer } from "./BaseSequenceItemRenderer";
import { Chain } from "../../../../domain/entities/monomer-chains/Chain";
import { SubChainNode } from "../../../../domain/entities/monomer-chains/types";
import { RestoreSequenceCaretPositionCommand } from "../../../editor/operations/modes";
import { BaseSubChain } from "../../../../domain/entities/monomer-chains/BaseSubChain";
import { Command } from "../../../../domain/entities/Command";
export declare type SequencePointer = number;
export declare type NodesSelection = {
    node: SubChainNode;
    nodeIndexOverall: number;
}[][];
export declare class SequenceRenderer {
    static caretPosition: SequencePointer;
    static chainsCollection: ChainsCollection;
    private static emptySequenceItemRenderers;
    private static lastChainStartPosition;
    static show(chainsCollection: ChainsCollection): void;
    static removeEmptyNodes(): void;
    private static showNodes;
    private static getNextChainPosition;
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
    static getMonomersByCaretPositionRange(startCaretPosition: SequencePointer, endCaretPosition: any): BaseMonomer[];
    static moveCaretForward(): RestoreSequenceCaretPositionCommand;
    static moveCaretBack(): RestoreSequenceCaretPositionCommand;
    static get hasNewChain(): boolean;
    static moveCaretToNewChain(): void;
    private static get currentChainIndex();
    static get newChainCaretPosition(): SequencePointer | undefined;
    static get lastNodeCaretPosition(): SequencePointer | undefined;
    static getNodeByPointer(sequencePointer?: SequencePointer): any;
    private static getChainByPointer;
    static get currentEdittingNode(): any;
    static get previousFromCurrentEdittingMonomer(): any;
    static get currentChain(): Chain;
    static get previousChain(): Chain;
    static getLastNonEmptyNode(chain: Chain): SubChainNode;
    static getLastNode(chain: Chain): SubChainNode;
    static get nextNode(): any;
    static get previousNode(): any;
    static get nextNodeInSameChain(): any;
    static get previousNodeInSameChain(): any;
    private static get nextCaretPosition();
    static get previousCaretPosition(): number | undefined;
    static get lastChain(): Chain;
    static startNewSequence(): void;
    static getPreviousNodeInSameChain(nodeToCompare: SubChainNode): any;
    static getNextNodeInSameChain(nodeToCompare: SubChainNode): any;
    static getPreviousNode(nodeToCompare: SubChainNode): any;
    static getNextNode(nodeToCompare: SubChainNode): any;
    static shiftArrowSelectionInEditMode(event: any): void;
    static unselectEmptySequenceNodes(): Command;
    static get selections(): NodesSelection;
}
