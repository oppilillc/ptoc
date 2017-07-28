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
    return ActionItemComponent;
}());
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
exports.ActionItemComponent = ActionItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBcUU7QUFRckUsSUFBYSxtQkFBbUI7SUFJOUIsNkJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0QyxzQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQztZQUN0QixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUN2RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQy9GLENBQUM7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQVp3QjtJQUF0QixZQUFLLENBQUMsY0FBYyxDQUFDOzt3REFBcUI7QUFDaEI7SUFBMUIsWUFBSyxDQUFDLGtCQUFrQixDQUFDOzs0REFBeUI7QUFGeEMsbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDO3FDQUt3QixpQkFBVTtHQUp2QixtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdBY3Rpb25JdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FjdGlvbi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWN0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2lvcy5wb3NpdGlvbicpIGlvc1Bvc2l0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCdhbmRyb2lkLnBvc2l0aW9uJykgYW5kcm9pZFBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pb3NQb3NpdGlvbiA9PT0gJ3JpZ2h0JyB8fCB0aGlzLmFuZHJvaWRQb3NpdGlvbiA9PT0gJ3BvcHVwJykge1xyXG4gICAgICBsZXQgY2xzID0gJ2J0bi1yaWdodCc7XHJcbiAgICAgIGxldCBjdXJyZW50Q2xhc3NOYW1lID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZTtcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRDbGFzc05hbWUgPyBbY3VycmVudENsYXNzTmFtZSwgY2xzXS5qb2luKCcgJykgOiBjbHM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==