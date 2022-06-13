import  { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId:"<YOUR_AWS_USERPOOL_ID>",
    ClientId:"<YOUR_AWS_CLIENT_ID>"
}

export default new CognitoUserPool(poolData);