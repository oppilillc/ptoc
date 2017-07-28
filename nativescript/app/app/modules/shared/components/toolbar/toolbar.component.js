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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBRTFDLE1BQU07QUFDTiwwRUFBd0U7QUFVeEUsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUVoQyx3Q0FBYSxHQUFwQixVQUFxQixDQUFNO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksZ0JBQWdCO0lBUjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUU7WUFDVCx1QkFBdUI7U0FDeEI7S0FDRixDQUFDO3FDQUd5Qix3QkFBVTtHQUZ4QixnQkFBZ0IsQ0FPNUI7QUFQWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1xyXG4gICAgJ3Rvb2xiYXIuY29tcG9uZW50LmNzcycsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZzogTG9nU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG9wZW5MYW5ndWFnZXMoZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZy5kZWJ1Zygnb3Blbkxhbmd1YWdlcycpO1xyXG4gIH1cclxufVxyXG4iXX0=