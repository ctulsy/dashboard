// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {deployAppStateName, deployFileStateName} from './deploy_state';

/**
 * Controller for the deploy view.
 *
 * @final
 */
export default class DeployController {
  /**
   * @param {!ui.router.$state} $state
   * @ngInject
   */
  constructor($state) {
    /** @export {string} */
    this.selection = $state.current.name;

    /** @export {string} */
    this.appOption = deployAppStateName;

    /** @export {string} */
    this.fileOption = deployFileStateName;

    /** @private {!ui.router.$state} */
    this.state_ = $state;
  }

  /** @export */
  changeSelection() {
    this.state_.go(this.selection);
  }
}
