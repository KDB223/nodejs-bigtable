// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **


 /**
 * NOTE: This sample is autogenerated, but this library contains handwritten
 * samples that are the recommended way to use this library. Please refer to
 * samples outside of the generated/ folder for these recommendations.
 */ 
'use strict';

function main(name) {
  // [START bigtable_v2_generated_Bigtable_PingAndWarm_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The unique name of the instance to check permissions for as well
   *  as respond. Values are of the form
   *  `projects/<project>/instances/<instance>`.
   */
  // const name = 'abc123'
  /**
   *  This value specifies routing for replication. If not specified, the
   *  "default" application profile will be used.
   */
  // const appProfileId = 'abc123'

  // Imports the Bigtable library
  const {BigtableClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const bigtableClient = new BigtableClient();

  async function callPingAndWarm() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await bigtableClient.pingAndWarm(request);
    console.log(response);
  }

  callPingAndWarm();
  // [END bigtable_v2_generated_Bigtable_PingAndWarm_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
