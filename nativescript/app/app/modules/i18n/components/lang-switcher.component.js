Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
// app
var index_1 = require("../../core/index");
var index_2 = require("../../electron/index");
var multilingual = require("../actions/index");
var index_3 = require("../services/index");
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(store, log, languages, viewHelper) {
        var _this = this;
        this.store = store;
        this.log = log;
        this.languages = languages;
        this.viewHelper = viewHelper;
        store.take(1).subscribe(function (s) {
            // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
            _this.lang = s && s.i18n ? s.i18n.lang : '';
        });
        if (index_1.Config.IS_DESKTOP()) {
            // allow electron menu to talk to component
            index_2.ElectronEventService.on('changeLang').subscribe(function (e) {
                _this.changeLang({ target: { value: e.detail.value } });
            });
        }
    }
    LangSwitcherComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[0].code; // fallback to default 'en'
        if (index_1.Config.IS_MOBILE_NATIVE()) {
            if (e) {
                lang = this.supportedLanguages[e.newIndex].code;
            }
        }
        else if (e && e.target) {
            lang = e.target.value;
        }
        this.log.debug("Language change: " + lang);
        this.store.dispatch(new multilingual.ChangeAction(lang));
    };
    LangSwitcherComponent.prototype.ngOnInit = function () {
        this.supportedLanguages = this.languages;
        if (index_1.Config.IS_MOBILE_NATIVE() && this.viewHelper) {
            // {N} 3.0 requires SegmentedBarItem class for items
            // when binding to SegmentedBar
            this.supportedLanguages = this.viewHelper;
        }
    };
    return LangSwitcherComponent;
}());
LangSwitcherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lang-switcher',
        templateUrl: 'lang-switcher.component.html',
        styleUrls: ['lang-switcher.component.css'],
    }),
    __param(2, core_1.Inject(index_3.Languages)),
    __param(3, core_1.Inject(index_3.LanguageViewHelper)),
    __metadata("design:paramtypes", [store_1.Store,
        index_1.LogService, Object, Object])
], LangSwitcherComponent);
exports.LangSwitcherComponent = LangSwitcherComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLHNDQUFrRDtBQUNsRCxxQ0FBb0M7QUFFcEMsTUFBTTtBQUNOLDBDQUE2RDtBQUU3RCw4Q0FBNEQ7QUFDNUQsK0NBQWlEO0FBQ2pELDJDQUF1RjtBQVF2RixJQUFhLHFCQUFxQjtJQUtoQywrQkFDVSxLQUF1QixFQUN2QixHQUFlLEVBQ0ksU0FBUyxFQUNBLFVBQVU7UUFKaEQsaUJBaUJDO1FBaEJTLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDSSxjQUFTLEdBQVQsU0FBUyxDQUFBO1FBQ0EsZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07WUFDN0IseUZBQXlGO1lBQ3pGLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QiwyQ0FBMkM7WUFDM0MsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtRQUV2RSxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQW9CLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakQsb0RBQW9EO1lBQ3BELCtCQUErQjtZQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzNDLENBQUM7SUFTRyxXQUFBLGFBQU0sQ0FBQyxpQkFBUyxDQUFDLENBQUE7SUFDakIsV0FBQSxhQUFNLENBQUMsMEJBQWtCLENBQUMsQ0FBQTtxQ0FIWixhQUFLO1FBQ1Asa0JBQVU7R0FQZCxxQkFBcUIsQ0E4Q2pDO0FBOUNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQ29uZmlnLCBJTGFuZywgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9uZ3J4L2luZGV4JztcclxuaW1wb3J0IHsgRWxlY3Ryb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9lbGVjdHJvbi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSwgTGFuZ3VhZ2VzLCBMYW5ndWFnZVZpZXdIZWxwZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbGFuZy1zd2l0Y2hlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYW5nU3dpdGNoZXJDb21wb25lbnQge1xyXG5cclxuICBwdWJsaWMgbGFuZzogc3RyaW5nO1xyXG4gIHB1YmxpYyBzdXBwb3J0ZWRMYW5ndWFnZXM6IEFycmF5PElMYW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+LFxyXG4gICAgcHJpdmF0ZSBsb2c6IExvZ1NlcnZpY2UsXHJcbiAgICBASW5qZWN0KExhbmd1YWdlcykgcHJpdmF0ZSBsYW5ndWFnZXMsXHJcbiAgICBASW5qZWN0KExhbmd1YWdlVmlld0hlbHBlcikgcHJpdmF0ZSB2aWV3SGVscGVyXHJcbiAgKSB7XHJcbiAgICBzdG9yZS50YWtlKDEpLnN1YnNjcmliZSgoczogYW55KSA9PiB7XHJcbiAgICAgIC8vIHMgJiYgcy4xOG4gLSBlbnN1cmVzIHRlc3Rpbmcgd29ya3MgaW4gYWxsIGNhc2VzIChzaW5jZSBzb21lIHRlc3RzIGRvbnQgdXNlIGkxOG4gc3RhdGUpXHJcbiAgICAgIHRoaXMubGFuZyA9IHMgJiYgcy5pMThuID8gcy5pMThuLmxhbmcgOiAnJztcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChDb25maWcuSVNfREVTS1RPUCgpKSB7XHJcbiAgICAgIC8vIGFsbG93IGVsZWN0cm9uIG1lbnUgdG8gdGFsayB0byBjb21wb25lbnRcclxuICAgICAgRWxlY3Ryb25FdmVudFNlcnZpY2Uub24oJ2NoYW5nZUxhbmcnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZyh7IHRhcmdldDogeyB2YWx1ZTogZS5kZXRhaWwudmFsdWUgfSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYW5nKGU6IGFueSkge1xyXG4gICAgbGV0IGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1swXS5jb2RlOyAvLyBmYWxsYmFjayB0byBkZWZhdWx0ICdlbidcclxuXHJcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xyXG4gICAgICBpZiAoZSkge1xyXG4gICAgICAgIGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1tlLm5ld0luZGV4XS5jb2RlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcclxuICAgICAgbGFuZyA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2cuZGVidWcoYExhbmd1YWdlIGNoYW5nZTogJHtsYW5nfWApO1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbXVsdGlsaW5ndWFsLkNoYW5nZUFjdGlvbihsYW5nKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXM7XHJcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSAmJiB0aGlzLnZpZXdIZWxwZXIpIHtcclxuICAgICAgLy8ge059IDMuMCByZXF1aXJlcyBTZWdtZW50ZWRCYXJJdGVtIGNsYXNzIGZvciBpdGVtc1xyXG4gICAgICAvLyB3aGVuIGJpbmRpbmcgdG8gU2VnbWVudGVkQmFyXHJcbiAgICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy52aWV3SGVscGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=