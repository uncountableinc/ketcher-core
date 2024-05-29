import { BaseMonomer, Chem, Peptide, Phosphate, RNABase, Struct, Sugar } from "../entities";
import { IKetAttachmentPoint } from "../../application/formatters/types/ket";
import { D3SvgElementSelection } from "../../application/render/types";
export declare type MonomerColorScheme = {
    regular: string;
    hover: string;
};
export declare type MonomerItemType = {
    label: string;
    colorScheme?: MonomerColorScheme;
    favorite?: boolean;
    struct: Struct;
    props: {
        id?: string;
        MonomerNaturalAnalogCode: string;
        MonomerName: string;
        MonomerFullName?: string;
        Name: string;
        BranchMonomer?: string;
        MonomerCaps?: {
            [key: string]: string;
        };
        MonomerCode?: string;
        MonomerType?: string;
        MonomerClass?: string;
        isMicromoleculeFragment?: boolean;
    };
    attachmentPoints?: IKetAttachmentPoint[];
    seqId?: number;
};
export declare enum AttachmentPointName {
    R1 = "R1",
    R2 = "R2",
    R3 = "R3",
    R4 = "R4",
    R5 = "R5",
    R6 = "R6",
    R7 = "R7",
    R8 = "R8"
}
export declare const attachmentPointNames: string[];
export declare type LeavingGroup = 'O' | 'OH' | 'H';
export declare type AttachmentPointConstructorParams = {
    rootElement: D3SvgElementSelection<SVGGElement, void>;
    monomer: BaseMonomer;
    bodyWidth: number;
    bodyHeight: number;
    canvas: D3SvgElementSelection<SVGSVGElement, void>;
    attachmentPointName: AttachmentPointName;
    isUsed: boolean;
    isPotentiallyUsed: boolean;
    angle: number;
    isSnake: boolean;
};
export declare type ConcreteMonomer = Peptide | Sugar | RNABase | Phosphate | Chem;
