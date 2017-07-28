"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("hammerjs/hammer");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var store_devtools_1 = require("@ngrx/store-devtools");
var core_2 = require("@ngx-translate/core");
var index_1 = require("./app/components/index");
var app_routes_1 = require("./app/components/app.routes");
var core_module_1 = require("./app/modules/core/core.module");
var index_2 = require("./app/modules/ngrx/index");
var analytics_module_1 = require("./app/modules/analytics/analytics.module");
var multilingual_module_1 = require("./app/modules/i18n/multilingual.module");
var index_3 = require("./app/modules/i18n/index");
var sample_module_1 = require("./app/modules/sample/sample.module");
var index_4 = require("./app/modules/core/index");
index_4.Config.PLATFORM_TARGET = index_4.Config.PLATFORMS.WEB;
if (String('dev') === 'dev') {
    index_4.Config.DEBUG.LEVEL_4 = true;
}
var routerModule = router_1.RouterModule.forRoot(app_routes_1.routes);
if (String('false') === 'true') {
    index_4.Config.PLATFORM_TARGET = index_4.Config.PLATFORMS.DESKTOP;
    routerModule = router_1.RouterModule.forRoot(app_routes_1.routes, { useHash: true });
}
function win() {
    return window;
}
exports.win = win;
function storage() {
    return localStorage;
}
exports.storage = storage;
function cons() {
    return console;
}
exports.cons = cons;
function consoleLogTarget(consoleService) {
    return new index_4.ConsoleTarget(consoleService, { minLogLevel: index_4.LogLevel.Debug });
}
exports.consoleLogTarget = consoleLogTarget;
var DEV_IMPORTS = [];
if (String('dev') === 'dev') {
    DEV_IMPORTS = DEV_IMPORTS.concat([
        store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension()
    ]);
}
var WebModule = (function () {
    function WebModule() {
    }
    WebModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule.forRoot([
                    { provide: index_4.WindowService, useFactory: (win) },
                    { provide: index_4.ConsoleService, useFactory: (cons) },
                    { provide: index_4.LogTarget, useFactory: (consoleLogTarget), deps: [index_4.ConsoleService], multi: true }
                ]),
                routerModule,
                analytics_module_1.AnalyticsModule,
                multilingual_module_1.MultilingualModule.forRoot([{
                        provide: core_2.TranslateLoader,
                        deps: [http_1.Http],
                        useFactory: (multilingual_module_1.translateLoaderFactory)
                    }]),
                sample_module_1.SampleModule,
                store_1.StoreModule.provideStore(index_2.AppReducer),
                DEV_IMPORTS,
                effects_1.EffectsModule.run(index_3.MultilingualEffects)
            ],
            declarations: [
                index_1.APP_COMPONENTS
            ],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }
            ],
            bootstrap: [index_1.AppComponent]
        })
    ], WebModule);
    return WebModule;
}());
exports.WebModule = WebModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxXQUFXO2dCQUNYLHVCQUFhLENBQUMsR0FBRyxDQUFDLDJCQUFtQixDQUFDO2FBRXZDO1lBQ0QsWUFBWSxFQUFFO2dCQUNkLHNCQUFjO2FBRWI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM1QjthQUdGO1lBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQVksQ0FBQztTQUMxQixDQUFDO09BRVcsU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBMUIsQUFBMEIsSUFBQTtBQUFiLDhCQUFTIiwiZmlsZSI6IndlYi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdoYW1tZXJqcy9oYW1tZXInO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUtZGV2dG9vbHMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBBUFBfQ09NUE9ORU5UUywgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9pbmRleCc7XHJcbi8vaW1wb3J0IHtOU19DT01QT05FTlRTfSBmcm9tICcuL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAucm91dGVzJztcclxuXHJcbi8vIGZlYXR1cmUgbW9kdWxlc1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgQXBwUmVkdWNlciB9IGZyb20gJy4vYXBwL21vZHVsZXMvbmdyeC9pbmRleCc7XHJcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL21vZHVsZXMvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUsIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IE11bHRpbGluZ3VhbEVmZmVjdHMgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2kxOG4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTYW1wbGVNb2R1bGUgfSBmcm9tICcuL2FwcC9tb2R1bGVzL3NhbXBsZS9zYW1wbGUubW9kdWxlJztcclxuLy9pbXBvcnQgeyBOYW1lTGlzdEVmZmVjdHMgfSBmcm9tICcuL2FwcC9tb2R1bGVzL3NhbXBsZS9pbmRleCc7XHJcblxyXG5cclxuLy8gY29uZmlnXHJcbmltcG9ydCB7IENvbmZpZywgV2luZG93U2VydmljZSwgQ29uc29sZVNlcnZpY2UsIGNyZWF0ZUNvbnNvbGVUYXJnZXQsIHByb3ZpZGVDb25zb2xlVGFyZ2V0LCBMb2dUYXJnZXQsIExvZ0xldmVsLCBDb25zb2xlVGFyZ2V0IH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2luZGV4JztcclxuQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9IENvbmZpZy5QTEFURk9STVMuV0VCO1xyXG5pZiAoU3RyaW5nKCc8JT0gQlVJTERfVFlQRSAlPicpID09PSAnZGV2Jykge1xyXG4gIC8vIG9ubHkgb3V0cHV0IGNvbnNvbGUgbG9nZ2luZyBpbiBkZXYgbW9kZVxyXG4gIENvbmZpZy5ERUJVRy5MRVZFTF80ID0gdHJ1ZTtcclxufVxyXG5cclxuLy8gc2FtcGxlIGNvbmZpZyAoZXh0cmEpXHJcbi8vaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9zYW1wbGUvc2VydmljZXMvYXBwLWNvbmZpZyc7XHJcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2kxOG4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UnO1xyXG4vLyBjdXN0b20gaTE4biBsYW5ndWFnZSBzdXBwb3J0XHJcbi8vTXVsdGlsaW5ndWFsU2VydmljZS5TVVBQT1JURURfTEFOR1VBR0VTID0gQXBwQ29uZmlnLkdFVF9TVVBQT1JURURfTEFOR1VBR0VTKCk7XHJcblxyXG5sZXQgcm91dGVyTW9kdWxlID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKTtcclxuXHJcbmlmIChTdHJpbmcoJzwlPSBUQVJHRVRfREVTS1RPUCAlPicpID09PSAndHJ1ZScpIHtcclxuICBDb25maWcuUExBVEZPUk1fVEFSR0VUID0gQ29uZmlnLlBMQVRGT1JNUy5ERVNLVE9QO1xyXG4gIC8vIGRlc2t0b3AgKGVsZWN0cm9uKSBtdXN0IHVzZSBoYXNoXHJcbiAgcm91dGVyTW9kdWxlID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHVzZUhhc2g6IHRydWUgfSk7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdywgY29uc29sZSwgbG9jYWxTdG9yYWdlO1xyXG5cclxuLy8gRm9yIEFvVCBjb21waWxhdGlvbiB0byB3b3JrOlxyXG5leHBvcnQgZnVuY3Rpb24gd2luKCkge1xyXG4gIHJldHVybiB3aW5kb3c7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2UoKSB7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29ucygpIHtcclxuICByZXR1cm4gY29uc29sZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZUxvZ1RhcmdldChjb25zb2xlU2VydmljZTogQ29uc29sZVNlcnZpY2UpIHtcclxuICByZXR1cm4gbmV3IENvbnNvbGVUYXJnZXQoY29uc29sZVNlcnZpY2UsIHsgbWluTG9nTGV2ZWw6IExvZ0xldmVsLkRlYnVnIH0pO1xyXG59XHJcblxyXG5sZXQgREVWX0lNUE9SVFM6IGFueVtdID0gW107XHJcblxyXG5pZiAoU3RyaW5nKCc8JT0gQlVJTERfVFlQRSAlPicpID09PSAnZGV2Jykge1xyXG4gIERFVl9JTVBPUlRTID0gW1xyXG4gICAgLi4uREVWX0lNUE9SVFMsXHJcbiAgICBTdG9yZURldnRvb2xzTW9kdWxlLmluc3RydW1lbnRPbmx5V2l0aEV4dGVuc2lvbigpXHJcbiAgXTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ29yZU1vZHVsZS5mb3JSb290KFtcclxuICAgICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VGYWN0b3J5OiAod2luKSB9LFxyXG5cdCAgLy97IHByb3ZpZGU6IFN0b3JhZ2VTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoc3RvcmFnZSkgfSxcclxuICAgICAgeyBwcm92aWRlOiBDb25zb2xlU2VydmljZSwgdXNlRmFjdG9yeTogKGNvbnMpIH0sXHJcbiAgICAgIHsgcHJvdmlkZTogTG9nVGFyZ2V0LCB1c2VGYWN0b3J5OiAoY29uc29sZUxvZ1RhcmdldCksIGRlcHM6IFtDb25zb2xlU2VydmljZV0sIG11bHRpOiB0cnVlIH1cclxuICAgIF0pLFxyXG4gICAgcm91dGVyTW9kdWxlLFxyXG4gICAgQW5hbHl0aWNzTW9kdWxlLFxyXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLmZvclJvb3QoW3tcclxuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICBkZXBzOiBbSHR0cF0sXHJcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KVxyXG4gICAgfV0pLFxyXG4gICAgU2FtcGxlTW9kdWxlLFxyXG4gICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKEFwcFJlZHVjZXIpLFxyXG4gICAgREVWX0lNUE9SVFMsXHJcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihNdWx0aWxpbmd1YWxFZmZlY3RzKVxyXG4gICAgLy9FZmZlY3RzTW9kdWxlLnJ1bihOYW1lTGlzdEVmZmVjdHMpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICBBUFBfQ09NUE9ORU5UU1xyXG4gIC8vTlNfQ09NUE9ORU5UU1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXHJcbiAgICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xyXG4gICAgfVxyXG4gICAgLy8gb3ZlcnJpZGUgd2l0aCBzdXBwb3J0ZWQgbGFuZ3VhZ2VzXHJcbiAgICBcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJNb2R1bGUgeyB9XHJcbiJdfQ==
