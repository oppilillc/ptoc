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
var index_1 = require("../../modules/core/index");
var AboutComponent = (function () {
    function AboutComponent(injector) {
        this.injector = injector;
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
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFvRDtBQUNwRCxrREFBa0Q7QUFVbEQ7SUFlRSx3QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUt0QyxDQUFDO0lBZkQsc0JBQVksZ0NBQUk7YUFBaEI7WUFDRSxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUNILENBQUM7OztPQUFBO0lBYlUsY0FBYztRQVIxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFO2dCQUNULHFCQUFxQjthQUN0QjtTQUNGLENBQUM7eUNBZ0I4QixlQUFRO09BZjNCLGNBQWMsQ0FxQjFCO0lBQUQscUJBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQXJCWSx3Q0FBYyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL21vZHVsZXMvY29yZS9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1xyXG4gICAgJ2Fib3V0LmNvbXBvbmVudC5jc3MnLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XHJcblxyXG4gIC8vIEp1c3Qgb25lIHdheSB5b3UgY291bGQgaGFuZGxlIHRoZSB7Tn0gYHVpL3BhZ2VgIFBhZ2UgY2xhc3NcclxuICAvLyBpbiBhIHNoYXJlZCBjb21wb25lbnQuLi5cclxuICBwcml2YXRlIF9wYWdlOiBhbnk7XHJcbiAgcHJpdmF0ZSBnZXQgcGFnZSgpIHtcclxuICAgIGlmIChDb25maWcuUGFnZUNsYXNzKSB7XHJcbiAgICAgIGlmICghdGhpcy5fcGFnZSkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2UgPSB0aGlzLmluamVjdG9yLmdldChDb25maWcuUGFnZUNsYXNzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgLy8gVGhpcyBpcyBoZXJlIGFzIGFuIGV4YW1wbGVcclxuICAgIC8vIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgIC8vICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
