Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ns_location_strategy_1 = require("nativescript-angular/router/ns-location-strategy");
// nativescript
var nsApp = require("application");
var platform_1 = require("platform");
if (platform_1.isIOS) {
    /*
      nsApp.ios.delegate = require('../PATH/TO/DELEGATE').CustomAppDelegate;
    */
}
// libs
var store_1 = require("@ngrx/store");
var core_2 = require("@ngx-translate/core");
// app
var app_service_1 = require("../../../app/modules/core/services/app.service");
var index_1 = require("../../../app/modules/core/index");
var index_2 = require("../../../app/modules/analytics/index");
var actionbar_util_1 = require("../utils/actionbar.util");
var multilingual = require("../../../app/modules/i18n/index");
var NSAppService = (function (_super) {
    __extends(NSAppService, _super);
    // Remember to update iOS and android constructors if you change dependencies
    // @Inject decorator is used on injectables here since this component merely extends AppComponent
    // Since @Component decorator is not used here, this ensures metadata will be generated
    function NSAppService(analytics, log, store, router, locationstrategy, translate, window) {
        var _this = _super.call(this, analytics, log) || this;
        _this.analytics = analytics;
        _this.log = log;
        _this.store = store;
        _this.router = router;
        _this.locationstrategy = locationstrategy;
        _this.translate = translate;
        _this.window = window;
        _this.nsApp = nsApp;
        _this.log.debug('NSAppService constructor');
        store.dispatch(new multilingual.ChangeAction(window.navigator.language.substr(0, 2)));
        // translate.onLangChange.skip(1).subscribe((args) => {
        //   this.log.info(`NSAppComponent translate.onLangChange(${args.lang})`);
        //   // translate.setDefaultLang(args.lang);
        //   translate.currentLang = args.lang;
        //   window.navigator.language = args.lang;
        // });
        /**
         *  Top status bar on iOS and/or Android
         * iOs {number}
         *   0: default
         *   1: light
         * Android {string}
         *   hex value
         */
        actionbar_util_1.ActionBarUtil.STATUSBAR_STYLE(platform_1.isIOS ? 1 : '#3280CF');
        // Fix: Reset all nsApp events before subscribing to avoid Duplicate events.
        // this.unsubscribeAll();
        nsApp.on(nsApp.launchEvent, function (eventData) {
            _this.log.info('TNS Application - Launched!');
        });
        nsApp.on(nsApp.suspendEvent, function (eventData) {
            _this.log.info('TNS Application - Suspended');
        });
        nsApp.on(nsApp.resumeEvent, function (eventData) {
            _this.log.info('TNS Application - Resumed');
        });
        nsApp.on(nsApp.lowMemoryEvent, function (eventData) {
            _this.log.warn('TNS Application - !!! LOW MEMORY !!!');
        });
        nsApp.on(nsApp.exitEvent, function (eventData) {
            _this.log.info('TNS Application - EXIT');
            _this.unsubscribeAll();
        });
        _this.setupAndroid();
        _this.setupIOS();
        return _this;
    }
    NSAppService.prototype.handleUncaughtError = function (err, platform) {
        this.log.info("TNS Application - Uncaught Error: " + err.message);
        var errorDescription = {
            message: err.message,
            android: platform === 'android',
            ios: platform === 'ios',
            stackTrace: err.stackTrace,
            nativeException: err.nativeException,
        };
        for (var _i = 0, _a = Object.keys(errorDescription); _i < _a.length; _i++) {
            var key = _a[_i];
            if (errorDescription[key]) {
                console.log("**** START - errorDescription." + key + " - ****\n\n\n" + errorDescription[key] + "\n\n\n*** END - " + key + " - ****");
            }
        }
    };
    NSAppService.prototype.unsubscribeAll = function () {
        nsApp.off(nsApp.launchEvent);
        nsApp.off(nsApp.suspendEvent);
        nsApp.off(nsApp.resumeEvent);
        nsApp.off(nsApp.lowMemoryEvent);
        nsApp.off(nsApp.exitEvent);
        nsApp.off(nsApp.uncaughtErrorEvent);
    };
    NSAppService.prototype.setupAndroid = function () {
        var _this = this;
        if (!platform_1.isAndroid) {
            return;
        }
        // Android specific code goes here
        this.nsApp.android.on(this.nsApp.AndroidApplication.activityBackPressedEvent, function (args) {
            var states = _this.locationstrategy._getStates();
            _this.log.info("Event: " + args.eventName + "\nActivity: " + args.activity + "\nstates: " + JSON.stringify(states));
        });
        this.nsApp.android.on(this.nsApp.AndroidApplication.activityResumedEvent, function (args) {
            if (args.activity.getIntent().getAction() === android.content.Intent.ACTION_VIEW) {
                var intentData = args.activity.getIntent().getData();
                console.log("Android received VIEW intent, with data: " + intentData);
            }
        });
        this.nsApp.on(this.nsApp.uncaughtErrorEvent, function (err) {
            _this.handleUncaughtError(err.android, 'android');
        });
    };
    NSAppService.prototype.setupIOS = function () {
        var _this = this;
        if (!platform_1.isIOS) {
            return;
        }
        this.nsApp.on(this.nsApp.uncaughtErrorEvent, function (err) {
            _this.handleUncaughtError(err.ios, 'ios');
        });
    };
    return NSAppService;
}(app_service_1.AppService));
NSAppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.AnalyticsService,
        index_1.LogService,
        store_1.Store,
        router_1.Router,
        ns_location_strategy_1.NSLocationStrategy,
        core_2.TranslateService,
        index_1.WindowService])
], NSAppService);
exports.NSAppService = NSAppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnMtYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJucy1hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUN6Qyx5RkFBc0Y7QUFFdEYsZUFBZTtBQUNmLG1DQUFxQztBQUNyQyxxQ0FBNEM7QUFFNUMsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7SUFDVjs7TUFFRTtBQUNKLENBQUM7QUFFRCxPQUFPO0FBQ1AscUNBQW9DO0FBQ3BDLDRDQUF1RDtBQUV2RCxNQUFNO0FBQ04sOEVBQTRFO0FBRTVFLHlEQUE4RjtBQUM5Riw4REFBd0U7QUFDeEUsMERBQXdEO0FBQ3hELDhEQUFnRTtBQUtoRSxJQUFhLFlBQVk7SUFBUyxnQ0FBVTtJQUcxQyw2RUFBNkU7SUFDN0UsaUdBQWlHO0lBQ2pHLHVGQUF1RjtJQUN2RixzQkFBbUIsU0FBMkIsRUFDM0IsR0FBZSxFQUNmLEtBQWlCLEVBQ2pCLE1BQWMsRUFDZCxnQkFBb0MsRUFDcEMsU0FBMkIsRUFDM0IsTUFBcUI7UUFOeEMsWUFRRSxrQkFBTSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBb0R0QjtRQTVEa0IsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDcEMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTSxHQUFOLE1BQU0sQ0FBZTtRQVh4QyxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBZVosS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUzQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEs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LElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxHQUFHO1lBQy9DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLCtCQUFRLEdBQWhCO1FBQUEsaUJBUUM7UUFQQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxHQUFHO1lBQy9DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWhJRCxDQUFrQyx3QkFBVSxHQWdJM0M7QUFoSVksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQU9tQix3QkFBZ0I7UUFDdEIsa0JBQVU7UUFDUixhQUFLO1FBQ0osZUFBTTtRQUNJLHlDQUFrQjtRQUN6Qix1QkFBZ0I7UUFDbkIscUJBQWE7R0FaN0IsWUFBWSxDQWdJeEI7QUFoSVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5TTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9ucy1sb2NhdGlvbi1zdHJhdGVneSc7XHJcblxyXG4vLyBuYXRpdmVzY3JpcHRcclxuaW1wb3J0ICogYXMgbnNBcHAgZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5cclxuaWYgKGlzSU9TKSB7XHJcbiAgLypcclxuICAgIG5zQXBwLmlvcy5kZWxlZ2F0ZSA9IHJlcXVpcmUoJy4uL1BBVEgvVE8vREVMRUdBVEUnKS5DdXN0b21BcHBEZWxlZ2F0ZTtcclxuICAqL1xyXG59XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL3V0aWxzJztcclxuaW1wb3J0IHsgTG9nU2VydmljZSwgV2luZG93U2VydmljZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBwL21vZHVsZXMvYW5hbHl0aWNzL2luZGV4JztcclxuaW1wb3J0IHsgQWN0aW9uQmFyVXRpbCB9IGZyb20gJy4uL3V0aWxzL2FjdGlvbmJhci51dGlsJztcclxuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2kxOG4vaW5kZXgnO1xyXG5cclxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTlNBcHBTZXJ2aWNlIGV4dGVuZHMgQXBwU2VydmljZSB7XHJcbiAgbnNBcHAgPSBuc0FwcDtcclxuXHJcbiAgLy8gUmVtZW1iZXIgdG8gdXBkYXRlIGlPUyBhbmQgYW5kcm9pZCBjb25zdHJ1Y3RvcnMgaWYgeW91IGNoYW5nZSBkZXBlbmRlbmNpZXNcclxuICAvLyBASW5qZWN0IGRlY29yYXRvciBpcyB1c2VkIG9uIGluamVjdGFibGVzIGhlcmUgc2luY2UgdGhpcyBjb21wb25lbnQgbWVyZWx5IGV4dGVuZHMgQXBwQ29tcG9uZW50XHJcbiAgLy8gU2luY2UgQENvbXBvbmVudCBkZWNvcmF0b3IgaXMgbm90IHVzZWQgaGVyZSwgdGhpcyBlbnN1cmVzIG1ldGFkYXRhIHdpbGwgYmUgZ2VuZXJhdGVkXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSxcclxuICAgICAgICAgICAgICBwdWJsaWMgbG9nOiBMb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBzdG9yZTogU3RvcmU8YW55PixcclxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGxvY2F0aW9uc3RyYXRlZ3k6IE5TTG9jYXRpb25TdHJhdGVneSxcclxuICAgICAgICAgICAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGFuYWx5dGljcywgbG9nKTtcclxuXHJcbiAgICB0aGlzLmxvZy5kZWJ1ZygnTlNBcHBTZXJ2aWNlIGNvbnN0cnVjdG9yJyk7XHJcblxyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IG11bHRpbGluZ3VhbC5DaGFuZ2VBY3Rpb24od2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHIoMCwgMikpKTtcclxuXHJcbiAgICAvLyB0cmFuc2xhdGUub25MYW5nQ2hhbmdlLnNraXAoMSkuc3Vic2NyaWJlKChhcmdzKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMubG9nLmluZm8oYE5TQXBwQ29tcG9uZW50IHRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2UoJHthcmdzLmxhbmd9KWApO1xyXG4gICAgLy8gICAvLyB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoYXJncy5sYW5nKTtcclxuICAgIC8vICAgdHJhbnNsYXRlLmN1cnJlbnRMYW5nID0gYXJncy5sYW5nO1xyXG5cclxuICAgIC8vICAgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSA9IGFyZ3MubGFuZztcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRvcCBzdGF0dXMgYmFyIG9uIGlPUyBhbmQvb3IgQW5kcm9pZFxyXG4gICAgICogaU9zIHtudW1iZXJ9XHJcbiAgICAgKiAgIDA6IGRlZmF1bHRcclxuICAgICAqICAgMTogbGlnaHRcclxuICAgICAqIEFuZHJvaWQge3N0cmluZ31cclxuICAgICAqICAgaGV4IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIEFjdGlvbkJhclV0aWwuU1RBVFVTQkFSX1NUWUxFKFxyXG4gICAgICBpc0lPUyA/IDEgOiAnIzMyODBDRidcclxuICAgICk7XHJcblxyXG4gICAgLy8gRml4OiBSZXNldCBhbGwgbnNBcHAgZXZlbnRzIGJlZm9yZSBzdWJzY3JpYmluZyB0byBhdm9pZCBEdXBsaWNhdGUgZXZlbnRzLlxyXG4gICAgLy8gdGhpcy51bnN1YnNjcmliZUFsbCgpO1xyXG5cclxuICAgIG5zQXBwLm9uKG5zQXBwLmxhdW5jaEV2ZW50LCAoZXZlbnREYXRhOiBuc0FwcC5MYXVuY2hFdmVudERhdGEpID0+IHtcclxuICAgICAgdGhpcy5sb2cuaW5mbygnVE5TIEFwcGxpY2F0aW9uIC0gTGF1bmNoZWQhJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuc0FwcC5vbihuc0FwcC5zdXNwZW5kRXZlbnQsIChldmVudERhdGE6IG5zQXBwLkFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIFN1c3BlbmRlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbnNBcHAub24obnNBcHAucmVzdW1lRXZlbnQsIChldmVudERhdGE6IG5zQXBwLkFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIFJlc3VtZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5zQXBwLm9uKG5zQXBwLmxvd01lbW9yeUV2ZW50LCAoZXZlbnREYXRhOiBuc0FwcC5BcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmxvZy53YXJuKCdUTlMgQXBwbGljYXRpb24gLSAhISEgTE9XIE1FTU9SWSAhISEnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5zQXBwLm9uKG5zQXBwLmV4aXRFdmVudCwgKGV2ZW50RGF0YTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIEVYSVQnKTtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZUFsbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXR1cEFuZHJvaWQoKTtcclxuICAgIHRoaXMuc2V0dXBJT1MoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVVbmNhdWdodEVycm9yKGVycjogYW55LCBwbGF0Zm9ybTogJ2FuZHJvaWQnIHwgJ2lvcycpIHtcclxuICAgIHRoaXMubG9nLmluZm8oYFROUyBBcHBsaWNhdGlvbiAtIFVuY2F1Z2h0IEVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xyXG5cclxuICAgIGNvbnN0IGVycm9yRGVzY3JpcHRpb246IGFueSA9IHtcclxuICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXHJcbiAgICAgIGFuZHJvaWQ6IHBsYXRmb3JtID09PSAnYW5kcm9pZCcsXHJcbiAgICAgIGlvczogcGxhdGZvcm0gPT09ICdpb3MnLFxyXG4gICAgICBzdGFja1RyYWNlOiBlcnIuc3RhY2tUcmFjZSxcclxuICAgICAgbmF0aXZlRXhjZXB0aW9uOiBlcnIubmF0aXZlRXhjZXB0aW9uLFxyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhlcnJvckRlc2NyaXB0aW9uKSkge1xyXG4gICAgICBpZiAoZXJyb3JEZXNjcmlwdGlvbltrZXldKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCoqKiogU1RBUlQgLSBlcnJvckRlc2NyaXB0aW9uLiR7a2V5fSAtICoqKipcXG5cXG5cXG4ke2Vycm9yRGVzY3JpcHRpb25ba2V5XX1cXG5cXG5cXG4qKiogRU5EIC0gJHtrZXl9IC0gKioqKmApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuc3Vic2NyaWJlQWxsKCkge1xyXG4gICAgbnNBcHAub2ZmKG5zQXBwLmxhdW5jaEV2ZW50KTtcclxuICAgIG5zQXBwLm9mZihuc0FwcC5zdXNwZW5kRXZlbnQpO1xyXG4gICAgbnNBcHAub2ZmKG5zQXBwLnJlc3VtZUV2ZW50KTtcclxuICAgIG5zQXBwLm9mZihuc0FwcC5sb3dNZW1vcnlFdmVudCk7XHJcbiAgICBuc0FwcC5vZmYobnNBcHAuZXhpdEV2ZW50KTtcclxuICAgIG5zQXBwLm9mZihuc0FwcC51bmNhdWdodEVycm9yRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cEFuZHJvaWQoKSB7XHJcbiAgICBpZiAoIWlzQW5kcm9pZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5kcm9pZCBzcGVjaWZpYyBjb2RlIGdvZXMgaGVyZVxyXG5cclxuICAgIHRoaXMubnNBcHAuYW5kcm9pZC5vbih0aGlzLm5zQXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMubG9jYXRpb25zdHJhdGVneS5fZ2V0U3RhdGVzKCk7XHJcbiAgICAgIHRoaXMubG9nLmluZm8oYEV2ZW50OiAke2FyZ3MuZXZlbnROYW1lfVxcbkFjdGl2aXR5OiAke2FyZ3MuYWN0aXZpdHl9XFxuc3RhdGVzOiAke0pTT04uc3RyaW5naWZ5KHN0YXRlcyl9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm5zQXBwLmFuZHJvaWQub24odGhpcy5uc0FwcC5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXN1bWVkRXZlbnQsIChhcmdzKSA9PiB7XHJcbiAgICAgIGlmIChhcmdzLmFjdGl2aXR5LmdldEludGVudCgpLmdldEFjdGlvbigpID09PSBhbmRyb2lkLmNvbnRlbnQuSW50ZW50LkFDVElPTl9WSUVXKSB7XHJcbiAgICAgICAgY29uc3QgaW50ZW50RGF0YSA9IGFyZ3MuYWN0aXZpdHkuZ2V0SW50ZW50KCkuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBbmRyb2lkIHJlY2VpdmVkIFZJRVcgaW50ZW50LCB3aXRoIGRhdGE6ICR7aW50ZW50RGF0YX1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uc0FwcC5vbih0aGlzLm5zQXBwLnVuY2F1Z2h0RXJyb3JFdmVudCwgKGVycikgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZVVuY2F1Z2h0RXJyb3IoZXJyLmFuZHJvaWQsICdhbmRyb2lkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBJT1MoKSB7XHJcbiAgICBpZiAoIWlzSU9TKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5zQXBwLm9uKHRoaXMubnNBcHAudW5jYXVnaHRFcnJvckV2ZW50LCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVW5jYXVnaHRFcnJvcihlcnIuaW9zLCAnaW9zJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19