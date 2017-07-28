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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWxpbmd1YWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyRDtBQUUzRCxPQUFPO0FBQ1AscUNBQW9DO0FBQ3BDLDRDQUF1RDtBQUV2RCxNQUFNO0FBQ04sK0NBQW9FO0FBRXBFLHFFQUFtRTtBQUduRSxTQUFTO0FBQ1QsNkRBQXFEO0FBQ3JELHlDQUFtRTtBQUNuRSwwQ0FBZ0Q7QUFFaEQseUNBQXlDO0FBQzVCLFFBQUEsU0FBUyxHQUFpQyxJQUFJLHFCQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkYsNkNBQTZDO0FBQzdDLDBFQUEwRTtBQUM3RCxRQUFBLGtCQUFrQixHQUErQixJQUFJLHFCQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxRixRQUFBLGlCQUFpQixHQUFHO0lBQy9CLEVBQUUsT0FBTyxFQUFFLGlCQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUNwQyxFQUFFLE9BQU8sRUFBRSwwQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ2hELENBQUM7QUFFRixVQUFVO0FBRVYsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBUztJQUVoRCw2QkFDUyxTQUEyQixFQUMxQixTQUEyQixFQUMzQixHQUFrQixFQUNsQixLQUF1QjtRQUpqQyxZQU1FLGtCQUFNLFNBQVMsQ0FBQyxTQWlCakI7UUF0QlEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBZTtRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUcvQixLQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFRLENBQUM7UUFFekIsa0dBQWtHO1FBQ2xHLFNBQVMsQ0FBQyxjQUFjLENBQUMsb0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1Qyx5Q0FBeUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELHVCQUF1QjtRQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF5QjtZQUM1RCw2R0FBNkc7WUFDN0csS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztJQUNsRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBMUJELENBQXlDLGlCQUFTLEdBMEJqRDtBQTFCWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FJUyx3QkFBZ0I7UUFDZix1QkFBZ0I7UUFDdEIsOEJBQWE7UUFDWCxhQUFLO0dBTlgsbUJBQW1CLENBMEIvQjtBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQW5hbHl0aWNzLCBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcclxuaW1wb3J0IHsgSUxhbmcgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9uZ3J4L2luZGV4JztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBDQVRFR09SWSB9IGZyb20gJy4uL2NvbW1vbi9jYXRlZ29yeS5jb21tb24nO1xyXG5pbXBvcnQgeyBJTXVsdGlsaW5ndWFsU3RhdGUsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9pbmRleCc7XHJcbmltcG9ydCB7IENoYW5nZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xyXG5cclxuLy8gcHJvdmlkZSBzdXBwb3J0ZWQgbGFuZ3VhZ2VzIGF0IHJ1bnRpbWVcclxuZXhwb3J0IGNvbnN0IExhbmd1YWdlczogSW5qZWN0aW9uVG9rZW48QXJyYXk8SUxhbmc+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTGFuZ3VhZ2VzJyk7XHJcbi8vIG9wdGlvbmFsIHZpZXcgaGVscGVyIGZvciBsYW5ndWFnZSBoYW5kbGluZ1xyXG4vLyB7Tn0gdXNlcyB0aGlzIHRvIHByb3ZpZGUgc3BlY2lmaWMgY2xhc3NlcyB0byBTZWdtZW50ZWRCYXIgdmlldyBiaW5kaW5nc1xyXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VWaWV3SGVscGVyOiBJbmplY3Rpb25Ub2tlbjxBcnJheTxhbnk+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTGFuZ3VhZ2VWaWV3SGVscGVyJyk7XHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZVByb3ZpZGVycyA9IFtcclxuICB7IHByb3ZpZGU6IExhbmd1YWdlcywgdXNlVmFsdWU6IFtdIH0sXHJcbiAgeyBwcm92aWRlOiBMYW5ndWFnZVZpZXdIZWxwZXIsIHVzZVZhbHVlOiBudWxsIH1cclxuXTtcclxuXHJcbi8vIHNlcnZpY2VcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsU2VydmljZSBleHRlbmRzIEFuYWx5dGljcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB3aW46IFdpbmRvd1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+XHJcbiAgKSB7XHJcbiAgICBzdXBlcihhbmFseXRpY3MpO1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IENBVEVHT1JZO1xyXG5cclxuICAgIC8vIHRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXHJcbiAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoaW5pdGlhbFN0YXRlLmxhbmcpO1xyXG5cclxuICAgIC8vIHVzZSBicm93c2VyL3BsYXRmb3JtIGxhbmcgaWYgYXZhaWxhYmxlXHJcbiAgICBsZXQgdXNlckxhbmcgPSB3aW4ubmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylbMF07XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlIHRvIGNoYW5nZXNcclxuICAgIHN0b3JlLnNlbGVjdChzID0+IHMuaTE4bikuc3Vic2NyaWJlKChzdGF0ZTogSU11bHRpbGluZ3VhbFN0YXRlKSA9PiB7XHJcbiAgICAgIC8vIHVwZGF0ZSBuZzItdHJhbnNsYXRlIHdoaWNoIHdpbGwgY2F1c2UgdHJhbnNsYXRpb25zIHRvIG9jY3VyIHdoZXJldmVyIHRoZSBUcmFuc2xhdGVQaXBlIGlzIHVzZWQgaW4gdGhlIHZpZXdcclxuICAgICAgdGhpcy50cmFuc2xhdGUudXNlKHN0YXRlLmxhbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5pdCB0aGUgbGFuZ1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlQWN0aW9uKHVzZXJMYW5nKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==