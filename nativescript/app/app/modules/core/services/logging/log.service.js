Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var _ = require("lodash");
// module
var config_1 = require("../../utils/config");
var log_target_1 = require("./log.target");
var LogService = (function () {
    function LogService(targets) {
        this.targets = targets;
    }
    // debug (standard output)
    LogService.prototype.debug = function () {
        var _this = this;
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (config_1.Config.DEBUG.LEVEL_4) {
            // console.debug does not work on {N} apps... use `log`
            return Promise.all(_.map(this.targets, function (logger) { return _this.logEvent(logger, msg, log_target_1.LogLevel.Debug); }));
        }
        return Promise.resolve();
    };
    // error
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
    // warn
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
    // info
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
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(log_target_1.LogTarget)),
    __metadata("design:paramtypes", [Array])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUErRDtBQUMvRCwwQkFBNEI7QUFDNUIsU0FBUztBQUNULDZDQUE0QztBQUU1QywyQ0FBNkQ7QUFHN0QsSUFBYSxVQUFVO0lBRXJCLG9CQUF3QyxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQzVELENBQUM7SUFFRCwwQkFBMEI7SUFDbkIsMEJBQUssR0FBWjtRQUFBLGlCQU1DO1FBTlksYUFBTTthQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07WUFBTix3QkFBTTs7UUFDakIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLHVEQUF1RDtZQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUscUJBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDRCwwQkFBSyxHQUFaO1FBQUEsaUJBS0M7UUFMWSxhQUFNO2FBQU4sVUFBTSxFQUFOLHFCQUFNLEVBQU4sSUFBTTtZQUFOLHdCQUFNOztRQUNqQixFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxlQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLHFCQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO0lBQ0EseUJBQUksR0FBWDtRQUFBLGlCQUtDO1FBTFcsYUFBTTthQUFOLFVBQU0sRUFBTixxQkFBTSxFQUFOLElBQU07WUFBTix3QkFBTTs7UUFDaEIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUMsQ0FBQztRQUNsRyxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztJQUNBLHlCQUFJLEdBQVg7UUFBQSxpQkFLQztRQUxXLGFBQU07YUFBTixVQUFNLEVBQU4scUJBQU0sRUFBTixJQUFNO1lBQU4sd0JBQU07O1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUscUJBQVEsQ0FBQyxJQUFJLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLDZCQUFRLEdBQWhCLFVBQWlCLE1BQWlCLEVBQUUsT0FBd0IsRUFBRSxLQUFlO1FBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBekNZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtJQUdHLFdBQUEsYUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQTs7R0FGcEIsVUFBVSxDQXlDdEI7QUF6Q1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi91dGlscy9jb25maWcnO1xyXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4uL2NvbnNvbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ1RhcmdldCwgTG9nRXZlbnQsIExvZ0xldmVsIH0gZnJvbSAnLi9sb2cudGFyZ2V0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvciggQEluamVjdChMb2dUYXJnZXQpIHByaXZhdGUgdGFyZ2V0czogTG9nVGFyZ2V0W10pIHtcclxuICB9XHJcblxyXG4gIC8vIGRlYnVnIChzdGFuZGFyZCBvdXRwdXQpXHJcbiAgcHVibGljIGRlYnVnKC4uLm1zZykge1xyXG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUuZGVidWcgZG9lcyBub3Qgd29yayBvbiB7Tn0gYXBwcy4uLiB1c2UgYGxvZ2BcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBtc2csIExvZ0xldmVsLkRlYnVnKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZXJyb3JcclxuICBwdWJsaWMgZXJyb3IoLi4uZXJyKSB7XHJcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzMpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8ubWFwKHRoaXMudGFyZ2V0cywgbG9nZ2VyID0+IHRoaXMubG9nRXZlbnQobG9nZ2VyLCBlcnIsIExvZ0xldmVsLkVycm9yKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gd2FyblxyXG4gIHB1YmxpYyB3YXJuKC4uLmVycikge1xyXG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8yKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5XYXJuaW5nKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5mb1xyXG4gIHB1YmxpYyBpbmZvKC4uLmVycikge1xyXG4gICAgaWYgKENvbmZpZy5ERUJVRy5MRVZFTF80IHx8IENvbmZpZy5ERUJVRy5MRVZFTF8xKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLm1hcCh0aGlzLnRhcmdldHMsIGxvZ2dlciA9PiB0aGlzLmxvZ0V2ZW50KGxvZ2dlciwgZXJyLCBMb2dMZXZlbC5JbmZvKSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2dFdmVudCh0YXJnZXQ6IExvZ1RhcmdldCwgbWVzc2FnZTogc3RyaW5nIHwgT2JqZWN0LCBsZXZlbDogTG9nTGV2ZWwpIHtcclxuICAgIHJldHVybiB0YXJnZXQubG9nKHsgbGV2ZWw6IGxldmVsLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=