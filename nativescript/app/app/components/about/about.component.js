Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../modules/core/index");
var AboutComponent = (function () {
    function AboutComponent(injector) {
        this.injector = injector;
        // This is here as an example
        // if (this.page) {
        //   this.page.actionBarHidden = true;
        // }
    }
    Object.defineProperty(AboutComponent.prototype, "page", {
        get: function () {
            if (index_1.Config.PageClass) {
                if (!this._page) {
                    this._page = this.injector.get(index_1.Config.PageClass);
                }
                return this._page;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-about',
        templateUrl: 'about.component.html',
        styleUrls: [
            'about.component.css',
        ],
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBb0Q7QUFDcEQsa0RBQWtEO0FBVWxELElBQWEsY0FBYztJQWV6Qix3QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQWZELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQVFILHFCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUU7WUFDVCxxQkFBcUI7U0FDdEI7S0FDRixDQUFDO3FDQWdCOEIsZUFBUTtHQWYzQixjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9jb3JlL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXHJcbiAgICAnYWJvdXQuY29tcG9uZW50LmNzcycsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcclxuXHJcbiAgLy8gSnVzdCBvbmUgd2F5IHlvdSBjb3VsZCBoYW5kbGUgdGhlIHtOfSBgdWkvcGFnZWAgUGFnZSBjbGFzc1xyXG4gIC8vIGluIGEgc2hhcmVkIGNvbXBvbmVudC4uLlxyXG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcclxuICBwcml2YXRlIGdldCBwYWdlKCkge1xyXG4gICAgaWYgKENvbmZpZy5QYWdlQ2xhc3MpIHtcclxuICAgICAgaWYgKCF0aGlzLl9wYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvbmZpZy5QYWdlQ2xhc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAvLyBUaGlzIGlzIGhlcmUgYXMgYW4gZXhhbXBsZVxyXG4gICAgLy8gaWYgKHRoaXMucGFnZSkge1xyXG4gICAgLy8gICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuIl19