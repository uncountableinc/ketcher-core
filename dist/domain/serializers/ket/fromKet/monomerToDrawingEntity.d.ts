import { IKetMonomerNode, IKetMonomerTemplate } from "../../../../application/formatters/types/ket";
import { Struct } from "../../../entities";
import { DrawingEntitiesManager } from "../../../entities/DrawingEntitiesManager";
export declare function templateToMonomerProps(template: IKetMonomerTemplate): {
    id: string;
    Name: string;
    MonomerNaturalAnalogCode: string;
    MonomerName: string;
    MonomerFullName: string | undefined;
    MonomerType: string | undefined;
    MonomerClass: import("../../../../application/formatters/types/ket").monomerClass | undefined;
    MonomerCaps: {};
    idtAliases: import("../../../../application/formatters/types/ket").IKetIdtAliases | undefined;
    unresolved: boolean | undefined;
};
export declare function monomerToDrawingEntity(node: IKetMonomerNode, template: IKetMonomerTemplate, struct: Struct, drawingEntitiesManager: DrawingEntitiesManager): import("../../../entities/Command").Command;
