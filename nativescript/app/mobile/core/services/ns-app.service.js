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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnMtYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJucy1hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUN6Qyx5RkFBc0Y7QUFFdEYsZUFBZTtBQUNmLG1DQUFxQztBQUNyQyxxQ0FBNEM7QUFFNUMsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7SUFDVjs7TUFFRTtBQUNKLENBQUM7QUFFRCxPQUFPO0FBQ1AscUNBQW9DO0FBQ3BDLDRDQUF1RDtBQUV2RCxNQUFNO0FBQ04sOEVBQTRFO0FBRTVFLHlEQUE4RjtBQUM5Riw4REFBd0U7QUFDeEUsMERBQXdEO0FBQ3hELDhEQUFnRTtBQUtoRSxJQUFhLFlBQVk7SUFBUyxnQ0FBVTtJQUcxQyw2RUFBNkU7SUFDN0UsaUdBQWlHO0lBQ2pHLHVGQUF1RjtJQUN2RixzQkFBbUIsU0FBMkIsRUFDM0IsR0FBZSxFQUNmLEtBQWlCLEVBQ2pCLE1BQWMsRUFDZCxnQkFBb0MsRUFDcEMsU0FBMkIsRUFDM0IsTUFBcUI7UUFOeEMsWUFRRSxrQkFBTSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBb0R0QjtRQTVEa0IsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDcEMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsWUFBTSxHQUFOLE1BQU0sQ0FBZTtRQVh4QyxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBZVosS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUzQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEs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LElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxHQUFHO1lBQy9DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLCtCQUFRLEdBQWhCO1FBQUEsaUJBUUM7UUFQQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxHQUFHO1lBQy9DLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWhJRCxDQUFrQyx3QkFBVSxHQWdJM0M7QUFoSVksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQU9tQix3QkFBZ0I7UUFDdEIsa0JBQVU7UUFDUixhQUFLO1FBQ0osZUFBTTtRQUNJLHlDQUFrQjtRQUN6Qix1QkFBZ0I7UUFDbkIscUJBQWE7R0FaN0IsWUFBWSxDQWdJeEI7QUFoSVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTlNMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL25zLWxvY2F0aW9uLXN0cmF0ZWd5JztcblxuLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQgKiBhcyBuc0FwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5pZiAoaXNJT1MpIHtcbiAgLypcbiAgICBuc0FwcC5pb3MuZGVsZWdhdGUgPSByZXF1aXJlKCcuLi9QQVRIL1RPL0RFTEVHQVRFJykuQ3VzdG9tQXBwRGVsZWdhdGU7XG4gICovXG59XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgTG9nU2VydmljZSwgV2luZG93U2VydmljZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBBY3Rpb25CYXJVdGlsIH0gZnJvbSAnLi4vdXRpbHMvYWN0aW9uYmFyLnV0aWwnO1xuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uLy4uLy4uL2FwcC9tb2R1bGVzL2kxOG4vaW5kZXgnO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOU0FwcFNlcnZpY2UgZXh0ZW5kcyBBcHBTZXJ2aWNlIHtcbiAgbnNBcHAgPSBuc0FwcDtcblxuICAvLyBSZW1lbWJlciB0byB1cGRhdGUgaU9TIGFuZCBhbmRyb2lkIGNvbnN0cnVjdG9ycyBpZiB5b3UgY2hhbmdlIGRlcGVuZGVuY2llc1xuICAvLyBASW5qZWN0IGRlY29yYXRvciBpcyB1c2VkIG9uIGluamVjdGFibGVzIGhlcmUgc2luY2UgdGhpcyBjb21wb25lbnQgbWVyZWx5IGV4dGVuZHMgQXBwQ29tcG9uZW50XG4gIC8vIFNpbmNlIEBDb21wb25lbnQgZGVjb3JhdG9yIGlzIG5vdCB1c2VkIGhlcmUsIHRoaXMgZW5zdXJlcyBtZXRhZGF0YSB3aWxsIGJlIGdlbmVyYXRlZFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgbG9nOiBMb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgICAgICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHVibGljIGxvY2F0aW9uc3RyYXRlZ3k6IE5TTG9jYXRpb25TdHJhdGVneSxcbiAgICAgICAgICAgICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHdpbmRvdzogV2luZG93U2VydmljZVxuICApIHtcbiAgICBzdXBlcihhbmFseXRpY3MsIGxvZyk7XG5cbiAgICB0aGlzLmxvZy5kZWJ1ZygnTlNBcHBTZXJ2aWNlIGNvbnN0cnVjdG9yJyk7XG5cbiAgICBzdG9yZS5kaXNwYXRjaChuZXcgbXVsdGlsaW5ndWFsLkNoYW5nZUFjdGlvbih3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlLnN1YnN0cigwLCAyKSkpO1xuXG4gICAgLy8gdHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5za2lwKDEpLnN1YnNjcmliZSgoYXJncykgPT4ge1xuICAgIC8vICAgdGhpcy5sb2cuaW5mbyhgTlNBcHBDb21wb25lbnQgdHJhbnNsYXRlLm9uTGFuZ0NoYW5nZSgke2FyZ3MubGFuZ30pYCk7XG4gICAgLy8gICAvLyB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoYXJncy5sYW5nKTtcbiAgICAvLyAgIHRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9IGFyZ3MubGFuZztcblxuICAgIC8vICAgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSA9IGFyZ3MubGFuZztcbiAgICAvLyB9KTtcblxuICAgIC8qKlxuICAgICAqICBUb3Agc3RhdHVzIGJhciBvbiBpT1MgYW5kL29yIEFuZHJvaWRcbiAgICAgKiBpT3Mge251bWJlcn1cbiAgICAgKiAgIDA6IGRlZmF1bHRcbiAgICAgKiAgIDE6IGxpZ2h0XG4gICAgICogQW5kcm9pZCB7c3RyaW5nfVxuICAgICAqICAgaGV4IHZhbHVlXG4gICAgICovXG4gICAgQWN0aW9uQmFyVXRpbC5TVEFUVVNCQVJfU1RZTEUoXG4gICAgICBpc0lPUyA/IDEgOiAnIzMyODBDRidcbiAgICApO1xuXG4gICAgLy8gRml4OiBSZXNldCBhbGwgbnNBcHAgZXZlbnRzIGJlZm9yZSBzdWJzY3JpYmluZyB0byBhdm9pZCBEdXBsaWNhdGUgZXZlbnRzLlxuICAgIC8vIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcblxuICAgIG5zQXBwLm9uKG5zQXBwLmxhdW5jaEV2ZW50LCAoZXZlbnREYXRhOiBuc0FwcC5MYXVuY2hFdmVudERhdGEpID0+IHtcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIExhdW5jaGVkIScpO1xuICAgIH0pO1xuXG4gICAgbnNBcHAub24obnNBcHAuc3VzcGVuZEV2ZW50LCAoZXZlbnREYXRhOiBuc0FwcC5BcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgdGhpcy5sb2cuaW5mbygnVE5TIEFwcGxpY2F0aW9uIC0gU3VzcGVuZGVkJyk7XG4gICAgfSk7XG5cbiAgICBuc0FwcC5vbihuc0FwcC5yZXN1bWVFdmVudCwgKGV2ZW50RGF0YTogbnNBcHAuQXBwbGljYXRpb25FdmVudERhdGEpID0+IHtcbiAgICAgIHRoaXMubG9nLmluZm8oJ1ROUyBBcHBsaWNhdGlvbiAtIFJlc3VtZWQnKTtcbiAgICB9KTtcblxuICAgIG5zQXBwLm9uKG5zQXBwLmxvd01lbW9yeUV2ZW50LCAoZXZlbnREYXRhOiBuc0FwcC5BcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgdGhpcy5sb2cud2FybignVE5TIEFwcGxpY2F0aW9uIC0gISEhIExPVyBNRU1PUlkgISEhJyk7XG4gICAgfSk7XG5cbiAgICBuc0FwcC5vbihuc0FwcC5leGl0RXZlbnQsIChldmVudERhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5sb2cuaW5mbygnVE5TIEFwcGxpY2F0aW9uIC0gRVhJVCcpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZUFsbCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXR1cEFuZHJvaWQoKTtcbiAgICB0aGlzLnNldHVwSU9TKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlVW5jYXVnaHRFcnJvcihlcnI6IGFueSwgcGxhdGZvcm06ICdhbmRyb2lkJyB8ICdpb3MnKSB7XG4gICAgdGhpcy5sb2cuaW5mbyhgVE5TIEFwcGxpY2F0aW9uIC0gVW5jYXVnaHQgRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCk7XG5cbiAgICBjb25zdCBlcnJvckRlc2NyaXB0aW9uOiBhbnkgPSB7XG4gICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgIGFuZHJvaWQ6IHBsYXRmb3JtID09PSAnYW5kcm9pZCcsXG4gICAgICBpb3M6IHBsYXRmb3JtID09PSAnaW9zJyxcbiAgICAgIHN0YWNrVHJhY2U6IGVyci5zdGFja1RyYWNlLFxuICAgICAgbmF0aXZlRXhjZXB0aW9uOiBlcnIubmF0aXZlRXhjZXB0aW9uLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhlcnJvckRlc2NyaXB0aW9uKSkge1xuICAgICAgaWYgKGVycm9yRGVzY3JpcHRpb25ba2V5XSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgKioqKiBTVEFSVCAtIGVycm9yRGVzY3JpcHRpb24uJHtrZXl9IC0gKioqKlxcblxcblxcbiR7ZXJyb3JEZXNjcmlwdGlvbltrZXldfVxcblxcblxcbioqKiBFTkQgLSAke2tleX0gLSAqKioqYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICBuc0FwcC5vZmYobnNBcHAubGF1bmNoRXZlbnQpO1xuICAgIG5zQXBwLm9mZihuc0FwcC5zdXNwZW5kRXZlbnQpO1xuICAgIG5zQXBwLm9mZihuc0FwcC5yZXN1bWVFdmVudCk7XG4gICAgbnNBcHAub2ZmKG5zQXBwLmxvd01lbW9yeUV2ZW50KTtcbiAgICBuc0FwcC5vZmYobnNBcHAuZXhpdEV2ZW50KTtcbiAgICBuc0FwcC5vZmYobnNBcHAudW5jYXVnaHRFcnJvckV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBBbmRyb2lkKCkge1xuICAgIGlmICghaXNBbmRyb2lkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQW5kcm9pZCBzcGVjaWZpYyBjb2RlIGdvZXMgaGVyZVxuXG4gICAgdGhpcy5uc0FwcC5hbmRyb2lkLm9uKHRoaXMubnNBcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMubG9jYXRpb25zdHJhdGVneS5fZ2V0U3RhdGVzKCk7XG4gICAgICB0aGlzLmxvZy5pbmZvKGBFdmVudDogJHthcmdzLmV2ZW50TmFtZX1cXG5BY3Rpdml0eTogJHthcmdzLmFjdGl2aXR5fVxcbnN0YXRlczogJHtKU09OLnN0cmluZ2lmeShzdGF0ZXMpfWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uc0FwcC5hbmRyb2lkLm9uKHRoaXMubnNBcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5UmVzdW1lZEV2ZW50LCAoYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MuYWN0aXZpdHkuZ2V0SW50ZW50KCkuZ2V0QWN0aW9uKCkgPT09IGFuZHJvaWQuY29udGVudC5JbnRlbnQuQUNUSU9OX1ZJRVcpIHtcbiAgICAgICAgY29uc3QgaW50ZW50RGF0YSA9IGFyZ3MuYWN0aXZpdHkuZ2V0SW50ZW50KCkuZ2V0RGF0YSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQW5kcm9pZCByZWNlaXZlZCBWSUVXIGludGVudCwgd2l0aCBkYXRhOiAke2ludGVudERhdGF9YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm5zQXBwLm9uKHRoaXMubnNBcHAudW5jYXVnaHRFcnJvckV2ZW50LCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVVuY2F1Z2h0RXJyb3IoZXJyLmFuZHJvaWQsICdhbmRyb2lkJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwSU9TKCkge1xuICAgIGlmICghaXNJT1MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5zQXBwLm9uKHRoaXMubnNBcHAudW5jYXVnaHRFcnJvckV2ZW50LCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVVuY2F1Z2h0RXJyb3IoZXJyLmlvcywgJ2lvcycpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=