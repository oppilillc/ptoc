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
var store_1 = require("@ngrx/store");
var index_1 = require("../../modules/core/index");
var index_2 = require("../../modules/ngrx/index");
var index_3 = require("../../modules/sample/index");
var HomeComponent = (function () {
    function HomeComponent(store, routerext) {
        this.store = store;
        this.routerext = routerext;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.names$ = this.store.let(index_2.getNames);
        this.newName = '';
    };
    HomeComponent.prototype.addName = function () {
        this.store.dispatch(new index_3.NameList.AddAction(this.newName));
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.readAbout = function () {
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css']
        }),
        __metadata("design:paramtypes", [store_1.Store, index_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBeUU7QUFDekUscUNBQW9DO0FBSXBDLGtEQUFvRTtBQUNwRSxrREFBK0Q7QUFDL0Qsb0RBQXNEO0FBUXREO0lBSUUsdUJBQW9CLEtBQXVCLEVBQVMsU0FBMkI7UUFBM0QsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7SUFFbkYsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFHRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzt5Q0FLMkIsYUFBSyxFQUErQix3QkFBZ0I7T0FKcEUsYUFBYSxDQStCekI7SUFBRCxvQkFBQztDQS9CRCxBQStCQyxJQUFBO0FBL0JZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIENvbmZpZyB9IGZyb20gJy4uLy4uL21vZHVsZXMvY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElBcHBTdGF0ZSwgZ2V0TmFtZXMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL25ncngvaW5kZXgnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdCB9IGZyb20gJy4uLy4uL21vZHVsZXMvc2FtcGxlL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG5hbWVzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHB1YmxpYyBuZXdOYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT4sIHB1YmxpYyByb3V0ZXJleHQ6IFJvdXRlckV4dGVuc2lvbnMpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uYW1lcyQgPSB0aGlzLnN0b3JlLmxldChnZXROYW1lcyk7XHJcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogQHBhcmFtIG5ld25hbWUgIGFueSB0ZXh0IGFzIGlucHV0LlxyXG4gICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cclxuICAgKi9cclxuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTmFtZUxpc3QuQWRkQWN0aW9uKHRoaXMubmV3TmFtZSkpO1xyXG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZWFkQWJvdXQoKSB7XHJcbiAgICAvLyBUcnkgdGhpcyBpbiB0aGUge059IGFwcFxyXG4gICAgLy8ge059IGNhbiB1c2UgdGhlc2UgYW5pbWF0aW9uIG9wdGlvbnNcclxuICAgIHRoaXMucm91dGVyZXh0Lm5hdmlnYXRlKFsnL2Fib3V0J10sIHtcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
