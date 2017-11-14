Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var router_1 = require("nativescript-angular/router");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
// app
var index_1 = require("./app/modules/core/index");
var app_component_1 = require("./app/components/app.component");
var app_routes_1 = require("./app/components/app.routes");
// feature modules
var core_module_1 = require("./app/modules/core/core.module");
var index_2 = require("./app/modules/ngrx/index");
var index_3 = require("./app/modules/i18n/index");
var index_4 = require("./app/modules/sample/index");
var components_module_1 = require("./components.module");
// {N} custom app specific
var index_5 = require("./mobile/core/index");
var index_6 = require("./mobile/analytics/index");
/**
 * Config
 * Seed provided configuration options
 */
var index_7 = require("./app/modules/core/index");
var page_1 = require("ui/page");
index_7.Config.PageClass = page_1.Page;
// (required) platform target (allows component decorators to use the right view template)
index_7.Config.PLATFORM_TARGET = index_7.Config.PLATFORMS.MOBILE_NATIVE;
// (optional) log level - defaults to no logging if not set
index_7.Config.DEBUG.LEVEL_4 = true;
var index_8 = require("./app/modules/i18n/index");
// helper for SegmentedBar view bindings in lang-switcher shared component
function segmentViewHelper(languages) {
    var segmentItems = [];
    for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
        var lang = languages_1[_i];
        // {N} requires items to be SegmentedBarItem class
        var item = new segmented_bar_1.SegmentedBarItem();
        item.title = lang.title;
        item.code = lang.code;
        segmentItems.push(item);
    }
    return segmentItems;
}
exports.segmentViewHelper = segmentViewHelper;
var NativeModule = (function () {
    function NativeModule() {
    }
    return NativeModule;
}());
NativeModule = __decorate([
    core_1.NgModule({
        imports: [
            core_module_1.CoreModule.forRoot([
                { provide: index_1.WindowService, useClass: index_5.WindowNative },
                { provide: index_1.StorageService, useClass: index_5.StorageNative },
                { provide: index_1.ConsoleService, useFactory: (components_module_1.cons) },
                { provide: index_7.LogTarget, multi: true, deps: [index_1.ConsoleService], useFactory: (components_module_1.consoleLogTarget) }
            ]),
            components_module_1.ComponentsModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.routes),
            store_1.StoreModule.provideStore(index_2.AppReducer),
            effects_1.EffectsModule.run(index_3.MultilingualEffects),
            effects_1.EffectsModule.run(index_4.SampleEffects)
        ],
        providers: [
            index_6.NS_ANALYTICS_PROVIDERS,
            { provide: index_1.RouterExtensions, useClass: router_1.RouterExtensions },
            { provide: index_1.AppService, useClass: index_5.NSAppService },
            // i18n
            { provide: index_8.Languages, useValue: index_7.Config.GET_SUPPORTED_LANGUAGES() },
            { provide: index_8.LanguageViewHelper, deps: [index_8.Languages], useFactory: (segmentViewHelper) }
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], NativeModule);
exports.NativeModule = NativeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGVBQWU7QUFDZixzREFHcUM7QUFDckMsbUVBQXFFO0FBRXJFLFVBQVU7QUFDVixzQ0FBbUY7QUFFbkYsT0FBTztBQUNQLHFDQUEwQztBQUMxQyx5Q0FBOEM7QUFFOUMsTUFBTTtBQUNOLGtEQU1rQztBQUNsQyxnRUFBOEQ7QUFDOUQsMERBQXFEO0FBRXJELGtCQUFrQjtBQUNsQiw4REFBNEQ7QUFDNUQsa0RBQXNEO0FBQ3RELGtEQUErRDtBQUMvRCxvREFBMkQ7QUFDM0QseURBQStFO0FBRS9FLDBCQUEwQjtBQUMxQiw2Q0FBZ0Y7QUFDaEYsa0RBQWtFO0FBRWxFOzs7R0FHRztBQUNILGtEQUE2RDtBQUM3RCxnQ0FBK0I7QUFDL0IsY0FBTSxDQUFDLFNBQVMsR0FBRyxXQUFJLENBQUM7QUFFeEIsMEZBQTBGO0FBQzFGLGNBQU0sQ0FBQyxlQUFlLEdBQUcsY0FBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFFeEQsMkRBQTJEO0FBQzNELGNBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUU1QixrREFBeUU7QUFFekUsMEVBQTBFO0FBQzFFLDJCQUFrQyxTQUFTO0lBQ3pDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixHQUFHLENBQUMsQ0FBYSxVQUFTLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVM7UUFBckIsSUFBSSxJQUFJLGtCQUFBO1FBQ1gsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3RCLENBQUM7QUFWRCw4Q0FVQztBQThCRCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBNUJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3QkFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxRQUFRLEVBQUUsb0JBQVksRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxRQUFRLEVBQUUscUJBQWEsRUFBRTtnQkFDcEQsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQyx3QkFBSSxDQUFDLEVBQUU7Z0JBQy9DLEVBQUUsT0FBTyxFQUFFLGlCQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxzQkFBYyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUMsRUFBRTthQUM1RixDQUFDO1lBQ0Ysb0NBQWdCO1lBQ2hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBTSxtQkFBTSxDQUFDO1lBQzdDLG1CQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFVLENBQUM7WUFDcEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsMkJBQW1CLENBQUM7WUFDdEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMscUJBQWEsQ0FBQztTQUNqQztRQUNELFNBQVMsRUFBRTtZQUNULDhCQUFzQjtZQUN0QixFQUFFLE9BQU8sRUFBRSx3QkFBZ0IsRUFBRSxRQUFRLEVBQUUseUJBQW1CLEVBQUU7WUFDNUQsRUFBRSxPQUFPLEVBQUUsa0JBQVUsRUFBRSxRQUFRLEVBQUUsb0JBQVksRUFBRTtZQUMvQyxPQUFPO1lBQ1AsRUFBRSxPQUFPLEVBQUUsaUJBQVMsRUFBRSxRQUFRLEVBQUUsY0FBTSxDQUFDLHVCQUF1QixFQUFFLEVBQUU7WUFDbEUsRUFBRSxPQUFPLEVBQUUsMEJBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsaUJBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7U0FDcEY7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQge1xuICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gIFJvdXRlckV4dGVuc2lvbnMgYXMgVE5TUm91dGVyRXh0ZW5zaW9uc1xufSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhcic7XG5cbi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG4vLyBhcHBcbmltcG9ydCB7XG4gIFdpbmRvd1NlcnZpY2UsXG4gIFN0b3JhZ2VTZXJ2aWNlLFxuICBDb25zb2xlU2VydmljZSxcbiAgUm91dGVyRXh0ZW5zaW9ucyxcbiAgQXBwU2VydmljZVxufSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwLnJvdXRlcyc7XG5cbi8vIGZlYXR1cmUgbW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vYXBwL21vZHVsZXMvY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9uZ3J4L2luZGV4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbEVmZmVjdHMgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2kxOG4vaW5kZXgnO1xuaW1wb3J0IHsgU2FtcGxlRWZmZWN0cyB9IGZyb20gJy4vYXBwL21vZHVsZXMvc2FtcGxlL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUsIGNvbnMsIGNvbnNvbGVMb2dUYXJnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMubW9kdWxlJztcblxuLy8ge059IGN1c3RvbSBhcHAgc3BlY2lmaWNcbmltcG9ydCB7IFdpbmRvd05hdGl2ZSwgU3RvcmFnZU5hdGl2ZSwgTlNBcHBTZXJ2aWNlIH0gZnJvbSAnLi9tb2JpbGUvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBOU19BTkFMWVRJQ1NfUFJPVklERVJTIH0gZnJvbSAnLi9tb2JpbGUvYW5hbHl0aWNzL2luZGV4JztcblxuLyoqXG4gKiBDb25maWdcbiAqIFNlZWQgcHJvdmlkZWQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gKi9cbmltcG9ydCB7IENvbmZpZywgTG9nVGFyZ2V0IH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2luZGV4JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbkNvbmZpZy5QYWdlQ2xhc3MgPSBQYWdlO1xuXG4vLyAocmVxdWlyZWQpIHBsYXRmb3JtIHRhcmdldCAoYWxsb3dzIGNvbXBvbmVudCBkZWNvcmF0b3JzIHRvIHVzZSB0aGUgcmlnaHQgdmlldyB0ZW1wbGF0ZSlcbkNvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLk1PQklMRV9OQVRJVkU7XG5cbi8vIChvcHRpb25hbCkgbG9nIGxldmVsIC0gZGVmYXVsdHMgdG8gbm8gbG9nZ2luZyBpZiBub3Qgc2V0XG5Db25maWcuREVCVUcuTEVWRUxfNCA9IHRydWU7XG5cbmltcG9ydCB7IExhbmd1YWdlcywgTGFuZ3VhZ2VWaWV3SGVscGVyIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9pMThuL2luZGV4JztcblxuLy8gaGVscGVyIGZvciBTZWdtZW50ZWRCYXIgdmlldyBiaW5kaW5ncyBpbiBsYW5nLXN3aXRjaGVyIHNoYXJlZCBjb21wb25lbnRcbmV4cG9ydCBmdW5jdGlvbiBzZWdtZW50Vmlld0hlbHBlcihsYW5ndWFnZXMpIHtcbiAgbGV0IHNlZ21lbnRJdGVtcyA9IFtdO1xuICBmb3IgKGxldCBsYW5nIG9mIGxhbmd1YWdlcykge1xuICAgIC8vIHtOfSByZXF1aXJlcyBpdGVtcyB0byBiZSBTZWdtZW50ZWRCYXJJdGVtIGNsYXNzXG4gICAgbGV0IGl0ZW0gPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgIGl0ZW0udGl0bGUgPSBsYW5nLnRpdGxlO1xuICAgICg8YW55Pml0ZW0pLmNvZGUgPSBsYW5nLmNvZGU7XG4gICAgc2VnbWVudEl0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbiAgcmV0dXJuIHNlZ21lbnRJdGVtcztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvcmVNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUNsYXNzOiBXaW5kb3dOYXRpdmUgfSxcbiAgICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZUNsYXNzOiBTdG9yYWdlTmF0aXZlIH0sXG4gICAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoY29ucykgfSxcbiAgICAgIHsgcHJvdmlkZTogTG9nVGFyZ2V0LCBtdWx0aTogdHJ1ZSwgZGVwczogW0NvbnNvbGVTZXJ2aWNlXSwgdXNlRmFjdG9yeTogKGNvbnNvbGVMb2dUYXJnZXQpIH1cbiAgICBdKSxcbiAgICBDb21wb25lbnRzTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KDxhbnk+cm91dGVzKSxcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oTXVsdGlsaW5ndWFsRWZmZWN0cyksXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oU2FtcGxlRWZmZWN0cylcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTlNfQU5BTFlUSUNTX1BST1ZJREVSUyxcbiAgICB7IHByb3ZpZGU6IFJvdXRlckV4dGVuc2lvbnMsIHVzZUNsYXNzOiBUTlNSb3V0ZXJFeHRlbnNpb25zIH0sXG4gICAgeyBwcm92aWRlOiBBcHBTZXJ2aWNlLCB1c2VDbGFzczogTlNBcHBTZXJ2aWNlIH0sXG4gICAgLy8gaTE4blxuICAgIHsgcHJvdmlkZTogTGFuZ3VhZ2VzLCB1c2VWYWx1ZTogQ29uZmlnLkdFVF9TVVBQT1JURURfTEFOR1VBR0VTKCkgfSxcbiAgICB7IHByb3ZpZGU6IExhbmd1YWdlVmlld0hlbHBlciwgZGVwczogW0xhbmd1YWdlc10sIHVzZUZhY3Rvcnk6IChzZWdtZW50Vmlld0hlbHBlcikgfVxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmF0aXZlTW9kdWxlIHsgfVxuIl19