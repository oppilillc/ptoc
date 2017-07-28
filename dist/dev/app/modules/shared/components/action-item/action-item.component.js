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
var ActionItemComponent = (function () {
    function ActionItemComponent(el) {
        this.el = el;
    }
    ActionItemComponent.prototype.ngOnInit = function () {
        if (this.iosPosition === 'right' || this.androidPosition === 'popup') {
            var cls = 'btn-right';
            var currentClassName = this.el.nativeElement.className;
            this.el.nativeElement.className = currentClassName ? [currentClassName, cls].join(' ') : cls;
        }
    };
    __decorate([
        core_1.Input('ios.position'),
        __metadata("design:type", String)
    ], ActionItemComponent.prototype, "iosPosition", void 0);
    __decorate([
        core_1.Input('android.position'),
        __metadata("design:type", String)
    ], ActionItemComponent.prototype, "androidPosition", void 0);
    ActionItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ActionItem',
            templateUrl: 'action-item.component.html',
            styleUrls: ['action-item.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ActionItemComponent);
    return ActionItemComponent;
}());
exports.ActionItemComponent = ActionItemComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2FjdGlvbi1pdGVtL2FjdGlvbi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFxRTtBQVFyRTtJQUlFLDZCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFFdEMsc0NBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUM7WUFDdEIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDdkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLGdCQUFnQixHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMvRixDQUFDO0lBQ0gsQ0FBQztJQVhzQjtRQUF0QixZQUFLLENBQUMsY0FBYyxDQUFDOzs0REFBcUI7SUFDaEI7UUFBMUIsWUFBSyxDQUFDLGtCQUFrQixDQUFDOztnRUFBeUI7SUFGeEMsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQUt3QixpQkFBVTtPQUp2QixtQkFBbUIsQ0FhL0I7SUFBRCwwQkFBQztDQWJELEFBYUMsSUFBQTtBQWJZLGtEQUFtQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hY3Rpb24taXRlbS9hY3Rpb24taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdBY3Rpb25JdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FjdGlvbi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWN0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2lvcy5wb3NpdGlvbicpIGlvc1Bvc2l0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCdhbmRyb2lkLnBvc2l0aW9uJykgYW5kcm9pZFBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pb3NQb3NpdGlvbiA9PT0gJ3JpZ2h0JyB8fCB0aGlzLmFuZHJvaWRQb3NpdGlvbiA9PT0gJ3BvcHVwJykge1xyXG4gICAgICBsZXQgY2xzID0gJ2J0bi1yaWdodCc7XHJcbiAgICAgIGxldCBjdXJyZW50Q2xhc3NOYW1lID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZTtcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRDbGFzc05hbWUgPyBbY3VycmVudENsYXNzTmFtZSwgY2xzXS5qb2luKCcgJykgOiBjbHM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
