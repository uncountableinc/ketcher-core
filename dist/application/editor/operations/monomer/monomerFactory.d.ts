import { BaseMonomerRenderer } from "../../../render/renderers";
import { MonomerItemType } from "../../../../domain/types";
import { Peptide } from "../../../../domain/entities/Peptide";
import { Chem } from "../../../../domain/entities/Chem";
import { Sugar } from "../../../../domain/entities/Sugar";
import { Phosphate } from "../../../../domain/entities/Phosphate";
import { RNABase } from "../../../../domain/entities/RNABase";
import { ketMonomerClass } from "../../../formatters/types/ket";
declare type DerivedClass<T> = new (...args: unknown[]) => T;
export declare const MONOMER_CONST: {
    AMINO_ACID: string;
    PEPTIDE: string;
    CHEM: string;
    RNA: string;
    DNA: string;
    MODDNA: string;
    R: string;
    P: string;
    SUGAR: string;
    BASE: string;
    PHOSPHATE: string;
};
declare type Monomer = typeof Chem | typeof Sugar | typeof Peptide | typeof RNABase | typeof Phosphate;
export declare const monomerFactory: (monomer: MonomerItemType) => [Monomer: Monomer, MonomerRenderer: DerivedClass<BaseMonomerRenderer>, ketMonomerClass: ketMonomerClass];
export {};
