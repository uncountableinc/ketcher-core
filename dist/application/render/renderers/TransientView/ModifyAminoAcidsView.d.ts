import { TransientView } from './TransientView';
import { D3SvgElementSelection } from "../../types";
import { BaseMonomer } from "../../../../domain/entities";
export declare type ModifyAminoAcidsViewParams = {
    monomersToModify: BaseMonomer[];
};
export declare class ModifyAminoAcidsView extends TransientView {
    static viewName: string;
    static show(transientLayer: D3SvgElementSelection<SVGGElement, void>, params: ModifyAminoAcidsViewParams): void;
}
