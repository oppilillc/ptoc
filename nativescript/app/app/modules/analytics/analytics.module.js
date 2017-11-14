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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBeUM7QUFFekMsTUFBTTtBQUNOLDZDQUF1RTtBQUV2RSxTQUFTO0FBQ1QsMENBQXVEO0FBRXZEOztHQUVHO0FBWUgsSUFBYSxlQUFlO0lBQTVCO0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxlQUFlO0lBVjNCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDekIsa0NBQW1CO2FBQ3BCLENBQUM7U0FDSDtRQUNELFNBQVMsRUFDSiwyQkFBbUIsUUFDdkI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQUUzQjtBQUZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGliXG5pbXBvcnQgeyBBbmd1bGFydGljczJNb2R1bGUsIEFuZ3VsYXJ0aWNzMlNlZ21lbnQgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IEFOQUxZVElDU19QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgQW5ndWxhcnRpY3MyU2VnbWVudFxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLkFOQUxZVElDU19QUk9WSURFUlNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNb2R1bGUge1xuXG59XG4iXX0=