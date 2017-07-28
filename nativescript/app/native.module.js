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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdGl2ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGVBQWU7QUFDZixzREFHcUM7QUFDckMsbUVBQXFFO0FBRXJFLFVBQVU7QUFDVixzQ0FBbUY7QUFFbkYsT0FBTztBQUNQLHFDQUEwQztBQUMxQyx5Q0FBOEM7QUFFOUMsTUFBTTtBQUNOLGtEQU1rQztBQUNsQyxnRUFBOEQ7QUFDOUQsMERBQXFEO0FBRXJELGtCQUFrQjtBQUNsQiw4REFBNEQ7QUFDNUQsa0RBQXNEO0FBQ3RELGtEQUErRDtBQUMvRCxvREFBMkQ7QUFDM0QseURBQStFO0FBRS9FLDBCQUEwQjtBQUMxQiw2Q0FBZ0Y7QUFDaEYsa0RBQWtFO0FBRWxFOzs7R0FHRztBQUNILGtEQUE2RDtBQUM3RCxnQ0FBK0I7QUFDL0IsY0FBTSxDQUFDLFNBQVMsR0FBRyxXQUFJLENBQUM7QUFFeEIsMEZBQTBGO0FBQzFGLGNBQU0sQ0FBQyxlQUFlLEdBQUcsY0FBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFFeEQsMkRBQTJEO0FBQzNELGNBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUU1QixrREFBeUU7QUFFekUsMEVBQTBFO0FBQzFFLDJCQUFrQyxTQUFTO0lBQ3pDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixHQUFHLENBQUMsQ0FBYSxVQUFTLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVM7UUFBckIsSUFBSSxJQUFJLGtCQUFBO1FBQ1gsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3RCLENBQUM7QUFWRCw4Q0FVQztBQThCRCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixZQUFZO0lBNUJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3QkFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxRQUFRLEVBQUUsb0JBQVksRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxRQUFRLEVBQUUscUJBQWEsRUFBRTtnQkFDcEQsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQyx3QkFBSSxDQUFDLEVBQUU7Z0JBQy9DLEVBQUUsT0FBTyxFQUFFLGlCQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxzQkFBYyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUMsRUFBRTthQUM1RixDQUFDO1lBQ0Ysb0NBQWdCO1lBQ2hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBTSxtQkFBTSxDQUFDO1lBQzdDLG1CQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFVLENBQUM7WUFDcEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsMkJBQW1CLENBQUM7WUFDdEMsdUJBQWEsQ0FBQyxHQUFHLENBQUMscUJBQWEsQ0FBQztTQUNqQztRQUNELFNBQVMsRUFBRTtZQUNULDhCQUFzQjtZQUN0QixFQUFFLE9BQU8sRUFBRSx3QkFBZ0IsRUFBRSxRQUFRLEVBQUUseUJBQW1CLEVBQUU7WUFDNUQsRUFBRSxPQUFPLEVBQUUsa0JBQVUsRUFBRSxRQUFRLEVBQUUsb0JBQVksRUFBRTtZQUMvQyxPQUFPO1lBQ1AsRUFBRSxPQUFPLEVBQUUsaUJBQVMsRUFBRSxRQUFRLEVBQUUsY0FBTSxDQUFDLHVCQUF1QixFQUFFLEVBQUU7WUFDbEUsRUFBRSxPQUFPLEVBQUUsMEJBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsaUJBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7U0FDcEY7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF0aXZlc2NyaXB0XHJcbmltcG9ydCB7XHJcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gIFJvdXRlckV4dGVuc2lvbnMgYXMgVE5TUm91dGVyRXh0ZW5zaW9uc1xyXG59IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlZ21lbnRlZEJhckl0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXInO1xyXG5cclxuLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7XHJcbiAgV2luZG93U2VydmljZSxcclxuICBTdG9yYWdlU2VydmljZSxcclxuICBDb25zb2xlU2VydmljZSxcclxuICBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gIEFwcFNlcnZpY2VcclxufSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcC5yb3V0ZXMnO1xyXG5cclxuLy8gZmVhdHVyZSBtb2R1bGVzXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9uZ3J4L2luZGV4JztcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsRWZmZWN0cyB9IGZyb20gJy4vYXBwL21vZHVsZXMvaTE4bi9pbmRleCc7XHJcbmltcG9ydCB7IFNhbXBsZUVmZmVjdHMgfSBmcm9tICcuL2FwcC9tb2R1bGVzL3NhbXBsZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBvbmVudHNNb2R1bGUsIGNvbnMsIGNvbnNvbGVMb2dUYXJnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMubW9kdWxlJztcclxuXHJcbi8vIHtOfSBjdXN0b20gYXBwIHNwZWNpZmljXHJcbmltcG9ydCB7IFdpbmRvd05hdGl2ZSwgU3RvcmFnZU5hdGl2ZSwgTlNBcHBTZXJ2aWNlIH0gZnJvbSAnLi9tb2JpbGUvY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IE5TX0FOQUxZVElDU19QUk9WSURFUlMgfSBmcm9tICcuL21vYmlsZS9hbmFseXRpY3MvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ1xyXG4gKiBTZWVkIHByb3ZpZGVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4gKi9cclxuaW1wb3J0IHsgQ29uZmlnLCBMb2dUYXJnZXQgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcbkNvbmZpZy5QYWdlQ2xhc3MgPSBQYWdlO1xyXG5cclxuLy8gKHJlcXVpcmVkKSBwbGF0Zm9ybSB0YXJnZXQgKGFsbG93cyBjb21wb25lbnQgZGVjb3JhdG9ycyB0byB1c2UgdGhlIHJpZ2h0IHZpZXcgdGVtcGxhdGUpXHJcbkNvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLk1PQklMRV9OQVRJVkU7XHJcblxyXG4vLyAob3B0aW9uYWwpIGxvZyBsZXZlbCAtIGRlZmF1bHRzIHRvIG5vIGxvZ2dpbmcgaWYgbm90IHNldFxyXG5Db25maWcuREVCVUcuTEVWRUxfNCA9IHRydWU7XHJcblxyXG5pbXBvcnQgeyBMYW5ndWFnZXMsIExhbmd1YWdlVmlld0hlbHBlciB9IGZyb20gJy4vYXBwL21vZHVsZXMvaTE4bi9pbmRleCc7XHJcblxyXG4vLyBoZWxwZXIgZm9yIFNlZ21lbnRlZEJhciB2aWV3IGJpbmRpbmdzIGluIGxhbmctc3dpdGNoZXIgc2hhcmVkIGNvbXBvbmVudFxyXG5leHBvcnQgZnVuY3Rpb24gc2VnbWVudFZpZXdIZWxwZXIobGFuZ3VhZ2VzKSB7XHJcbiAgbGV0IHNlZ21lbnRJdGVtcyA9IFtdO1xyXG4gIGZvciAobGV0IGxhbmcgb2YgbGFuZ3VhZ2VzKSB7XHJcbiAgICAvLyB7Tn0gcmVxdWlyZXMgaXRlbXMgdG8gYmUgU2VnbWVudGVkQmFySXRlbSBjbGFzc1xyXG4gICAgbGV0IGl0ZW0gPSBuZXcgU2VnbWVudGVkQmFySXRlbSgpO1xyXG4gICAgaXRlbS50aXRsZSA9IGxhbmcudGl0bGU7XHJcbiAgICAoPGFueT5pdGVtKS5jb2RlID0gbGFuZy5jb2RlO1xyXG4gICAgc2VnbWVudEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgfVxyXG4gIHJldHVybiBzZWdtZW50SXRlbXM7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZS5mb3JSb290KFtcclxuICAgICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VDbGFzczogV2luZG93TmF0aXZlIH0sXHJcbiAgICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZUNsYXNzOiBTdG9yYWdlTmF0aXZlIH0sXHJcbiAgICAgIHsgcHJvdmlkZTogQ29uc29sZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IChjb25zKSB9LFxyXG4gICAgICB7IHByb3ZpZGU6IExvZ1RhcmdldCwgbXVsdGk6IHRydWUsIGRlcHM6IFtDb25zb2xlU2VydmljZV0sIHVzZUZhY3Rvcnk6IChjb25zb2xlTG9nVGFyZ2V0KSB9XHJcbiAgICBdKSxcclxuICAgIENvbXBvbmVudHNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdCg8YW55PnJvdXRlcyksXHJcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXHJcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihNdWx0aWxpbmd1YWxFZmZlY3RzKSxcclxuICAgIEVmZmVjdHNNb2R1bGUucnVuKFNhbXBsZUVmZmVjdHMpXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE5TX0FOQUxZVElDU19QUk9WSURFUlMsXHJcbiAgICB7IHByb3ZpZGU6IFJvdXRlckV4dGVuc2lvbnMsIHVzZUNsYXNzOiBUTlNSb3V0ZXJFeHRlbnNpb25zIH0sXHJcbiAgICB7IHByb3ZpZGU6IEFwcFNlcnZpY2UsIHVzZUNsYXNzOiBOU0FwcFNlcnZpY2UgfSxcclxuICAgIC8vIGkxOG5cclxuICAgIHsgcHJvdmlkZTogTGFuZ3VhZ2VzLCB1c2VWYWx1ZTogQ29uZmlnLkdFVF9TVVBQT1JURURfTEFOR1VBR0VTKCkgfSxcclxuICAgIHsgcHJvdmlkZTogTGFuZ3VhZ2VWaWV3SGVscGVyLCBkZXBzOiBbTGFuZ3VhZ2VzXSwgdXNlRmFjdG9yeTogKHNlZ21lbnRWaWV3SGVscGVyKSB9XHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlTW9kdWxlIHsgfVxyXG4iXX0=