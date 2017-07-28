Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// app
var index_1 = require("../shared/index");
var index_2 = require("./services/index");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbXBsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBdUc7QUFNdkcsTUFBTTtBQUNOLHlDQUErQztBQUMvQywwQ0FBb0Q7QUFDcEQsbUVBQWlFO0FBRWpFOztHQUVHO0FBa0JILElBQWEsWUFBWTtJQUV2QixzQkFBb0MsWUFBMEI7UUFDNUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksWUFBWTtJQWhCeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asb0JBQVk7WUFDWix3Q0FBa0I7U0FDbkI7UUFDRCxTQUFTLEVBQ0osd0JBQWdCLFFBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFZO1NBQ2I7S0FDRixDQUFDO0lBR2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsWUFBWTtHQUZuRCxZQUFZLENBT3hCO0FBUFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIE5PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBTQU1QTEVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZSc7XHJcblxyXG4vKipcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC4uLlNBTVBMRV9QUk9WSURFUlNcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaGFyZWRNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVNb2R1bGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFNhbXBsZU1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NhbXBsZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==