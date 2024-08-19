import { Atom, Struct } from "../../domain/entities";
import { DrawingEntitiesManager } from "../../domain/entities/DrawingEntitiesManager";
import { ReStruct } from "../render";
import { BaseMonomer } from "../../domain/entities/BaseMonomer";
import { Command } from "../../domain/entities/Command";
import { PolymerBond } from "../../domain/entities/PolymerBond";
import { AttachmentPointName } from "../../domain/types";
export declare class MacromoleculesConverter {
    private static convertMonomerToMonomerMicromolecule;
    private static addMonomerAtomToStruct;
    static convertAttachmentPointNameToNumber(attachmentPointName: AttachmentPointName): number;
    static findAttachmentPointAtom(polymerBond: PolymerBond, monomer: BaseMonomer, monomerToAtomIdMap: Map<BaseMonomer, Map<number, number>>): {
        attachmentAtomId: undefined;
        attachmentPointNumber: undefined;
        globalAttachmentAtomId?: undefined;
    } | {
        globalAttachmentAtomId: number | false | undefined;
        attachmentAtomId: number | false | undefined;
        attachmentPointNumber: number;
    };
    static convertDrawingEntitiesToStruct(drawingEntitiesManager: DrawingEntitiesManager, struct: Struct, reStruct?: ReStruct): {
        struct: Struct;
        reStruct: ReStruct | undefined;
        conversionErrorMessage: string;
    };
    private static convertMonomerMicromoleculeToMonomer;
    private static convertFragmentToChem;
    static getAttachmentPointLabel(atom: Atom): string;
    static getFragmentsGroupedBySgroup(struct: Struct): number[][];
    static convertStructToDrawingEntities(struct: Struct, drawingEntitiesManager: DrawingEntitiesManager): {
        drawingEntitiesManager: DrawingEntitiesManager;
        modelChanges: Command;
    };
}
