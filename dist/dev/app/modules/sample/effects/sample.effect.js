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
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
var name_list_service_1 = require("../services/name-list.service");
var index_1 = require("../actions/index");
var SampleEffects = (function () {
    function SampleEffects(store, actions$, nameListService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.nameListService = nameListService;
        this.init$ = this.actions$
            .ofType(index_1.NameList.ActionTypes.INIT)
            .startWith(new index_1.NameList.InitAction)
            .switchMap(function () { return _this.nameListService.getNames(); })
            .map(function (payload) {
            var names = payload;
            return new index_1.NameList.InitializedAction(names);
        })
            .catch(function () { return Observable_1.Observable.of(new index_1.NameList.InitFailedAction()); });
        this.add$ = this.actions$
            .ofType(index_1.NameList.ActionTypes.ADD)
            .map(function (action) {
            var name = action.payload;
            _this.nameListService.track(index_1.NameList.ActionTypes.NAME_ADDED, { label: name });
            return new index_1.NameList.NameAddedAction(name);
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], SampleEffects.prototype, "init$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], SampleEffects.prototype, "add$", void 0);
    SampleEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store,
            effects_1.Actions,
            name_list_service_1.NameListService])
    ], SampleEffects);
    return SampleEffects;
}());
exports.SampleEffects = SampleEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9lZmZlY3RzL3NhbXBsZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFHM0MscUNBQTRDO0FBQzVDLHlDQUFnRDtBQUNoRCw4Q0FBNkM7QUFHN0MsbUVBQWdFO0FBQ2hFLDBDQUE0QztBQUc1QztJQTBCRSx1QkFDVSxLQUFpQixFQUNqQixRQUFpQixFQUNqQixlQUFnQztRQUgxQyxpQkFJSztRQUhLLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUF2QmhDLFVBQUssR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDaEQsTUFBTSxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTLENBQUMsSUFBSSxnQkFBUSxDQUFDLFVBQVUsQ0FBQzthQUNsQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQS9CLENBQStCLENBQUM7YUFDaEQsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNWLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxnQkFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQzthQUVELEtBQUssQ0FBQyxjQUFNLE9BQUEsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBRXJELFNBQUksR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDL0MsTUFBTSxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUUxQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3RSxNQUFNLENBQUMsSUFBSSxnQkFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQU1ELENBQUM7SUF4Qks7UUFBVCxnQkFBTSxFQUFFO2tDQUFRLHVCQUFVO2dEQVNvQztJQUVyRDtRQUFULGdCQUFNLEVBQUU7a0NBQU8sdUJBQVU7K0NBT3JCO0lBeEJNLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0E0Qk0sYUFBSztZQUNGLGlCQUFPO1lBQ0EsbUNBQWU7T0E3Qi9CLGFBQWEsQ0ErQnpCO0lBQUQsb0JBQUM7Q0EvQkQsQUErQkMsSUFBQTtBQS9CWSxzQ0FBYSIsImZpbGUiOiJhcHAvbW9kdWxlcy9zYW1wbGUvZWZmZWN0cy9zYW1wbGUuZWZmZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IE5hbWVMaXN0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVFZmZlY3RzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBlZmZlY3QgbWFrZXMgdXNlIG9mIHRoZSBgc3RhcnRXaXRoYCBvcGVyYXRvciB0byB0cmlnZ2VyXHJcbiAgICogdGhlIGVmZmVjdCBpbW1lZGlhdGVseSBvbiBzdGFydHVwLlxyXG4gICAqL1xyXG4gIEBFZmZlY3QoKSBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxyXG4gICAgLm9mVHlwZShOYW1lTGlzdC5BY3Rpb25UeXBlcy5JTklUKVxyXG4gICAgLnN0YXJ0V2l0aChuZXcgTmFtZUxpc3QuSW5pdEFjdGlvbilcclxuICAgIC5zd2l0Y2hNYXAoKCkgPT4gdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0TmFtZXMoKSlcclxuICAgIC5tYXAocGF5bG9hZCA9PiB7XHJcbiAgICAgIGxldCBuYW1lcyA9IHBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBuZXcgTmFtZUxpc3QuSW5pdGlhbGl6ZWRBY3Rpb24obmFtZXMpO1xyXG4gICAgfSlcclxuICAgIC8vIG5vdGhpbmcgcmVhY3RpbmcgdG8gZmFpbHVyZSBhdCBtb21lbnQgYnV0IHlvdSBjb3VsZCBpZiB5b3Ugd2FudCAoaGVyZSBmb3IgZXhhbXBsZSlcclxuICAgIC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBOYW1lTGlzdC5Jbml0RmFpbGVkQWN0aW9uKCkpKTtcclxuXHJcbiAgQEVmZmVjdCgpIGFkZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcclxuICAgIC5vZlR5cGUoTmFtZUxpc3QuQWN0aW9uVHlwZXMuQUREKVxyXG4gICAgLm1hcChhY3Rpb24gPT4ge1xyXG4gICAgICBsZXQgbmFtZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAvLyBhbmFseXRpY3NcclxuICAgICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UudHJhY2soTmFtZUxpc3QuQWN0aW9uVHlwZXMuTkFNRV9BRERFRCwgeyBsYWJlbDogbmFtZSB9KTtcclxuICAgICAgcmV0dXJuIG5ldyBOYW1lTGlzdC5OYW1lQWRkZWRBY3Rpb24obmFtZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2VcclxuICApIHsgfVxyXG59XHJcbiJdfQ==
