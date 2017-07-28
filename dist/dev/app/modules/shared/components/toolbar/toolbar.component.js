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
var log_service_1 = require("../../../core/services/logging/log.service");
var ToolbarComponent = (function () {
    function ToolbarComponent(log) {
        this.log = log;
    }
    ToolbarComponent.prototype.openLanguages = function (e) {
        this.log.debug('openLanguages');
    };
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: [
                'toolbar.component.css',
            ],
        }),
        __metadata("design:paramtypes", [log_service_1.LogService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFHMUMsMEVBQXdFO0FBVXhFO0lBRUUsMEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUVoQyx3Q0FBYSxHQUFwQixVQUFxQixDQUFNO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFOVSxnQkFBZ0I7UUFSNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCx1QkFBdUI7YUFDeEI7U0FDRixDQUFDO3lDQUd5Qix3QkFBVTtPQUZ4QixnQkFBZ0IsQ0FPNUI7SUFBRCx1QkFBQztDQVBELEFBT0MsSUFBQTtBQVBZLDRDQUFnQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvbG9nZ2luZy9sb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcclxuICAgICd0b29sYmFyLmNvbXBvbmVudC5jc3MnLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2c6IExvZ1NlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBvcGVuTGFuZ3VhZ2VzKGU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2cuZGVidWcoJ29wZW5MYW5ndWFnZXMnKTtcclxuICB9XHJcbn1cclxuIl19
