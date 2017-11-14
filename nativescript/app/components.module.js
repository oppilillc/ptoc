Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var http_2 = require("@angular/http");
// angular
var core_1 = require("@angular/core");
// libs
var core_2 = require("@ngx-translate/core");
// app
var app_component_1 = require("./app/components/app.component");
var about_component_1 = require("./app/components/about/about.component");
var home_component_1 = require("./app/components/home/home.component");
// feature modules
var core_module_1 = require("./app/modules/core/core.module");
var analytics_module_1 = require("./app/modules/analytics/analytics.module");
var multilingual_module_1 = require("./app/modules/i18n/multilingual.module");
var sample_module_1 = require("./app/modules/sample/sample.module");
var index_1 = require("./app/modules/core/index");
// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    core_1.NgModule({
        imports: [
            analytics_module_1.AnalyticsModule,
            core_module_1.CoreModule,
            multilingual_module_1.MultilingualModule.forRoot([{
                    provide: core_2.TranslateLoader,
                    deps: [http_2.Http],
                    useFactory: (multilingual_module_1.translateLoaderFactory)
                }]),
            sample_module_1.SampleModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        exports: [
            multilingual_module_1.MultilingualModule,
            app_component_1.AppComponent,
            analytics_module_1.AnalyticsModule,
            core_module_1.CoreModule,
            sample_module_1.SampleModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
// For AoT compilation to work:
function cons() {
    return console;
}
exports.cons = cons;
function consoleLogTarget(service) {
    return new index_1.ConsoleTarget(service, { minLogLevel: index_1.LogLevel.Debug });
}
exports.consoleLogTarget = consoleLogTarget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZUFBZTtBQUNmLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLHNEQUF1RTtBQUN2RSxzQ0FBcUM7QUFFckMsVUFBVTtBQUNWLHNDQUFtRjtBQUVuRixPQUFPO0FBQ1AsNENBQXNEO0FBR3RELE1BQU07QUFDTixnRUFBOEQ7QUFDOUQsMEVBQXdFO0FBQ3hFLHVFQUFxRTtBQUdyRSxrQkFBa0I7QUFDbEIsOERBQTREO0FBQzVELDZFQUEyRTtBQUMzRSw4RUFBb0c7QUFDcEcsb0VBQWtFO0FBQ2xFLGtEQUFtRjtBQUVuRixnQ0FBZ0M7QUFDaEMsaUVBQWlFO0FBQ2pFLDBFQUEwRTtBQXFDMUUsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFwQzVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGtDQUFlO1lBQ2Ysd0JBQVU7WUFDVix3Q0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLHNCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsNENBQXNCLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNILDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1NBQ3pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw4QkFBYTtZQUNiLGdDQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLDRCQUFZO1lBQ1osa0NBQWU7WUFDZix3QkFBVTtZQUNWLDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1NBQ3pCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQjtBQUU3QiwrQkFBK0I7QUFDL0I7SUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFGRCxvQkFFQztBQUVELDBCQUFpQyxPQUF1QjtJQUN0RCxNQUFNLENBQUMsSUFBSSxxQkFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxnQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUZELDRDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAucm91dGVzJztcblxuLy8gZmVhdHVyZSBtb2R1bGVzXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL21vZHVsZXMvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlLCB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuaW1wb3J0IHsgU2FtcGxlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9zYW1wbGUvc2FtcGxlLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSwgQ29uc29sZVRhcmdldCwgTG9nTGV2ZWwgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xuXG4vLyBpbnRlcm1lZGlhdGUgY29tcG9uZW50IG1vZHVsZVxuLy8gaGVscHMgZW5jYXBzdWxhdGUgY3VzdG9tIG5hdGl2ZSBtb2R1bGVzIGluIHdpdGggdGhlIGNvbXBvbmVudHNcbi8vIG5vdGU6IGNvdXBsZSB3YXlzIHRoaXMgY291bGQgYmUgZG9uZSwganVzdCBvbmUgb3B0aW9uIHByZXNlbnRlZCBoZXJlLi4uXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgIENvcmVNb2R1bGUsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLmZvclJvb3QoW3tcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgIGRlcHM6IFtIdHRwXSxcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KVxuICAgIH1dKSxcbiAgICBTYW1wbGVNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEFuYWx5dGljc01vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIFNhbXBsZU1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7IH1cblxuLy8gRm9yIEFvVCBjb21waWxhdGlvbiB0byB3b3JrOlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnMoKSB7XG4gIHJldHVybiBjb25zb2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZUxvZ1RhcmdldChzZXJ2aWNlOiBDb25zb2xlU2VydmljZSkge1xuICByZXR1cm4gbmV3IENvbnNvbGVUYXJnZXQoc2VydmljZSwgeyBtaW5Mb2dMZXZlbDogTG9nTGV2ZWwuRGVidWcgfSk7XG59XG4iXX0=