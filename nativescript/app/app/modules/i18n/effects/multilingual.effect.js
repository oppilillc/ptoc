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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm11bHRpbGluZ3VhbC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBbUQ7QUFFbkQsT0FBTztBQUNQLHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsaUNBQXVDO0FBQ3ZDLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFFL0IsU0FBUztBQUNULHlFQUFrRjtBQUNsRiw2REFBK0Q7QUFHL0QsSUFBYSxtQkFBbUI7SUFrQjlCLDZCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGdCQUFxQyxFQUNsQixTQUFTO1FBSnRDLGlCQUtLO1FBSkssVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBQTtRQXBCNUIsWUFBTyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUEsTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsaUJBQVEsQ0FBQyxZQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksaUJBQWlCLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLGtCQUFrQjtnQkFDbEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDMUYsZUFBZTtnQkFDZixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLG1DQUFtQztnQkFDbkMsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQU9ELENBQUM7SUFDUCwwQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF0Qlc7SUFBVCxnQkFBTSxFQUFFOzhCQUFVLHVCQUFVO29EQWN4QjtBQWhCTSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtJQXVCUixXQUFBLGFBQU0sQ0FBQyxnQ0FBUyxDQUFDLENBQUE7cUNBSEgsYUFBSztRQUNGLGlCQUFPO1FBQ0MsMENBQW1CO0dBckJwQyxtQkFBbUIsQ0F3Qi9CO0FBeEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBpbmNsdWRlcywgbWFwIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlLCBMYW5ndWFnZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9hY3Rpb25zL211bHRpbGluZ3VhbC5hY3Rpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsRWZmZWN0cyB7XHJcblxyXG4gIEBFZmZlY3QoKSBjaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXHJcbiAgICAub2ZUeXBlKG11bHRpbGluZ3VhbC5BY3Rpb25UeXBlcy5DSEFOR0UpXHJcbiAgICAubWFwKGFjdGlvbiA9PiB7XHJcbiAgICAgIGxldCBsYW5nID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGlmIChpbmNsdWRlcyhtYXAodGhpcy5sYW5ndWFnZXMsICdjb2RlJyksIGxhbmcpKSB7XHJcbiAgICAgICAgbGV0IGxhbmdDaGFuZ2VkQWN0aW9uID0gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTtcclxuICAgICAgICAvLyB0cmFjayBhbmFseXRpY3NcclxuICAgICAgICB0aGlzLm11bHRpbGFuZ1NlcnZpY2UudHJhY2sobGFuZ0NoYW5nZWRBY3Rpb24udHlwZSwgeyBsYWJlbDogbGFuZ0NoYW5nZWRBY3Rpb24ucGF5bG9hZCB9KTtcclxuICAgICAgICAvLyBjaGFuZ2Ugc3RhdGVcclxuICAgICAgICByZXR1cm4gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIChoZXJlIGZvciBleGFtcGxlKVxyXG4gICAgICAgIHJldHVybiBuZXcgbXVsdGlsaW5ndWFsLkxhbmdVbnN1cHBvcnRlZEFjdGlvbihsYW5nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcclxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIG11bHRpbGFuZ1NlcnZpY2U6IE11bHRpbGluZ3VhbFNlcnZpY2UsXHJcbiAgICBASW5qZWN0KExhbmd1YWdlcykgcHJpdmF0ZSBsYW5ndWFnZXNcclxuICApIHsgfVxyXG59XHJcbiJdfQ==