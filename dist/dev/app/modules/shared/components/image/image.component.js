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
var ImageComponent = (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnChanges = function () {
        if (this.src) {
            if (this.src.indexOf('~') === 0) {
                this.imgSrc = this.src.replace('~/', '');
            }
            else {
                this.imgSrc = this.src;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImageComponent.prototype, "src", void 0);
    ImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Image',
            templateUrl: 'image.component.html',
            styleUrls: ['image.component.css']
        })
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFvRTtBQVFwRTtJQUFBO0lBY0EsQ0FBQztJQVZDLG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBWlE7UUFBUixZQUFLLEVBQUU7OytDQUFhO0lBRFYsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQztPQUNXLGNBQWMsQ0FjMUI7SUFBRCxxQkFBQztDQWRELEFBY0MsSUFBQTtBQWRZLHdDQUFjIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnSW1hZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpbWFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBzcmM6IHN0cmluZztcclxuICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuc3JjKSB7XHJcbiAgICAgIGlmICh0aGlzLnNyYy5pbmRleE9mKCd+JykgPT09IDApIHtcclxuICAgICAgICAvLyBsb2NhbCBmaWxlICBcclxuICAgICAgICB0aGlzLmltZ1NyYyA9IHRoaXMuc3JjLnJlcGxhY2UoJ34vJywgJycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5zcmM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
