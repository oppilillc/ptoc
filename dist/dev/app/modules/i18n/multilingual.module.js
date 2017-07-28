"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var index_1 = require("../core/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
function translateLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n/", '.json');
}
exports.translateLoaderFactory = translateLoaderFactory;
var MultilingualModule = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    MultilingualModule_1 = MultilingualModule;
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule_1,
            providers: configuredProviders
        };
    };
    MultilingualModule = MultilingualModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forRoot([{
                        provide: core_2.TranslateLoader,
                        deps: [http_1.Http],
                        useFactory: (translateLoaderFactory)
                    }]),
            ],
            declarations: index_2.MULTILANG_COMPONENTS.slice(),
            providers: index_3.MULTILANG_PROVIDERS.slice(),
            exports: index_2.MULTILANG_COMPONENTS.concat([
                core_2.TranslateModule
            ]),
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [MultilingualModule])
    ], MultilingualModule);
    return MultilingualModule;
    var MultilingualModule_1;
}());
exports.MultilingualModule = MultilingualModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUE0SDtBQUM1SCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLHNDQUFpRDtBQUdqRCw0Q0FBdUU7QUFDdkUsMERBQWlFO0FBR2pFLHVDQUF1QztBQUN2Qyw0Q0FBMEQ7QUFDMUQsMENBQXVEO0FBR3ZELGdDQUF1QyxJQUFVO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLGlDQUFtQixDQUFDLElBQUksRUFBRSxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLGtCQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkcsQ0FBQztBQUZELHdEQUVDO0FBZ0NEO0lBV0UsNEJBQW9DLFlBQWdDO1FBQ2xFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7SUFDSCxDQUFDOzJCQWZVLGtCQUFrQjtJQUl0QiwwQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxvQkFBa0I7WUFDNUIsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQVRVLGtCQUFrQjtRQTFCOUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLGlCQUFVO2dCQUNWLG1CQUFXO2dCQUNYLHNCQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZCLE9BQU8sRUFBRSxzQkFBZTt3QkFDeEIsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO3dCQUNaLFVBQVUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNyQyxDQUFDLENBQUM7YUFDSjtZQUNELFlBQVksRUFDUCw0QkFBb0IsUUFDeEI7WUFDRCxTQUFTLEVBQ0osMkJBQW1CLFFBQ3ZCO1lBQ0QsT0FBTyxFQUNGLDRCQUFvQjtnQkFDdkIsc0JBQWU7Y0FDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2dCQUNoQiw2QkFBc0I7YUFDdkI7U0FDRixDQUFDO1FBWWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUsa0JBQWtCO09BWHpELGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQzs7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCWSxnREFBa0IiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IE1VTFRJTEFOR19DT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgTVVMVElMQU5HX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuLy8gZm9yIEFvVCBjb21waWxhdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwKSB7XHJcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsIGAke0NvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgPyAnLycgOiAnJ31hc3NldHMvaTE4bi9gLCAnLmpzb24nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoW3tcclxuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICBkZXBzOiBbSHR0cF0sXHJcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KVxyXG4gICAgfV0pLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5NVUxUSUxBTkdfQ09NUE9ORU5UU1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAuLi5NVUxUSUxBTkdfUFJPVklERVJTLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uTVVMVElMQU5HX0NPTVBPTkVOVFMsXHJcbiAgICBUcmFuc2xhdGVNb2R1bGVcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsTW9kdWxlIHtcclxuXHJcbiAgLy8gb3B0aW9uYWwgdXNhZ2VcclxuICAvLyBpZGVhbGx5IHdlIGNvdWxkIHVzZSB0aGlzIHRvIG92ZXJyaWRlIFRyYW5zbGF0ZU1vZHVsZSwgYnV0IGl0IHJlcXVpcmVzIHRoZSBzdGF0aWMgYWJvdmUgYXQgbW9tZW50XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE11bHRpbGluZ3VhbE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aWxpbmd1YWxNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
