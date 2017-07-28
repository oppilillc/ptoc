"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (msg) { return; };
    WindowService.prototype.confirm = function (msg) { return; };
    WindowService = __decorate([
        core_1.Injectable()
    ], WindowService);
    return WindowService;
}());
exports.WindowService = WindowService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFNM0M7SUFEQTtRQUdTLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUk1QixDQUFDO0lBSFEsNkJBQUssR0FBWixVQUFhLEdBQVcsSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLCtCQUFPLEdBQWQsVUFBZSxHQUFXLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUxsQyxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FQRCxBQU9DLElBQUE7QUFQWSxzQ0FBYSIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgSVdpbmRvdyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXdpbmRvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dTZXJ2aWNlIGltcGxlbWVudHMgSVdpbmRvdyB7XHJcbiAgXHJcbiAgcHVibGljIG5hdmlnYXRvcjogYW55ID0ge307XHJcbiAgcHVibGljIGxvY2F0aW9uOiBhbnkgPSB7fTtcclxuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XHJcbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XHJcblxyXG59XHJcbiJdfQ==
