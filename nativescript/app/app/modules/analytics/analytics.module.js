Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// lib
var angulartics2_1 = require("angulartics2");
// module
var index_1 = require("./services/index");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    core_1.NgModule({
        imports: [
            angulartics2_1.Angulartics2Module.forRoot([
                angulartics2_1.Angulartics2Segment
            ])
        ],
        providers: index_1.ANALYTICS_PROVIDERS.slice()
    })
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBeUM7QUFFekMsTUFBTTtBQUNOLDZDQUF1RTtBQUV2RSxTQUFTO0FBQ1QsMENBQXVEO0FBRXZEOztHQUVHO0FBWUgsSUFBYSxlQUFlO0lBQTVCO0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxlQUFlO0lBVjNCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDekIsa0NBQW1CO2FBQ3BCLENBQUM7U0FDSDtRQUNELFNBQVMsRUFDSiwyQkFBbUIsUUFDdkI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQUUzQjtBQUZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbGliXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSwgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICBBbmd1bGFydGljczJTZWdtZW50XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAuLi5BTkFMWVRJQ1NfUFJPVklERVJTXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTW9kdWxlIHtcclxuXHJcbn1cclxuIl19