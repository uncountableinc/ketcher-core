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
import { Struct, Vec2 } from "../../domain/entities";
import { RaphaelPaper } from 'raphael';
import { ReStruct } from './restruct';
import { RenderOptions } from './render.types';
export declare class Render {
    readonly clientArea: HTMLElement;
    readonly paper: RaphaelPaper;
    sz: Vec2;
    ctab: ReStruct;
    options: RenderOptions;
    private readonly userOpts;
    private oldCb;
    constructor(clientArea: HTMLElement, options: RenderOptions);
    updateOptions(opts: string): false | RenderOptions;
    selectionPolygon(polygon: Vec2[]): any;
    selectionLine(point0: Vec2, point1: Vec2): any;
    selectionRectangle(point0: Vec2, point1: Vec2): any;
    view2obj(point: Vec2, isRelative?: boolean): Vec2;
    obj2view(vector: Vec2, isRelative: true): Vec2;
    scrollPos(): Vec2;
    page2obj(event: MouseEvent): Vec2;
    setPaperSize(newSize: Vec2): void;
    setOffset(newOffset: Vec2): void;
    setZoom(zoom: number): void;
    setScrollOffset(x: number, y: number): void;
    setViewBox(): void;
    setMolecule(struct: Struct): void;
    update(force?: boolean, viewSz?: Vec2 | null, options?: {
        resizeCanvas: boolean;
    }): void;
}
