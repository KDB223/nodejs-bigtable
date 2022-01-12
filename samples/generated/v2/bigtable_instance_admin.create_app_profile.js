// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent, appProfileId, appProfile) {
  // [START bigtableadmin_v2_generated_BigtableInstanceAdmin_CreateAppProfile_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The unique name of the instance in which to create the new app profile.
   *  Values are of the form
   *  `projects/{project}/instances/{instance}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID to be used when referring to the new app profile within its
   *  instance, e.g., just `myprofile` rather than
   *  `projects/myproject/instances/myinstance/appProfiles/myprofile`.
   */
  // const appProfileId = 'abc123'
  /**
   *  Required. The app profile to be created.
   *  Fields marked `OutputOnly` will be ignored.
   */
  // const appProfile = {}
  /**
   *  If true, ignore safety checks when creating the app profile.
   */
  // const ignoreWarnings = true

  // Imports the Admin library
  const {BigtableInstanceAdminClient} = require('@google-cloud/bigtable').v2;

  // Instantiates a client
  const adminClient = new BigtableInstanceAdminClient();

  async function callCreateAppProfile() {
    // Construct request
    const request = {
      parent,
      appProfileId,
      appProfile,
    };

    // Run request
    const response = await adminClient.createAppProfile(request);
    console.log(response);
  }

  callCreateAppProfile();
  // [END bigtableadmin_v2_generated_BigtableInstanceAdmin_CreateAppProfile_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));