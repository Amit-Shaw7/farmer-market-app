/**
 * An array of routes that are accessible to the public
 * These routes don not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
    "/",
    "/category",
    "/s"
];

/**
 * An array of routes that used for authentication
 * These routes will redirect logged in users to settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
    "/login",
    "/signup",
];


/**
 * The prefix for api authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";


/**
 * The default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";

/**
 * The prefix for all pages related to product categories , all those are public
 * @type {string}
 */
export const categoryPagesPrefix: string = "/category";

/**
 * The prefix for all pages related to products , all those are public
 * @type {string}
 */
export const productPagesPrefix: string = "/product";