/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { Bond } from './bond';
import { Box2Abs } from './box2Abs';
import { Pile } from './pile';
import { Struct } from './struct';
import { Vec2 } from './vec2';
import { ReStruct } from '../../application/render';
import { FunctionalGroup, Pool, SGroupAttachmentPoint } from "./";
import { ReSGroup } from "../../application/render";
export declare class SGroupBracketParams {
    readonly c: Vec2;
    readonly d: Vec2;
    readonly n: Vec2;
    readonly w: number;
    readonly h: number;
    constructor(c: Vec2, d: Vec2, w: number, h: number);
}
export declare class SGroup {
    static TYPES: {
        SUP: string;
        MUL: string;
        SRU: string;
        MON: string;
        MER: string;
        COP: string;
        CRO: string;
        MOD: string;
        GRA: string;
        COM: string;
        MIX: string;
        FOR: string;
        DAT: string;
        ANY: string;
        GEN: string;
        queryComponent: string;
    };
    type: string;
    id: number;
    label: number;
    bracketBox: any;
    bracketDirection: Vec2;
    areas: any;
    hover: boolean;
    hovering: any;
    selected: boolean;
    selectionPlate: any;
    atoms: any;
    atomSet: any;
    parentAtomSet: any;
    patoms?: any;
    allAtoms: any;
    bonds: any;
    xBonds: any;
    neiAtoms: any;
    pp: Vec2 | null;
    data: any;
    dataArea: any;
    functionalGroup: FunctionalGroup | undefined;
    private readonly attachmentPoints;
    constructor(type: string);
    getAttr(attr: string): any;
    setFunctionalGroup(functionalGroup: FunctionalGroup): void;
    getAttrs(): any;
    setAttr(attr: string, value: any): any;
    checkAttr(attr: string, value: any): boolean;
    updateOffset(offset: Vec2): void;
    isExpanded(): boolean;
    isContracted(): boolean;
    calculatePP(struct: Struct): void;
    isGroupAttached(struct: Struct): boolean;
    addAttachmentPoint(attachmentPoint: SGroupAttachmentPoint, validateUniqueness?: boolean): void;
    addAttachmentPoints(attachmentPoints: ReadonlyArray<SGroupAttachmentPoint> | SGroupAttachmentPoint[], validateUniqueness?: boolean): void;
    removeAttachmentPoint(attachmentPoint: SGroupAttachmentPoint): boolean;
    getAttachmentPoints(): ReadonlyArray<SGroupAttachmentPoint>;
    /**
     * Connection point - is not! the same as Attachment point.
     * Connection point is a fact for the sgroup - is the atom that has connected bond to an external atom.
     * So it doesn't matter how it happens (connection atom).
     * When we talk about "Attachment point" it is a hypothetical, suitable place to connect to sgroup.
     * But there are cases when sgroup doesn't have attachment points but have connection (read from external file)
     */
    private getConnectionPointsCount;
    isNotContractible(struct: Struct): boolean;
    /**
     * Why only one?
     * Currently other parts of application don't support several attachment points for sgroup.
     * So to support it - it's required to refactor almost every peace of code with sgroups.
     *
     *
     * Why return 'undefined' without fallback?
     * If sgroup doesn't have attachment points it can't be attached, (salt and solvents for example).
     */
    getAttachmentAtomId(): number | undefined;
    /**
     * WHY? When group is contracted we need to understand the represent atom to calculate position.
     * It is not always the attachmentPoint!! if no attachment point - use the first atom
     */
    getContractedPosition(struct: Struct): {
        atomId: number;
        position: Vec2;
    };
    cloneAttachmentPoints(atomIdMap: Map<number, number>): ReadonlyArray<SGroupAttachmentPoint>;
    get isSuperatomWithoutLabel(): boolean;
    get isMonomer(): boolean;
    static getOffset(sgroup: SGroup): null | Vec2;
    static isSaltOrSolvent(moleculeName: string): boolean;
    static isAtomInSaltOrSolvent(atomId: number, sgroupsOnCanvas: SGroup[]): boolean;
    static isBondInSaltOrSolvent(bondId: number, sgroupsOnCanvas: SGroup[]): boolean;
    static filterAtoms(atoms: any, map: any): any[];
    static removeNegative(atoms: any): any[];
    static filter(_mol: any, sg: any, atomMap: any): void;
    static clone(sgroup: SGroup, aidMap: Map<number, number>): SGroup;
    static addAtom(sgroup: SGroup, aid: number, struct: Struct): void;
    static removeAtom(sgroup: SGroup, aid: number): void;
    static getCrossBonds(mol: any, parentAtomSet: Pile<number>): {
        [key: number]: Array<number>;
    };
    static bracketPos(sGroup: any, mol: any, crossBondsPerAtom?: {
        [key: number]: Array<number>;
    }, remol?: ReStruct, render?: any): void;
    static getBracketParameters(mol: any, crossBondsPerAtom: {
        [key: number]: Array<Bond>;
    }, atomSet: Pile<number>, bb: any, d: any, n: any): Array<any>;
    static getObjBBox(atoms: any, mol: any, useCollapsedSgroupsPosition?: boolean): Box2Abs;
    static getAtoms(mol: any, sg: any): Array<any>;
    static getBonds(mol: any, sg: any): Array<any>;
    static prepareMulForSaving(sgroup: any, mol: any): void;
    static getMassCentre(mol: any, atoms: any): Vec2;
    static isAtomInContractedSGroup: (atom: any, sGroups: any) => boolean;
    static isBondInContractedSGroup(bond: Bond, sGroups: Map<number, ReSGroup> | Pool<SGroup>): boolean;
    static isSuperAtom(sGroup?: SGroup): boolean;
    static isDataSGroup(sGroup: SGroup): boolean;
    static isQuerySGroup(sGroup: SGroup): boolean;
    static isSRUSGroup(sGroup: SGroup): boolean;
    static isMulSGroup(sGroup: SGroup): boolean;
    static isCOPGroup(sGroup: SGroup): boolean;
}
