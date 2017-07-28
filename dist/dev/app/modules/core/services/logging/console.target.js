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
    ConsoleTarget = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [console_service_1.ConsoleService, log_target_1.LogTargetOptions])
    ], ConsoleTarget);
    return ConsoleTarget;
}(log_target_1.LogTargetBase));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvbG9nZ2luZy9jb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUQ7QUFDckQsMkNBQThGO0FBQzlGLHNEQUFvRDtBQUdwRDtJQUFtQyxpQ0FBYTtJQUM5Qyx1QkFBb0IsT0FBdUIsRUFBRSxPQUF5QjtRQUF0RSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQWdCOztJQUUzQyxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEtBQWU7UUFDeEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxxQkFBUSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxxQkFBUSxDQUFDLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxxQkFBUSxDQUFDLE9BQU87Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxxQkFBUSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQXJCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRWtCLGdDQUFjLEVBQVcsNkJBQWdCO09BRDNELGFBQWEsQ0FzQnpCO0lBQUQsb0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QmtDLDBCQUFhLEdBc0IvQztBQXRCWSxzQ0FBYTtBQXdCMUIsNkJBQW9DLEtBQWUsRUFBRSxjQUE4QjtJQUNqRixNQUFNLENBQUMsSUFBSSxhQUFhLENBQUMsY0FBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUZELGtEQUVDO0FBRUQsOEJBQXFDLFFBQWtCO0lBQ3JELE1BQU0sQ0FBQztRQUNMLE9BQU8sRUFBRSxzQkFBUyxFQUFFLElBQUksRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDMUMsS0FBSyxFQUFFLElBQUk7UUFDWCxVQUFVLEVBQUUsVUFBQyxDQUFpQixJQUFLLE9BQUEsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQS9DLENBQStDO0tBQ25GLENBQUM7QUFDSixDQUFDO0FBTkQsb0RBTUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2NvbnNvbGUudGFyZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9nVGFyZ2V0QmFzZSwgTG9nRXZlbnQsIExvZ0xldmVsLCBMb2dUYXJnZXRPcHRpb25zLCBMb2dUYXJnZXQgfSBmcm9tICcuL2xvZy50YXJnZXQnO1xyXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4uL2NvbnNvbGUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlVGFyZ2V0IGV4dGVuZHMgTG9nVGFyZ2V0QmFzZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25zb2xlOiBDb25zb2xlU2VydmljZSwgb3B0aW9uczogTG9nVGFyZ2V0T3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCkge1xyXG4gICAgc3dpdGNoIChldmVudC5sZXZlbCkge1xyXG4gICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coZXZlbnQubWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTG9nTGV2ZWwuSW5mbzpcclxuICAgICAgICB0aGlzLmNvbnNvbGUuaW5mbyhldmVudC5tZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxyXG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGV2ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgIHRoaXMuY29uc29sZS5lcnJvcihldmVudC5tZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25zb2xlVGFyZ2V0KGxldmVsOiBMb2dMZXZlbCwgY29uc29sZVNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBDb25zb2xlVGFyZ2V0KGNvbnNvbGVTZXJ2aWNlLCB7IG1pbkxvZ0xldmVsOiBsZXZlbCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25zb2xlVGFyZ2V0KGxvZ0xldmVsOiBMb2dMZXZlbCk6IFByb3ZpZGVyIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvdmlkZTogTG9nVGFyZ2V0LCBkZXBzOiBbQ29uc29sZVNlcnZpY2VdLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbiAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IGxvZ0xldmVsIH0pXHJcbiAgfTtcclxufVxyXG4iXX0=
