Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// app
var analytics_service_1 = require("../../../modules/analytics/services/analytics.service");
var log_service_1 = require("./logging/log.service");
var config_1 = require("../utils/config");
var AppService = (function () {
    function AppService(analytics, log) {
        this.analytics = analytics;
        this.log = log;
        this.log.debug("AppService -> Config env: " + config_1.Config.ENVIRONMENT().ENV);
    }
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService, log_service_1.LogService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBRTNDLE1BQU07QUFDTiwyRkFBeUY7QUFDekYscURBQW1EO0FBQ25ELDBDQUF5QztBQUd6QyxJQUFhLFVBQVU7SUFDckIsb0JBQW1CLFNBQTJCLEVBQVMsR0FBZTtRQUFuRCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQTZCLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtxQ0FFbUIsb0NBQWdCLEVBQWMsd0JBQVU7R0FEM0QsVUFBVSxDQUl0QjtBQUpZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2FuYWx5dGljcy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZ2dpbmcvbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSwgcHVibGljIGxvZzogTG9nU2VydmljZSkge1xyXG4gICAgdGhpcy5sb2cuZGVidWcoYEFwcFNlcnZpY2UgLT4gQ29uZmlnIGVudjogJHtDb25maWcuRU5WSVJPTk1FTlQoKS5FTlZ9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==