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
var index_2 = require("./directives/index");
var index_3 = require("./services/index");
var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: configuredProviders
        };
    };
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
    return CoreModule;
    var CoreModule_1;
}());
exports.CoreModule = CoreModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBa0Y7QUFPbEYseUNBQStDO0FBQy9DLDRDQUFxRDtBQUNyRCwwQ0FBa0Q7QUEwQmxEO0lBUUUsb0JBQW9DLFlBQXdCO1FBQzFELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDSCxDQUFDO21CQVpVLFVBQVU7SUFFZCxrQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFQVSxVQUFVO1FBZHRCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxvQkFBWTthQUNiO1lBQ0QsWUFBWSxFQUNQLHVCQUFlLFFBQ25CO1lBQ0QsT0FBTyxFQUNGLHVCQUFlLFFBQ25CO1lBQ0QsU0FBUyxFQUNKLHNCQUFjLFFBQ2xCO1NBQ0YsQ0FBQztRQVNhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLFVBQVU7T0FSakQsVUFBVSxDQWF0QjtJQUFELGlCQUFDOztDQWJELEFBYUMsSUFBQTtBQWJZLGdDQUFVIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvY29yZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDT1JFX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3V0aWxzL2luZGV4JztcclxuXHJcbmludGVyZmFjZSBJQ29yZU1vZHVsZU9wdGlvbnMge1xyXG4gIHdpbmRvdz86IGFueTtcclxuICBjb25zb2xlPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZWRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgLi4uQ09SRV9ESVJFQ1RJVkVTXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICAuLi5DT1JFX0RJUkVDVElWRVNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uQ09SRV9QUk9WSURFUlMsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgLy8gY29uZmlndXJlZFByb3ZpZGVyczogKnJlcXVpcmVkIHRvIGNvbmZpZ3VyZSBXaW5kb3dTZXJ2aWNlIGFuZCBDb25zb2xlU2VydmljZSBwZXIgcGxhdGZvcm1cclxuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
