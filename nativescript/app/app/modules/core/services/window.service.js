Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (msg) { return; };
    WindowService.prototype.confirm = function (msg) { return; };
    return WindowService;
}());
WindowService = __decorate([
    core_1.Injectable()
], WindowService);
exports.WindowService = WindowService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyQztBQU0zQyxJQUFhLGFBQWE7SUFEMUI7UUFHUyxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFJNUIsQ0FBQztJQUhRLDZCQUFLLEdBQVosVUFBYSxHQUFXLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwQywrQkFBTyxHQUFkLFVBQWUsR0FBVyxJQUFVLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFL0Msb0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtHQUNBLGFBQWEsQ0FPekI7QUFQWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJV2luZG93IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pd2luZG93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2UgaW1wbGVtZW50cyBJV2luZG93IHtcbiAgXG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHt9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHsgcmV0dXJuOyB9XG4gIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxuXG59XG4iXX0=