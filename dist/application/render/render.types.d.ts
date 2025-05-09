import { RxnArrowMode, Vec2 } from "../../domain/entities";
import { StereLabelStyleType } from "./restruct";
export declare type RenderOptionStyles = Record<string, string | number>;
export declare enum MeasurementUnits {
    Px = "px",
    Cm = "cm",
    Pt = "pt",
    Inch = "inch"
}
export declare enum UsageInMacromolecule {
    MonomerConnectionsModal = 0,
    MonomerPreview = 1,
    BondPreview = 2
}
export declare type RenderOptions = {
    width?: number;
    height?: number;
    rotationStep?: number;
    bondSpacing: number;
    bondLength: number;
    bondLengthUnit: MeasurementUnits;
    stereoBondWidth: number;
    stereoBondWidthUnit: MeasurementUnits;
    bondThickness: number;
    bondThicknessUnit: MeasurementUnits;
    downScale?: boolean;
    rescaleAmount?: number;
    radiusScaleFactor: number;
    'dearomatize-on-load'?: boolean;
    ignoreChiralFlag?: boolean;
    disableQueryElements?: string[] | null;
    showAtomIds: boolean;
    showBondIds: boolean;
    showHalfBondIds: boolean;
    showLoopIds: boolean;
    showValenceWarnings: boolean;
    autoScale: boolean;
    autoScaleMargin: number;
    maxBondLength: number;
    atomColoring: boolean;
    hideImplicitHydrogen: boolean;
    hideTerminalLabels: boolean;
    carbonExplicitly: boolean;
    showCharge: boolean;
    showHydrogenLabels: string;
    showValence: boolean;
    aromaticCircle: boolean;
    microModeScale: number;
    macroModeScale: number;
    zoom: number;
    externalZoomScale?: number;
    offset: Vec2;
    lineWidth: number;
    bondSpace: number;
    stereoBond: number;
    subFontSize: number;
    font: string;
    fontsz: number;
    fontszUnit: MeasurementUnits;
    fontszsubUnit: MeasurementUnits;
    fontszsub: number;
    fontRLabel: number;
    fontRLogic: number;
    hashSpacing: number;
    hashSpacingUnit: MeasurementUnits;
    lineattr: RenderOptionStyles;
    multitailArrow: RenderOptionStyles;
    arrowSnappingStyle: RenderOptionStyles;
    bondSnappingStyle: RenderOptionStyles;
    selectionStyle: RenderOptionStyles;
    hoverStyle: RenderOptionStyles;
    innerHoverStyle: RenderOptionStyles;
    movingStyle: RenderOptionStyles;
    sgroupBracketStyle: RenderOptionStyles;
    lassoStyle: RenderOptionStyles;
    selectionStyleSimpleObject: RenderOptionStyles;
    hoverStyleSimpleObject: RenderOptionStyles;
    atomSelectionPlateRadius: number;
    contractedFunctionalGroupSize: number;
    stereoLabelStyle?: StereLabelStyleType;
    previewOpacity: number;
    connectedMonomerAttachmentPoints?: string[];
    currentlySelectedMonomerAttachmentPoint?: string;
    labelInMonomerConnectionsModal?: boolean;
    labelInPreview?: boolean;
    fontszInPx: number;
    fontszsubInPx: number;
    bondSpacingInPx: number;
    bondThicknessInPx: number;
    stereoBondWidthInPx: number;
    hashSpacingInPx: number;
    usageInMacromolecule?: UsageInMacromolecule;
    viewOnlyMode?: boolean;
};
export interface RelativeBox {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ArrowItem {
    mode?: RxnArrowMode;
    pos: Vec2[];
    height: number;
}
export declare type ViewBox = {
    minX: number;
    minY: number;
    width: number;
    height: number;
};
