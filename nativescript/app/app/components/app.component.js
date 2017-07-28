Object.defineProperty(exports, "__esModule", { value: true });
// any operators needed throughout your application
//import 'hammerjs'; 
require("./operators");
// libs
var core_1 = require("@angular/core");
// app
var index_1 = require("../modules/analytics/services/index");
var index_2 = require("../modules/core/services/index");
var index_3 = require("../modules/core/utils/index");
/**
 * This class represents the main application component.
 */
var AppComponent = (function () {
    function AppComponent(analytics, log, appService) {
        this.analytics = analytics;
        this.log = log;
        this.appService = appService;
        log.debug("Config env: " + index_3.Config.ENVIRONMENT().ENV);
    }
    return AppComponent;
}());
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
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1EQUFtRDtBQUNuRCxxQkFBcUI7QUFDckIsdUJBQXFCO0FBRXJCLE9BQU87QUFDUCxzQ0FBa0Q7QUFFbEQsTUFBTTtBQUNOLDZEQUF1RTtBQUN2RSx3REFBd0U7QUFDeEUscURBQXFEO0FBRXJEOztHQUVHO0FBTUgsSUFBYSxZQUFZO0lBQ3ZCLHNCQUNTLFNBQTJCLEVBQzNCLEdBQWUsRUFDZCxVQUFzQjtRQUZ2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUU5QixHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFlLGNBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ2xDLENBQUM7cUNBR29CLHdCQUFnQjtRQUN0QixrQkFBVTtRQUNGLGtCQUFVO0dBSnJCLFlBQVksQ0FReEI7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFueSBvcGVyYXRvcnMgbmVlZGVkIHRocm91Z2hvdXQgeW91ciBhcHBsaWNhdGlvblxyXG4vL2ltcG9ydCAnaGFtbWVyanMnOyBcclxuaW1wb3J0ICcuL29wZXJhdG9ycyc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL21vZHVsZXMvYW5hbHl0aWNzL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgTG9nU2VydmljZSwgQXBwU2VydmljZSB9IGZyb20gJy4uL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZHVsZXMvY29yZS91dGlscy9pbmRleCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgbG9nOiBMb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBsb2cuZGVidWcoYENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xyXG4gIH1cclxufVxyXG4iXX0=