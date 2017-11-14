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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1EQUFtRDtBQUNuRCxxQkFBcUI7QUFDckIsdUJBQXFCO0FBRXJCLE9BQU87QUFDUCxzQ0FBa0Q7QUFFbEQsTUFBTTtBQUNOLDZEQUF1RTtBQUN2RSx3REFBd0U7QUFDeEUscURBQXFEO0FBRXJEOztHQUVHO0FBTUgsSUFBYSxZQUFZO0lBQ3ZCLHNCQUNTLFNBQTJCLEVBQzNCLEdBQWUsRUFDZCxVQUFzQjtRQUZ2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUU5QixHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFlLGNBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ2xDLENBQUM7cUNBR29CLHdCQUFnQjtRQUN0QixrQkFBVTtRQUNGLGtCQUFVO0dBSnJCLFlBQVksQ0FReEI7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFueSBvcGVyYXRvcnMgbmVlZGVkIHRocm91Z2hvdXQgeW91ciBhcHBsaWNhdGlvblxuLy9pbXBvcnQgJ2hhbW1lcmpzJzsgXG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcblxuLy8gbGlic1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9hbmFseXRpY3Mvc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgTG9nU2VydmljZSwgQXBwU2VydmljZSB9IGZyb20gJy4uL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2R1bGVzL2NvcmUvdXRpbHMvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHB1YmxpYyBsb2c6IExvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXG4gICkge1xuICAgIGxvZy5kZWJ1ZyhgQ29uZmlnIGVudjogJHtDb25maWcuRU5WSVJPTk1FTlQoKS5FTlZ9YCk7XG4gIH1cbn1cbiJdfQ==