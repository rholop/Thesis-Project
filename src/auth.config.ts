import { AuthConfig } from 'angular-oauth2-oidc';
export const authConfig: AuthConfig = {
  issuer: 'https://api.typeform.com/',
  redirectUri: 'http://localhost:4200/success' + '/index.html',
  clientId: '9gDavK6njuX5ZiK8ztVAqyugLbgJGKv9jvSWAVv7CCXw',
  scope: 'openid profile email offline_access',
  responseType: 'code',
  showDebugInformation: true,
};