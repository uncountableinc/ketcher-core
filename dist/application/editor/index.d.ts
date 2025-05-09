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
export declare const vectorUtils: {
    fracAngle: (angle: any, angle2: any) => number;
    calcAngle: (pos0: import("../..").Vec2, pos1: import("../..").Vec2) => number;
    degrees: (angle: number) => number;
    calcNewAtomPos: (pos0: import("../..").Vec2, pos1: import("../..").Vec2, ctrlKey: boolean) => import("../..").Vec2;
};
export * from './operations';
export * from './actions';
export * from './shared/constants';
export * from './shared/coordinates';
export * from './editor.types';
export * from './Editor';
export * from './EditorHistory';
export * from './modes';
export * from './editorEvents';
export * from './editorSettings';
export * from './tools';
export * from "./tools/types";
