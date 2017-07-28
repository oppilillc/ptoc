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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LW5hdGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LW5hdGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxlQUFlO0FBQ2Ysb0NBQXNDO0FBQ3RDLHFDQUFrQztBQUtsQztJQUFBO0lBa0JBLENBQUM7SUFqQkMsc0JBQVcsbUNBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGlCQUFNLENBQUMsUUFBUTtnQkFDekIsU0FBUyxFQUFFLGNBQWM7YUFDMUIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsa0NBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGNBQWM7YUFDckIsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBQ00sNEJBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLDhCQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYXRpdmVzY3JpcHRcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IElXaW5kb3cgfSBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL2ludGVyZmFjZXMvaXdpbmRvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93TmF0aXZlIGltcGxlbWVudHMgSVdpbmRvdyB7XHJcbiAgcHVibGljIGdldCBuYXZpZ2F0b3IoKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhbmd1YWdlOiBkZXZpY2UubGFuZ3VhZ2UsXHJcbiAgICAgIHVzZXJBZ2VudDogJ25hdGl2ZXNjcmlwdCdcclxuICAgIH07XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgbG9jYXRpb24oKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhvc3Q6ICduYXRpdmVzY3JpcHQnXHJcbiAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGRpYWxvZ3MuYWxlcnQobXNnKTtcclxuICB9XHJcbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGRpYWxvZ3MuY29uZmlybShtc2cpO1xyXG4gIH1cclxufVxyXG4iXX0=