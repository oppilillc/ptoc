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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBb0Q7QUFDcEQsa0RBQWtEO0FBVWxELElBQWEsY0FBYztJQWV6Qix3QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQWZELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQVFILHFCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUU7WUFDVCxxQkFBcUI7U0FDdEI7S0FDRixDQUFDO3FDQWdCOEIsZUFBUTtHQWYzQixjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZHVsZXMvY29yZS9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICdhYm91dC5jb21wb25lbnQuY3NzJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuXG4gIC8vIEp1c3Qgb25lIHdheSB5b3UgY291bGQgaGFuZGxlIHRoZSB7Tn0gYHVpL3BhZ2VgIFBhZ2UgY2xhc3NcbiAgLy8gaW4gYSBzaGFyZWQgY29tcG9uZW50Li4uXG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcbiAgcHJpdmF0ZSBnZXQgcGFnZSgpIHtcbiAgICBpZiAoQ29uZmlnLlBhZ2VDbGFzcykge1xuICAgICAgaWYgKCF0aGlzLl9wYWdlKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSB0aGlzLmluamVjdG9yLmdldChDb25maWcuUGFnZUNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBUaGlzIGlzIGhlcmUgYXMgYW4gZXhhbXBsZVxuICAgIC8vIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAvLyAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxufVxuIl19