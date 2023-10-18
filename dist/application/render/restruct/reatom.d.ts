/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { Atom, Box2Abs } from "../../../domain/entities";
import ReObject from './reobject';
import ReStruct from './restruct';
import { Render } from '../raphaelRender';
interface ElemAttr {
    text: string;
    path: any;
    rbb: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export declare enum ShowHydrogenLabels {
    Off = "off",
    Hetero = "Hetero",
    Terminal = "Terminal",
    TerminalAndHetero = "Terminal and Hetero",
    On = "all"
}
export declare enum ShowHydrogenLabelNames {
    Off = "Off",
    Hetero = "Hetero",
    Terminal = "Terminal",
    TerminalAndHetero = "Terminal and Hetero",
    On = "On"
}
declare class ReAtom extends ReObject {
    a: Atom;
    showLabel: boolean;
    hydrogenOnTheLeft: boolean;
    color: string;
    component: number;
    label?: ElemAttr;
    cip?: {
        path: any;
        text: any;
        rectangle: any;
    };
    constructor(atom: Atom);
    static isSelectable(): true;
    getVBoxObj(render: Render): Box2Abs | null;
    drawHover(render: Render): import("raphael").RaphaelElement<"SVG" | "VML", SVGRectElement | Element> | import("raphael").RaphaelElement<"SVG" | "VML", Element | SVGCircleElement> | null;
    getLabeledSelectionContour(render: Render): import("raphael").RaphaelElement<"SVG" | "VML", SVGRectElement | Element>;
    getUnlabeledSelectionContour(render: Render): import("raphael").RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>;
    getSelectionContour(render: Render): import("raphael").RaphaelElement<"SVG" | "VML", SVGRectElement | Element> | import("raphael").RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>;
    makeHoverPlate(render: Render): import("raphael").RaphaelElement<"SVG" | "VML", SVGRectElement | Element> | import("raphael").RaphaelElement<"SVG" | "VML", Element | SVGCircleElement> | null;
    makeSelectionPlate(restruct: ReStruct): import("raphael").RaphaelElement<"SVG" | "VML", SVGRectElement | Element> | import("raphael").RaphaelElement<"SVG" | "VML", Element | SVGCircleElement> | null;
    show(restruct: ReStruct, aid: number, options: any): void;
}
export declare function getColorFromStereoLabel(options: any, stereoLabel: any): any;
export default ReAtom;
