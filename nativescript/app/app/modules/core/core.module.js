Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// module
var index_1 = require("../shared/index");
var index_2 = require("./directives/index");
var index_3 = require("./services/index");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    // configuredProviders: *required to configure WindowService and ConsoleService per platform
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: configuredProviders
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            index_1.SharedModule
        ],
        declarations: index_2.CORE_DIRECTIVES.slice(),
        exports: index_2.CORE_DIRECTIVES.slice(),
        providers: index_3.CORE_PROVIDERS.slice()
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUFrRjtBQU1sRixTQUFTO0FBQ1QseUNBQStDO0FBQy9DLDRDQUFxRDtBQUNyRCwwQ0FBa0Q7QUFRbEQ7O0dBRUc7QUFnQkgsSUFBYSxVQUFVO0lBUXJCLG9CQUFvQyxZQUF3QjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQVhELDRGQUE0RjtJQUNyRixrQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFNSCxpQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksVUFBVTtJQWR0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxvQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUNQLHVCQUFlLFFBQ25CO1FBQ0QsT0FBTyxFQUNGLHVCQUFlLFFBQ25CO1FBQ0QsU0FBUyxFQUNKLHNCQUFjLFFBQ2xCO0tBQ0YsQ0FBQztJQVNhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLFVBQVU7R0FSakQsVUFBVSxDQWF0QjtBQWJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcbmltcG9ydCB7IENPUkVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3V0aWxzL2luZGV4JztcblxuaW50ZXJmYWNlIElDb3JlTW9kdWxlT3B0aW9ucyB7XG4gIHdpbmRvdz86IGFueTtcbiAgY29uc29sZT86IGFueTtcbn1cblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNPUkVfRElSRUNUSVZFU1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ09SRV9ESVJFQ1RJVkVTXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLkNPUkVfUFJPVklERVJTLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICAvLyBjb25maWd1cmVkUHJvdmlkZXJzOiAqcmVxdWlyZWQgdG8gY29uZmlndXJlIFdpbmRvd1NlcnZpY2UgYW5kIENvbnNvbGVTZXJ2aWNlIHBlciBwbGF0Zm9ybVxuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgIH1cbiAgfVxufVxuIl19