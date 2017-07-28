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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var lodash_1 = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
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
                _this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
                return new multilingual.LangChangedAction(lang);
            }
            else {
                return new multilingual.LangUnsupportedAction(lang);
            }
        });
    }
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
    return MultilingualEffects;
}());
exports.MultilingualEffects = MultilingualEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQW1EO0FBR25ELHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsaUNBQXVDO0FBQ3ZDLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFHL0IseUVBQWtGO0FBQ2xGLDZEQUErRDtBQUcvRDtJQWtCRSw2QkFDVSxLQUFpQixFQUNqQixRQUFpQixFQUNqQixnQkFBcUMsRUFDbEIsU0FBUztRQUp0QyxpQkFLSztRQUpLLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQUE7UUFwQjVCLFlBQU8sR0FBdUIsSUFBSSxDQUFDLFFBQVE7YUFDbEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDVCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLGlCQUFRLENBQUMsWUFBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLGlCQUFpQixHQUFHLElBQUksWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUUxRixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVOLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFPRCxDQUFDO0lBckJLO1FBQVQsZ0JBQU0sRUFBRTtrQ0FBVSx1QkFBVTt3REFjeEI7SUFoQk0sbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7UUF1QlIsV0FBQSxhQUFNLENBQUMsZ0NBQVMsQ0FBQyxDQUFBO3lDQUhILGFBQUs7WUFDRixpQkFBTztZQUNDLDBDQUFtQjtPQXJCcEMsbUJBQW1CLENBd0IvQjtJQUFELDBCQUFDO0NBeEJELEFBd0JDLElBQUE7QUF4Qlksa0RBQW1CIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IGluY2x1ZGVzLCBtYXAgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UsIExhbmd1YWdlcyB9IGZyb20gJy4uL3NlcnZpY2VzL211bHRpbGluZ3VhbC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uL2FjdGlvbnMvbXVsdGlsaW5ndWFsLmFjdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxFZmZlY3RzIHtcclxuXHJcbiAgQEVmZmVjdCgpIGNoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcclxuICAgIC5vZlR5cGUobXVsdGlsaW5ndWFsLkFjdGlvblR5cGVzLkNIQU5HRSlcclxuICAgIC5tYXAoYWN0aW9uID0+IHtcclxuICAgICAgbGV0IGxhbmcgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgaWYgKGluY2x1ZGVzKG1hcCh0aGlzLmxhbmd1YWdlcywgJ2NvZGUnKSwgbGFuZykpIHtcclxuICAgICAgICBsZXQgbGFuZ0NoYW5nZWRBY3Rpb24gPSBuZXcgbXVsdGlsaW5ndWFsLkxhbmdDaGFuZ2VkQWN0aW9uKGxhbmcpO1xyXG4gICAgICAgIC8vIHRyYWNrIGFuYWx5dGljc1xyXG4gICAgICAgIHRoaXMubXVsdGlsYW5nU2VydmljZS50cmFjayhsYW5nQ2hhbmdlZEFjdGlvbi50eXBlLCB7IGxhYmVsOiBsYW5nQ2hhbmdlZEFjdGlvbi5wYXlsb2FkIH0pO1xyXG4gICAgICAgIC8vIGNoYW5nZSBzdGF0ZVxyXG4gICAgICAgIHJldHVybiBuZXcgbXVsdGlsaW5ndWFsLkxhbmdDaGFuZ2VkQWN0aW9uKGxhbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgKGhlcmUgZm9yIGV4YW1wbGUpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBtdWx0aWxpbmd1YWwuTGFuZ1Vuc3VwcG9ydGVkQWN0aW9uKGxhbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgbXVsdGlsYW5nU2VydmljZTogTXVsdGlsaW5ndWFsU2VydmljZSxcclxuICAgIEBJbmplY3QoTGFuZ3VhZ2VzKSBwcml2YXRlIGxhbmd1YWdlc1xyXG4gICkgeyB9XHJcbn1cclxuIl19
