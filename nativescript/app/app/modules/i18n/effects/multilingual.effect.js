Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var lodash_1 = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
// module
var multilingual_service_1 = require("../services/multilingual.service");
var multilingual = require("../actions/multilingual.action");
var MultilingualEffects = (function () {
    function MultilingualEffects(store, actions$, multilangService, languages) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.multilangService = multilangService;
        this.languages = languages;
        this.change$ = this.actions$
            .ofType(multilingual.ActionTypes.CHANGE)
            .map(function (action) {
            var lang = action.payload;
            if (lodash_1.includes(lodash_1.map(_this.languages, 'code'), lang)) {
                var langChangedAction = new multilingual.LangChangedAction(lang);
                // track analytics
                _this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
                // change state
                return new multilingual.LangChangedAction(lang);
            }
            else {
                // not supported (here for example)
                return new multilingual.LangUnsupportedAction(lang);
            }
        });
    }
    return MultilingualEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], MultilingualEffects.prototype, "change$", void 0);
MultilingualEffects = __decorate([
    core_1.Injectable(),
    __param(3, core_1.Inject(multilingual_service_1.Languages)),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        multilingual_service_1.MultilingualService, Object])
], MultilingualEffects);
exports.MultilingualEffects = MultilingualEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11bHRpbGluZ3VhbC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBbUQ7QUFFbkQsT0FBTztBQUNQLHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsaUNBQXVDO0FBQ3ZDLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFFL0IsU0FBUztBQUNULHlFQUFrRjtBQUNsRiw2REFBK0Q7QUFHL0QsSUFBYSxtQkFBbUI7SUFrQjlCLDZCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGdCQUFxQyxFQUNsQixTQUFTO1FBSnRDLGlCQUtLO1FBSkssVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBQTtRQXBCNUIsWUFBTyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsaUJBQVEsQ0FBQyxZQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksaUJBQWlCLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLGtCQUFrQjtnQkFDbEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDMUYsZUFBZTtnQkFDZixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLG1DQUFtQztnQkFDbkMsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQU9ELENBQUM7SUFDUCwwQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF0Qlc7SUFBVCxnQkFBTSxFQUFFOzhCQUFVLHVCQUFVO29EQWN4QjtBQWhCTSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtJQXVCUixXQUFBLGFBQU0sQ0FBQyxnQ0FBUyxDQUFDLENBQUE7cUNBSEgsYUFBSztRQUNGLGlCQUFPO1FBQ0MsMENBQW1CO0dBckJwQyxtQkFBbUIsQ0F3Qi9CO0FBeEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpbmNsdWRlcywgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UsIExhbmd1YWdlcyB9IGZyb20gJy4uL3NlcnZpY2VzL211bHRpbGluZ3VhbC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9hY3Rpb25zL211bHRpbGluZ3VhbC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsRWZmZWN0cyB7XG5cbiAgQEVmZmVjdCgpIGNoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKG11bHRpbGluZ3VhbC5BY3Rpb25UeXBlcy5DSEFOR0UpXG4gICAgLm1hcChhY3Rpb24gPT4ge1xuICAgICAgbGV0IGxhbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmIChpbmNsdWRlcyhtYXAodGhpcy5sYW5ndWFnZXMsICdjb2RlJyksIGxhbmcpKSB7XG4gICAgICAgIGxldCBsYW5nQ2hhbmdlZEFjdGlvbiA9IG5ldyBtdWx0aWxpbmd1YWwuTGFuZ0NoYW5nZWRBY3Rpb24obGFuZyk7XG4gICAgICAgIC8vIHRyYWNrIGFuYWx5dGljc1xuICAgICAgICB0aGlzLm11bHRpbGFuZ1NlcnZpY2UudHJhY2sobGFuZ0NoYW5nZWRBY3Rpb24udHlwZSwgeyBsYWJlbDogbGFuZ0NoYW5nZWRBY3Rpb24ucGF5bG9hZCB9KTtcbiAgICAgICAgLy8gY2hhbmdlIHN0YXRlXG4gICAgICAgIHJldHVybiBuZXcgbXVsdGlsaW5ndWFsLkxhbmdDaGFuZ2VkQWN0aW9uKGxhbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCAoaGVyZSBmb3IgZXhhbXBsZSlcbiAgICAgICAgcmV0dXJuIG5ldyBtdWx0aWxpbmd1YWwuTGFuZ1Vuc3VwcG9ydGVkQWN0aW9uKGxhbmcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG11bHRpbGFuZ1NlcnZpY2U6IE11bHRpbGluZ3VhbFNlcnZpY2UsXG4gICAgQEluamVjdChMYW5ndWFnZXMpIHByaXZhdGUgbGFuZ3VhZ2VzXG4gICkgeyB9XG59XG4iXX0=