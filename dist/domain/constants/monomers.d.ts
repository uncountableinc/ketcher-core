import { Sugar, UnsplitNucleotide, RNABase, Phosphate, Peptide, Chem } from "../entities/internal";
export declare enum RNA_DNA_NON_MODIFIED_PART {
    SUGAR_RNA = "R",
    SUGAR_DNA = "dR",
    PHOSPHATE = "P"
}
export declare enum RnaDnaNaturalAnaloguesEnum {
    ADENINE = "A",
    THYMINE = "T",
    GUANINE = "G",
    CYTOSINE = "C",
    URACIL = "U"
}
export declare enum RnaDnaBaseNames {
    URACIL = "Uracil",
    THYMINE = "Thymine"
}
export declare enum StandardAmbiguousRnaBase {
    N = "N",
    B = "B",
    V = "V",
    D = "D",
    H = "H",
    K = "K",
    M = "M",
    W = "W",
    Y = "Y",
    R = "R",
    S = "S"
}
export declare const rnaDnaNaturalAnalogues: string[];
export declare const unknownNaturalAnalogues: string[];
export declare const peptideNaturalAnalogues: string[];
export declare const NO_NATURAL_ANALOGUE = "X";
export declare const MONOMER_CLASS_TO_CONSTRUCTOR: {
    CHEM: typeof Chem;
    AminoAcid: typeof Peptide;
    Phosphate: typeof Phosphate;
    Sugar: typeof Sugar;
    Base: typeof RNABase;
    RNA: typeof UnsplitNucleotide;
};
