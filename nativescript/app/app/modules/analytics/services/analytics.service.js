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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUFtRDtBQUVuRCxPQUFPO0FBQ1AsMEJBQTRCO0FBQzVCLDZDQUFpRTtBQVlqRTs7R0FFRztBQUVILElBQWEsZ0JBQWdCO0lBRTNCLDBCQUFvQixZQUEwQixFQUFVLE9BQTRCO1FBQ2xGLFVBQVU7UUFDViw0RkFBNEY7UUFDNUYsaURBQWlEO1FBQ2pELHFEQUFxRDtRQUNyRCw4Q0FBOEM7UUFDOUMsd0NBQXdDO1FBTnRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFRbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O1FBRUk7SUFDRyxnQ0FBSyxHQUFaLFVBQWEsTUFBYyxFQUFFLFVBQWdDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFFRDs7O1FBR0k7SUFDRyxvQ0FBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBYTtRQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O1FBRUk7SUFDRyxtQ0FBUSxHQUFmLFVBQWdCLFVBQWU7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFRDs7OztRQUlJO0lBQ0csa0NBQU8sR0FBZCxVQUFlLE1BQWdCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQXBEWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHdUIsMkJBQVksRUFBbUIsa0NBQW1CO0dBRnpFLGdCQUFnQixDQW9ENUI7QUFwRFksNENBQWdCO0FBc0Q3Qjs7O0dBR0c7QUFDSCxJQUFhLFNBQVM7SUFJcEIsbUJBQTZDLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXhFLENBQUM7SUFFRDs7UUFFSTtJQUNKLHlCQUFLLEdBQUwsVUFBTSxNQUFjLEVBQUUsVUFBZ0M7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxTQUFTO0lBSVAsV0FBQSxhQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtxQ0FBbUIsZ0JBQWdCO0dBSjdELFNBQVMsQ0FjckI7QUFkWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuYWx5dGljc1Byb3BlcnRpZXMge1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIHZhbHVlPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBbmFseXRpY3Mge1xyXG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBBbmd1bGFydGljczJcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2UgaW1wbGVtZW50cyBJQW5hbHl0aWNzIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBzZWdtZW50OiBBbmd1bGFydGljczJTZWdtZW50KSB7XHJcbiAgICAvLyBvcHRpb25zXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhcnRpY3MvYW5ndWxhcnRpY3MyL2Jsb2IvbWFzdGVyL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyNMOTAtTDEwNFxyXG4gICAgLy8gYW5ndWxhcnRpY3MyLnZpcnR1YWxQYWdldmlld3ModmFsdWU6IGJvb2xlYW4pO1xyXG4gICAgLy8gYW5ndWxhcnRpY3MyLmV4Y2x1ZGVSb3V0ZXMocm91dGVzOiBBcnJheTxzdHJpbmc+KTtcclxuICAgIC8vIGFuZ3VsYXJ0aWNzMi5maXJzdFBhZ2V2aWV3KHZhbHVlOiBib29sZWFuKTtcclxuICAgIC8vIGFuZ3VsYXJ0aWNzMi53aXRoQmFzZSh2YWx1ZTogc3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmRldk1vZGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXHJcbiAgICoqL1xyXG4gIHB1YmxpYyB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcclxuICAgICAgdGhpcy5zZWdtZW50LmV2ZW50VHJhY2soYWN0aW9uLCBwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IGRlZmF1bHQgd2l0aCBBbmd1bGFyIDIgUm91dGluZ1xyXG4gICAqIEhvd2V2ZXIsIHRoYXQgY2FuIGJlIHR1cm5lZCBvZmYgYW5kIHRoaXMgY291bGQgYmUgdXNlZCBtYW51YWxseVxyXG4gICAqKi9cclxuICBwdWJsaWMgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xyXG4gICAgICB0aGlzLnNlZ21lbnQucGFnZVRyYWNrKHBhdGgsIGxvY2F0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElkZW50aWZ5IGF1dGhlbnRpY2F0ZWQgdXNlcnNcclxuICAgKiovXHJcbiAgcHVibGljIGlkZW50aWZ5KHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xyXG4gICAgICB0aGlzLnNlZ21lbnQuc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250cm9sIHdoZXRoZXIgYW5hbHl0aWNzIGFyZSB0cmFja2VkXHJcbiAgICogdHJ1ZTogZGV2IG1vZGUgb24sIHRoZXJlZm9yZSBkbyBub3QgdHJhY2sgYW55dGhpbmdcclxuICAgKiBmYWxzZTogZGV2IG1vZGUgb2ZmLCB0cmFjayBldmVyeXRoaW5nXHJcbiAgICoqL1xyXG4gIHB1YmxpYyBkZXZNb2RlKGVuYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgZW5hYmxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5kZXZlbG9wZXJNb2RlKGVuYWJsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzXHJcbiAqIFN0YW5kYXJkaXplcyB0cmFja2luZyBhY3Rpb25zIGFuZCBjYXRlZ29yaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljcyBpbXBsZW1lbnRzIElBbmFseXRpY3Mge1xyXG4gIC8vIHN1Yi1jbGFzc2VzIHNob3VsZCBkZWZpbmUgdGhlaXIgY2F0ZWdvcnlcclxuICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChBbmFseXRpY3NTZXJ2aWNlKSBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXHJcbiAgICoqL1xyXG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmFseXRpY3MudHJhY2soYWN0aW9uLCBfLmV4dGVuZChwcm9wZXJ0aWVzLCB7IGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5IH0pKTtcclxuICB9XHJcbn1cclxuIl19