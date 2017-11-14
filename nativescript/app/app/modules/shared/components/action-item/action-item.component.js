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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBcUU7QUFRckUsSUFBYSxtQkFBbUI7SUFJOUIsNkJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0QyxzQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQztZQUN0QixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUN2RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQy9GLENBQUM7SUFDSCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQVp3QjtJQUF0QixZQUFLLENBQUMsY0FBYyxDQUFDOzt3REFBcUI7QUFDaEI7SUFBMUIsWUFBSyxDQUFDLGtCQUFrQixDQUFDOzs0REFBeUI7QUFGeEMsbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDO3FDQUt3QixpQkFBVTtHQUp2QixtQkFBbUIsQ0FhL0I7QUFiWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnQWN0aW9uSXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnYWN0aW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYWN0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2lvcy5wb3NpdGlvbicpIGlvc1Bvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5kcm9pZC5wb3NpdGlvbicpIGFuZHJvaWRQb3NpdGlvbjogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pb3NQb3NpdGlvbiA9PT0gJ3JpZ2h0JyB8fCB0aGlzLmFuZHJvaWRQb3NpdGlvbiA9PT0gJ3BvcHVwJykge1xuICAgICAgbGV0IGNscyA9ICdidG4tcmlnaHQnO1xuICAgICAgbGV0IGN1cnJlbnRDbGFzc05hbWUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRDbGFzc05hbWUgPyBbY3VycmVudENsYXNzTmFtZSwgY2xzXS5qb2luKCcgJykgOiBjbHM7XG4gICAgfVxuICB9XG59XG4iXX0=