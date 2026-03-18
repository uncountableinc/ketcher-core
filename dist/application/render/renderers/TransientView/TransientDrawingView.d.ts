import { HydrogenBond, PolymerBond } from "../../../../domain/entities";
import { AngleSnapViewParams } from './AngleSnapView';
import { DistanceSnapViewParams } from './DistanceSnapView';
import { ModifyAminoAcidsViewParams } from './ModifyAminoAcidsView';
import { LineLengthHighlightViewParams } from './LineLengthHighlightView';
export declare class TransientDrawingView {
    private views;
    private readonly topLayer;
    private readonly defaultLayer;
    constructor();
    private addView;
    private removeView;
    showBondSnap(bond: PolymerBond | HydrogenBond): void;
    hideBondSnap(): void;
    showAngleSnap(params: AngleSnapViewParams): void;
    hideAngleSnap(): void;
    showDistanceSnap(params: DistanceSnapViewParams): void;
    hideDistanceSnap(): void;
    showModifyAminoAcidsView(params: ModifyAminoAcidsViewParams): void;
    hideModifyAminoAcidsView(): void;
    showLineLengthHighlight(params: LineLengthHighlightViewParams): void;
    hideLineLengthHighlight(): void;
    clear(): void;
    update(): void;
}
