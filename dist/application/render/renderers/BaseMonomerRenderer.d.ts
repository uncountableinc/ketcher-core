import { D3SvgElementSelection } from "../types";
import { AttachmentPoint } from "../../../domain/AttachmentPoint";
import { BaseMonomer } from "../../../domain/entities/BaseMonomer";
import { Vec2 } from "../../../domain/entities/vec2";
import { AttachmentPointConstructorParams, AttachmentPointName } from "../../../domain/types";
import { BaseRenderer } from './BaseRenderer';
export declare const MONOMER_CSS_CLASS = "monomer";
export declare abstract class BaseMonomerRenderer extends BaseRenderer {
    monomer: BaseMonomer;
    private monomerSelectedElementId;
    private monomerHoveredElementId;
    private scale?;
    private editorEvents;
    private editor;
    private selectionCircle?;
    private selectionBorder?;
    bodyElement?: D3SvgElementSelection<SVGUseElement, this>;
    private freeSectorsList;
    private attachmentPoints;
    private hoveredAttachmentPoint;
    private monomerSymbolElement?;
    monomerSize: {
        width: number;
        height: number;
    };
    private enumerationElement?;
    enumeration: number | null;
    private terminalIndicatorElement?;
    CHAIN_START_TERMINAL_INDICATOR_TEXT: string;
    CHAIN_END_TERMINAL_INDICATOR_TEXT: string;
    static isSelectable(): boolean;
    protected constructor(monomer: BaseMonomer, monomerSelectedElementId: string, monomerHoveredElementId: string, monomerSymbolElementId: string, scale?: number | undefined);
    private isSnakeBondForAttachmentPoint;
    static get monomerSize(): {
        width: number;
        height: number;
    };
    get center(): Vec2;
    get textColor(): any;
    protected getMonomerColor(theme: any): any;
    protected getPeptideColor(theme: any): any;
    redrawAttachmentPoints(): void;
    updateAttachmentPoints(): void;
    redrawAttachmentPointsCoordinates(): void;
    drawAttachmentPoints(appendFn?: (apName: AttachmentPointName, customAngle?: number) => AttachmentPoint): void;
    protected prepareAttachmentPointsParams(attachmentPointName: AttachmentPointName, customAngle?: number): AttachmentPointConstructorParams;
    appendAttachmentPoint(attachmentPointName: AttachmentPointName, customAngle?: number): AttachmentPoint;
    removeAttachmentPoints(): void;
    hoverAttachmentPoint(attachmentPointName: AttachmentPointName): void;
    protected appendRootElement(canvas: D3SvgElementSelection<SVGSVGElement, void>): D3SvgElementSelection<SVGGElement, void>;
    protected appendLabel(rootElement: D3SvgElementSelection<SVGGElement, void>): void;
    appendHover(hoverAreaElement: D3SvgElementSelection<SVGGElement, void>): import("d3-selection").Selection<SVGUseElement, void, HTMLElement, never>;
    removeHover(): void;
    static getScaledMonomerPosition(positionInAngstoms: Vec2, monomerSize?: {
        width: number;
        height: number;
    }): Vec2;
    get scaledMonomerPosition(): Vec2;
    appendSelection(): void;
    removeSelection(): void;
    protected abstract appendBody(rootElement: D3SvgElementSelection<SVGGElement, void>, theme?: any): any;
    protected appendHoverAreaElement(): void;
    private appendEvents;
    abstract get enumerationElementPosition(): {
        x: number;
        y: number;
    } | void;
    abstract get beginningElementPosition(): {
        x: number;
        y: number;
    } | void;
    setEnumeration(enumeration: number | null): void;
    protected appendEnumeration(): void;
    redrawEnumeration(needToDrawTerminalIndicator: boolean): void;
    redrawChainTerminalIndicator(needToDraw: boolean): void;
    protected abstract get modificationConfig(): any;
    protected drawModification(): void;
    show(theme?: any): void;
    drawSelection(): void;
    private raiseElement;
    moveSelection(): void;
    move(): void;
    remove(): void;
}
