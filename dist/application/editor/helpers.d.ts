import { BaseMode } from './modes/BaseMode';
export declare const initializeMode: (mode?: BaseMode) => BaseMode;
export declare const parseMonomersLibrary: (monomersDataRaw: string | JSON) => {
    monomersLibraryParsedJson: any;
    monomersLibrary: import("../..").MonomerItemType[] & import("../..").AmbiguousMonomerType[];
};
