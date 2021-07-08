# vtlqueryexample

* `serverless deploy --verbose` (`--verbose` makes Serverless print the CloudFormation outputs).
* Copy `RestaurantFeesTableName` from the CloudFormation outputs.
* In `data.json`, replace `PUT_TABLE_NAME_HERE__FROM_DEPLOY_OUTPUT` with `RestaurantFeesTableName`.
* Run the command in `add-data-command` (make sure you have the right AWS credentials in environment variables).
* Use either the AWS console or something like Postman to call the API (use Serverless output to get the URL).

Test data:
* [Restaurant `123`, Tenant: `uk`] has both a bag fee and service fee.
* [Restaurant `456`, Tenant: `uk`] has only a bag fee. Service fee will use the non-marketplace default.
* Any other values will return just the marketplace default service fee.
