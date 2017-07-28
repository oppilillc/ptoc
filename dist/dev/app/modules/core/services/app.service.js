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
var core_1 = require("@angular/core");
var analytics_service_1 = require("../../../modules/analytics/services/analytics.service");
var log_service_1 = require("./logging/log.service");
var config_1 = require("../utils/config");
var AppService = (function () {
    function AppService(analytics, log) {
        this.analytics = analytics;
        this.log = log;
        this.log.debug("AppService -> Config env: " + config_1.Config.ENVIRONMENT().ENV);
    }
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [analytics_service_1.AnalyticsService, log_service_1.LogService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFHM0MsMkZBQXlGO0FBQ3pGLHFEQUFtRDtBQUNuRCwwQ0FBeUM7QUFHekM7SUFDRSxvQkFBbUIsU0FBMkIsRUFBUyxHQUFlO1FBQW5ELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBNkIsZUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFIVSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBRW1CLG9DQUFnQixFQUFjLHdCQUFVO09BRDNELFVBQVUsQ0FJdEI7SUFBRCxpQkFBQztDQUpELEFBSUMsSUFBQTtBQUpZLGdDQUFVIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvYW5hbHl0aWNzL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nZ2luZy9sb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLCBwdWJsaWMgbG9nOiBMb2dTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxvZy5kZWJ1ZyhgQXBwU2VydmljZSAtPiBDb25maWcgZW52OiAke0NvbmZpZy5FTlZJUk9OTUVOVCgpLkVOVn1gKTtcclxuICB9XHJcbn1cclxuIl19
