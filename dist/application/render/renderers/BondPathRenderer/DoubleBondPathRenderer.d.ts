import { BondSVGPath, BondVectors } from "./constants";
import { BondType } from "../../../../domain/entities/CoreBond";
declare class DoubleBondPathRenderer {
    static preparePaths(bondVectors: BondVectors, shift: number, type?: BondType): BondSVGPath[];
}
export default DoubleBondPathRenderer;
