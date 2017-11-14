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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbXBsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBdUc7QUFNdkcsTUFBTTtBQUNOLHlDQUErQztBQUMvQywwQ0FBb0Q7QUFDcEQsbUVBQWlFO0FBRWpFOztHQUVHO0FBa0JILElBQWEsWUFBWTtJQUV2QixzQkFBb0MsWUFBMEI7UUFDNUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksWUFBWTtJQWhCeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asb0JBQVk7WUFDWix3Q0FBa0I7U0FDbkI7UUFDRCxTQUFTLEVBQ0osd0JBQWdCLFFBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLG9CQUFZO1NBQ2I7S0FDRixDQUFDO0lBR2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsWUFBWTtHQUZuRCxZQUFZLENBT3hCO0FBUFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBhcHBcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBTQU1QTEVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUgfSBmcm9tICcuLi9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5TQU1QTEVfUFJPVklERVJTXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhbXBsZU1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBTYW1wbGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NhbXBsZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=