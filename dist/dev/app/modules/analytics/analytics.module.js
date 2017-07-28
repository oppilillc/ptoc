"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angulartics2_1 = require("angulartics2");
var index_1 = require("./services/index");
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
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
    return AnalyticsModule;
}());
exports.AnalyticsModule = AnalyticsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FuYWx5dGljcy9hbmFseXRpY3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBR3pDLDZDQUF1RTtBQUd2RSwwQ0FBdUQ7QUFnQnZEO0lBQUE7SUFFQSxDQUFDO0lBRlksZUFBZTtRQVYzQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQWtCLENBQUMsT0FBTyxDQUFDO29CQUN6QixrQ0FBbUI7aUJBQ3BCLENBQUM7YUFDSDtZQUNELFNBQVMsRUFDSiwyQkFBbUIsUUFDdkI7U0FDRixDQUFDO09BQ1csZUFBZSxDQUUzQjtJQUFELHNCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksMENBQWUiLCJmaWxlIjoiYXBwL21vZHVsZXMvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBsaWJcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBBTkFMWVRJQ1NfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG4vKipcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgIEFuZ3VsYXJ0aWNzMlNlZ21lbnRcclxuICAgIF0pXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC4uLkFOQUxZVElDU19QUk9WSURFUlNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNb2R1bGUge1xyXG5cclxufVxyXG4iXX0=
