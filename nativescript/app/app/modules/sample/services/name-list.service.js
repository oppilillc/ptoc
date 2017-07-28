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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFLckMsTUFBTTtBQUNOLDBDQUEwQztBQUMxQywrQ0FBb0U7QUFFcEUsU0FBUztBQUNULDBDQUE0QztBQUc1QyxJQUFhLGVBQWU7SUFBUyxtQ0FBUztJQUU1Qyx5QkFDUyxTQUEyQixFQUMxQixJQUFVO1FBRnBCLFlBSUUsa0JBQU0sU0FBUyxDQUFDLFNBRWpCO1FBTFEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUdsQixLQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFRLENBQUMsUUFBUSxDQUFDOztJQUNwQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLHNCQUFrQixDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBcUMsaUJBQVMsR0FjN0M7QUFkWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSVMsd0JBQWdCO1FBQ3BCLFdBQUk7R0FKVCxlQUFlLENBYzNCO0FBZFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgQW5hbHl0aWNzLCBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBOYW1lTGlzdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwXHJcbiAgKSB7XHJcbiAgICBzdXBlcihhbmFseXRpY3MpO1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IE5hbWVMaXN0LkNBVEVHT1JZO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxzdHJpbmc+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtDb25maWcuSVNfTU9CSUxFX05BVElWRSgpID8gJy8nIDogJyd9YXNzZXRzL2RhdGEuanNvbmApXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=