import { PolymerBond } from "../PolymerBond";
import { SubChainNode } from "./..";
export declare class Connection {
    polymerBond: PolymerBond;
    connectedNode: SubChainNode | null;
    direction: number | {
        x: number;
        y: number;
    };
    offset: number;
    yOffset: number;
    isVertical: boolean;
    constructor(polymerBond: PolymerBond, connectedNode: SubChainNode | null, direction: number | {
        x: number;
        y: number;
    }, offset: number, yOffset: number, isVertical: boolean);
}
