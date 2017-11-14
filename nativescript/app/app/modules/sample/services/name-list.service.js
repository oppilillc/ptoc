Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// app
var index_1 = require("../../core/index");
var index_2 = require("../../analytics/index");
// module
var index_3 = require("../actions/index");
var NameListService = (function (_super) {
    __extends(NameListService, _super);
    function NameListService(analytics, http) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.http = http;
        _this.category = index_3.NameList.CATEGORY;
        return _this;
    }
    NameListService.prototype.getNames = function () {
        return this.http.get((index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/data.json")
            .map(function (res) { return res.json(); });
    };
    return NameListService;
}(index_2.Analytics));
NameListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.AnalyticsService,
        http_1.Http])
], NameListService);
exports.NameListService = NameListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFLckMsTUFBTTtBQUNOLDBDQUEwQztBQUMxQywrQ0FBb0U7QUFFcEUsU0FBUztBQUNULDBDQUE0QztBQUc1QyxJQUFhLGVBQWU7SUFBUyxtQ0FBUztJQUU1Qyx5QkFDUyxTQUEyQixFQUMxQixJQUFVO1FBRnBCLFlBSUUsa0JBQU0sU0FBUyxDQUFDLFNBRWpCO1FBTFEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUdsQixLQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFRLENBQUMsUUFBUSxDQUFDOztJQUNwQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLHNCQUFrQixDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBcUMsaUJBQVMsR0FjN0M7QUFkWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSVMsd0JBQWdCO1FBQ3BCLFdBQUk7R0FKVCxlQUFlLENBYzNCO0FBZFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgQW5hbHl0aWNzLCBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBOYW1lTGlzdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICApIHtcbiAgICBzdXBlcihhbmFseXRpY3MpO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBOYW1lTGlzdC5DQVRFR09SWTtcbiAgfVxuXG4gIGdldE5hbWVzKCk6IE9ic2VydmFibGU8QXJyYXk8c3RyaW5nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgPyAnLycgOiAnJ31hc3NldHMvZGF0YS5qc29uYClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG59XG4iXX0=