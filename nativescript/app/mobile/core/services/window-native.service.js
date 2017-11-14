Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var dialogs = require("ui/dialogs");
var platform_1 = require("platform");
var WindowNative = (function () {
    function WindowNative() {
    }
    Object.defineProperty(WindowNative.prototype, "navigator", {
        get: function () {
            return {
                language: platform_1.device.language,
                userAgent: 'nativescript'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowNative.prototype, "location", {
        get: function () {
            return {
                host: 'nativescript'
            };
        },
        enumerable: true,
        configurable: true
    });
    WindowNative.prototype.alert = function (msg) {
        return dialogs.alert(msg);
    };
    WindowNative.prototype.confirm = function (msg) {
        return dialogs.confirm(msg);
    };
    return WindowNative;
}());
exports.WindowNative = WindowNative;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LW5hdGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LW5hdGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxlQUFlO0FBQ2Ysb0NBQXNDO0FBQ3RDLHFDQUFrQztBQUtsQztJQUFBO0lBa0JBLENBQUM7SUFqQkMsc0JBQVcsbUNBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGlCQUFNLENBQUMsUUFBUTtnQkFDekIsU0FBUyxFQUFFLGNBQWM7YUFDMUIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsa0NBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGNBQWM7YUFDckIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBQ00sNEJBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLDhCQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYXRpdmVzY3JpcHRcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgSVdpbmRvdyB9IGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2NvcmUvaW50ZXJmYWNlcy9pd2luZG93JztcblxuZXhwb3J0IGNsYXNzIFdpbmRvd05hdGl2ZSBpbXBsZW1lbnRzIElXaW5kb3cge1xuICBwdWJsaWMgZ2V0IG5hdmlnYXRvcigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBsYW5ndWFnZTogZGV2aWNlLmxhbmd1YWdlLFxuICAgICAgdXNlckFnZW50OiAnbmF0aXZlc2NyaXB0J1xuICAgIH07XG4gIH1cbiAgcHVibGljIGdldCBsb2NhdGlvbigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiAnbmF0aXZlc2NyaXB0J1xuICAgIH07XG4gIH1cbiAgcHVibGljIGFsZXJ0KG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZGlhbG9ncy5hbGVydChtc2cpO1xuICB9XG4gIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZGlhbG9ncy5jb25maXJtKG1zZyk7XG4gIH1cbn1cbiJdfQ==