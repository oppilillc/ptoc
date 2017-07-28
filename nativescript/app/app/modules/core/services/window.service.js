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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUEyQztBQU0zQyxJQUFhLGFBQWE7SUFEMUI7UUFHUyxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFJNUIsQ0FBQztJQUhRLDZCQUFLLEdBQVosVUFBYSxHQUFXLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwQywrQkFBTyxHQUFkLFVBQWUsR0FBVyxJQUFVLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFL0Msb0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtHQUNBLGFBQWEsQ0FPekI7QUFQWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IElXaW5kb3cgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2l3aW5kb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSBpbXBsZW1lbnRzIElXaW5kb3cge1xyXG4gIFxyXG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHt9O1xyXG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XHJcbiAgcHVibGljIGFsZXJ0KG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxyXG4gIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxyXG5cclxufVxyXG4iXX0=