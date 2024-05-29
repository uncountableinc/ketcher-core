import { Atom, Struct } from "../../domain/entities";
import { DrawingEntitiesManager } from "../../domain/entities/DrawingEntitiesManager";
import { ReStruct } from "../render";
import { Command } from "../../domain/entities/Command";
import { AttachmentPointName } from "../../domain/types";
export declare class MacromoleculesConverter {
    private static convertMonomerToMonomerMicromolecule;
    private static addMonomerAtomToStruct;
    static convertAttachmentPointNameToNumber(attachmentPointName: AttachmentPointName): number;
    private static findAttachmentPointAtom;
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
