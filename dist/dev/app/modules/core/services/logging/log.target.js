"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvbG9nZ2luZy9sb2cudGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLHlDQUFTLENBQUE7SUFDVCx1Q0FBUSxDQUFBO0lBQ1IsNkNBQVcsQ0FBQTtJQUNYLHlDQUFTLENBQUE7QUFDWCxDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkI7QUFPRDtJQUFBO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGcUIsNENBQWdCO0FBSXRDO0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZxQiw4QkFBUztBQUkvQjtJQUNFLHVCQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUMvQyxDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEtBQWU7UUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdILG9CQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFacUIsc0NBQWEiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2xvZy50YXJnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgRGVidWcgPSAwLFxyXG4gIEluZm8gPSAxLFxyXG4gIFdhcm5pbmcgPSAyLFxyXG4gIEVycm9yID0gNFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ0V2ZW50IHtcclxuICBtZXNzYWdlOiBzdHJpbmcgfCBPYmplY3Q7XHJcbiAgbGV2ZWw6IExvZ0xldmVsO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0T3B0aW9ucyB7XHJcbiAgbWluTG9nTGV2ZWw6IExvZ0xldmVsO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0IHtcclxuICBhYnN0cmFjdCBsb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0QmFzZSBpbXBsZW1lbnRzIExvZ1RhcmdldCB7XHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IExvZ1RhcmdldE9wdGlvbnMpIHtcclxuICB9XHJcblxyXG4gIGxvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKGV2ZW50LmxldmVsID49IHRoaXMub3B0aW9ucy5taW5Mb2dMZXZlbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy53cml0ZVRvTG9nKGV2ZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCk6IFByb21pc2U8YW55PjtcclxufVxyXG4iXX0=
