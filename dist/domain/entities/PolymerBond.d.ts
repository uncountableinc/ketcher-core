import { DrawingEntity } from "./DrawingEntity";
import { PolymerBondRenderer } from "../../application/render/renderers/PolymerBondRenderer";
import { Vec2 } from "./vec2";
import { BaseMonomer } from './BaseMonomer';
import { AttachmentPointName } from "../types";
import { BackBoneBondSequenceRenderer } from "../../application/render/renderers/sequence/BackBoneBondSequenceRenderer";
import { PolymerBondSequenceRenderer } from "../../application/render/renderers/sequence/PolymerBondSequenceRenderer";
export declare class PolymerBond extends DrawingEntity {
    firstMonomer: BaseMonomer;
    secondMonomer?: BaseMonomer;
    renderer?: PolymerBondRenderer | BackBoneBondSequenceRenderer | PolymerBondSequenceRenderer;
    endPosition: Vec2;
    constructor(firstMonomer: BaseMonomer, secondMonomer?: BaseMonomer);
    setFirstMonomer(monomer: BaseMonomer): void;
    setSecondMonomer(monomer: BaseMonomer): void;
    setRenderer(renderer: PolymerBondRenderer | BackBoneBondSequenceRenderer | PolymerBondSequenceRenderer): void;
    get finished(): boolean;
    get center(): Vec2;
    moveToLinkedMonomers(): void;
    moveBondStartAbsolute(x: any, y: any): void;
    moveBondEndAbsolute(x: any, y: any): void;
    get startPosition(): Vec2;
    getAnotherMonomer(monomer: BaseMonomer): BaseMonomer | undefined;
    static get backBoneChainAttachmentPoints(): AttachmentPointName[];
    get isBackBoneChainConnection(): boolean;
    get firstMonomerAttachmentPoint(): AttachmentPointName | undefined;
    get secondMonomerAttachmentPoint(): AttachmentPointName | undefined;
    get isSideChainConnection(): boolean;
}
