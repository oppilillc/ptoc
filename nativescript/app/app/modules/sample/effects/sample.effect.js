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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbXBsZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBMkM7QUFFM0MsT0FBTztBQUNQLHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsOENBQTZDO0FBRTdDLFNBQVM7QUFDVCxtRUFBZ0U7QUFDaEUsMENBQTRDO0FBRzVDLElBQWEsYUFBYTtJQTBCeEIsdUJBQ1UsS0FBaUIsRUFDakIsUUFBaUIsRUFDakIsZUFBZ0M7UUFIMUMsaUJBSUs7UUFISyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0IxQzs7O1dBR0c7UUFDTyxVQUFLLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2hELE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDLElBQUksZ0JBQVEsQ0FBQyxVQUFVLENBQUM7YUFDbEMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUEvQixDQUErQixDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFBLE9BQU87WUFDVixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7YUFFRCxLQUFLLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUVyRCxTQUFJLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQy9DLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7YUFDaEMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsWUFBWTtZQUNaLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLGdCQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBTUQsQ0FBQztJQUNQLG9CQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQXpCVztJQUFULGdCQUFNLEVBQUU7OEJBQVEsdUJBQVU7NENBU29DO0FBRXJEO0lBQVQsZ0JBQU0sRUFBRTs4QkFBTyx1QkFBVTsyQ0FPckI7QUF4Qk0sYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQTRCTSxhQUFLO1FBQ0YsaUJBQU87UUFDQSxtQ0FBZTtHQTdCL0IsYUFBYSxDQStCekI7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hbWVMaXN0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYW1wbGVFZmZlY3RzIHtcblxuICAvKipcbiAgICogVGhpcyBlZmZlY3QgbWFrZXMgdXNlIG9mIHRoZSBgc3RhcnRXaXRoYCBvcGVyYXRvciB0byB0cmlnZ2VyXG4gICAqIHRoZSBlZmZlY3QgaW1tZWRpYXRlbHkgb24gc3RhcnR1cC5cbiAgICovXG4gIEBFZmZlY3QoKSBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUoTmFtZUxpc3QuQWN0aW9uVHlwZXMuSU5JVClcbiAgICAuc3RhcnRXaXRoKG5ldyBOYW1lTGlzdC5Jbml0QWN0aW9uKVxuICAgIC5zd2l0Y2hNYXAoKCkgPT4gdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0TmFtZXMoKSlcbiAgICAubWFwKHBheWxvYWQgPT4ge1xuICAgICAgbGV0IG5hbWVzID0gcGF5bG9hZDtcbiAgICAgIHJldHVybiBuZXcgTmFtZUxpc3QuSW5pdGlhbGl6ZWRBY3Rpb24obmFtZXMpO1xuICAgIH0pXG4gICAgLy8gbm90aGluZyByZWFjdGluZyB0byBmYWlsdXJlIGF0IG1vbWVudCBidXQgeW91IGNvdWxkIGlmIHlvdSB3YW50IChoZXJlIGZvciBleGFtcGxlKVxuICAgIC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBOYW1lTGlzdC5Jbml0RmFpbGVkQWN0aW9uKCkpKTtcblxuICBARWZmZWN0KCkgYWRkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUoTmFtZUxpc3QuQWN0aW9uVHlwZXMuQUREKVxuICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgIGxldCBuYW1lID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAvLyBhbmFseXRpY3NcbiAgICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLnRyYWNrKE5hbWVMaXN0LkFjdGlvblR5cGVzLk5BTUVfQURERUQsIHsgbGFiZWw6IG5hbWUgfSk7XG4gICAgICByZXR1cm4gbmV3IE5hbWVMaXN0Lk5hbWVBZGRlZEFjdGlvbihuYW1lKTtcbiAgICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZVxuICApIHsgfVxufVxuIl19