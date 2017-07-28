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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhdGZvcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQWdFO0FBRWhFLFNBQVM7QUFDVCw2REFBMkQ7QUFLM0QsSUFBYSxpQkFBaUI7SUFFNUIsMkJBQW9CLEVBQWMsRUFBVSxRQUFrQixFQUFVLEdBQWtCO1FBQXRFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUN4RixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLGFBQWEsR0FBRyxjQUFjLENBQUM7UUFDakMsQ0FBQztRQUNELFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxpQkFBaUI7SUFIN0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO0tBQ3ZCLENBQUM7cUNBR3dCLGlCQUFVLEVBQW9CLGVBQVEsRUFBZSw4QkFBYTtHQUYvRSxpQkFBaUIsQ0FZN0I7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvd2luZG93LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcGxhdGZvcm1dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1EaXJlY3RpdmUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB3aW46IFdpbmRvd1NlcnZpY2UpIHtcclxuICAgIGxldCBwbGF0Zm9ybUNsYXNzID0gJ3dlYic7XHJcbiAgICBsZXQgYWdlbnQgPSB3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKGFnZW50LmluZGV4T2YoJ2VsZWN0cm9uJykgPiAtMSkge1xyXG4gICAgICBwbGF0Zm9ybUNsYXNzID0gJ2Rlc2t0b3AnO1xyXG4gICAgfSBlbHNlIGlmIChhZ2VudC5pbmRleE9mKCduYXRpdmVzY3JpcHQnKSA+IC0xKSB7XHJcbiAgICAgIHBsYXRmb3JtQ2xhc3MgPSAnbmF0aXZlc2NyaXB0JztcclxuICAgIH0gXHJcbiAgICByZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcGxhdGZvcm1DbGFzcywgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==