Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var store_1 = require("@ngrx/store");
var core_2 = require("@ngx-translate/core");
// app
var index_1 = require("../../analytics/index");
var window_service_1 = require("../../core/services/window.service");
// module
var category_common_1 = require("../common/category.common");
var index_2 = require("../states/index");
var index_3 = require("../actions/index");
// provide supported languages at runtime
exports.Languages = new core_1.InjectionToken('Languages');
// optional view helper for language handling
// {N} uses this to provide specific classes to SegmentedBar view bindings
exports.LanguageViewHelper = new core_1.InjectionToken('LanguageViewHelper');
exports.LanguageProviders = [
    { provide: exports.Languages, useValue: [] },
    { provide: exports.LanguageViewHelper, useValue: null }
];
// service
var MultilingualService = (function (_super) {
    __extends(MultilingualService, _super);
    function MultilingualService(analytics, translate, win, store) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.translate = translate;
        _this.win = win;
        _this.store = store;
        _this.category = category_common_1.CATEGORY;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(index_2.initialState.lang);
        // use browser/platform lang if available
        var userLang = win.navigator.language.split('-')[0];
        // subscribe to changes
        store.select(function (s) { return s.i18n; }).subscribe(function (state) {
            // update ng2-translate which will cause translations to occur wherever the TranslatePipe is used in the view
            _this.translate.use(state.lang);
        });
        // init the lang
        _this.store.dispatch(new index_3.ChangeAction(userLang));
        return _this;
    }
    return MultilingualService;
}(index_1.Analytics));
MultilingualService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        core_2.TranslateService,
        window_service_1.WindowService,
        store_1.Store])
], MultilingualService);
exports.MultilingualService = MultilingualService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWxpbmd1YWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyRDtBQUUzRCxPQUFPO0FBQ1AscUNBQW9DO0FBQ3BDLDRDQUF1RDtBQUV2RCxNQUFNO0FBQ04sK0NBQW9FO0FBRXBFLHFFQUFtRTtBQUduRSxTQUFTO0FBQ1QsNkRBQXFEO0FBQ3JELHlDQUFtRTtBQUNuRSwwQ0FBZ0Q7QUFFaEQseUNBQXlDO0FBQzVCLFFBQUEsU0FBUyxHQUFpQyxJQUFJLHFCQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkYsNkNBQTZDO0FBQzdDLDBFQUEwRTtBQUM3RCxRQUFBLGtCQUFrQixHQUErQixJQUFJLHFCQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxRixRQUFBLGlCQUFpQixHQUFHO0lBQy9CLEVBQUUsT0FBTyxFQUFFLGlCQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUNwQyxFQUFFLE9BQU8sRUFBRSwwQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ2hELENBQUM7QUFFRixVQUFVO0FBRVYsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBUztJQUVoRCw2QkFDUyxTQUEyQixFQUMxQixTQUEyQixFQUMzQixHQUFrQixFQUNsQixLQUF1QjtRQUpqQyxZQU1FLGtCQUFNLFNBQVMsQ0FBQyxTQWlCakI7UUF0QlEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBZTtRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUcvQixLQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFRLENBQUM7UUFFekIsa0dBQWtHO1FBQ2xHLFNBQVMsQ0FBQyxjQUFjLENBQUMsb0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1Qyx5Q0FBeUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELHVCQUF1QjtRQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF5QjtZQUM1RCw2R0FBNkc7WUFDN0csS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztJQUNsRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBMUJELENBQXlDLGlCQUFTLEdBMEJqRDtBQTFCWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FJUyx3QkFBZ0I7UUFDZix1QkFBZ0I7UUFDdEIsOEJBQWE7UUFDWCxhQUFLO0dBTlgsbUJBQW1CLENBMEIvQjtBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3MsIEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgSUxhbmcgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL25ncngvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IENBVEVHT1JZIH0gZnJvbSAnLi4vY29tbW9uL2NhdGVnb3J5LmNvbW1vbic7XG5pbXBvcnQgeyBJTXVsdGlsaW5ndWFsU3RhdGUsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9pbmRleCc7XG5pbXBvcnQgeyBDaGFuZ2VBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuLy8gcHJvdmlkZSBzdXBwb3J0ZWQgbGFuZ3VhZ2VzIGF0IHJ1bnRpbWVcbmV4cG9ydCBjb25zdCBMYW5ndWFnZXM6IEluamVjdGlvblRva2VuPEFycmF5PElMYW5nPj4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0xhbmd1YWdlcycpO1xuLy8gb3B0aW9uYWwgdmlldyBoZWxwZXIgZm9yIGxhbmd1YWdlIGhhbmRsaW5nXG4vLyB7Tn0gdXNlcyB0aGlzIHRvIHByb3ZpZGUgc3BlY2lmaWMgY2xhc3NlcyB0byBTZWdtZW50ZWRCYXIgdmlldyBiaW5kaW5nc1xuZXhwb3J0IGNvbnN0IExhbmd1YWdlVmlld0hlbHBlcjogSW5qZWN0aW9uVG9rZW48QXJyYXk8YW55Pj4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0xhbmd1YWdlVmlld0hlbHBlcicpO1xuZXhwb3J0IGNvbnN0IExhbmd1YWdlUHJvdmlkZXJzID0gW1xuICB7IHByb3ZpZGU6IExhbmd1YWdlcywgdXNlVmFsdWU6IFtdIH0sXG4gIHsgcHJvdmlkZTogTGFuZ3VhZ2VWaWV3SGVscGVyLCB1c2VWYWx1ZTogbnVsbCB9XG5dO1xuXG4vLyBzZXJ2aWNlXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsU2VydmljZSBleHRlbmRzIEFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHdpbjogV2luZG93U2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+XG4gICkge1xuICAgIHN1cGVyKGFuYWx5dGljcyk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IENBVEVHT1JZO1xuXG4gICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoaW5pdGlhbFN0YXRlLmxhbmcpO1xuXG4gICAgLy8gdXNlIGJyb3dzZXIvcGxhdGZvcm0gbGFuZyBpZiBhdmFpbGFibGVcbiAgICBsZXQgdXNlckxhbmcgPSB3aW4ubmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hhbmdlc1xuICAgIHN0b3JlLnNlbGVjdChzID0+IHMuaTE4bikuc3Vic2NyaWJlKChzdGF0ZTogSU11bHRpbGluZ3VhbFN0YXRlKSA9PiB7XG4gICAgICAvLyB1cGRhdGUgbmcyLXRyYW5zbGF0ZSB3aGljaCB3aWxsIGNhdXNlIHRyYW5zbGF0aW9ucyB0byBvY2N1ciB3aGVyZXZlciB0aGUgVHJhbnNsYXRlUGlwZSBpcyB1c2VkIGluIHRoZSB2aWV3XG4gICAgICB0aGlzLnRyYW5zbGF0ZS51c2Uoc3RhdGUubGFuZyk7XG4gICAgfSk7XG5cbiAgICAvLyBpbml0IHRoZSBsYW5nXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlQWN0aW9uKHVzZXJMYW5nKSk7XG4gIH1cbn1cbiJdfQ==