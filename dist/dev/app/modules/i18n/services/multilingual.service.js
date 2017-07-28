"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var core_2 = require("@ngx-translate/core");
var index_1 = require("../../analytics/index");
var window_service_1 = require("../../core/services/window.service");
var category_common_1 = require("../common/category.common");
var index_2 = require("../states/index");
var index_3 = require("../actions/index");
exports.Languages = new core_1.InjectionToken('Languages');
exports.LanguageViewHelper = new core_1.InjectionToken('LanguageViewHelper');
exports.LanguageProviders = [
    { provide: exports.Languages, useValue: [] },
    { provide: exports.LanguageViewHelper, useValue: null }
];
var MultilingualService = (function (_super) {
    __extends(MultilingualService, _super);
    function MultilingualService(analytics, translate, win, store) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.translate = translate;
        _this.win = win;
        _this.store = store;
        _this.category = category_common_1.CATEGORY;
        translate.setDefaultLang(index_2.initialState.lang);
        var userLang = win.navigator.language.split('-')[0];
        store.select(function (s) { return s.i18n; }).subscribe(function (state) {
            _this.translate.use(state.lang);
        });
        _this.store.dispatch(new index_3.ChangeAction(userLang));
        return _this;
    }
    MultilingualService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.AnalyticsService,
            core_2.TranslateService,
            window_service_1.WindowService,
            store_1.Store])
    ], MultilingualService);
    return MultilingualService;
}(index_1.Analytics));
exports.MultilingualService = MultilingualService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQTJEO0FBRzNELHFDQUFvQztBQUNwQyw0Q0FBdUQ7QUFHdkQsK0NBQW9FO0FBRXBFLHFFQUFtRTtBQUluRSw2REFBcUQ7QUFDckQseUNBQW1FO0FBQ25FLDBDQUFnRDtBQUduQyxRQUFBLFNBQVMsR0FBaUMsSUFBSSxxQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRzFFLFFBQUEsa0JBQWtCLEdBQStCLElBQUkscUJBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzFGLFFBQUEsaUJBQWlCLEdBQUc7SUFDL0IsRUFBRSxPQUFPLEVBQUUsaUJBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ3BDLEVBQUUsT0FBTyxFQUFFLDBCQUFrQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDaEQsQ0FBQztBQUlGO0lBQXlDLHVDQUFTO0lBRWhELDZCQUNTLFNBQTJCLEVBQzFCLFNBQTJCLEVBQzNCLEdBQWtCLEVBQ2xCLEtBQXVCO1FBSmpDLFlBTUUsa0JBQU0sU0FBUyxDQUFDLFNBaUJqQjtRQXRCUSxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMxQixlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixTQUFHLEdBQUgsR0FBRyxDQUFlO1FBQ2xCLFdBQUssR0FBTCxLQUFLLENBQWtCO1FBRy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsMEJBQVEsQ0FBQztRQUd6QixTQUFTLENBQUMsY0FBYyxDQUFDLG9CQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHNUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3BELEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQXlCO1lBRTVELEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUdILEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztJQUNsRCxDQUFDO0lBekJVLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO3lDQUlTLHdCQUFnQjtZQUNmLHVCQUFnQjtZQUN0Qiw4QkFBYTtZQUNYLGFBQUs7T0FOWCxtQkFBbUIsQ0EwQi9CO0lBQUQsMEJBQUM7Q0ExQkQsQUEwQkMsQ0ExQndDLGlCQUFTLEdBMEJqRDtBQTFCWSxrREFBbUIiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBBbmFseXRpY3MsIEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xyXG5pbXBvcnQgeyBJTGFuZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL25ncngvaW5kZXgnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IENBVEVHT1JZIH0gZnJvbSAnLi4vY29tbW9uL2NhdGVnb3J5LmNvbW1vbic7XHJcbmltcG9ydCB7IElNdWx0aWxpbmd1YWxTdGF0ZSwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcclxuaW1wb3J0IHsgQ2hhbmdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG4vLyBwcm92aWRlIHN1cHBvcnRlZCBsYW5ndWFnZXMgYXQgcnVudGltZVxyXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VzOiBJbmplY3Rpb25Ub2tlbjxBcnJheTxJTGFuZz4+ID0gbmV3IEluamVjdGlvblRva2VuKCdMYW5ndWFnZXMnKTtcclxuLy8gb3B0aW9uYWwgdmlldyBoZWxwZXIgZm9yIGxhbmd1YWdlIGhhbmRsaW5nXHJcbi8vIHtOfSB1c2VzIHRoaXMgdG8gcHJvdmlkZSBzcGVjaWZpYyBjbGFzc2VzIHRvIFNlZ21lbnRlZEJhciB2aWV3IGJpbmRpbmdzXHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZVZpZXdIZWxwZXI6IEluamVjdGlvblRva2VuPEFycmF5PGFueT4+ID0gbmV3IEluamVjdGlvblRva2VuKCdMYW5ndWFnZVZpZXdIZWxwZXInKTtcclxuZXhwb3J0IGNvbnN0IExhbmd1YWdlUHJvdmlkZXJzID0gW1xyXG4gIHsgcHJvdmlkZTogTGFuZ3VhZ2VzLCB1c2VWYWx1ZTogW10gfSxcclxuICB7IHByb3ZpZGU6IExhbmd1YWdlVmlld0hlbHBlciwgdXNlVmFsdWU6IG51bGwgfVxyXG5dO1xyXG5cclxuLy8gc2VydmljZVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdpbjogV2luZG93U2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT5cclxuICApIHtcclxuICAgIHN1cGVyKGFuYWx5dGljcyk7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gQ0FURUdPUlk7XHJcblxyXG4gICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcclxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZyhpbml0aWFsU3RhdGUubGFuZyk7XHJcblxyXG4gICAgLy8gdXNlIGJyb3dzZXIvcGxhdGZvcm0gbGFuZyBpZiBhdmFpbGFibGVcclxuICAgIGxldCB1c2VyTGFuZyA9IHdpbi5uYXZpZ2F0b3IubGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXTtcclxuXHJcbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hhbmdlc1xyXG4gICAgc3RvcmUuc2VsZWN0KHMgPT4gcy5pMThuKS5zdWJzY3JpYmUoKHN0YXRlOiBJTXVsdGlsaW5ndWFsU3RhdGUpID0+IHtcclxuICAgICAgLy8gdXBkYXRlIG5nMi10cmFuc2xhdGUgd2hpY2ggd2lsbCBjYXVzZSB0cmFuc2xhdGlvbnMgdG8gb2NjdXIgd2hlcmV2ZXIgdGhlIFRyYW5zbGF0ZVBpcGUgaXMgdXNlZCBpbiB0aGUgdmlld1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZS51c2Uoc3RhdGUubGFuZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0IHRoZSBsYW5nXHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VBY3Rpb24odXNlckxhbmcpKTtcclxuICB9XHJcbn1cclxuIl19
