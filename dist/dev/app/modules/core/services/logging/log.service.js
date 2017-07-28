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
var _ = require("lodash");
var config_1 = require("../../utils/config");
var log_target_1 = require("./log.target");
var LogService = (function () {
    function LogService(targets) {
        this.targets = targets;
    }
    LogService.prototype.debug = function () {
        var _this = this;
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (config_1.Config.DEBUG.LEVEL_4) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, msg, log_target_1.LogLevel.Debug); }));
        }
        return Promise.resolve();
    };
    LogService.prototype.error = function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_3) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, log_target_1.LogLevel.Error); }));
        }
        return Promise.resolve();
    };
    LogService.prototype.warn = function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_2) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, log_target_1.LogLevel.Warning); }));
        }
        return Promise.resolve();
    };
    LogService.prototype.info = function () {
        var _this = this;
        var err = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            err[_i] = arguments[_i];
        }
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_1) {
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, err, log_target_1.LogLevel.Info); }));
        }
        return Promise.resolve();
    };
    LogService.prototype.logEvent = function (target, message, level) {
        return target.log({ level: level, message: message });
    };
    LogService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(log_target_1.LogTarget)),
        __metadata("design:paramtypes", [Array])
    ], LogService);
    return LogService;
}());
exports.LogService = LogService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvbG9nZ2luZy9sb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUErRDtBQUMvRCwwQkFBNEI7QUFFNUIsNkNBQTRDO0FBRTVDLDJDQUE2RDtBQUc3RDtJQUVFLG9CQUF3QyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQzVELENBQUM7SUFHTSwwQkFBSyxHQUFaO1FBQUEsaUJBTUM7UUFOWSxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNqQixFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLHFCQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHTSwwQkFBSyxHQUFaO1FBQUEsaUJBS0M7UUFMWSxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNqQixFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLHFCQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHTSx5QkFBSSxHQUFYO1FBQUEsaUJBS0M7UUFMVyxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNoQixFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLHFCQUFRLENBQUMsT0FBTyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHTSx5QkFBSSxHQUFYO1FBQUEsaUJBS0M7UUFMVyxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNoQixFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLHFCQUFRLENBQUMsSUFBSSxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyw2QkFBUSxHQUFoQixVQUFpQixNQUFpQixFQUFFLE9BQXdCLEVBQUUsS0FBZTtRQUMzRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXhDVSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7UUFHRyxXQUFBLGFBQU0sQ0FBQyxzQkFBUyxDQUFDLENBQUE7O09BRnBCLFVBQVUsQ0F5Q3RCO0lBQUQsaUJBQUM7Q0F6Q0QsQUF5Q0MsSUFBQTtBQXpDWSxnQ0FBVSIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2xvZ2dpbmcvbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcnO1xyXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4uL2NvbnNvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1RhcmdldCwgTG9nRXZlbnQsIExvZ0xldmVsIH0gZnJvbSAnLi9sb2cudGFyZ2V0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvciggQEluamVjdChMb2dUYXJnZXQpIHByaXZhdGUgdGFyZ2V0czogTG9nVGFyZ2V0W10pIHtcclxuICB9XHJcblxyXG4gIC8vIGRlYnVnIChzdGFuZGFyZCBvdXRwdXQpXHJcbiAgcHVibGljIGRlYnVnKC4uLm1zZykge1xyXG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUuZGVidWcgZG9lcyBub3Qgd29yayBvbiB7Tn0gYXBwcy4uLiB1c2UgYGxvZ2BcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBtc2csIExvZ0xldmVsLkRlYnVnKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZXJyb3JcclxuICBwdWJsaWMgZXJyb3IoLi4uZXJyKSB7XHJcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzMpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBlcnIsIExvZ0xldmVsLkVycm9yKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gd2FyblxyXG4gIHB1YmxpYyB3YXJuKC4uLmVycikge1xyXG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8yKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5XYXJuaW5nKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5mb1xyXG4gIHB1YmxpYyBpbmZvKC4uLmVycikge1xyXG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8xKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5JbmZvKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2dFdmVudCh0YXJnZXQ6IExvZ1RhcmdldCwgbWVzc2FnZTogc3RyaW5nIHwgT2JqZWN0LCBsZXZlbDogTG9nTGV2ZWwpIHtcclxuICAgIHJldHVybiB0YXJnZXQubG9nKHsgbGV2ZWw6IGxldmVsLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
