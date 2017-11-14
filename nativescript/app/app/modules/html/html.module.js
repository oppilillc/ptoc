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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodG1sLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUF1RztBQU12RyxNQUFNO0FBQ04seUNBQStDO0FBQy9DLGtEQUE0RDtBQUM1RCxtRUFBaUU7QUFFakU7O0dBRUc7QUFrQkgsSUFBYSxZQUFZO0lBRXZCLHNCQUFvQyxZQUEwQjtRQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxZQUFZO0lBaEJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxvQkFBWTtZQUNaLHdDQUFrQjtTQUNuQjtRQUNELFNBQVMsRUFDSix3QkFBZ0IsUUFDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asb0JBQVk7U0FDYjtLQUNGLENBQUM7SUFHYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTtxQ0FBZSxZQUFZO0dBRm5ELFlBQVksQ0FPeEI7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIE5PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIGFwcFxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IFNBTVBMRV9QUk9WSURFUlMgfSBmcm9tICcuLi9zYW1wbGUvc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIE11bHRpbGluZ3VhbE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uU0FNUExFX1BST1ZJREVSU1xuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU2FtcGxlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTYW1wbGVNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgIH1cbiAgfVxufVxuIl19