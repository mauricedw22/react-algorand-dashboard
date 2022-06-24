import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient.js";

var params = {
    Message: "This is a test msg from the React client!!!",
    TopicArn:"<TOPIC_ARN>"
};

const run = async() => {
    try {
        const data = await snsClient.send(new PublishCommand(params));
        console.log("SUCCESS: ", data);
        return data;
    } catch(err) {
        console.log("Error: ", err.stack);
    }
}

run();