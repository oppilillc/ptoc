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
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("../i18n/index");
var index_2 = require("./components/index");
var SHARED_MODULES = [
    common_1.CommonModule,
    http_1.HttpModule,
    forms_1.FormsModule,
    router_1.RouterModule,
    index_1.MultilingualModule
];
var SharedModule = (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQW1GO0FBQ25GLDBDQUErQztBQUMvQyxzQ0FBMkM7QUFDM0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUcvQyx1Q0FBbUQ7QUFDbkQsNENBQXNFO0FBRXRFLElBQU0sY0FBYyxHQUFVO0lBQzVCLHFCQUFZO0lBQ1osaUJBQVU7SUFDVixtQkFBVztJQUNYLHFCQUFZO0lBQ1osMEJBQWtCO0NBQ25CLENBQUM7QUE4QkY7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQWxCeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUNKLGNBQWMsUUFDaEI7WUFDRCxZQUFZLEVBQ1AseUJBQWlCLFFBQ2pCLHFCQUFhLENBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjtnQkFDaEIsNkJBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUNGLGNBQWMsUUFDZCx5QkFBaUIsRUFDakIscUJBQWEsQ0FDakI7U0FDRixDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBNUIsQUFBNEIsSUFBQTtBQUFmLG9DQUFZIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIG1vZHVsZXNcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9pbmRleCc7XHJcbmltcG9ydCB7IE5TX0NPTVBPTkVOVFMsIFNIQVJFRF9DT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuXHJcbmNvbnN0IFNIQVJFRF9NT0RVTEVTOiBhbnlbXSA9IFtcclxuICBDb21tb25Nb2R1bGUsXHJcbiAgSHR0cE1vZHVsZSxcclxuICBGb3Jtc01vZHVsZSxcclxuICBSb3V0ZXJNb2R1bGUsXHJcbiAgTXVsdGlsaW5ndWFsTW9kdWxlXHJcbl07XHJcblxyXG4vL2NvbnN0IE5TX0NPTVBPTkVOVFM6YW55W10gPSBbXTtcclxuLy9jb25zdCBTSEFSRURfQ09NUE9ORU5UUzphbnlbXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFNoYXJlZE1vZHVsZVxyXG4gKiBPbmx5IGZvciBzaGFyZWQgY29tcG9uZW50cywgZGlyZWN0aXZlcyBhbmQgcGlwZXNcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGhlcmVcclxuICogaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2Nvb2tib29rL25nbW9kdWxlLWZhcS5odG1sIyEjd2hhdC1raW5kcy1vZi1tb2R1bGVzLXNob3VsZC1pLWhhdmUtYW5kLWhvdy1zaG91bGQtaS11c2UtdGhlbS1cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAuLi5TSEFSRURfTU9EVUxFU1xyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5TSEFSRURfQ09NUE9ORU5UUyxcclxuICAgIC4uLk5TX0NPTVBPTkVOVFNcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uU0hBUkVEX01PRFVMRVMsXHJcbiAgICAuLi5TSEFSRURfQ09NUE9ORU5UUyxcclxuICAgIC4uLk5TX0NPTVBPTkVOVFNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cclxuIl19
