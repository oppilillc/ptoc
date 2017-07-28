"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var index_1 = require("../../core/index");
var index_2 = require("../../analytics/index");
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
    NameListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_2.AnalyticsService,
            http_1.Http])
    ], NameListService);
    return NameListService;
}(index_2.Analytics));
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBTXJDLDBDQUEwQztBQUMxQywrQ0FBb0U7QUFHcEUsMENBQTRDO0FBRzVDO0lBQXFDLG1DQUFTO0lBRTVDLHlCQUNTLFNBQTJCLEVBQzFCLElBQVU7UUFGcEIsWUFJRSxrQkFBTSxTQUFTLENBQUMsU0FFakI7UUFMUSxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMxQixVQUFJLEdBQUosSUFBSSxDQUFNO1FBR2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQVEsQ0FBQyxRQUFRLENBQUM7O0lBQ3BDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUcsY0FBTSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsc0JBQWtCLENBQUM7YUFDNUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFiVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSVMsd0JBQWdCO1lBQ3BCLFdBQUk7T0FKVCxlQUFlLENBYzNCO0lBQUQsc0JBQUM7Q0FkRCxBQWNDLENBZG9DLGlCQUFTLEdBYzdDO0FBZFksMENBQWUiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2FtcGxlL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEFuYWx5dGljcywgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0U2VydmljZSBleHRlbmRzIEFuYWx5dGljcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICkge1xyXG4gICAgc3VwZXIoYW5hbHl0aWNzKTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBOYW1lTGlzdC5DQVRFR09SWTtcclxuICB9XHJcblxyXG4gIGdldE5hbWVzKCk6IE9ic2VydmFibGU8QXJyYXk8c3RyaW5nPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9kYXRhLmpzb25gKVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcbn1cclxuIl19
