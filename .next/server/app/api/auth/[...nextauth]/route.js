/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_temp_worldchain_minikit_web3_example_main_my_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\temp\\\\worldchain\\\\minikit-web3-example-main\\\\my-app\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_temp_worldchain_minikit_web3_example_main_my_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4zLjJfajZrNm9heTN1Z3NyNTZzbHlmdm1hMmRycnkvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9RCUzQSU1Q3RlbXAlNUN3b3JsZGNoYWluJTVDbWluaWtpdC13ZWIzLWV4YW1wbGUtbWFpbiU1Q215LWFwcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q3RlbXAlNUN3b3JsZGNoYWluJTVDbWluaWtpdC13ZWIzLWV4YW1wbGUtbWFpbiU1Q215LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDcUQ7QUFDbEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXHRlbXBcXFxcd29ybGRjaGFpblxcXFxtaW5pa2l0LXdlYjMtZXhhbXBsZS1tYWluXFxcXG15LWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcdGVtcFxcXFx3b3JsZGNoYWluXFxcXG1pbmlraXQtd2ViMy1leGFtcGxlLW1haW5cXFxcbXktYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \****************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.11_vlqdltwfrthjibvc4sy2br5kfq/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ \"(rsc)/./src/app/api/auth/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDSztBQUV0QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MsOENBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIkQ6XFx0ZW1wXFx3b3JsZGNoYWluXFxtaW5pa2l0LXdlYjMtZXhhbXBsZS1tYWluXFxteS1hcHBcXHNyY1xcYXBwXFxhcGlcXGF1dGhcXFsuLi5uZXh0YXV0aF1cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi9hdXRoXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/auth.ts":
/*!**********************************!*\
  !*** ./src/app/api/auth/auth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @worldcoin/minikit-js */ \"(rsc)/./node_modules/.pnpm/@worldcoin+minikit-js@1.9.4_j24rmamundknoi6gbnbcuoumqi/node_modules/@worldcoin/minikit-js/build/index.js\");\n\nconst authOptions = {\n    providers: [\n        {\n            id: \"worldcoin-wallet\",\n            name: \"Worldcoin Wallet\",\n            type: \"credentials\",\n            credentials: {\n                message: {\n                    type: \"text\"\n                },\n                signature: {\n                    type: \"text\"\n                },\n                address: {\n                    type: \"text\"\n                },\n                nonce: {\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.signature || !credentials?.message || !credentials?.address || !credentials?.nonce) {\n                    return null;\n                }\n                try {\n                    const validMessage = await (0,_worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__.verifySiweMessage)({\n                        status: \"success\",\n                        message: credentials.message,\n                        signature: credentials.signature,\n                        address: credentials.address,\n                        version: 1\n                    }, credentials.nonce);\n                    if (!validMessage.isValid || !validMessage.siweMessageData.address) {\n                        return null;\n                    }\n                    const userProfile = await _worldcoin_minikit_js__WEBPACK_IMPORTED_MODULE_0__.MiniKit.getUserByAddress(validMessage.siweMessageData.address);\n                    console.log({\n                        id: validMessage.siweMessageData.address.toLowerCase(),\n                        address: validMessage.siweMessageData.address.toLowerCase(),\n                        name: userProfile.username,\n                        image: userProfile.profilePictureUrl\n                    });\n                    return {\n                        id: validMessage.siweMessageData.address.toLowerCase(),\n                        address: validMessage.siweMessageData.address.toLowerCase(),\n                        name: userProfile.username,\n                        image: userProfile.profilePictureUrl\n                    };\n                } catch (e) {\n                    console.error(\"Error verifying message:\", e);\n                    return null;\n                }\n            }\n        }\n    ],\n    callbacks: {\n        redirect () {\n            return process.env.NEXT_PUBLIC_APP_URL;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.address = token.sub;\n            }\n            return session;\n        },\n        async jwt ({ token }) {\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUU7QUFHNUQsTUFBTUUsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVDtZQUNFQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxTQUFTO29CQUFFRixNQUFNO2dCQUFPO2dCQUN4QkcsV0FBVztvQkFBRUgsTUFBTTtnQkFBTztnQkFDMUJJLFNBQVM7b0JBQUVKLE1BQU07Z0JBQU87Z0JBQ3hCSyxPQUFPO29CQUFFTCxNQUFNO2dCQUFPO1lBQ3hCO1lBQ0EsTUFBTU0sV0FBVUwsV0FBVztnQkFDekIsSUFDRSxDQUFDQSxhQUFhRSxhQUNkLENBQUNGLGFBQWFDLFdBQ2QsQ0FBQ0QsYUFBYUcsV0FDZCxDQUFDSCxhQUFhSSxPQUNkO29CQUNBLE9BQU87Z0JBQ1Q7Z0JBQ0EsSUFBSTtvQkFDRixNQUFNRSxlQUFlLE1BQU1aLHdFQUFpQkEsQ0FDMUM7d0JBQ0VhLFFBQVE7d0JBQ1JOLFNBQVNELFlBQVlDLE9BQU87d0JBQzVCQyxXQUFXRixZQUFZRSxTQUFTO3dCQUNoQ0MsU0FBU0gsWUFBWUcsT0FBTzt3QkFDNUJLLFNBQVM7b0JBQ1gsR0FDQVIsWUFBWUksS0FBSztvQkFHbkIsSUFBSSxDQUFDRSxhQUFhRyxPQUFPLElBQUksQ0FBQ0gsYUFBYUksZUFBZSxDQUFDUCxPQUFPLEVBQUU7d0JBQ2xFLE9BQU87b0JBQ1Q7b0JBRUEsTUFBTVEsY0FBYyxNQUFNbEIsMERBQU9BLENBQUNtQixnQkFBZ0IsQ0FDaEROLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTztvQkFFdENVLFFBQVFDLEdBQUcsQ0FBQzt3QkFDVmpCLElBQUlTLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTyxDQUFDWSxXQUFXO3dCQUNwRFosU0FBU0csYUFBYUksZUFBZSxDQUFDUCxPQUFPLENBQUNZLFdBQVc7d0JBQ3pEakIsTUFBTWEsWUFBWUssUUFBUTt3QkFDMUJDLE9BQU9OLFlBQVlPLGlCQUFpQjtvQkFDdEM7b0JBQ0EsT0FBTzt3QkFDTHJCLElBQUlTLGFBQWFJLGVBQWUsQ0FBQ1AsT0FBTyxDQUFDWSxXQUFXO3dCQUNwRFosU0FBU0csYUFBYUksZUFBZSxDQUFDUCxPQUFPLENBQUNZLFdBQVc7d0JBQ3pEakIsTUFBTWEsWUFBWUssUUFBUTt3QkFDMUJDLE9BQU9OLFlBQVlPLGlCQUFpQjtvQkFDdEM7Z0JBQ0YsRUFBRSxPQUFPQyxHQUFHO29CQUNWTixRQUFRTyxLQUFLLENBQUMsNEJBQTRCRDtvQkFDMUMsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNERSxXQUFXO1FBQ1RDO1lBQ0UsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUI7UUFDeEM7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzlCLElBQUlBLFNBQVNELFFBQVFFLElBQUksRUFBRTtnQkFDekJGLFFBQVFFLElBQUksQ0FBQ3pCLE9BQU8sR0FBR3dCLE1BQU1FLEdBQUc7WUFDbEM7WUFDQSxPQUFPSDtRQUNUO1FBQ0EsTUFBTUksS0FBSSxFQUFFSCxLQUFLLEVBQUU7WUFDakIsT0FBT0E7UUFDVDtJQUNGO0lBQ0FJLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiRDpcXHRlbXBcXHdvcmxkY2hhaW5cXG1pbmlraXQtd2ViMy1leGFtcGxlLW1haW5cXG15LWFwcFxcc3JjXFxhcHBcXGFwaVxcYXV0aFxcYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW5pS2l0LCB2ZXJpZnlTaXdlTWVzc2FnZSB9IGZyb20gXCJAd29ybGRjb2luL21pbmlraXQtanNcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgaWQ6IFwid29ybGRjb2luLXdhbGxldFwiLFxuICAgICAgbmFtZTogXCJXb3JsZGNvaW4gV2FsbGV0XCIsXG4gICAgICB0eXBlOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHNpZ25hdHVyZTogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICBhZGRyZXNzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIG5vbmNlOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhY3JlZGVudGlhbHM/LnNpZ25hdHVyZSB8fFxuICAgICAgICAgICFjcmVkZW50aWFscz8ubWVzc2FnZSB8fFxuICAgICAgICAgICFjcmVkZW50aWFscz8uYWRkcmVzcyB8fFxuICAgICAgICAgICFjcmVkZW50aWFscz8ubm9uY2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB2YWxpZE1lc3NhZ2UgPSBhd2FpdCB2ZXJpZnlTaXdlTWVzc2FnZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogY3JlZGVudGlhbHMubWVzc2FnZSxcbiAgICAgICAgICAgICAgc2lnbmF0dXJlOiBjcmVkZW50aWFscy5zaWduYXR1cmUsXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGNyZWRlbnRpYWxzLmFkZHJlc3MsXG4gICAgICAgICAgICAgIHZlcnNpb246IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHMubm9uY2VcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKCF2YWxpZE1lc3NhZ2UuaXNWYWxpZCB8fCAhdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGF3YWl0IE1pbmlLaXQuZ2V0VXNlckJ5QWRkcmVzcyhcbiAgICAgICAgICAgIHZhbGlkTWVzc2FnZS5zaXdlTWVzc2FnZURhdGEuYWRkcmVzc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coe1xuICAgICAgICAgICAgaWQ6IHZhbGlkTWVzc2FnZS5zaXdlTWVzc2FnZURhdGEuYWRkcmVzcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgYWRkcmVzczogdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBuYW1lOiB1c2VyUHJvZmlsZS51c2VybmFtZSxcbiAgICAgICAgICAgIGltYWdlOiB1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZVVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHZhbGlkTWVzc2FnZS5zaXdlTWVzc2FnZURhdGEuYWRkcmVzcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgYWRkcmVzczogdmFsaWRNZXNzYWdlLnNpd2VNZXNzYWdlRGF0YS5hZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBuYW1lOiB1c2VyUHJvZmlsZS51c2VybmFtZSxcbiAgICAgICAgICAgIGltYWdlOiB1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZVVybCxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHZlcmlmeWluZyBtZXNzYWdlOlwiLCBlKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICByZWRpcmVjdCgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMIGFzIHN0cmluZztcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5hZGRyZXNzID0gdG9rZW4uc3ViO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL1wiLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJNaW5pS2l0IiwidmVyaWZ5U2l3ZU1lc3NhZ2UiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsInR5cGUiLCJjcmVkZW50aWFscyIsIm1lc3NhZ2UiLCJzaWduYXR1cmUiLCJhZGRyZXNzIiwibm9uY2UiLCJhdXRob3JpemUiLCJ2YWxpZE1lc3NhZ2UiLCJzdGF0dXMiLCJ2ZXJzaW9uIiwiaXNWYWxpZCIsInNpd2VNZXNzYWdlRGF0YSIsInVzZXJQcm9maWxlIiwiZ2V0VXNlckJ5QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvd2VyQ2FzZSIsInVzZXJuYW1lIiwiaW1hZ2UiLCJwcm9maWxlUGljdHVyZVVybCIsImUiLCJlcnJvciIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwic3ViIiwiand0IiwicGFnZXMiLCJzaWduSW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/auth.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \****************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.3.2_j6k6oay3ugsr56slyfvma2drry","vendor-chunks/viem@2.29.1_typescript@5.8.3","vendor-chunks/ox@0.6.9_typescript@5.8.3","vendor-chunks/ox@0.1.8_typescript@5.8.3","vendor-chunks/@noble+curves@1.8.2","vendor-chunks/next-auth@4.24.11_vlqdltwfrthjibvc4sy2br5kfq","vendor-chunks/buffer@6.0.3","vendor-chunks/@noble+hashes@1.8.0","vendor-chunks/@worldcoin+minikit-js@1.9.4_j24rmamundknoi6gbnbcuoumqi","vendor-chunks/@noble+hashes@1.7.2","vendor-chunks/abitype@1.0.8_typescript@5.8.3","vendor-chunks/@babel+runtime@7.27.1","vendor-chunks/@noble+curves@1.9.0","vendor-chunks/@worldcoin+idkit-core@2.0.2_kp2qweiupwpsb4tiqpu4trvkhu","vendor-chunks/use-sync-external-store@1.5.0_react@19.1.0","vendor-chunks/base64-js@1.5.1","vendor-chunks/zustand@4.5.6_zuecgsyucbc4bn22mmc35lk2wa","vendor-chunks/ieee754@1.2.1","vendor-chunks/browser-or-node@3.0.0-pre.0","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/uuid@8.3.2","vendor-chunks/oauth@0.9.15","vendor-chunks/@panva+hkdf@1.2.1","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.26.6","vendor-chunks/oidc-token-hash@5.1.0","vendor-chunks/preact@10.26.6","vendor-chunks/object-hash@2.2.0","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.7.2"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.3.2_j6k6oay3ugsr56slyfvma2drry/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ctemp%5Cworldchain%5Cminikit-web3-example-main%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();