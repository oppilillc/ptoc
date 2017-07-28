Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
// module
var name_list_service_1 = require("../services/name-list.service");
var index_1 = require("../actions/index");
var SampleEffects = (function () {
    function SampleEffects(store, actions$, nameListService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.nameListService = nameListService;
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
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
            // analytics
            _this.nameListService.track(index_1.NameList.ActionTypes.NAME_ADDED, { label: name });
            return new index_1.NameList.NameAddedAction(name);
        });
    }
    return SampleEffects;
}());
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
exports.SampleEffects = SampleEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbXBsZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBMkM7QUFFM0MsT0FBTztBQUNQLHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsOENBQTZDO0FBRTdDLFNBQVM7QUFDVCxtRUFBZ0U7QUFDaEUsMENBQTRDO0FBRzVDLElBQWEsYUFBYTtJQTBCeEIsdUJBQ1UsS0FBaUIsRUFDakIsUUFBaUIsRUFDakIsZUFBZ0M7UUFIMUMsaUJBSUs7UUFISyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0IxQzs7O1dBR0c7UUFDTyxVQUFLLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2hELE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDLElBQUksZ0JBQVEsQ0FBQyxVQUFVLENBQUM7YUFDbEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUEvQixDQUErQixDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDVixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7YUFFRCxLQUFLLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUVyRCxTQUFJLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQy9DLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7YUFDaEMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsWUFBWTtZQUNaLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLGdCQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBTUQsQ0FBQztJQUNQLG9CQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQXpCVztJQUFULGdCQUFNLEVBQUU7OEJBQVEsdUJBQVU7NENBU29DO0FBRXJEO0lBQVQsZ0JBQU0sRUFBRTs4QkFBTyx1QkFBVTsyQ0FPckI7QUF4Qk0sYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQTRCTSxhQUFLO1FBQ0YsaUJBQU87UUFDQSxtQ0FBZTtHQTdCL0IsYUFBYSxDQStCekI7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhbXBsZUVmZmVjdHMge1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGVmZmVjdCBtYWtlcyB1c2Ugb2YgdGhlIGBzdGFydFdpdGhgIG9wZXJhdG9yIHRvIHRyaWdnZXJcclxuICAgKiB0aGUgZWZmZWN0IGltbWVkaWF0ZWx5IG9uIHN0YXJ0dXAuXHJcbiAgICovXHJcbiAgQEVmZmVjdCgpIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXHJcbiAgICAub2ZUeXBlKE5hbWVMaXN0LkFjdGlvblR5cGVzLklOSVQpXHJcbiAgICAuc3RhcnRXaXRoKG5ldyBOYW1lTGlzdC5Jbml0QWN0aW9uKVxyXG4gICAgLnN3aXRjaE1hcCgoKSA9PiB0aGlzLm5hbWVMaXN0U2VydmljZS5nZXROYW1lcygpKVxyXG4gICAgLm1hcChwYXlsb2FkID0+IHtcclxuICAgICAgbGV0IG5hbWVzID0gcGF5bG9hZDtcclxuICAgICAgcmV0dXJuIG5ldyBOYW1lTGlzdC5Jbml0aWFsaXplZEFjdGlvbihuYW1lcyk7XHJcbiAgICB9KVxyXG4gICAgLy8gbm90aGluZyByZWFjdGluZyB0byBmYWlsdXJlIGF0IG1vbWVudCBidXQgeW91IGNvdWxkIGlmIHlvdSB3YW50IChoZXJlIGZvciBleGFtcGxlKVxyXG4gICAgLmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IE5hbWVMaXN0LkluaXRGYWlsZWRBY3Rpb24oKSkpO1xyXG5cclxuICBARWZmZWN0KCkgYWRkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxyXG4gICAgLm9mVHlwZShOYW1lTGlzdC5BY3Rpb25UeXBlcy5BREQpXHJcbiAgICAubWFwKGFjdGlvbiA9PiB7XHJcbiAgICAgIGxldCBuYW1lID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIC8vIGFuYWx5dGljc1xyXG4gICAgICB0aGlzLm5hbWVMaXN0U2VydmljZS50cmFjayhOYW1lTGlzdC5BY3Rpb25UeXBlcy5OQU1FX0FEREVELCB7IGxhYmVsOiBuYW1lIH0pO1xyXG4gICAgICByZXR1cm4gbmV3IE5hbWVMaXN0Lk5hbWVBZGRlZEFjdGlvbihuYW1lKTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZVxyXG4gICkgeyB9XHJcbn1cclxuIl19