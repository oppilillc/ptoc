Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var log_target_1 = require("./log.target");
var console_service_1 = require("../console.service");
var ConsoleTarget = (function (_super) {
    __extends(ConsoleTarget, _super);
    function ConsoleTarget(console, options) {
        var _this = _super.call(this, options) || this;
        _this.console = console;
        return _this;
    }
    ConsoleTarget.prototype.writeToLog = function (event) {
        switch (event.level) {
            case log_target_1.LogLevel.Debug:
                this.console.log(event.message);
                break;
            case log_target_1.LogLevel.Info:
                this.console.info(event.message);
                break;
            case log_target_1.LogLevel.Warning:
                this.console.warn(event.message);
                break;
            case log_target_1.LogLevel.Error:
                this.console.error(event.message);
                break;
        }
        return Promise.resolve();
    };
    return ConsoleTarget;
}(log_target_1.LogTargetBase));
ConsoleTarget = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [console_service_1.ConsoleService, log_target_1.LogTargetOptions])
], ConsoleTarget);
exports.ConsoleTarget = ConsoleTarget;
function createConsoleTarget(level, consoleService) {
    return new ConsoleTarget(consoleService, { minLogLevel: level });
}
exports.createConsoleTarget = createConsoleTarget;
function provideConsoleTarget(logLevel) {
    return {
        provide: log_target_1.LogTarget, deps: [console_service_1.ConsoleService],
        multi: true,
        useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: logLevel }); }
    };
}
exports.provideConsoleTarget = provideConsoleTarget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXFEO0FBQ3JELDJDQUE4RjtBQUM5RixzREFBb0Q7QUFHcEQsSUFBYSxhQUFhO0lBQVMsaUNBQWE7SUFDOUMsdUJBQW9CLE9BQXVCLEVBQUUsT0FBeUI7UUFBdEUsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFnQjs7SUFFM0MsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFlO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUsscUJBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxJQUFJO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxPQUFPO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF0QkQsQ0FBbUMsMEJBQWEsR0FzQi9DO0FBdEJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FFa0IsZ0NBQWMsRUFBVyw2QkFBZ0I7R0FEM0QsYUFBYSxDQXNCekI7QUF0Qlksc0NBQWE7QUF3QjFCLDZCQUFvQyxLQUFlLEVBQUUsY0FBOEI7SUFDakYsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFGRCxrREFFQztBQUVELDhCQUFxQyxRQUFrQjtJQUNyRCxNQUFNLENBQUM7UUFDTCxPQUFPLEVBQUUsc0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzFDLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLFVBQUMsQ0FBaUIsSUFBSyxPQUFBLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUEvQyxDQUErQztLQUNuRixDQUFDO0FBQ0osQ0FBQztBQU5ELG9EQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ1RhcmdldEJhc2UsIExvZ0V2ZW50LCBMb2dMZXZlbCwgTG9nVGFyZ2V0T3B0aW9ucywgTG9nVGFyZ2V0IH0gZnJvbSAnLi9sb2cudGFyZ2V0JztcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uc29sZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnNvbGVUYXJnZXQgZXh0ZW5kcyBMb2dUYXJnZXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlU2VydmljZSwgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhldmVudDogTG9nRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmxldmVsKSB7XG4gICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mbzpcbiAgICAgICAgdGhpcy5jb25zb2xlLmluZm8oZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxuICAgICAgICB0aGlzLmNvbnNvbGUud2FybihldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxuICAgICAgICB0aGlzLmNvbnNvbGUuZXJyb3IoZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnNvbGVUYXJnZXQobGV2ZWw6IExvZ0xldmVsLCBjb25zb2xlU2VydmljZTogQ29uc29sZVNlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBDb25zb2xlVGFyZ2V0KGNvbnNvbGVTZXJ2aWNlLCB7IG1pbkxvZ0xldmVsOiBsZXZlbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25zb2xlVGFyZ2V0KGxvZ0xldmVsOiBMb2dMZXZlbCk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBMb2dUYXJnZXQsIGRlcHM6IFtDb25zb2xlU2VydmljZV0sXG4gICAgbXVsdGk6IHRydWUsXG4gICAgdXNlRmFjdG9yeTogKGM6IENvbnNvbGVTZXJ2aWNlKSA9PiBuZXcgQ29uc29sZVRhcmdldChjLCB7IG1pbkxvZ0xldmVsOiBsb2dMZXZlbCB9KVxuICB9O1xufVxuIl19