import { BaseSequenceItemRenderer } from "./BaseSequenceItemRenderer";
import { Nucleoside, Nucleotide } from "../../../../domain/entities";
export declare abstract class RNASequenceItemRenderer extends BaseSequenceItemRenderer {
    get symbolToDisplay(): string;
    protected drawCommonModification(node: Nucleoside | Nucleotide): void;
}
