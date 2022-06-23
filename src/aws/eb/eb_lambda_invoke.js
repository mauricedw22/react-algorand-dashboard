import { InvokeCommand } from "@aws-sdk/client-lambda";
import { lambdaClient } from './lambda_client.js';

const params = {
    FunctionName:"eventBridgeLambda1",
    InvocationType:"RequestResponse",
    LogType: "Tail",
    Payload: '{"key1":"value1","key2":"value2","married":"true"}'
}

const sendEventDataToLambda = async() => {
    try {
        const data = await lambdaClient.send(new InvokeCommand(params));
        console.log('Lambda invoked SUCCESS: ', data);
    } catch (err) {
        console.log("Lambda FAILED Error: ", err)
    }
}

sendEventDataToLambda();