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