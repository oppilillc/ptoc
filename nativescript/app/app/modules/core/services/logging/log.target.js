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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZy50YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQix5Q0FBUyxDQUFBO0lBQ1QsdUNBQVEsQ0FBQTtJQUNSLDZDQUFXLENBQUE7SUFDWCx5Q0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBS25CO0FBT0Q7SUFBQTtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRnFCLDRDQUFnQjtBQUl0QztJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGcUIsOEJBQVM7QUFJL0I7SUFDRSx1QkFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFDL0MsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxLQUFlO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHSCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWnFCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBEZWJ1ZyA9IDAsXG4gIEluZm8gPSAxLFxuICBXYXJuaW5nID0gMixcbiAgRXJyb3IgPSA0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nRXZlbnQge1xuICBtZXNzYWdlOiBzdHJpbmcgfCBPYmplY3Q7XG4gIGxldmVsOiBMb2dMZXZlbDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldE9wdGlvbnMge1xuICBtaW5Mb2dMZXZlbDogTG9nTGV2ZWw7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dUYXJnZXQge1xuICBhYnN0cmFjdCBsb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0QmFzZSBpbXBsZW1lbnRzIExvZ1RhcmdldCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBMb2dUYXJnZXRPcHRpb25zKSB7XG4gIH1cblxuICBsb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoZXZlbnQubGV2ZWwgPj0gdGhpcy5vcHRpb25zLm1pbkxvZ0xldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy53cml0ZVRvTG9nKGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHdyaXRlVG9Mb2coZXZlbnQ6IExvZ0V2ZW50KTogUHJvbWlzZTxhbnk+O1xufVxuIl19