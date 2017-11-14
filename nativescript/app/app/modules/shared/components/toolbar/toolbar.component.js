Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// app
var log_service_1 = require("../../../core/services/logging/log.service");
var ToolbarComponent = (function () {
    function ToolbarComponent(log) {
        this.log = log;
    }
    ToolbarComponent.prototype.openLanguages = function (e) {
        this.log.debug('openLanguages');
    };
    return ToolbarComponent;
}());
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
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBRTFDLE1BQU07QUFDTiwwRUFBd0U7QUFVeEUsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUVoQyx3Q0FBYSxHQUFwQixVQUFxQixDQUFNO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksZ0JBQWdCO0lBUjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUU7WUFDVCx1QkFBdUI7U0FDeEI7S0FDRixDQUFDO3FDQUd5Qix3QkFBVTtHQUZ4QixnQkFBZ0IsQ0FPNUI7QUFQWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICd0b29sYmFyLmNvbXBvbmVudC5jc3MnLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZzogTG9nU2VydmljZSkge31cblxuICBwdWJsaWMgb3Blbkxhbmd1YWdlcyhlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxvZy5kZWJ1Zygnb3Blbkxhbmd1YWdlcycpO1xuICB9XG59XG4iXX0=