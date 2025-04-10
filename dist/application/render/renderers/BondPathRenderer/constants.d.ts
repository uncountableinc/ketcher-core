import { Vec2 } from "../../../../domain/entities";
import { HalfEdge } from "../../view-model/HalfEdge";
export declare type BondSVGPath = {
    d: string;
    attrs: Record<string, string | number>;
};
export declare type BondVectors = {
    startPosition: Vec2;
    endPosition: Vec2;
    firstHalfEdge: HalfEdge;
    secondHalfEdge: HalfEdge;
};
export declare const BondWidth = 2;
export declare const StereoBondWidth = 6;
export declare const BondSpace = 6;
export declare const LinesOffset: number;
export declare const BondDashArrayMap: {
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    10: string;
};
