Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
// app
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
    /*
     * @param newname  any text as input.
     * @returns return false to prevent default form submit behavior to refresh the page.
     */
    HomeComponent.prototype.addName = function () {
        this.store.dispatch(new index_3.NameList.AddAction(this.newName));
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.readAbout = function () {
        // Try this in the {N} app
        // {N} can use these animation options
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [store_1.Store, index_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLHNDQUF5RTtBQUN6RSxxQ0FBb0M7QUFHcEMsTUFBTTtBQUNOLGtEQUFvRTtBQUNwRSxrREFBK0Q7QUFDL0Qsb0RBQXNEO0FBUXRELElBQWEsYUFBYTtJQUl4Qix1QkFBb0IsS0FBdUIsRUFBUyxTQUEyQjtRQUEzRCxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRixnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLDBCQUEwQjtRQUMxQixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxVQUFVLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLFVBQVU7YUFDakI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUM7cUNBSzJCLGFBQUssRUFBK0Isd0JBQWdCO0dBSnBFLGFBQWEsQ0ErQnpCO0FBL0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBDb25maWcgfSBmcm9tICcuLi8uLi9tb2R1bGVzL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUsIGdldE5hbWVzIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9uZ3J4L2luZGV4JztcclxuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3NhbXBsZS9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBuYW1lcyQ6IE9ic2VydmFibGU8YW55PjtcclxuICBwdWJsaWMgbmV3TmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+LCBwdWJsaWMgcm91dGVyZXh0OiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmFtZXMkID0gdGhpcy5zdG9yZS5sZXQoZ2V0TmFtZXMpO1xyXG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIEBwYXJhbSBuZXduYW1lICBhbnkgdGV4dCBhcyBpbnB1dC5cclxuICAgKiBAcmV0dXJucyByZXR1cm4gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXHJcbiAgICovXHJcbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE5hbWVMaXN0LkFkZEFjdGlvbih0aGlzLm5ld05hbWUpKTtcclxuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVhZEFib3V0KCkge1xyXG4gICAgLy8gVHJ5IHRoaXMgaW4gdGhlIHtOfSBhcHBcclxuICAgIC8vIHtOfSBjYW4gdXNlIHRoZXNlIGFuaW1hdGlvbiBvcHRpb25zXHJcbiAgICB0aGlzLnJvdXRlcmV4dC5uYXZpZ2F0ZShbJy9hYm91dCddLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19