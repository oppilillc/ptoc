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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZUFBZTtBQUNmLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLHNEQUF1RTtBQUN2RSxzQ0FBcUM7QUFFckMsVUFBVTtBQUNWLHNDQUFtRjtBQUVuRixPQUFPO0FBQ1AsNENBQXNEO0FBR3RELE1BQU07QUFDTixnRUFBOEQ7QUFDOUQsMEVBQXdFO0FBQ3hFLHVFQUFxRTtBQUdyRSxrQkFBa0I7QUFDbEIsOERBQTREO0FBQzVELDZFQUEyRTtBQUMzRSw4RUFBb0c7QUFDcEcsb0VBQWtFO0FBQ2xFLGtEQUFtRjtBQUVuRixnQ0FBZ0M7QUFDaEMsaUVBQWlFO0FBQ2pFLDBFQUEwRTtBQXFDMUUsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFwQzVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGtDQUFlO1lBQ2Ysd0JBQVU7WUFDVix3Q0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLHNCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsNENBQXNCLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNILDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1NBQ3pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw4QkFBYTtZQUNiLGdDQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLDRCQUFZO1lBQ1osa0NBQWU7WUFDZix3QkFBVTtZQUNWLDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1NBQ3pCO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQjtBQUU3QiwrQkFBK0I7QUFDL0I7SUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFGRCxvQkFFQztBQUVELDBCQUFpQyxPQUF1QjtJQUN0RCxNQUFNLENBQUMsSUFBSSxxQkFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxnQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUZELDRDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF0aXZlc2NyaXB0XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG4vLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAucm91dGVzJztcclxuXHJcbi8vIGZlYXR1cmUgbW9kdWxlc1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgQW5hbHl0aWNzTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSwgdHJhbnNsYXRlTG9hZGVyRmFjdG9yeSB9IGZyb20gJy4vYXBwL21vZHVsZXMvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcclxuaW1wb3J0IHsgU2FtcGxlTW9kdWxlIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9zYW1wbGUvc2FtcGxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlLCBDb25zb2xlVGFyZ2V0LCBMb2dMZXZlbCB9IGZyb20gJy4vYXBwL21vZHVsZXMvY29yZS9pbmRleCc7XHJcblxyXG4vLyBpbnRlcm1lZGlhdGUgY29tcG9uZW50IG1vZHVsZVxyXG4vLyBoZWxwcyBlbmNhcHN1bGF0ZSBjdXN0b20gbmF0aXZlIG1vZHVsZXMgaW4gd2l0aCB0aGUgY29tcG9uZW50c1xyXG4vLyBub3RlOiBjb3VwbGUgd2F5cyB0aGlzIGNvdWxkIGJlIGRvbmUsIGp1c3Qgb25lIG9wdGlvbiBwcmVzZW50ZWQgaGVyZS4uLlxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEFuYWx5dGljc01vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGUuZm9yUm9vdChbe1xyXG4gICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgIGRlcHM6IFtIdHRwXSxcclxuICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkpXHJcbiAgICB9XSksXHJcbiAgICBTYW1wbGVNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBBYm91dENvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcclxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE11bHRpbGluZ3VhbE1vZHVsZSxcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIEFuYWx5dGljc01vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBTYW1wbGVNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7IH1cclxuXHJcbi8vIEZvciBBb1QgY29tcGlsYXRpb24gdG8gd29yazpcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbnNvbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25zb2xlTG9nVGFyZ2V0KHNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBDb25zb2xlVGFyZ2V0KHNlcnZpY2UsIHsgbWluTG9nTGV2ZWw6IExvZ0xldmVsLkRlYnVnIH0pO1xyXG59XHJcbiJdfQ==