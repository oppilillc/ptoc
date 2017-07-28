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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUFrRjtBQU1sRixTQUFTO0FBQ1QseUNBQStDO0FBQy9DLDRDQUFxRDtBQUNyRCwwQ0FBa0Q7QUFRbEQ7O0dBRUc7QUFnQkgsSUFBYSxVQUFVO0lBUXJCLG9CQUFvQyxZQUF3QjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQVhELDRGQUE0RjtJQUNyRixrQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFNSCxpQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksVUFBVTtJQWR0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxvQkFBWTtTQUNiO1FBQ0QsWUFBWSxFQUNQLHVCQUFlLFFBQ25CO1FBQ0QsT0FBTyxFQUNGLHVCQUFlLFFBQ25CO1FBQ0QsU0FBUyxFQUNKLHNCQUFjLFFBQ2xCO0tBQ0YsQ0FBQztJQVNhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLFVBQVU7R0FSakQsVUFBVSxDQWF0QjtBQWJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcclxuaW1wb3J0IHsgQ09SRV9QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XHJcblxyXG5pbnRlcmZhY2UgSUNvcmVNb2R1bGVPcHRpb25zIHtcclxuICB3aW5kb3c/OiBhbnk7XHJcbiAgY29uc29sZT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVkTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLkNPUkVfRElSRUNUSVZFU1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uQ09SRV9ESVJFQ1RJVkVTXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC4uLkNPUkVfUFJPVklERVJTLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gIC8vIGNvbmZpZ3VyZWRQcm92aWRlcnM6ICpyZXF1aXJlZCB0byBjb25maWd1cmUgV2luZG93U2VydmljZSBhbmQgQ29uc29sZVNlcnZpY2UgcGVyIHBsYXRmb3JtXHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==