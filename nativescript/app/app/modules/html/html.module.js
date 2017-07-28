Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// app
var index_1 = require("../shared/index");
var index_2 = require("../sample/services/index");
var multilingual_module_1 = require("../i18n/multilingual.module");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SampleModule = (function () {
    function SampleModule(parentModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
    return SampleModule;
}());
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
exports.SampleModule = SampleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodG1sLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUF1RztBQU12RyxNQUFNO0FBQ04seUNBQStDO0FBQy9DLGtEQUE0RDtBQUM1RCxtRUFBaUU7QUFFakU7O0dBRUc7QUFrQkgsSUFBYSxZQUFZO0lBRXZCLHNCQUFvQyxZQUEwQjtRQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxZQUFZO0lBaEJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxvQkFBWTtZQUNaLHdDQUFrQjtTQUNuQjtRQUNELFNBQVMsRUFDSix3QkFBZ0IsUUFDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asb0JBQVk7U0FDYjtLQUNGLENBQUM7SUFHYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTtxQ0FBZSxZQUFZO0dBRm5ELFlBQVksQ0FPeEI7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcbmltcG9ydCB7IFNBTVBMRV9QUk9WSURFUlMgfSBmcm9tICcuLi9zYW1wbGUvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUgfSBmcm9tICcuLi9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAuLi5TQU1QTEVfUFJPVklERVJTXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxyXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2hhcmVkTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FtcGxlTW9kdWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBTYW1wbGVNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTYW1wbGVNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=