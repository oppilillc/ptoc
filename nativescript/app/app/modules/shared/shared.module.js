Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// modules
var index_1 = require("../i18n/index");
var index_2 = require("./components/index");
var SHARED_MODULES = [
    common_1.CommonModule,
    http_1.HttpModule,
    forms_1.FormsModule,
    router_1.RouterModule,
    index_1.MultilingualModule
];
//const NS_COMPONENTS:any[] = [];
//const SHARED_COMPONENTS:any[] = [];
/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: SHARED_MODULES.slice(),
        declarations: index_2.SHARED_COMPONENTS.concat(index_2.NS_COMPONENTS),
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA,
        ],
        exports: SHARED_MODULES.concat(index_2.SHARED_COMPONENTS, index_2.NS_COMPONENTS)
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBK0M7QUFDL0Msc0NBQTJDO0FBQzNDLHdDQUE2QztBQUM3QywwQ0FBK0M7QUFFL0MsVUFBVTtBQUNWLHVDQUFtRDtBQUNuRCw0Q0FBc0U7QUFFdEUsSUFBTSxjQUFjLEdBQVU7SUFDNUIscUJBQVk7SUFDWixpQkFBVTtJQUNWLG1CQUFXO0lBQ1gscUJBQVk7SUFDWiwwQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFFckM7Ozs7O0dBS0c7QUFvQkgsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixZQUFZO0lBbEJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQ0osY0FBYyxRQUNoQjtRQUNELFlBQVksRUFDUCx5QkFBaUIsUUFDakIscUJBQWEsQ0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUNGLGNBQWMsUUFDZCx5QkFBaUIsRUFDakIscUJBQWEsQ0FDakI7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbW9kdWxlc1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBOU19DT01QT05FTlRTLCBTSEFSRURfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbmNvbnN0IFNIQVJFRF9NT0RVTEVTOiBhbnlbXSA9IFtcbiAgQ29tbW9uTW9kdWxlLFxuICBIdHRwTW9kdWxlLFxuICBGb3Jtc01vZHVsZSxcbiAgUm91dGVyTW9kdWxlLFxuICBNdWx0aWxpbmd1YWxNb2R1bGVcbl07XG5cbi8vY29uc3QgTlNfQ09NUE9ORU5UUzphbnlbXSA9IFtdO1xuLy9jb25zdCBTSEFSRURfQ09NUE9ORU5UUzphbnlbXSA9IFtdO1xuXG4vKipcbiAqIFNoYXJlZE1vZHVsZVxuICogT25seSBmb3Igc2hhcmVkIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMgYW5kIHBpcGVzXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgaGVyZVxuICogaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2Nvb2tib29rL25nbW9kdWxlLWZhcS5odG1sIyEjd2hhdC1raW5kcy1vZi1tb2R1bGVzLXNob3VsZC1pLWhhdmUtYW5kLWhvdy1zaG91bGQtaS11c2UtdGhlbS1cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIC4uLlNIQVJFRF9NT0RVTEVTXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlNIQVJFRF9DT01QT05FTlRTLFxuICAgIC4uLk5TX0NPTVBPTkVOVFNcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlNIQVJFRF9NT0RVTEVTLFxuICAgIC4uLlNIQVJFRF9DT01QT05FTlRTLFxuICAgIC4uLk5TX0NPTVBPTkVOVFNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cbiJdfQ==