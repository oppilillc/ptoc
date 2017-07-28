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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBK0M7QUFDL0Msc0NBQTJDO0FBQzNDLHdDQUE2QztBQUM3QywwQ0FBK0M7QUFFL0MsVUFBVTtBQUNWLHVDQUFtRDtBQUNuRCw0Q0FBc0U7QUFFdEUsSUFBTSxjQUFjLEdBQVU7SUFDNUIscUJBQVk7SUFDWixpQkFBVTtJQUNWLG1CQUFXO0lBQ1gscUJBQVk7SUFDWiwwQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFFckM7Ozs7O0dBS0c7QUFvQkgsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixZQUFZO0lBbEJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQ0osY0FBYyxRQUNoQjtRQUNELFlBQVksRUFDUCx5QkFBaUIsUUFDakIscUJBQWEsQ0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUNGLGNBQWMsUUFDZCx5QkFBaUIsRUFDakIscUJBQWEsQ0FDakI7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gbW9kdWxlc1xyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUgfSBmcm9tICcuLi9pMThuL2luZGV4JztcclxuaW1wb3J0IHsgTlNfQ09NUE9ORU5UUywgU0hBUkVEX0NPTVBPTkVOVFMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5cclxuY29uc3QgU0hBUkVEX01PRFVMRVM6IGFueVtdID0gW1xyXG4gIENvbW1vbk1vZHVsZSxcclxuICBIdHRwTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFxyXG4gIFJvdXRlck1vZHVsZSxcclxuICBNdWx0aWxpbmd1YWxNb2R1bGVcclxuXTtcclxuXHJcbi8vY29uc3QgTlNfQ09NUE9ORU5UUzphbnlbXSA9IFtdO1xyXG4vL2NvbnN0IFNIQVJFRF9DT01QT05FTlRTOmFueVtdID0gW107XHJcblxyXG4vKipcclxuICogU2hhcmVkTW9kdWxlXHJcbiAqIE9ubHkgZm9yIHNoYXJlZCBjb21wb25lbnRzLCBkaXJlY3RpdmVzIGFuZCBwaXBlc1xyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgaGVyZVxyXG4gKiBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvY29va2Jvb2svbmdtb2R1bGUtZmFxLmh0bWwjISN3aGF0LWtpbmRzLW9mLW1vZHVsZXMtc2hvdWxkLWktaGF2ZS1hbmQtaG93LXNob3VsZC1pLXVzZS10aGVtLVxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gIC4uLlNIQVJFRF9NT0RVTEVTXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLlNIQVJFRF9DT01QT05FTlRTLFxyXG4gICAgLi4uTlNfQ09NUE9ORU5UU1xyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcclxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICAuLi5TSEFSRURfTU9EVUxFUyxcclxuICAgIC4uLlNIQVJFRF9DT01QT05FTlRTLFxyXG4gICAgLi4uTlNfQ09NUE9ORU5UU1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iXX0=