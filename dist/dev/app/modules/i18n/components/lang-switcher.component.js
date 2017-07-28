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
            _this.lang = s && s.i18n ? s.i18n.lang : '';
        });
        if (index_1.Config.IS_DESKTOP()) {
            index_2.ElectronEventService.on('changeLang').subscribe(function (e) {
                _this.changeLang({ target: { value: e.detail.value } });
            });
        }
    }
    LangSwitcherComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[0].code;
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
            this.supportedLanguages = this.viewHelper;
        }
    };
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
    return LangSwitcherComponent;
}());
exports.LangSwitcherComponent = LangSwitcherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUFrRDtBQUNsRCxxQ0FBb0M7QUFHcEMsMENBQTZEO0FBRTdELDhDQUE0RDtBQUM1RCwrQ0FBaUQ7QUFDakQsMkNBQXVGO0FBUXZGO0lBS0UsK0JBQ1UsS0FBdUIsRUFDdkIsR0FBZSxFQUNJLFNBQVMsRUFDQSxVQUFVO1FBSmhELGlCQWlCQztRQWhCUyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ0ksY0FBUyxHQUFULFNBQVMsQ0FBQTtRQUNBLGVBQVUsR0FBVixVQUFVLENBQUE7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFNO1lBRTdCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV4Qiw0QkFBb0IsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBTTtnQkFDckQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLENBQU07UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTNDLEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBb0IsSUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUdqRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQTdDVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7UUFTRyxXQUFBLGFBQU0sQ0FBQyxpQkFBUyxDQUFDLENBQUE7UUFDakIsV0FBQSxhQUFNLENBQUMsMEJBQWtCLENBQUMsQ0FBQTt5Q0FIWixhQUFLO1lBQ1Asa0JBQVU7T0FQZCxxQkFBcUIsQ0E4Q2pDO0lBQUQsNEJBQUM7Q0E5Q0QsQUE4Q0MsSUFBQTtBQTlDWSxzREFBcUIiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9jb21wb25lbnRzL2xhbmctc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBDb25maWcsIElMYW5nLCBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL25ncngvaW5kZXgnO1xyXG5pbXBvcnQgeyBFbGVjdHJvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlLCBMYW5ndWFnZXMsIExhbmd1YWdlVmlld0hlbHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdsYW5nLXN3aXRjaGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xhbmctc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmdTd2l0Y2hlckNvbXBvbmVudCB7XHJcblxyXG4gIHB1YmxpYyBsYW5nOiBzdHJpbmc7XHJcbiAgcHVibGljIHN1cHBvcnRlZExhbmd1YWdlczogQXJyYXk8SUxhbmc+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT4sXHJcbiAgICBwcml2YXRlIGxvZzogTG9nU2VydmljZSxcclxuICAgIEBJbmplY3QoTGFuZ3VhZ2VzKSBwcml2YXRlIGxhbmd1YWdlcyxcclxuICAgIEBJbmplY3QoTGFuZ3VhZ2VWaWV3SGVscGVyKSBwcml2YXRlIHZpZXdIZWxwZXJcclxuICApIHtcclxuICAgIHN0b3JlLnRha2UoMSkuc3Vic2NyaWJlKChzOiBhbnkpID0+IHtcclxuICAgICAgLy8gcyAmJiBzLjE4biAtIGVuc3VyZXMgdGVzdGluZyB3b3JrcyBpbiBhbGwgY2FzZXMgKHNpbmNlIHNvbWUgdGVzdHMgZG9udCB1c2UgaTE4biBzdGF0ZSlcclxuICAgICAgdGhpcy5sYW5nID0gcyAmJiBzLmkxOG4gPyBzLmkxOG4ubGFuZyA6ICcnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKENvbmZpZy5JU19ERVNLVE9QKCkpIHtcclxuICAgICAgLy8gYWxsb3cgZWxlY3Ryb24gbWVudSB0byB0YWxrIHRvIGNvbXBvbmVudFxyXG4gICAgICBFbGVjdHJvbkV2ZW50U2VydmljZS5vbignY2hhbmdlTGFuZycpLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VMYW5nKHsgdGFyZ2V0OiB7IHZhbHVlOiBlLmRldGFpbC52YWx1ZSB9IH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZUxhbmcoZTogYW55KSB7XHJcbiAgICBsZXQgbGFuZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzWzBdLmNvZGU7IC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgJ2VuJ1xyXG5cclxuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpKSB7XHJcbiAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgbGFuZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzW2UubmV3SW5kZXhdLmNvZGU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xyXG4gICAgICBsYW5nID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZy5kZWJ1ZyhgTGFuZ3VhZ2UgY2hhbmdlOiAke2xhbmd9YCk7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBtdWx0aWxpbmd1YWwuQ2hhbmdlQWN0aW9uKGxhbmcpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLmxhbmd1YWdlcztcclxuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpICYmIHRoaXMudmlld0hlbHBlcikge1xyXG4gICAgICAvLyB7Tn0gMy4wIHJlcXVpcmVzIFNlZ21lbnRlZEJhckl0ZW0gY2xhc3MgZm9yIGl0ZW1zXHJcbiAgICAgIC8vIHdoZW4gYmluZGluZyB0byBTZWdtZW50ZWRCYXJcclxuICAgICAgdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLnZpZXdIZWxwZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
