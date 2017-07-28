function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var multilingual_service_1 = require("./multilingual.service");
/**
 * This is located in the i18n folder for organization
 * However these are imported in CoreModule since
 * MultilingualService should be a singleton across entire app
 * lazy-loaded modules or not.
 */
exports.MULTILANG_PROVIDERS = multilingual_service_1.LanguageProviders.concat([
    multilingual_service_1.MultilingualService,
]);
__export(require("./multilingual.service"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQWdGO0FBRWhGOzs7OztHQUtHO0FBQ1UsUUFBQSxtQkFBbUIsR0FDM0Isd0NBQWlCO0lBQ3BCLDBDQUFtQjtHQUNuQjtBQUVGLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlUHJvdmlkZXJzLCBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aWxpbmd1YWwuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyBsb2NhdGVkIGluIHRoZSBpMThuIGZvbGRlciBmb3Igb3JnYW5pemF0aW9uXHJcbiAqIEhvd2V2ZXIgdGhlc2UgYXJlIGltcG9ydGVkIGluIENvcmVNb2R1bGUgc2luY2VcclxuICogTXVsdGlsaW5ndWFsU2VydmljZSBzaG91bGQgYmUgYSBzaW5nbGV0b24gYWNyb3NzIGVudGlyZSBhcHBcclxuICogbGF6eS1sb2FkZWQgbW9kdWxlcyBvciBub3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTVVMVElMQU5HX1BST1ZJREVSUzogYW55W10gPSBbXHJcbiAgLi4uTGFuZ3VhZ2VQcm92aWRlcnMsXHJcbiAgTXVsdGlsaW5ndWFsU2VydmljZSxcclxuXTtcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vbXVsdGlsaW5ndWFsLnNlcnZpY2UnO1xyXG4iXX0=