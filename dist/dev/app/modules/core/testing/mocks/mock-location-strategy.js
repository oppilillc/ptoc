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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var MockLocationStrategy = (function (_super) {
    __extends(MockLocationStrategy, _super);
    function MockLocationStrategy() {
        var _this = _super.call(this) || this;
        _this.internalBaseHref = '/';
        _this.internalPath = '/';
        _this.internalTitle = '';
        _this.urlChanges = [];
        _this._subject = new core_1.EventEmitter();
        return _this;
    }
    MockLocationStrategy.prototype.simulatePopState = function (url) {
        this.internalPath = url;
        this._subject.emit(new MockPopStateEvent(this.path()));
    };
    MockLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.internalPath;
    };
    MockLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
            return this.internalBaseHref + internal.substring(1);
        }
        return this.internalBaseHref + internal;
    };
    MockLocationStrategy.prototype.pushState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push(externalUrl);
    };
    MockLocationStrategy.prototype.replaceState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push('replace: ' + externalUrl);
    };
    MockLocationStrategy.prototype.onPopState = function (fn) { this._subject.subscribe({ next: fn }); };
    MockLocationStrategy.prototype.getBaseHref = function () { return this.internalBaseHref; };
    MockLocationStrategy.prototype.back = function () {
        if (this.urlChanges.length > 0) {
            this.urlChanges.pop();
            var nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
            this.simulatePopState(nextUrl);
        }
    };
    MockLocationStrategy.prototype.forward = function () { throw 'not implemented'; };
    MockLocationStrategy = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MockLocationStrategy);
    return MockLocationStrategy;
}(common_1.LocationStrategy));
exports.MockLocationStrategy = MockLocationStrategy;
var MockPopStateEvent = (function () {
    function MockPopStateEvent(newUrl) {
        this.newUrl = newUrl;
        this.pop = true;
        this.type = 'popstate';
    }
    return MockPopStateEvent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9tb2NrLWxvY2F0aW9uLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLDBDQUFtRDtBQUNuRCxzQ0FBeUQ7QUFTekQ7SUFBMEMsd0NBQWdCO0lBT3hEO1FBQUEsWUFBZ0IsaUJBQU8sU0FBRztRQU4xQixzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0Isa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVUsR0FBYSxFQUFFLENBQUM7UUFFMUIsY0FBUSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQzs7SUFDeEIsQ0FBQztJQUUxQiwrQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxXQUE0QjtRQUE1Qiw0QkFBQSxFQUFBLG1CQUE0QjtRQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQUMsQ0FBQztJQUV4RSxpREFBa0IsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDakMsRUFBRSxDQUFDLENBQU8sUUFBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBVSxJQUFJLENBQUMsZ0JBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsR0FBUSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUV4QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxHQUFRLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFhO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBRXhCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxFQUF3QixJQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5GLDBDQUFXLEdBQVgsY0FBd0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFdkQsbUNBQUksR0FBSjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsc0NBQU8sR0FBUCxjQUFrQixNQUFNLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQXZEakMsb0JBQW9CO1FBRGhDLGlCQUFVLEVBQUU7O09BQ0Esb0JBQW9CLENBd0RoQztJQUFELDJCQUFDO0NBeERELEFBd0RDLENBeER5Qyx5QkFBZ0IsR0F3RHpEO0FBeERZLG9EQUFvQjtBQTBEakM7SUFHRSwyQkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGakMsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQVcsVUFBVSxDQUFDO0lBQ1UsQ0FBQztJQUN2Qyx3QkFBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9tb2NrLWxvY2F0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIE1vY2sgbG9jYXRpb24gc3RyYXRlZ3kgKHVudGlsIHByb3ZpZGVkIGJ5IEBhbmd1bGFyKVxyXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL21vZHVsZXMvJTQwYW5ndWxhci9jb21tb24vdGVzdGluZy9tb2NrX2xvY2F0aW9uX3N0cmF0ZWd5LnRzXHJcbiAqL1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQSBtb2NrIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBMb2NhdGlvblN0cmF0ZWd5fSB0aGF0IGFsbG93cyB0ZXN0cyB0byBmaXJlIHNpbXVsYXRlZFxyXG4gKiBsb2NhdGlvbiBldmVudHMuXHJcbiAqXHJcbiAqIEBzdGFibGVcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tMb2NhdGlvblN0cmF0ZWd5IGV4dGVuZHMgTG9jYXRpb25TdHJhdGVneSB7XHJcbiAgaW50ZXJuYWxCYXNlSHJlZjogc3RyaW5nID0gJy8nO1xyXG4gIGludGVybmFsUGF0aDogc3RyaW5nID0gJy8nO1xyXG4gIGludGVybmFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIHVybENoYW5nZXM6IHN0cmluZ1tdID0gW107XHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9zdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxyXG5cclxuICBzaW11bGF0ZVBvcFN0YXRlKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludGVybmFsUGF0aCA9IHVybDtcclxuICAgIHRoaXMuX3N1YmplY3QuZW1pdChuZXcgTW9ja1BvcFN0YXRlRXZlbnQodGhpcy5wYXRoKCkpKTtcclxuICB9XHJcblxyXG4gIHBhdGgoaW5jbHVkZUhhc2g6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmludGVybmFsUGF0aDsgfVxyXG5cclxuICBwcmVwYXJlRXh0ZXJuYWxVcmwoaW50ZXJuYWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoKDxhbnk+aW50ZXJuYWwpLnN0YXJ0c1dpdGgoJy8nKSAmJiAoPGFueT50aGlzLmludGVybmFsQmFzZUhyZWYpLmVuZHNXaXRoKCcvJykpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxCYXNlSHJlZiArIGludGVybmFsLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmludGVybmFsQmFzZUhyZWYgKyBpbnRlcm5hbDtcclxuICB9XHJcblxyXG4gIHB1c2hTdGF0ZShjdHg6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludGVybmFsVGl0bGUgPSB0aXRsZTtcclxuXHJcbiAgICB2YXIgdXJsID0gcGF0aCArIChxdWVyeS5sZW5ndGggPiAwID8gKCc/JyArIHF1ZXJ5KSA6ICcnKTtcclxuICAgIHRoaXMuaW50ZXJuYWxQYXRoID0gdXJsO1xyXG5cclxuICAgIHZhciBleHRlcm5hbFVybCA9IHRoaXMucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XHJcbiAgICB0aGlzLnVybENoYW5nZXMucHVzaChleHRlcm5hbFVybCk7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlU3RhdGUoY3R4OiBhbnksIHRpdGxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcm5hbFRpdGxlID0gdGl0bGU7XHJcblxyXG4gICAgdmFyIHVybCA9IHBhdGggKyAocXVlcnkubGVuZ3RoID4gMCA/ICgnPycgKyBxdWVyeSkgOiAnJyk7XHJcbiAgICB0aGlzLmludGVybmFsUGF0aCA9IHVybDtcclxuXHJcbiAgICB2YXIgZXh0ZXJuYWxVcmwgPSB0aGlzLnByZXBhcmVFeHRlcm5hbFVybCh1cmwpO1xyXG4gICAgdGhpcy51cmxDaGFuZ2VzLnB1c2goJ3JlcGxhY2U6ICcgKyBleHRlcm5hbFVybCk7XHJcbiAgfVxyXG5cclxuICBvblBvcFN0YXRlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9zdWJqZWN0LnN1YnNjcmliZSh7bmV4dDogZm59KTsgfVxyXG5cclxuICBnZXRCYXNlSHJlZigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pbnRlcm5hbEJhc2VIcmVmOyB9XHJcblxyXG4gIGJhY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy51cmxDaGFuZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy51cmxDaGFuZ2VzLnBvcCgpO1xyXG4gICAgICB2YXIgbmV4dFVybCA9IHRoaXMudXJsQ2hhbmdlcy5sZW5ndGggPiAwID8gdGhpcy51cmxDaGFuZ2VzW3RoaXMudXJsQ2hhbmdlcy5sZW5ndGggLSAxXSA6ICcnO1xyXG4gICAgICB0aGlzLnNpbXVsYXRlUG9wU3RhdGUobmV4dFVybCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3J3YXJkKCk6IHZvaWQgeyB0aHJvdyAnbm90IGltcGxlbWVudGVkJzsgfVxyXG59XHJcblxyXG5jbGFzcyBNb2NrUG9wU3RhdGVFdmVudCB7XHJcbiAgcG9wOiBib29sZWFuID0gdHJ1ZTtcclxuICB0eXBlOiBzdHJpbmcgPSAncG9wc3RhdGUnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuZXdVcmw6IHN0cmluZykge31cclxufVxyXG4iXX0=
