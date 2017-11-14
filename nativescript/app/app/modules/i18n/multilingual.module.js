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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11bHRpbGluZ3VhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBNEg7QUFDNUgsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QyxzQ0FBaUQ7QUFFakQsT0FBTztBQUNQLDRDQUF1RTtBQUN2RSwwREFBaUU7QUFFakUsU0FBUztBQUNULHVDQUF1QztBQUN2Qyw0Q0FBMEQ7QUFDMUQsMENBQXVEO0FBRXZELHNCQUFzQjtBQUN0QixnQ0FBdUMsSUFBVTtJQUMvQyxNQUFNLENBQUMsSUFBSSxpQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBRyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxrQkFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZHLENBQUM7QUFGRCx3REFFQztBQUVEOztHQUVHO0FBNEJILElBQWEsa0JBQWtCO0lBVzdCLDRCQUFvQyxZQUFnQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUNwRixDQUFDO0lBQ0gsQ0FBQztJQWJELGlCQUFpQjtJQUNqQixvR0FBb0c7SUFDN0YsMEJBQU8sR0FBZCxVQUFlLG1CQUErQjtRQUM1QyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFPSCx5QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksa0JBQWtCO0lBMUI5QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLGlCQUFVO1lBQ1YsbUJBQVc7WUFDWCxzQkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2QixPQUFPLEVBQUUsc0JBQWU7b0JBQ3hCLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxZQUFZLEVBQ1AsNEJBQW9CLFFBQ3hCO1FBQ0QsU0FBUyxFQUNKLDJCQUFtQixRQUN2QjtRQUNELE9BQU8sRUFDRiw0QkFBb0I7WUFDdkIsc0JBQWU7VUFDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztJQVlhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGtCQUFrQjtHQVh6RCxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy8gbGlic1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBNVUxUSUxBTkdfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBNVUxUSUxBTkdfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIGZvciBBb1QgY29tcGlsYXRpb25cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHApIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsIGAke0NvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgPyAnLycgOiAnJ31hc3NldHMvaTE4bi9gLCAnLmpzb24nKTtcbn1cblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoW3tcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgIGRlcHM6IFtIdHRwXSxcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KVxuICAgIH1dKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uTVVMVElMQU5HX0NPTVBPTkVOVFNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uTVVMVElMQU5HX1BST1ZJREVSUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLk1VTFRJTEFOR19DT01QT05FTlRTLFxuICAgIFRyYW5zbGF0ZU1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsTW9kdWxlIHtcblxuICAvLyBvcHRpb25hbCB1c2FnZVxuICAvLyBpZGVhbGx5IHdlIGNvdWxkIHVzZSB0aGlzIHRvIG92ZXJyaWRlIFRyYW5zbGF0ZU1vZHVsZSwgYnV0IGl0IHJlcXVpcmVzIHRoZSBzdGF0aWMgYWJvdmUgYXQgbW9tZW50XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE11bHRpbGluZ3VhbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE11bHRpbGluZ3VhbE1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVsdGlsaW5ndWFsTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==