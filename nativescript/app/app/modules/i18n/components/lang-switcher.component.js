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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLHNDQUFrRDtBQUNsRCxxQ0FBb0M7QUFFcEMsTUFBTTtBQUNOLDBDQUE2RDtBQUU3RCw4Q0FBNEQ7QUFDNUQsK0NBQWlEO0FBQ2pELDJDQUF1RjtBQVF2RixJQUFhLHFCQUFxQjtJQUtoQywrQkFDVSxLQUF1QixFQUN2QixHQUFlLEVBQ0ksU0FBUyxFQUNBLFVBQVU7UUFKaEQsaUJBaUJDO1FBaEJTLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDSSxjQUFTLEdBQVQsU0FBUyxDQUFBO1FBQ0EsZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07WUFDN0IseUZBQXlGO1lBQ3pGLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QiwyQ0FBMkM7WUFDM0MsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtRQUV2RSxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQW9CLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakQsb0RBQW9EO1lBQ3BELCtCQUErQjtZQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzNDLENBQUM7SUFTRyxXQUFBLGFBQU0sQ0FBQyxpQkFBUyxDQUFDLENBQUE7SUFDakIsV0FBQSxhQUFNLENBQUMsMEJBQWtCLENBQUMsQ0FBQTtxQ0FIWixhQUFLO1FBQ1Asa0JBQVU7R0FQZCxxQkFBcUIsQ0E4Q2pDO0FBOUNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBDb25maWcsIElMYW5nLCBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9uZ3J4L2luZGV4JztcbmltcG9ydCB7IEVsZWN0cm9uRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vaW5kZXgnO1xuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSwgTGFuZ3VhZ2VzLCBMYW5ndWFnZVZpZXdIZWxwZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xhbmctc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJ2xhbmctc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExhbmdTd2l0Y2hlckNvbXBvbmVudCB7XG5cbiAgcHVibGljIGxhbmc6IHN0cmluZztcbiAgcHVibGljIHN1cHBvcnRlZExhbmd1YWdlczogQXJyYXk8SUxhbmc+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT4sXG4gICAgcHJpdmF0ZSBsb2c6IExvZ1NlcnZpY2UsXG4gICAgQEluamVjdChMYW5ndWFnZXMpIHByaXZhdGUgbGFuZ3VhZ2VzLFxuICAgIEBJbmplY3QoTGFuZ3VhZ2VWaWV3SGVscGVyKSBwcml2YXRlIHZpZXdIZWxwZXJcbiAgKSB7XG4gICAgc3RvcmUudGFrZSgxKS5zdWJzY3JpYmUoKHM6IGFueSkgPT4ge1xuICAgICAgLy8gcyAmJiBzLjE4biAtIGVuc3VyZXMgdGVzdGluZyB3b3JrcyBpbiBhbGwgY2FzZXMgKHNpbmNlIHNvbWUgdGVzdHMgZG9udCB1c2UgaTE4biBzdGF0ZSlcbiAgICAgIHRoaXMubGFuZyA9IHMgJiYgcy5pMThuID8gcy5pMThuLmxhbmcgOiAnJztcbiAgICB9KTtcblxuICAgIGlmIChDb25maWcuSVNfREVTS1RPUCgpKSB7XG4gICAgICAvLyBhbGxvdyBlbGVjdHJvbiBtZW51IHRvIHRhbGsgdG8gY29tcG9uZW50XG4gICAgICBFbGVjdHJvbkV2ZW50U2VydmljZS5vbignY2hhbmdlTGFuZycpLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZyh7IHRhcmdldDogeyB2YWx1ZTogZS5kZXRhaWwudmFsdWUgfSB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUxhbmcoZTogYW55KSB7XG4gICAgbGV0IGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1swXS5jb2RlOyAvLyBmYWxsYmFjayB0byBkZWZhdWx0ICdlbidcblxuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBsYW5nID0gdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXNbZS5uZXdJbmRleF0uY29kZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgIGxhbmcgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5sb2cuZGVidWcoYExhbmd1YWdlIGNoYW5nZTogJHtsYW5nfWApO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IG11bHRpbGluZ3VhbC5DaGFuZ2VBY3Rpb24obGFuZykpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLmxhbmd1YWdlcztcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSAmJiB0aGlzLnZpZXdIZWxwZXIpIHtcbiAgICAgIC8vIHtOfSAzLjAgcmVxdWlyZXMgU2VnbWVudGVkQmFySXRlbSBjbGFzcyBmb3IgaXRlbXNcbiAgICAgIC8vIHdoZW4gYmluZGluZyB0byBTZWdtZW50ZWRCYXJcbiAgICAgIHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzID0gdGhpcy52aWV3SGVscGVyO1xuICAgIH1cbiAgfVxufVxuIl19