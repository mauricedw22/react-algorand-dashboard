import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "./snsClient";

var params = {
    Message: "",
    TopicArn:""
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