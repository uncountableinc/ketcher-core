import { AttachmentPointName, MonomerItemType } from "../types";
import { Vec2 } from "./vec2";
import { Command } from "./Command";
import { DrawingEntity } from "./DrawingEntity";
import { PolymerBond } from "./PolymerBond";
import { BaseMonomer, Phosphate, RNABase, Struct, Sugar } from "./";
import { ChainsCollection } from "./monomer-chains/ChainsCollection";
import { Nucleoside } from './Nucleoside';
import { CanvasMatrix } from "./canvas-matrix/CanvasMatrix";
import { Matrix } from "./canvas-matrix/Matrix";
import { Cell } from "./canvas-matrix/Cell";
export declare const SNAKE_LAYOUT_CELL_WIDTH = 60;
export declare const MONOMER_START_X_POSITION: number;
export declare const MONOMER_START_Y_POSITION: number;
declare type RnaPresetAdditionParams = {
    sugar: MonomerItemType;
    sugarPosition: Vec2;
    rnaBase: MonomerItemType | undefined;
    rnaBasePosition: Vec2 | undefined;
    phosphate: MonomerItemType | undefined;
    phosphatePosition: Vec2 | undefined;
};
declare type NucleotideOrNucleoside = {
    sugar: Sugar;
    phosphate?: Phosphate;
    rnaBase: RNABase;
    baseMonomer: Sugar | Phosphate;
};
export declare class DrawingEntitiesManager {
    monomers: Map<number, BaseMonomer>;
    polymerBonds: Map<number, PolymerBond>;
    micromoleculesHiddenEntities: Struct;
    canvasMatrix?: CanvasMatrix;
    snakeLayoutMatrix?: Matrix<Cell>;
    get bottomRightMonomerPosition(): Vec2;
    get selectedEntitiesArr(): DrawingEntity[];
    get selectedEntities(): [number, DrawingEntity][];
    get allEntities(): [number, DrawingEntity][];
    deleteSelectedEntities(): Command;
    deleteAllEntities(): Command;
    addMonomerChangeModel(monomerItem: MonomerItemType, position: Vec2, _monomer?: BaseMonomer): BaseMonomer;
    updateMonomerItem(monomer: BaseMonomer, monomerItemNew: MonomerItemType): BaseMonomer;
    addMonomer(monomerItem: MonomerItemType, position: Vec2): Command;
    deleteDrawingEntity(drawingEntity: DrawingEntity, needToDeleteConnectedEntities?: boolean): Command;
    selectDrawingEntity(drawingEntity: DrawingEntity): Command;
    selectDrawingEntities(drawingEntities: DrawingEntity[]): Command;
    createDrawingEntitySelectionCommand(drawingEntity: DrawingEntity): Command;
    unselectAllDrawingEntities(): Command;
    unselectDrawingEntity(drawingEntity: DrawingEntity): Command;
    selectAllDrawingEntities(): Command;
    addDrawingEntitiesToSelection(drawingEntities: DrawingEntity[]): Command;
    moveDrawingEntityModelChange(drawingEntity: DrawingEntity, offset?: Vec2): DrawingEntity;
    private moveChemAtomsPoint;
    moveSelectedDrawingEntities(partOfMovementOffset: Vec2, fullMovementOffset?: Vec2): Command;
    createDrawingEntityMovingCommand(drawingEntity: DrawingEntity, partOfMovementOffset: Vec2, fullMovementOffset?: Vec2): Command;
    createDrawingEntityRedrawCommand(drawingEntityRedrawModelChange: () => DrawingEntity, invertDrawingEntityRedrawModelChange: () => DrawingEntity): Command;
    private deleteMonomerChangeModel;
    deleteMonomer(monomer: BaseMonomer, needToDeleteConnectedBonds?: boolean): Command;
    modifyMonomerItem(monomer: BaseMonomer, monomerItemNew: MonomerItemType): Command;
    selectIfLocatedInRectangle(rectangleTopLeftPoint: Vec2, rectangleBottomRightPoint: Vec2, previousSelectedEntities: [number, DrawingEntity][], shiftKey?: boolean): Command;
    private checkBondSelectionForSequenceMode;
    startPolymerBondCreationChangeModel(firstMonomer: any, startPosition: any, endPosition: any, _polymerBond?: PolymerBond): PolymerBond;
    startPolymerBondCreation(firstMonomer: any, startPosition: any, endPosition: any): {
        command: Command;
        polymerBond: any;
    };
    deletePolymerBondChangeModel(polymerBond: PolymerBond): void;
    deletePolymerBond(polymerBond: PolymerBond): Command;
    cancelPolymerBondCreation(polymerBond: PolymerBond, secondMonomer?: BaseMonomer): Command;
    movePolymerBond(polymerBond: PolymerBond, position: Vec2): Command;
    finishPolymerBondCreationModelChange(firstMonomer: BaseMonomer, secondMonomer: BaseMonomer, firstMonomerAttachmentPoint: AttachmentPointName, secondMonomerAttachmentPoint: AttachmentPointName, _polymerBond?: PolymerBond): PolymerBond;
    finishPolymerBondCreation(polymerBond: PolymerBond, secondMonomer: BaseMonomer, firstMonomerAttachmentPoint: AttachmentPointName, secondMonomerAttachmentPoint: AttachmentPointName): Command;
    createPolymerBond(firstMonomer: BaseMonomer, secondMonomer: BaseMonomer, firstMonomerAttachmentPoint: AttachmentPointName, secondMonomerAttachmentPoint: AttachmentPointName): Command;
    intendToStartBondCreation(monomer: BaseMonomer): Command;
    intendToStartAttachmenPointBondCreation(monomer: BaseMonomer, attachmentPointName: AttachmentPointName): Command;
    intendToFinishBondCreation(monomer: BaseMonomer, bond: PolymerBond, shouldCalculateBonds: boolean): Command;
    intendToFinishAttachmenPointBondCreation(monomer: BaseMonomer, bond: PolymerBond, attachmentPointName: AttachmentPointName, shouldCalculateBonds: boolean): Command;
    cancelIntentionToFinishBondCreation(monomer: BaseMonomer, polymerBond?: PolymerBond): Command;
    intendToSelectDrawingEntity(drawingEntity: DrawingEntity): Command;
    cancelIntentionToSelectDrawingEntity(drawingEntity: DrawingEntity): Command;
    showPolymerBondInformation(polymerBond: PolymerBond): Command;
    hidePolymerBondInformation(polymerBond: PolymerBond): Command;
    addRnaPreset({ sugar, sugarPosition, phosphate, phosphatePosition, rnaBase, rnaBasePosition, }: RnaPresetAdditionParams): {
        command: Command;
        monomers: BaseMonomer[];
    };
    rearrangeChainModelChange(monomer: BaseMonomer, newPosition: Vec2): BaseMonomer;
    getNucleotideSize(nucleotide: NucleotideOrNucleoside): {
        width: number;
        height: number;
    };
    private reArrangeChain;
    private reArrangeRnaChain;
    private getNextMonomerPositionForSnakeLayout;
    private addRnaOperations;
    private recalculateCanvasMatrixModelChange;
    recalculateCanvasMatrix(chainsCollection?: ChainsCollection, previousSnakeLayoutMatrix?: Matrix<Cell>): Command;
    reArrangeChains(canvasWidth: number, isSnakeMode: boolean, needRedrawBonds?: boolean): Command;
    private redrawBondsModelChange;
    redrawBonds(): Command;
    getNextPositionAndDistance(lastPosition: Vec2, height: number, canvasWidth: number, width?: number): {
        maxVerticalDistance: number;
        lastPosition: Vec2;
    };
    isNucleosideAndPhosphateConnectedAsNucleotide(nucleoside: Nucleoside, phosphate: Phosphate): boolean;
    setMicromoleculesHiddenEntities(struct: Struct): void;
    clearMicromoleculesHiddenEntities(): void;
    mergeInto(targetDrawingEntitiesManager: DrawingEntitiesManager): {
        command: Command;
        mergedDrawingEntities: DrawingEntitiesManager;
    };
    centerMacroStructure(): void;
    getCurrentCenterPointOfCanvas(): Vec2;
    getMacroStructureCenter(): Vec2;
    applyMonomersSequenceLayout(): ChainsCollection;
    clearCanvas(): void;
    applyFlexLayoutMode(needRedrawBonds?: boolean): Command;
    rerenderPolymerBonds(): void;
    getAllSelectedEntitiesForEntities(drawingEntities: DrawingEntity[]): {
        command: Command;
        drawingEntities: DrawingEntity[];
    };
    getAllSelectedEntitiesForSingleEntity(drawingEntity: DrawingEntity, needToSelectConnectedBonds?: boolean, selectedDrawingEntities?: DrawingEntity[]): {
        command: Command;
        drawingEntities: DrawingEntity[];
    };
    validateIfApplicableForFasta(): boolean;
    moveMonomer(monomer: BaseMonomer, position: Vec2): Command;
    removeHoverForAllMonomers(): Command;
    private reconnectPolymerBondModelChange;
    reconnectPolymerBond(polymerBond: PolymerBond, newFirstMonomerAttachmentPoint: AttachmentPointName, newSecondMonomerAttachmentPoint: AttachmentPointName, initialFirstMonomerAttachmentPoint: AttachmentPointName, initialSecondMonomerAttachmentPoint: AttachmentPointName): Command;
}
export {};