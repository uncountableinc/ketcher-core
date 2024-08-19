import { DrawingEntity } from "../../../domain/entities/DrawingEntity";
import { D3SvgElementSelection } from "../types";
export interface IBaseRenderer {
    show(theme: any): void;
    remove(): void;
}
export declare abstract class BaseRenderer implements IBaseRenderer {
    drawingEntity: DrawingEntity;
    protected rootElement?: D3SvgElementSelection<SVGGElement, void>;
    bodyElement?: D3SvgElementSelection<SVGElement, this>;
    protected hoverElement?: D3SvgElementSelection<SVGUseElement & SVGGElement, void>;
    protected hoverAreaElement?: D3SvgElementSelection<SVGGElement | SVGLineElement, void>;
    protected hoverCircleAreaElement?: D3SvgElementSelection<SVGGElement | SVGCircleElement, void>;
    protected canvasWrapper: D3SvgElementSelection<SVGSVGElement, void>;
    protected canvas: D3SvgElementSelection<SVGSVGElement, void>;
    protected constructor(drawingEntity: DrawingEntity);
    protected get editorSettings(): {
        microModeScale: number;
        macroModeScale: number;
    };
    get rootBBox(): DOMRect | undefined;
    get rootBoundingClientRect(): DOMRect | undefined;
    get width(): number;
    get height(): number;
    get x(): number;
    get y(): number;
    abstract show(theme: any, force?: boolean): void;
    abstract drawSelection(): void;
    abstract moveSelection(): void;
    protected abstract appendHover(hoverArea: any): D3SvgElementSelection<SVGUseElement, void> | void;
    protected abstract removeHover(): void;
    protected abstract appendHoverAreaElement(): void;
    remove(): void;
    redrawHover(): void;
    move(): void;
}
