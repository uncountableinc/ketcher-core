import { IKetMonomerNode, IKetMonomerTemplate } from "../../../../application/formatters/types/ket";
import { Struct } from "../../../entities";
import { DrawingEntitiesManager } from "../../../entities/DrawingEntitiesManager";
export declare function monomerToDrawingEntity(node: IKetMonomerNode, template: IKetMonomerTemplate, struct: Struct, drawingEntitiesManager: DrawingEntitiesManager): import("../../../entities/Command").Command;
