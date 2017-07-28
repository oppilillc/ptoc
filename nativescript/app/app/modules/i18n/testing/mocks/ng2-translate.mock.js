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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXRyYW5zbGF0ZS5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLXRyYW5zbGF0ZS5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTO0FBQ1Qsc0NBQTZDO0FBRTdDLE9BQU87QUFDUCw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBRWhDO0lBQUE7UUFDUyxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyRCx3QkFBbUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFxQnJFLENBQUM7SUFwQlEsc0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUNoQyxNQUFNLENBQUM7WUFDTCxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7SUFDSixDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUFXLElBQVk7UUFDckIscUJBQXFCO0lBQ3ZCLENBQUM7SUFDTSwyQkFBRyxHQUFWLFVBQVcsR0FBMkIsRUFBRSxpQkFBMEI7UUFDaEUsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxzQ0FBYyxHQUFyQixVQUFzQixJQUFZO1FBQ2hDLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNNLGtDQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FuZ3VsYXJcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZU1vY2sge1xyXG4gIHB1YmxpYyBvbkxhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyBvblRyYW5zbGF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdURVNUJzogJ3Rlc3QnXHJcbiAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xyXG4gICAgLy8gY29uc29sZS5sb2cobGFuZyk7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nIHwgYW55PiB7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihrZXkpO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRMYW5ncygpIHtcclxuICAgIHJldHVybiBbJ2VuJ107XHJcbiAgfVxyXG4gIHB1YmxpYyByZWxvYWRMYW5nKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZignZW4nKTtcclxuICB9XHJcbn1cclxuIl19