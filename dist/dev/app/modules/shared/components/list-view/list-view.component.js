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
var ListViewComponent = (function () {
    function ListViewComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ListViewComponent.prototype, "items", void 0);
    ListViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ListView',
            templateUrl: 'list-view.component.html',
            styleUrls: ['list-view.component.css']
        })
    ], ListViewComponent);
    return ListViewComponent;
}());
exports.ListViewComponent = ListViewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBU2pEO0lBQUE7SUFFQSxDQUFDO0lBRFM7UUFBUixZQUFLLEVBQUU7O29EQUFpQjtJQURiLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQztPQUNXLGlCQUFpQixDQUU3QjtJQUFELHdCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksOENBQWlCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdMaXN0VmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsaXN0LXZpZXcuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCAge1xyXG5cdEBJbnB1dCgpIGl0ZW1zOiBzdHJpbmdbXTtcclxufVxyXG5cclxuIl19
