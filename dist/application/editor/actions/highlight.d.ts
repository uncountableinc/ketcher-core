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
import { ReStruct } from '../../render';
import { Action } from './action';
declare type HighlightType = {
    atoms: number[];
    bonds: number[];
    rgroupAttachmentPoints: number[];
    color: string;
};
export declare function fromHighlightCreate(restruct: ReStruct, highlights: HighlightType[]): Action;
export declare function fromHighlightClear(restruct: ReStruct): Action;
export {};
