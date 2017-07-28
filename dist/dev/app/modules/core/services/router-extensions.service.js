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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var RouterExtensions = (function () {
    function RouterExtensions(router, locationStrategy) {
        this.router = router;
        this.locationStrategy = locationStrategy;
    }
    RouterExtensions.prototype.navigate = function (commands, extras) {
        return this.router.navigate(commands, extras);
    };
    RouterExtensions.prototype.navigateByUrl = function (url, options) {
        return this.router.navigateByUrl(url);
    };
    RouterExtensions.prototype.back = function () {
        this.locationStrategy.back();
    };
    RouterExtensions = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, common_1.LocationStrategy])
    ], RouterExtensions);
    return RouterExtensions;
}());
exports.RouterExtensions = RouterExtensions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvcm91dGVyLWV4dGVuc2lvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHNDQUEyQztBQUMzQywwQ0FBbUQ7QUFDbkQsMENBQW9FO0FBc0JwRTtJQUVFLDBCQUFtQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRSxtQ0FBUSxHQUFmLFVBQWdCLFFBQW9CLEVBQUUsTUFBaUM7UUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sd0NBQWEsR0FBcEIsVUFBcUIsR0FBcUIsRUFBRSxPQUFrQztRQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLCtCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQWRVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUdnQixlQUFNLEVBQTRCLHlCQUFnQjtPQUZsRSxnQkFBZ0IsQ0FlNUI7SUFBRCx1QkFBQztDQWZELEFBZUMsSUFBQTtBQWZZLDRDQUFnQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL3JvdXRlci1leHRlbnNpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlciwgVXJsVHJlZSwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyBleHRlbmRzIE5hdmlnYXRpb25FeHRyYXMge1xyXG4gIC8vIE9wdGlvbnMgZm9yIG5hdGl2ZXNjcmlwdFxyXG4gIGNsZWFySGlzdG9yeT86IGJvb2xlYW47XHJcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xyXG4gIHRyYW5zaXRpb24/OiB7IC8vIFNlZSAtPiBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2ludGVyZmFjZXMvX3VpX2ZyYW1lXy5uYXZpZ2F0aW9udHJhbnNpdGlvbi5odG1sXHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgaW5zdGFuY2U/OiBhbnk7XHJcbiAgICBkdXJhdGlvbj86IG51bWJlcjtcclxuICAgIGN1cnZlPzogYW55O1xyXG4gIH07XHJcbiAgLy8gRU5EIC0gT3B0aW9ucyBmb3IgbmF0aXZlc2NyaXB0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlckV4dGVuc2lvbnMge1xyXG4gIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gIG5hdmlnYXRlQnlVcmwodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBvcHRpb25zPzogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPjtcclxuICBiYWNrKCk6IHZvaWQ7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvdXRlckV4dGVuc2lvbnMgaW1wbGVtZW50cyBJUm91dGVyRXh0ZW5zaW9ucyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5KSB7IH1cclxuXHJcbiAgcHVibGljIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShjb21tYW5kcywgZXh0cmFzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nIHwgVXJsVHJlZSwgb3B0aW9ucz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBiYWNrKCkge1xyXG4gICAgdGhpcy5sb2NhdGlvblN0cmF0ZWd5LmJhY2soKTtcclxuICB9XHJcbn1cclxuIl19
