import { BondSVGPath, BondVectors } from "./constants";
import { BondType } from "../../../../domain/entities/CoreBond";
declare class SingleBondPathRenderer {
    static preparePaths(bondVectors: BondVectors, type?: BondType): BondSVGPath[];
}
export default SingleBondPathRenderer;
