export default {
    oidc: {
        clientId: '0oaiopqa9a2XC4j7L5d7',
        issuer: 'https://dev-22186428.okta.com/oauth2/default',
        redirectUri: window.location.origin + '/login/callback',
        postLogoutRedirectUri: 'http://localhost:4201/login',
        scopes: ['openid', 'profile', 'email']
    }
}
 // OLD CREDENTIALS
// '0oa6ab9e99dOuneyG5d7
// https://dev-08324756.okta.com/oauth2/default
 
// NEW CREDENTIALS WITH WORKING REGISTER
// '0oa6hnwwonsOm1f6n5d7'
// https://dev-3553715.okta.com/oauth2/default
