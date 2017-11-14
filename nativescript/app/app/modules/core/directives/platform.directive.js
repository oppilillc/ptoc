Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// module
var window_service_1 = require("../services/window.service");
var PlatformDirective = (function () {
    function PlatformDirective(el, renderer, win) {
        this.el = el;
        this.renderer = renderer;
        this.win = win;
        var platformClass = 'web';
        var agent = win.navigator.userAgent.toLowerCase();
        if (agent.indexOf('electron') > -1) {
            platformClass = 'desktop';
        }
        else if (agent.indexOf('nativescript') > -1) {
            platformClass = 'nativescript';
        }
        renderer.setElementClass(el.nativeElement, platformClass, true);
    }
    return PlatformDirective;
}());
PlatformDirective = __decorate([
    core_1.Directive({
        selector: '[platform]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, window_service_1.WindowService])
], PlatformDirective);
exports.PlatformDirective = PlatformDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhdGZvcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQWdFO0FBRWhFLFNBQVM7QUFDVCw2REFBMkQ7QUFLM0QsSUFBYSxpQkFBaUI7SUFFNUIsMkJBQW9CLEVBQWMsRUFBVSxRQUFrQixFQUFVLEdBQWtCO1FBQXRFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUN4RixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLGFBQWEsR0FBRyxjQUFjLENBQUM7UUFDakMsQ0FBQztRQUNELFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxpQkFBaUI7SUFIN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7cUNBR3dCLGlCQUFVLEVBQW9CLGVBQVEsRUFBZSw4QkFBYTtHQUYvRSxpQkFBaUIsQ0FZN0I7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BsYXRmb3JtXSdcbn0pXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1EaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIHdpbjogV2luZG93U2VydmljZSkge1xuICAgIGxldCBwbGF0Zm9ybUNsYXNzID0gJ3dlYic7XG4gICAgbGV0IGFnZW50ID0gd2luLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoYWdlbnQuaW5kZXhPZignZWxlY3Ryb24nKSA+IC0xKSB7XG4gICAgICBwbGF0Zm9ybUNsYXNzID0gJ2Rlc2t0b3AnO1xuICAgIH0gZWxzZSBpZiAoYWdlbnQuaW5kZXhPZignbmF0aXZlc2NyaXB0JykgPiAtMSkge1xuICAgICAgcGxhdGZvcm1DbGFzcyA9ICduYXRpdmVzY3JpcHQnO1xuICAgIH0gXG4gICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHBsYXRmb3JtQ2xhc3MsIHRydWUpO1xuICB9XG59XG4iXX0=