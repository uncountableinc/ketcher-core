import { CoreEditor } from "../../application/editor/internal";
import { SequenceType } from "../entities";
import { RNA_DNA_NON_MODIFIED_PART } from "../constants/monomers";
export declare function getRnaPartLibraryItem(editor: CoreEditor, rnaBaseName: string): {
    label: string;
    colorScheme?: import("../types").MonomerColorScheme | undefined;
    favorite?: boolean | undefined;
    struct: import("../entities").Struct;
    props: {
        id?: string | undefined;
        MonomerNaturalAnalogCode: string;
        MonomerName: string;
        MonomerFullName?: string | undefined;
        Name: string;
        BranchMonomer?: string | undefined;
        MonomerCaps?: {
            [key: string]: string;
        } | undefined;
        MonomerCode?: string | undefined;
        MonomerType?: string | undefined;
        MonomerClass?: string | undefined;
        isMicromoleculeFragment?: boolean | undefined;
    };
    attachmentPoints?: import("../../application/formatters/types/ket").IKetAttachmentPoint[] | undefined;
    seqId?: number | undefined;
} | undefined;
export declare function getPeptideLibraryItem(editor: CoreEditor, peptideName: string): {
    label: string;
    colorScheme?: import("../types").MonomerColorScheme | undefined;
    favorite?: boolean | undefined;
    struct: import("../entities").Struct;
    props: {
        id?: string | undefined;
        MonomerNaturalAnalogCode: string;
        MonomerName: string;
        MonomerFullName?: string | undefined;
        Name: string;
        BranchMonomer?: string | undefined;
        MonomerCaps?: {
            [key: string]: string;
        } | undefined;
        MonomerCode?: string | undefined;
        MonomerType?: string | undefined;
        MonomerClass?: string | undefined;
        isMicromoleculeFragment?: boolean | undefined;
    };
    attachmentPoints?: import("../../application/formatters/types/ket").IKetAttachmentPoint[] | undefined;
    seqId?: number | undefined;
} | undefined;
export declare function getSugarBySequenceType(sequenceType: SequenceType): RNA_DNA_NON_MODIFIED_PART.SUGAR_RNA | RNA_DNA_NON_MODIFIED_PART.SUGAR_DNA | undefined;
