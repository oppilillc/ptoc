Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var app = require("application");
var platform_1 = require("platform");
var color_1 = require("color");
var ActionBarUtil = (function () {
    function ActionBarUtil() {
    }
    ActionBarUtil.SET_TITLE = function (title) {
        var actionBar = frame_1.topmost().currentPage.actionBar;
        actionBar.title = title;
    };
    ActionBarUtil.ADD_BUTTON = function (button) {
        // NOTE: This MUST be called BEFORE SET_TITLE on start
        frame_1.topmost().currentPage.actionBar.actionItems.addItem(button);
    };
    ActionBarUtil.HIDE_BACK_BUTTON = function () {
        if (frame_1.topmost().ios) {
            frame_1.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
        }
    };
    ActionBarUtil.EMPTY_ITEMS = function () {
        var actionBar = frame_1.topmost().currentPage.actionBar;
        var actionItems = actionBar.actionItems.getItems();
        actionItems.forEach(function (item) {
            actionBar.actionItems.removeItem(item);
        });
    };
    ActionBarUtil.STATUSBAR_STYLE = function (style) {
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            // 0: default
            // 1: light
            navigationBar.barStyle = style;
        }
        else if (platform_1.isAndroid) {
            if (app.android && platform_1.device.sdkVersion >= '21') {
                try {
                    var LayoutParams = android.view.WindowManager.LayoutParams;
                    var win = void 0;
                    if (app.android.foregroundActivity) {
                        win = app.android.foregroundActivity.getWindow();
                    }
                    else {
                        win = app.android.startActivity.getWindow();
                    }
                    win.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
                    win.setStatusBarColor(new color_1.Color(style || '#3280CF').android);
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    };
    return ActionBarUtil;
}());
exports.ActionBarUtil = ActionBarUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYmFyLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb25iYXIudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0NBQW1DO0FBRW5DLGlDQUFtQztBQUNuQyxxQ0FBNkM7QUFDN0MsK0JBQThCO0FBSzlCO0lBQUE7SUE4Q0EsQ0FBQztJQTdDZSx1QkFBUyxHQUF2QixVQUF3QixLQUFhO1FBQ25DLElBQUksU0FBUyxHQUFHLGVBQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDaEQsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNhLHdCQUFVLEdBQXhCLFVBQXlCLE1BQWtCO1FBQ3pDLHNEQUFzRDtRQUN0RCxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNhLDhCQUFnQixHQUE5QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hHLENBQUM7SUFDSCxDQUFDO0lBQ2EseUJBQVcsR0FBekI7UUFDRSxJQUFJLFNBQVMsR0FBRyxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDdkIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ2EsNkJBQWUsR0FBN0IsVUFBOEIsS0FBc0I7UUFDbEQsRUFBRSxDQUFDLENBQUMsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLGFBQWEsR0FBRyxlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUMzRCxhQUFhO1lBQ2IsV0FBVztZQUNYLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxpQkFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUM7b0JBQ0gsSUFBSSxZQUFZLEdBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29CQUNoRSxJQUFJLEdBQUcsU0FBSyxDQUFDO29CQUNiLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzlDLENBQUM7b0JBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsaUNBQWlDLENBQUMsQ0FBQztvQkFDN0QsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksYUFBSyxDQUFTLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSAndWkvZnJhbWUnO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSwgQWN0aW9uSXRlbXMgfSBmcm9tICd1aS9hY3Rpb24tYmFyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBkZXZpY2UsIGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDtcblxuZGVjbGFyZSB2YXIgVUlCYXJTdHlsZTogYW55O1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyVXRpbCB7XG4gIHB1YmxpYyBzdGF0aWMgU0VUX1RJVExFKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB2YXIgYWN0aW9uQmFyID0gdG9wbW9zdCgpLmN1cnJlbnRQYWdlLmFjdGlvbkJhcjtcbiAgICBhY3Rpb25CYXIudGl0bGUgPSB0aXRsZTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIEFERF9CVVRUT04oYnV0dG9uOiBBY3Rpb25JdGVtKSB7XG4gICAgLy8gTk9URTogVGhpcyBNVVNUIGJlIGNhbGxlZCBCRUZPUkUgU0VUX1RJVExFIG9uIHN0YXJ0XG4gICAgdG9wbW9zdCgpLmN1cnJlbnRQYWdlLmFjdGlvbkJhci5hY3Rpb25JdGVtcy5hZGRJdGVtKGJ1dHRvbik7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBISURFX0JBQ0tfQlVUVE9OKCkge1xuICAgIGlmICh0b3Btb3N0KCkuaW9zKSB7XG4gICAgICB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIudmlzaWJsZVZpZXdDb250cm9sbGVyLm5hdmlnYXRpb25JdGVtLnNldEhpZGVzQmFja0J1dHRvbkFuaW1hdGVkKHRydWUsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHN0YXRpYyBFTVBUWV9JVEVNUygpIHtcbiAgICB2YXIgYWN0aW9uQmFyID0gdG9wbW9zdCgpLmN1cnJlbnRQYWdlLmFjdGlvbkJhcjtcbiAgICB2YXIgYWN0aW9uSXRlbXMgPSBhY3Rpb25CYXIuYWN0aW9uSXRlbXMuZ2V0SXRlbXMoKTtcbiAgICBhY3Rpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBhY3Rpb25CYXIuYWN0aW9uSXRlbXMucmVtb3ZlSXRlbShpdGVtKTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIFNUQVRVU0JBUl9TVFlMRShzdHlsZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgaWYgKHRvcG1vc3QoKS5pb3MpIHtcbiAgICAgIGxldCBuYXZpZ2F0aW9uQmFyID0gdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG4gICAgICAvLyAwOiBkZWZhdWx0XG4gICAgICAvLyAxOiBsaWdodFxuICAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IHN0eWxlO1xuICAgIH0gZWxzZSBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBpZiAoYXBwLmFuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBMYXlvdXRQYXJhbXMgPSA8YW55PmFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcztcbiAgICAgICAgICBsZXQgd2luOiBhbnk7XG4gICAgICAgICAgaWYgKGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSkge1xuICAgICAgICAgICAgd2luID0gYXBwLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW4gPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbi5hZGRGbGFncyhMYXlvdXRQYXJhbXMuRkxBR19EUkFXU19TWVNURU1fQkFSX0JBQ0tHUk9VTkRTKTtcbiAgICAgICAgICB3aW4uc2V0U3RhdHVzQmFyQ29sb3IobmV3IENvbG9yKDxzdHJpbmc+c3R5bGUgfHwgJyMzMjgwQ0YnKS5hbmRyb2lkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19