import { IKetConnection } from "../../../../application/formatters/types/ket";
import { Command } from "../../../entities/Command";
import { DrawingEntitiesManager } from "../../../entities/DrawingEntitiesManager";
export declare function polymerBondToDrawingEntity(connection: IKetConnection, drawingEntitiesManager: DrawingEntitiesManager, monomerIdsMap: {
    [monomerIdFromKet: string]: number;
}): Command;
