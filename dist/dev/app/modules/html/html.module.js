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
var index_1 = require("../shared/index");
var index_2 = require("../sample/services/index");
var multilingual_module_1 = require("../i18n/multilingual.module");
var SampleModule = (function () {
    function SampleModule(parentModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
    SampleModule = __decorate([
        core_1.NgModule({
            imports: [
                index_1.SharedModule,
                multilingual_module_1.MultilingualModule,
            ],
            providers: index_2.SAMPLE_PROVIDERS.slice(),
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ],
            exports: [
                index_1.SharedModule
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [SampleModule])
    ], SampleModule);
    return SampleModule;
}());
exports.SampleModule = SampleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2h0bWwvaHRtbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBdUc7QUFPdkcseUNBQStDO0FBQy9DLGtEQUE0RDtBQUM1RCxtRUFBaUU7QUFzQmpFO0lBRUUsc0JBQW9DLFlBQTBCO1FBQzVELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQzlFLENBQUM7SUFDSCxDQUFDO0lBTlUsWUFBWTtRQWhCeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLG9CQUFZO2dCQUNaLHdDQUFrQjthQUNuQjtZQUNELFNBQVMsRUFDSix3QkFBZ0IsUUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2dCQUNoQiw2QkFBc0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asb0JBQVk7YUFDYjtTQUNGLENBQUM7UUFHYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxZQUFZO09BRm5ELFlBQVksQ0FPeEI7SUFBRCxtQkFBQztDQVBELEFBT0MsSUFBQTtBQVBZLG9DQUFZIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2h0bWwvaHRtbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIE5PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBTQU1QTEVfUFJPVklERVJTIH0gZnJvbSAnLi4vc2FtcGxlL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIE11bHRpbGluZ3VhbE1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uU0FNUExFX1BST1ZJREVSU1xyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcclxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNoYXJlZE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbXBsZU1vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU2FtcGxlTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2FtcGxlTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
