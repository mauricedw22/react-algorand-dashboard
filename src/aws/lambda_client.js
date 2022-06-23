import { LambdaClient } from "@aws-sdk/client-lambda";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

const REGION = "us-east-1";

const IDENTITY_POOL_ID = "<IDENTITY_POOL_ID_FROM_COGNITO>";

// const lambdaClient = new LambdaClient({
//     region: REGION,
//     credentials: fromCognitoIdentityPool({
//         client: new CognitoIdentityClient({region:REGION}),
//         identityPoolId: IDENTITY_POOL_ID
//     }),
// });

export const lambdaClient = new LambdaClient({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region:REGION}),
        identityPoolId: IDENTITY_POOL_ID
    }),
});