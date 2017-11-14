Object.defineProperty(exports, "__esModule", { value: true });
//angular
var core_1 = require("@angular/core");
// libs
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var TranslateMock = (function () {
    function TranslateMock() {
        this.onLangChange = new core_1.EventEmitter();
        this.onTranslationChange = new core_1.EventEmitter();
    }
    TranslateMock.prototype.getTranslation = function (lang) {
        return {
            'TEST': 'test'
        };
    };
    TranslateMock.prototype.use = function (lang) {
        // console.log(lang);
    };
    TranslateMock.prototype.get = function (key, interpolateParams) {
        return Observable_1.Observable.of(key);
    };
    TranslateMock.prototype.setDefaultLang = function (lang) {
        return;
    };
    TranslateMock.prototype.getLangs = function () {
        return ['en'];
    };
    TranslateMock.prototype.reloadLang = function (lang) {
        return Observable_1.Observable.of('en');
    };
    return TranslateMock;
}());
exports.TranslateMock = TranslateMock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRyYW5zbGF0ZS5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLXRyYW5zbGF0ZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTO0FBQ1Qsc0NBQTZDO0FBRTdDLE9BQU87QUFDUCw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBRWhDO0lBQUE7UUFDUyxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyRCx3QkFBbUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFxQnJFLENBQUM7SUFwQlEsc0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUNoQyxNQUFNLENBQUM7WUFDTCxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7SUFDSixDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUFXLElBQVk7UUFDckIscUJBQXFCO0lBQ3ZCLENBQUM7SUFDTSwyQkFBRyxHQUFWLFVBQVcsR0FBMkIsRUFBRSxpQkFBMEI7UUFDaEUsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxzQ0FBYyxHQUFyQixVQUFzQixJQUFZO1FBQ2hDLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNNLGtDQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNb2NrIHtcbiAgcHVibGljIG9uTGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBvblRyYW5zbGF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdURVNUJzogJ3Rlc3QnXG4gICAgfTtcbiAgfVxuICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xuICAgIC8vIGNvbnNvbGUubG9nKGxhbmcpO1xuICB9XG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nIHwgYW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2Yoa2V5KTtcbiAgfVxuICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHB1YmxpYyBnZXRMYW5ncygpIHtcbiAgICByZXR1cm4gWydlbiddO1xuICB9XG4gIHB1YmxpYyByZWxvYWRMYW5nKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoJ2VuJyk7XG4gIH1cbn1cbiJdfQ==