import { DrawingEntity } from "./DrawingEntity";
import { Vec2 } from "./vec2";
import { BaseMonomer } from "./BaseMonomer";
import { Bond } from "./CoreBond";
import { AtomLabel } from "../constants";
import { AtomRenderer } from "../../application/render/renderers/AtomRenderer";
import { MonomerToAtomBond } from './MonomerToAtomBond';
export declare enum AtomRadical {
    None = 0,
    Single = 1,
    Doublet = 2,
    Triplet = 3
}
export interface AtomProperties {
    charge?: number | null;
    explicitValence?: number;
    isotope?: number | null;
    radical?: AtomRadical;
    alias?: string | null;
}
export declare class Atom extends DrawingEntity {
    monomer: BaseMonomer;
    atomIdInMicroMode: any;
    label: AtomLabel;
    properties: AtomProperties;
    bonds: Array<Bond | MonomerToAtomBond>;
    renderer: AtomRenderer | undefined;
    constructor(position: Vec2, monomer: BaseMonomer, atomIdInMicroMode: any, label: AtomLabel, properties?: AtomProperties);
    get center(): Vec2;
    addBond(bond: Bond | MonomerToAtomBond): void;
    deleteBond(bondId: number): void;
    setRenderer(renderer: AtomRenderer): void;
    get isCarbon(): boolean;
    private calculateConnections;
    get hasAlias(): boolean;
    get hasRadical(): boolean;
    get hasCharge(): boolean;
    get hasExplicitValence(): boolean;
    get hasExplicitIsotope(): boolean;
    private get radicalAmount();
    private get valenceWithoutHydrogen();
    calculateValence(): {
        valence: number;
        hydrogenAmount: number;
    };
}
