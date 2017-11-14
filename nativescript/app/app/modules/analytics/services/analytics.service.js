Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var _ = require("lodash");
var angulartics2_1 = require("angulartics2");
/**
 * Wrapper for Angulartics2
 */
var AnalyticsService = (function () {
    function AnalyticsService(angulartics2, segment) {
        // options
        // https://github.com/angulartics/angulartics2/blob/master/src/core/angulartics2.ts#L90-L104
        // angulartics2.virtualPageviews(value: boolean);
        // angulartics2.excludeRoutes(routes: Array<string>);
        // angulartics2.firstPageview(value: boolean);
        // angulartics2.withBase(value: string);
        this.angulartics2 = angulartics2;
        this.segment = segment;
        this.devMode(false);
    }
    /**
     * Track actions, events, etc.
     **/
    AnalyticsService.prototype.track = function (action, properties) {
        if (!this.devMode()) {
            this.segment.eventTrack(action, properties);
        }
    };
    /**
     * Called automatically by default with Angular 2 Routing
     * However, that can be turned off and this could be used manually
     **/
    AnalyticsService.prototype.pageTrack = function (path, location) {
        if (!this.devMode()) {
            this.segment.pageTrack(path, location);
        }
    };
    /**
     * Identify authenticated users
     **/
    AnalyticsService.prototype.identify = function (properties) {
        if (!this.devMode()) {
            this.segment.setUserProperties(properties);
        }
    };
    /**
     * Control whether analytics are tracked
     * true: dev mode on, therefore do not track anything
     * false: dev mode off, track everything
     **/
    AnalyticsService.prototype.devMode = function (enable) {
        if (typeof enable !== 'undefined') {
            this.angulartics2.developerMode(enable);
        }
        return this.angulartics2.settings.developerMode;
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
/**
 * Base class
 * Standardizes tracking actions and categorization
 */
var Analytics = (function () {
    function Analytics(analytics) {
        this.analytics = analytics;
    }
    /**
     * Track actions, events, etc.
     **/
    Analytics.prototype.track = function (action, properties) {
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    };
    return Analytics;
}());
Analytics = __decorate([
    __param(0, core_1.Inject(AnalyticsService)),
    __metadata("design:paramtypes", [AnalyticsService])
], Analytics);
exports.Analytics = Analytics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUFtRDtBQUVuRCxPQUFPO0FBQ1AsMEJBQTRCO0FBQzVCLDZDQUFpRTtBQVlqRTs7R0FFRztBQUVILElBQWEsZ0JBQWdCO0lBRTNCLDBCQUFvQixZQUEwQixFQUFVLE9BQTRCO1FBQ2xGLFVBQVU7UUFDViw0RkFBNEY7UUFDNUYsaURBQWlEO1FBQ2pELHFEQUFxRDtRQUNyRCw4Q0FBOEM7UUFDOUMsd0NBQXdDO1FBTnRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFRbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O1FBRUk7SUFDRyxnQ0FBSyxHQUFaLFVBQWEsTUFBYyxFQUFFLFVBQWdDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFFRDs7O1FBR0k7SUFDRyxvQ0FBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBYTtRQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O1FBRUk7SUFDRyxtQ0FBUSxHQUFmLFVBQWdCLFVBQWU7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFRDs7OztRQUlJO0lBQ0csa0NBQU8sR0FBZCxVQUFlLE1BQWdCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQXBEWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHdUIsMkJBQVksRUFBbUIsa0NBQW1CO0dBRnpFLGdCQUFnQixDQW9ENUI7QUFwRFksNENBQWdCO0FBc0Q3Qjs7O0dBR0c7QUFDSCxJQUFhLFNBQVM7SUFJcEIsbUJBQTZDLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXhFLENBQUM7SUFFRDs7UUFFSTtJQUNKLHlCQUFLLEdBQUwsVUFBTSxNQUFjLEVBQUUsVUFBZ0M7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxTQUFTO0lBSVAsV0FBQSxhQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtxQ0FBbUIsZ0JBQWdCO0dBSjdELFNBQVMsQ0FjckI7QUFkWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBBbmd1bGFydGljczIsIEFuZ3VsYXJ0aWNzMlNlZ21lbnQgfSBmcm9tICdhbmd1bGFydGljczInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBbmFseXRpY3NQcm9wZXJ0aWVzIHtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB2YWx1ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQW5hbHl0aWNzIHtcbiAgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IElBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZDtcbn1cblxuLyoqXG4gKiBXcmFwcGVyIGZvciBBbmd1bGFydGljczJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2UgaW1wbGVtZW50cyBJQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLCBwcml2YXRlIHNlZ21lbnQ6IEFuZ3VsYXJ0aWNzMlNlZ21lbnQpIHtcbiAgICAvLyBvcHRpb25zXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXJ0aWNzL2FuZ3VsYXJ0aWNzMi9ibG9iL21hc3Rlci9zcmMvY29yZS9hbmd1bGFydGljczIudHMjTDkwLUwxMDRcbiAgICAvLyBhbmd1bGFydGljczIudmlydHVhbFBhZ2V2aWV3cyh2YWx1ZTogYm9vbGVhbik7XG4gICAgLy8gYW5ndWxhcnRpY3MyLmV4Y2x1ZGVSb3V0ZXMocm91dGVzOiBBcnJheTxzdHJpbmc+KTtcbiAgICAvLyBhbmd1bGFydGljczIuZmlyc3RQYWdldmlldyh2YWx1ZTogYm9vbGVhbik7XG4gICAgLy8gYW5ndWxhcnRpY3MyLndpdGhCYXNlKHZhbHVlOiBzdHJpbmcpO1xuXG4gICAgdGhpcy5kZXZNb2RlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhY3Rpb25zLCBldmVudHMsIGV0Yy5cbiAgICoqL1xuICBwdWJsaWMgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IElBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xuICAgICAgdGhpcy5zZWdtZW50LmV2ZW50VHJhY2soYWN0aW9uLCBwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGF1dG9tYXRpY2FsbHkgYnkgZGVmYXVsdCB3aXRoIEFuZ3VsYXIgMiBSb3V0aW5nXG4gICAqIEhvd2V2ZXIsIHRoYXQgY2FuIGJlIHR1cm5lZCBvZmYgYW5kIHRoaXMgY291bGQgYmUgdXNlZCBtYW51YWxseVxuICAgKiovXG4gIHB1YmxpYyBwYWdlVHJhY2socGF0aDogc3RyaW5nLCBsb2NhdGlvbjogYW55KSB7XG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xuICAgICAgdGhpcy5zZWdtZW50LnBhZ2VUcmFjayhwYXRoLCBsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIElkZW50aWZ5IGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAgICoqL1xuICBwdWJsaWMgaWRlbnRpZnkocHJvcGVydGllczogYW55KSB7XG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xuICAgICAgdGhpcy5zZWdtZW50LnNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sIHdoZXRoZXIgYW5hbHl0aWNzIGFyZSB0cmFja2VkXG4gICAqIHRydWU6IGRldiBtb2RlIG9uLCB0aGVyZWZvcmUgZG8gbm90IHRyYWNrIGFueXRoaW5nXG4gICAqIGZhbHNlOiBkZXYgbW9kZSBvZmYsIHRyYWNrIGV2ZXJ5dGhpbmdcbiAgICoqL1xuICBwdWJsaWMgZGV2TW9kZShlbmFibGU/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiBlbmFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5kZXZlbG9wZXJNb2RlKGVuYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlO1xuICB9XG59XG5cbi8qKlxuICogQmFzZSBjbGFzc1xuICogU3RhbmRhcmRpemVzIHRyYWNraW5nIGFjdGlvbnMgYW5kIGNhdGVnb3JpemF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3MgaW1wbGVtZW50cyBJQW5hbHl0aWNzIHtcbiAgLy8gc3ViLWNsYXNzZXMgc2hvdWxkIGRlZmluZSB0aGVpciBjYXRlZ29yeVxuICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFuYWx5dGljc1NlcnZpY2UpIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIGFjdGlvbnMsIGV2ZW50cywgZXRjLlxuICAgKiovXG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQge1xuICAgIHRoaXMuYW5hbHl0aWNzLnRyYWNrKGFjdGlvbiwgXy5leHRlbmQocHJvcGVydGllcywgeyBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSB9KSk7XG4gIH1cbn1cbiJdfQ==