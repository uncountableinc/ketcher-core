import { BaseMonomerRenderer } from "./BaseMonomerRenderer";
import { UnresolvedMonomer } from "../../../domain/entities";
import { Selection } from 'd3';
export declare class UnresolvedMonomerRenderer extends BaseMonomerRenderer {
    monomer: UnresolvedMonomer;
    constructor(monomer: UnresolvedMonomer, scale?: number);
    get textColor(): string;
    protected appendBody(rootElement: Selection<SVGGElement, void, HTMLElement, never>): Selection<SVGUseElement, this, HTMLElement, never>;
    show(theme: any): void;
    protected get enumerationElementPosition(): undefined;
    protected get beginningElementPosition(): undefined;
}
