"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("lodash");
var angulartics2_1 = require("angulartics2");
var AnalyticsService = (function () {
    function AnalyticsService(angulartics2, segment) {
        this.angulartics2 = angulartics2;
        this.segment = segment;
        this.devMode(false);
    }
    AnalyticsService.prototype.track = function (action, properties) {
        if (!this.devMode()) {
            this.segment.eventTrack(action, properties);
        }
    };
    AnalyticsService.prototype.pageTrack = function (path, location) {
        if (!this.devMode()) {
            this.segment.pageTrack(path, location);
        }
    };
    AnalyticsService.prototype.identify = function (properties) {
        if (!this.devMode()) {
            this.segment.setUserProperties(properties);
        }
    };
    AnalyticsService.prototype.devMode = function (enable) {
        if (typeof enable !== 'undefined') {
            this.angulartics2.developerMode(enable);
        }
        return this.angulartics2.settings.developerMode;
    };
    AnalyticsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment])
    ], AnalyticsService);
    return AnalyticsService;
}());
exports.AnalyticsService = AnalyticsService;
var Analytics = (function () {
    function Analytics(analytics) {
        this.analytics = analytics;
    }
    Analytics.prototype.track = function (action, properties) {
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    };
    Analytics = __decorate([
        __param(0, core_1.Inject(AnalyticsService)),
        __metadata("design:paramtypes", [AnalyticsService])
    ], Analytics);
    return Analytics;
}());
exports.Analytics = Analytics;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FuYWx5dGljcy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUFtRDtBQUduRCwwQkFBNEI7QUFDNUIsNkNBQWlFO0FBZ0JqRTtJQUVFLDBCQUFvQixZQUEwQixFQUFVLE9BQTRCO1FBQWhFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFRbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBS00sZ0NBQUssR0FBWixVQUFhLE1BQWMsRUFBRSxVQUFnQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDO0lBTU0sb0NBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLFFBQWE7UUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUtNLG1DQUFRLEdBQWYsVUFBZ0IsVUFBZTtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQU9NLGtDQUFPLEdBQWQsVUFBZSxNQUFnQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7SUFuRFUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBR3VCLDJCQUFZLEVBQW1CLGtDQUFtQjtPQUZ6RSxnQkFBZ0IsQ0FvRDVCO0lBQUQsdUJBQUM7Q0FwREQsQUFvREMsSUFBQTtBQXBEWSw0Q0FBZ0I7QUEwRDdCO0lBSUUsbUJBQTZDLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXhFLENBQUM7SUFLRCx5QkFBSyxHQUFMLFVBQU0sTUFBYyxFQUFFLFVBQWdDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFiVSxTQUFTO1FBSVAsV0FBQSxhQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTt5Q0FBbUIsZ0JBQWdCO09BSjdELFNBQVMsQ0FjckI7SUFBRCxnQkFBQztDQWRELEFBY0MsSUFBQTtBQWRZLDhCQUFTIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FuYWx5dGljcy9zZXJ2aWNlcy9hbmFseXRpY3Muc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuYWx5dGljc1Byb3BlcnRpZXMge1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIHZhbHVlPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBbmFseXRpY3Mge1xyXG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBBbmd1bGFydGljczJcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2UgaW1wbGVtZW50cyBJQW5hbHl0aWNzIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBzZWdtZW50OiBBbmd1bGFydGljczJTZWdtZW50KSB7XHJcbiAgICAvLyBvcHRpb25zXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhcnRpY3MvYW5ndWxhcnRpY3MyL2Jsb2IvbWFzdGVyL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyNMOTAtTDEwNFxyXG4gICAgLy8gYW5ndWxhcnRpY3MyLnZpcnR1YWxQYWdldmlld3ModmFsdWU6IGJvb2xlYW4pO1xyXG4gICAgLy8gYW5ndWxhcnRpY3MyLmV4Y2x1ZGVSb3V0ZXMocm91dGVzOiBBcnJheTxzdHJpbmc+KTtcclxuICAgIC8vIGFuZ3VsYXJ0aWNzMi5maXJzdFBhZ2V2aWV3KHZhbHVlOiBib29sZWFuKTtcclxuICAgIC8vIGFuZ3VsYXJ0aWNzMi53aXRoQmFzZSh2YWx1ZTogc3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmRldk1vZGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXHJcbiAgICoqL1xyXG4gIHB1YmxpYyB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcclxuICAgICAgdGhpcy5zZWdtZW50LmV2ZW50VHJhY2soYWN0aW9uLCBwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IGRlZmF1bHQgd2l0aCBBbmd1bGFyIDIgUm91dGluZ1xyXG4gICAqIEhvd2V2ZXIsIHRoYXQgY2FuIGJlIHR1cm5lZCBvZmYgYW5kIHRoaXMgY291bGQgYmUgdXNlZCBtYW51YWxseVxyXG4gICAqKi9cclxuICBwdWJsaWMgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xyXG4gICAgICB0aGlzLnNlZ21lbnQucGFnZVRyYWNrKHBhdGgsIGxvY2F0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElkZW50aWZ5IGF1dGhlbnRpY2F0ZWQgdXNlcnNcclxuICAgKiovXHJcbiAgcHVibGljIGlkZW50aWZ5KHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmRldk1vZGUoKSkge1xyXG4gICAgICB0aGlzLnNlZ21lbnQuc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb250cm9sIHdoZXRoZXIgYW5hbHl0aWNzIGFyZSB0cmFja2VkXHJcbiAgICogdHJ1ZTogZGV2IG1vZGUgb24sIHRoZXJlZm9yZSBkbyBub3QgdHJhY2sgYW55dGhpbmdcclxuICAgKiBmYWxzZTogZGV2IG1vZGUgb2ZmLCB0cmFjayBldmVyeXRoaW5nXHJcbiAgICoqL1xyXG4gIHB1YmxpYyBkZXZNb2RlKGVuYWJsZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgZW5hYmxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5kZXZlbG9wZXJNb2RlKGVuYWJsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzXHJcbiAqIFN0YW5kYXJkaXplcyB0cmFja2luZyBhY3Rpb25zIGFuZCBjYXRlZ29yaXphdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljcyBpbXBsZW1lbnRzIElBbmFseXRpY3Mge1xyXG4gIC8vIHN1Yi1jbGFzc2VzIHNob3VsZCBkZWZpbmUgdGhlaXIgY2F0ZWdvcnlcclxuICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChBbmFseXRpY3NTZXJ2aWNlKSBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXHJcbiAgICoqL1xyXG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmFseXRpY3MudHJhY2soYWN0aW9uLCBfLmV4dGVuZChwcm9wZXJ0aWVzLCB7IGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5IH0pKTtcclxuICB9XHJcbn1cclxuIl19
