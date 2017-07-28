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
var TextFieldComponent = (function () {
    function TextFieldComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextFieldComponent.prototype, "hint", void 0);
    TextFieldComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'TextField',
            templateUrl: 'text-field.component.html',
            styleUrls: ['text-field.component.css']
        })
    ], TextFieldComponent);
    return TextFieldComponent;
}());
exports.TextFieldComponent = TextFieldComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFRakQ7SUFBQTtJQUdBLENBQUM7SUFGVTtRQUFSLFlBQUssRUFBRTs7b0RBQWM7SUFDYjtRQUFSLFlBQUssRUFBRTs7b0RBQWM7SUFGWCxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7T0FDVyxrQkFBa0IsQ0FHOUI7SUFBRCx5QkFBQztDQUhELEFBR0MsSUFBQTtBQUhZLGdEQUFrQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXh0LWZpZWxkL3RleHQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ1RleHRGaWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd0ZXh0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndGV4dC1maWVsZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcclxufVxyXG4iXX0=
