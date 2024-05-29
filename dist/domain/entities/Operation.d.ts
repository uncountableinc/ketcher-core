import { RenderersManager } from "../../application/render/renderers/RenderersManager";
import { BaseMonomer } from "./BaseMonomer";
import { PolymerBond } from "./PolymerBond";
export interface Operation {
    monomer?: BaseMonomer;
    polymerBond?: PolymerBond;
    execute(renderersManager: RenderersManager): void;
    invert(renderersManager: RenderersManager): void;
}
