Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// libs
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
// module
var index_1 = require("../core/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
// for AoT compilation
function translateLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n/", '.json');
}
exports.translateLoaderFactory = translateLoaderFactory;
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var MultilingualModule = MultilingualModule_1 = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    // optional usage
    // ideally we could use this to override TranslateModule, but it requires the static above at moment
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule_1,
            providers: configuredProviders
        };
    };
    return MultilingualModule;
}());
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
exports.MultilingualModule = MultilingualModule;
var MultilingualModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11bHRpbGluZ3VhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBNEg7QUFDNUgsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QyxzQ0FBaUQ7QUFFakQsT0FBTztBQUNQLDRDQUF1RTtBQUN2RSwwREFBaUU7QUFFakUsU0FBUztBQUNULHVDQUF1QztBQUN2Qyw0Q0FBMEQ7QUFDMUQsMENBQXVEO0FBRXZELHNCQUFzQjtBQUN0QixnQ0FBdUMsSUFBVTtJQUMvQyxNQUFNLENBQUMsSUFBSSxpQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBRyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxrQkFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZHLENBQUM7QUFGRCx3REFFQztBQUVEOztHQUVHO0FBNEJILElBQWEsa0JBQWtCO0lBVzdCLDRCQUFvQyxZQUFnQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUNwRixDQUFDO0lBQ0gsQ0FBQztJQWJELGlCQUFpQjtJQUNqQixvR0FBb0c7SUFDN0YsMEJBQU8sR0FBZCxVQUFlLG1CQUErQjtRQUM1QyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFPSCx5QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksa0JBQWtCO0lBMUI5QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLGlCQUFVO1lBQ1YsbUJBQVc7WUFDWCxzQkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2QixPQUFPLEVBQUUsc0JBQWU7b0JBQ3hCLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxZQUFZLEVBQ1AsNEJBQW9CLFFBQ3hCO1FBQ0QsU0FBUyxFQUNKLDJCQUFtQixRQUN2QjtRQUNELE9BQU8sRUFDRiw0QkFBb0I7WUFDdkIsc0JBQWU7VUFDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztJQVlhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGtCQUFrQjtHQVh6RCxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBNVUxUSUxBTkdfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IE1VTFRJTEFOR19QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbi8vIGZvciBBb1QgY29tcGlsYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoaHR0cDogSHR0cCkge1xyXG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCBgJHtDb25maWcuSVNfTU9CSUxFX05BVElWRSgpID8gJy8nIDogJyd9YXNzZXRzL2kxOG4vYCwgJy5qc29uJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KFt7XHJcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgICAgZGVwczogW0h0dHBdLFxyXG4gICAgICB1c2VGYWN0b3J5OiAodHJhbnNsYXRlTG9hZGVyRmFjdG9yeSlcclxuICAgIH1dKSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgLi4uTVVMVElMQU5HX0NPTVBPTkVOVFNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uTVVMVElMQU5HX1BST1ZJREVSUyxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC4uLk1VTFRJTEFOR19DT01QT05FTlRTLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbE1vZHVsZSB7XHJcblxyXG4gIC8vIG9wdGlvbmFsIHVzYWdlXHJcbiAgLy8gaWRlYWxseSB3ZSBjb3VsZCB1c2UgdGhpcyB0byBvdmVycmlkZSBUcmFuc2xhdGVNb2R1bGUsIGJ1dCBpdCByZXF1aXJlcyB0aGUgc3RhdGljIGFib3ZlIGF0IG1vbWVudFxyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTXVsdGlsaW5ndWFsTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVsdGlsaW5ndWFsTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19