import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  secret: process.env.AUTH0_SECRET,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  routes: {
    callback:
      process.env.NEXT_PUBLIC_REDIRECT_URI ||
      'http://localhost:3000/api/callback',
    postLogoutRedirect:
      process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI ||
      'http://localhost:3000',
  },
  authorizationParams: {
    response_type: 'code',
    scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
  },
  session: {
    absoluteDuration: process.env.SESSION_COOKIE_LIFETIME,
  },
});
