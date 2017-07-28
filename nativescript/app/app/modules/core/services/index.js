function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// app
var console_service_1 = require("./console.service");
var log_service_1 = require("./logging/log.service");
var router_extensions_service_1 = require("./router-extensions.service");
var window_service_1 = require("./window.service");
var app_service_1 = require("./app.service");
var storage_service_1 = require("./storage.service");
exports.CORE_PROVIDERS = [
    window_service_1.WindowService,
    storage_service_1.StorageService,
    console_service_1.ConsoleService,
    log_service_1.LogService,
    app_service_1.AppService,
    router_extensions_service_1.RouterExtensions,
];
__export(require("./console.service"));
__export(require("./logging/index"));
__export(require("./router-extensions.service"));
__export(require("./window.service"));
__export(require("./app.service"));
__export(require("./storage.service"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtBQUNOLHFEQUFtRDtBQUNuRCxxREFBbUQ7QUFDbkQseUVBQStEO0FBQy9ELG1EQUFpRDtBQUNqRCw2Q0FBMkM7QUFDM0MscURBQW1EO0FBRXRDLFFBQUEsY0FBYyxHQUFVO0lBQ25DLDhCQUFhO0lBQ2IsZ0NBQWM7SUFDZCxnQ0FBYztJQUNkLHdCQUFVO0lBQ1Ysd0JBQVU7SUFDViw0Q0FBZ0I7Q0FDakIsQ0FBQztBQUVGLHVDQUFrQztBQUNsQyxxQ0FBZ0M7QUFDaEMsaURBQTRDO0FBQzVDLHNDQUFpQztBQUNqQyxtQ0FBOEI7QUFDOUIsdUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXHJcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4vcm91dGVyLWV4dGVuc2lvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT1JFX1BST1ZJREVSUzogYW55W10gPSBbXHJcbiAgV2luZG93U2VydmljZSxcclxuICBTdG9yYWdlU2VydmljZSxcclxuICBDb25zb2xlU2VydmljZSxcclxuICBMb2dTZXJ2aWNlLFxyXG4gIEFwcFNlcnZpY2UsXHJcbiAgUm91dGVyRXh0ZW5zaW9ucyxcclxuXTtcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29uc29sZS5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9sb2dnaW5nL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXItZXh0ZW5zaW9ucy5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXBwLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0b3JhZ2Uuc2VydmljZSc7XHJcbiJdfQ==