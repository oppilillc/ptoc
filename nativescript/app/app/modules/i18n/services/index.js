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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQWdGO0FBRWhGOzs7OztHQUtHO0FBQ1UsUUFBQSxtQkFBbUIsR0FDM0Isd0NBQWlCO0lBQ3BCLDBDQUFtQjtHQUNuQjtBQUVGLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlUHJvdmlkZXJzLCBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aWxpbmd1YWwuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBpcyBsb2NhdGVkIGluIHRoZSBpMThuIGZvbGRlciBmb3Igb3JnYW5pemF0aW9uXG4gKiBIb3dldmVyIHRoZXNlIGFyZSBpbXBvcnRlZCBpbiBDb3JlTW9kdWxlIHNpbmNlXG4gKiBNdWx0aWxpbmd1YWxTZXJ2aWNlIHNob3VsZCBiZSBhIHNpbmdsZXRvbiBhY3Jvc3MgZW50aXJlIGFwcFxuICogbGF6eS1sb2FkZWQgbW9kdWxlcyBvciBub3QuXG4gKi9cbmV4cG9ydCBjb25zdCBNVUxUSUxBTkdfUFJPVklERVJTOiBhbnlbXSA9IFtcbiAgLi4uTGFuZ3VhZ2VQcm92aWRlcnMsXG4gIE11bHRpbGluZ3VhbFNlcnZpY2UsXG5dO1xuXG5leHBvcnQgKiBmcm9tICcuL211bHRpbGluZ3VhbC5zZXJ2aWNlJztcbiJdfQ==