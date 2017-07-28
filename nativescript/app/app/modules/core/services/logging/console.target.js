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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXFEO0FBQ3JELDJDQUE4RjtBQUM5RixzREFBb0Q7QUFHcEQsSUFBYSxhQUFhO0lBQVMsaUNBQWE7SUFDOUMsdUJBQW9CLE9BQXVCLEVBQUUsT0FBeUI7UUFBdEUsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFnQjs7SUFFM0MsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFlO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUsscUJBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxJQUFJO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxPQUFPO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUsscUJBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF0QkQsQ0FBbUMsMEJBQWEsR0FzQi9DO0FBdEJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FFa0IsZ0NBQWMsRUFBVyw2QkFBZ0I7R0FEM0QsYUFBYSxDQXNCekI7QUF0Qlksc0NBQWE7QUF3QjFCLDZCQUFvQyxLQUFlLEVBQUUsY0FBOEI7SUFDakYsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLGNBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFGRCxrREFFQztBQUVELDhCQUFxQyxRQUFrQjtJQUNyRCxNQUFNLENBQUM7UUFDTCxPQUFPLEVBQUUsc0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzFDLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFLFVBQUMsQ0FBaUIsSUFBSyxPQUFBLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUEvQyxDQUErQztLQUNuRixDQUFDO0FBQ0osQ0FBQztBQU5ELG9EQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9nVGFyZ2V0QmFzZSwgTG9nRXZlbnQsIExvZ0xldmVsLCBMb2dUYXJnZXRPcHRpb25zLCBMb2dUYXJnZXQgfSBmcm9tICcuL2xvZy50YXJnZXQnO1xyXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4uL2NvbnNvbGUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlVGFyZ2V0IGV4dGVuZHMgTG9nVGFyZ2V0QmFzZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlU2VydmljZSwgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCkge1xyXG4gICAgc3dpdGNoIChldmVudC5sZXZlbCkge1xyXG4gICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coZXZlbnQubWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mbzpcclxuICAgICAgICB0aGlzLmNvbnNvbGUuaW5mbyhldmVudC5tZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxyXG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGV2ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgIHRoaXMuY29uc29sZS5lcnJvcihldmVudC5tZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25zb2xlVGFyZ2V0KGxldmVsOiBMb2dMZXZlbCwgY29uc29sZVNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBDb25zb2xlVGFyZ2V0KGNvbnNvbGVTZXJ2aWNlLCB7IG1pbkxvZ0xldmVsOiBsZXZlbCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25zb2xlVGFyZ2V0KGxvZ0xldmVsOiBMb2dMZXZlbCk6IFByb3ZpZGVyIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvdmlkZTogTG9nVGFyZ2V0LCBkZXBzOiBbQ29uc29sZVNlcnZpY2VdLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbiAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IGxvZ0xldmVsIH0pXHJcbiAgfTtcclxufVxyXG4iXX0=