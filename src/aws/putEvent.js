import { PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { ebClient } from "./ebClient";

export const params = {
    Entries: [
        {
            Detail: '{"key1":"value1","key2":"value2"}',
            DetailType: "appEventCreated",
            Resources:[
                "", // RESOURCE_ARN
            ],
            Source: "sample react web client"
        }
    ]
}

export const run = async() => {
    try {
        const data = await ebClient.send(new PutEventsCommand(params));
        console.log("Success - Event sent! Requiest id: ", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
}

run();