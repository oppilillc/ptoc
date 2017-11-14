Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageComponent = (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnChanges = function () {
        if (this.src) {
            if (this.src.indexOf('~') === 0) {
                // local file  
                this.imgSrc = this.src.replace('~/', '');
            }
            else {
                this.imgSrc = this.src;
            }
        }
    };
    return ImageComponent;
}());
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
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBb0U7QUFRcEUsSUFBYSxjQUFjO0lBQTNCO0lBY0EsQ0FBQztJQVZDLG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLGVBQWU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBYlU7SUFBUixZQUFLLEVBQUU7OzJDQUFhO0FBRFYsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkMsQ0FBQztHQUNXLGNBQWMsQ0FjMUI7QUFkWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ0ltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbWFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgcHVibGljIGltZ1NyYzogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgaWYgKHRoaXMuc3JjLmluZGV4T2YoJ34nKSA9PT0gMCkge1xuICAgICAgICAvLyBsb2NhbCBmaWxlICBcbiAgICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLnNyYy5yZXBsYWNlKCd+LycsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5zcmM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=