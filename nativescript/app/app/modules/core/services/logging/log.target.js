Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var LogTargetOptions = (function () {
    function LogTargetOptions() {
    }
    return LogTargetOptions;
}());
exports.LogTargetOptions = LogTargetOptions;
var LogTarget = (function () {
    function LogTarget() {
    }
    return LogTarget;
}());
exports.LogTarget = LogTarget;
var LogTargetBase = (function () {
    function LogTargetBase(options) {
        this.options = options;
    }
    LogTargetBase.prototype.log = function (event) {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    };
    return LogTargetBase;
}());
exports.LogTargetBase = LogTargetBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZy50YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQix5Q0FBUyxDQUFBO0lBQ1QsdUNBQVEsQ0FBQTtJQUNSLDZDQUFXLENBQUE7SUFDWCx5Q0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBT0Q7SUFBQTtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRnFCLDRDQUFnQjtBQUl0QztJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGcUIsOEJBQVM7QUFJL0I7SUFDRSx1QkFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFDL0MsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxLQUFlO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHSCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWnFCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIERlYnVnID0gMCxcclxuICBJbmZvID0gMSxcclxuICBXYXJuaW5nID0gMixcclxuICBFcnJvciA9IDRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2dFdmVudCB7XHJcbiAgbWVzc2FnZTogc3RyaW5nIHwgT2JqZWN0O1xyXG4gIGxldmVsOiBMb2dMZXZlbDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldE9wdGlvbnMge1xyXG4gIG1pbkxvZ0xldmVsOiBMb2dMZXZlbDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldCB7XHJcbiAgYWJzdHJhY3QgbG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldEJhc2UgaW1wbGVtZW50cyBMb2dUYXJnZXQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBMb2dUYXJnZXRPcHRpb25zKSB7XHJcbiAgfVxyXG5cclxuICBsb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmIChldmVudC5sZXZlbCA+PSB0aGlzLm9wdGlvbnMubWluTG9nTGV2ZWwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud3JpdGVUb0xvZyhldmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVUb0xvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT47XHJcbn1cclxuIl19