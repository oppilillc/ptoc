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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBRTNDLE1BQU07QUFDTiwyRkFBeUY7QUFDekYscURBQW1EO0FBQ25ELDBDQUF5QztBQUd6QyxJQUFhLFVBQVU7SUFDckIsb0JBQW1CLFNBQTJCLEVBQVMsR0FBZTtRQUFuRCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQTZCLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtxQ0FFbUIsb0NBQWdCLEVBQWMsd0JBQVU7R0FEM0QsVUFBVSxDQUl0QjtBQUpZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2FuYWx5dGljcy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSwgcHVibGljIGxvZzogTG9nU2VydmljZSkge1xuICAgIHRoaXMubG9nLmRlYnVnKGBBcHBTZXJ2aWNlIC0+IENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICB9XG59XG4iXX0=