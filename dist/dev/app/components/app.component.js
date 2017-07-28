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
Object.defineProperty(exports, "__esModule", { value: true });
require("./operators");
var core_1 = require("@angular/core");
var index_1 = require("../modules/analytics/services/index");
var index_2 = require("../modules/core/services/index");
var index_3 = require("../modules/core/utils/index");
var AppComponent = (function () {
    function AppComponent(analytics, log, appService) {
        this.analytics = analytics;
        this.log = log;
        this.appService = appService;
        log.debug("Config env: " + index_3.Config.ENVIRONMENT().ENV);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [index_1.AnalyticsService,
            index_2.LogService,
            index_2.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSx1QkFBcUI7QUFHckIsc0NBQWtEO0FBR2xELDZEQUF1RTtBQUN2RSx3REFBd0U7QUFDeEUscURBQXFEO0FBVXJEO0lBQ0Usc0JBQ1MsU0FBMkIsRUFDM0IsR0FBZSxFQUNkLFVBQXNCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWUsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFQVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDO3lDQUdvQix3QkFBZ0I7WUFDdEIsa0JBQVU7WUFDRixrQkFBVTtPQUpyQixZQUFZLENBUXhCO0lBQUQsbUJBQUM7Q0FSRCxBQVFDLElBQUE7QUFSWSxvQ0FBWSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW55IG9wZXJhdG9ycyBuZWVkZWQgdGhyb3VnaG91dCB5b3VyIGFwcGxpY2F0aW9uXHJcbi8vaW1wb3J0ICdoYW1tZXJqcyc7IFxyXG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9hbmFseXRpY3Mvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlLCBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kdWxlcy9jb3JlL3V0aWxzL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcclxuICAgIHB1YmxpYyBsb2c6IExvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2VcclxuICApIHtcclxuICAgIGxvZy5kZWJ1ZyhgQ29uZmlnIGVudjogJHtDb25maWcuRU5WSVJPTk1FTlQoKS5FTlZ9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
