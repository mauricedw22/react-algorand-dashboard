import  { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId:"us-east-1_UQQG7exze",
    ClientId:"52nuul159ui26aktt352mciddt"
}

export default new CognitoUserPool(poolData);

// UserPoolId: "",
// ClientId: ""