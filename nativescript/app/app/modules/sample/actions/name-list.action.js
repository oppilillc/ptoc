Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../core/utils/index");
/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
var NameList;
(function (NameList) {
    // Category to uniquely identify the actions
    NameList.CATEGORY = 'NameList';
    NameList.ActionTypes = {
        INIT: index_1.type(NameList.CATEGORY + " Init"),
        INITIALIZED: index_1.type(NameList.CATEGORY + " Initialized"),
        INIT_FAILED: index_1.type(NameList.CATEGORY + " Init Failed"),
        ADD: index_1.type(NameList.CATEGORY + " Add"),
        NAME_ADDED: index_1.type(NameList.CATEGORY + " Name Added")
    };
    /**
     * Every action is comprised of at least a type and an optional
     * payload. Expressing actions as classes enables powerful
     * type checking in reducer functions.
     *
     * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
     */
    var InitAction = (function () {
        function InitAction() {
            this.type = NameList.ActionTypes.INIT;
            this.payload = null;
        }
        return InitAction;
    }());
    NameList.InitAction = InitAction;
    var InitializedAction = (function () {
        function InitializedAction(payload) {
            this.payload = payload;
            this.type = NameList.ActionTypes.INITIALIZED;
        }
        return InitializedAction;
    }());
    NameList.InitializedAction = InitializedAction;
    var InitFailedAction = (function () {
        function InitFailedAction() {
            this.type = NameList.ActionTypes.INIT_FAILED;
            this.payload = null;
        }
        return InitFailedAction;
    }());
    NameList.InitFailedAction = InitFailedAction;
    var AddAction = (function () {
        function AddAction(payload) {
            this.payload = payload;
            this.type = NameList.ActionTypes.ADD;
        }
        return AddAction;
    }());
    NameList.AddAction = AddAction;
    var NameAddedAction = (function () {
        function NameAddedAction(payload) {
            this.payload = payload;
            this.type = NameList.ActionTypes.NAME_ADDED;
        }
        return NameAddedAction;
    }());
    NameList.NameAddedAction = NameAddedAction;
})(NameList = exports.NameList || (exports.NameList = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWUtbGlzdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdEQUE4QztBQUU5Qzs7OztHQUlHO0FBQ0gsSUFBaUIsUUFBUSxDQXlFeEI7QUF6RUQsV0FBaUIsUUFBUTtJQUN2Qiw0Q0FBNEM7SUFDL0IsaUJBQVEsR0FBVyxVQUFVLENBQUM7SUFrQjlCLG9CQUFXLEdBQXFCO1FBQzNDLElBQUksRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLFVBQU8sQ0FBQztRQUM5QixXQUFXLEVBQUUsWUFBSSxDQUFJLFNBQUEsUUFBUSxpQkFBYyxDQUFDO1FBQzVDLFdBQVcsRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLGlCQUFjLENBQUM7UUFDNUMsR0FBRyxFQUFFLFlBQUksQ0FBSSxTQUFBLFFBQVEsU0FBTSxDQUFDO1FBQzVCLFVBQVUsRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLGdCQUFhLENBQUM7S0FDM0MsQ0FBQztJQUVGOzs7Ozs7T0FNRztJQUNIO1FBQUE7WUFDRSxTQUFJLEdBQUcsU0FBQSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3hCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFELGlCQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFIWSxtQkFBVSxhQUd0QixDQUFBO0lBRUQ7UUFHRSwyQkFBbUIsT0FBc0I7WUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtZQUZ6QyxTQUFJLEdBQUcsU0FBQSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBRWMsQ0FBQztRQUNoRCx3QkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBSlksMEJBQWlCLG9CQUk3QixDQUFBO0lBRUQ7UUFBQTtZQUNFLFNBQUksR0FBRyxTQUFBLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDL0IsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQUFDLEFBSEQsSUFHQztJQUhZLHlCQUFnQixtQkFHNUIsQ0FBQTtJQUVEO1FBR0UsbUJBQW1CLE9BQWU7WUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBRmxDLFNBQUksR0FBRyxTQUFBLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFFZSxDQUFDO1FBQ3pDLGdCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSxrQkFBUyxZQUlyQixDQUFBO0lBRUQ7UUFHRSx5QkFBbUIsT0FBZTtZQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFGbEMsU0FBSSxHQUFHLFNBQUEsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUVRLENBQUM7UUFDekMsc0JBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUpZLHdCQUFlLGtCQUkzQixDQUFBO0FBWUgsQ0FBQyxFQXpFZ0IsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUF5RXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMvaW5kZXgnO1xuXG4vKipcbiAqIEVhY2ggYWN0aW9uIHNob3VsZCBiZSBuYW1lc3BhY2VkXG4gKiB0aGlzIGFsbG93cyB0aGUgaW50ZXJpb3IgdG8gaGF2ZSBzaW1pbGFyIHR5cGVkIG5hbWVzIGFzIG90aGVyIGFjdGlvbnNcbiAqIGhvd2V2ZXIgc3RpbGwgYWxsb3cgaW5kZXggZXhwb3J0c1xuICovXG5leHBvcnQgbmFtZXNwYWNlIE5hbWVMaXN0IHtcbiAgLy8gQ2F0ZWdvcnkgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhlIGFjdGlvbnNcbiAgZXhwb3J0IGNvbnN0IENBVEVHT1JZOiBzdHJpbmcgPSAnTmFtZUxpc3QnO1xuXG4gIC8qKlxuICAgKiBGb3IgZWFjaCBhY3Rpb24gdHlwZSBpbiBhbiBhY3Rpb24gZ3JvdXAsIG1ha2UgYSBzaW1wbGVcbiAgICogZW51bSBvYmplY3QgZm9yIGFsbCBvZiB0aGlzIGdyb3VwJ3MgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBUaGUgJ3R5cGUnIHV0aWxpdHkgZnVuY3Rpb24gY29lcmNlcyBzdHJpbmdzIGludG8gc3RyaW5nXG4gICAqIGxpdGVyYWwgdHlwZXMgYW5kIHJ1bnMgYSBzaW1wbGUgY2hlY2sgdG8gZ3VhcmFudGVlIGFsbFxuICAgKiBhY3Rpb24gdHlwZXMgaW4gdGhlIGFwcGxpY2F0aW9uIGFyZSB1bmlxdWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIElOYW1lTGlzdEFjdGlvbnMge1xuICAgIElOSVQ6IHN0cmluZztcbiAgICBJTklUSUFMSVpFRDogc3RyaW5nO1xuICAgIElOSVRfRkFJTEVEOiBzdHJpbmc7XG4gICAgQUREOiBzdHJpbmc7XG4gICAgTkFNRV9BRERFRDogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzOiBJTmFtZUxpc3RBY3Rpb25zID0ge1xuICAgIElOSVQ6IHR5cGUoYCR7Q0FURUdPUll9IEluaXRgKSxcbiAgICBJTklUSUFMSVpFRDogdHlwZShgJHtDQVRFR09SWX0gSW5pdGlhbGl6ZWRgKSxcbiAgICBJTklUX0ZBSUxFRDogdHlwZShgJHtDQVRFR09SWX0gSW5pdCBGYWlsZWRgKSxcbiAgICBBREQ6IHR5cGUoYCR7Q0FURUdPUll9IEFkZGApLFxuICAgIE5BTUVfQURERUQ6IHR5cGUoYCR7Q0FURUdPUll9IE5hbWUgQWRkZWRgKVxuICB9O1xuXG4gIC8qKlxuICAgKiBFdmVyeSBhY3Rpb24gaXMgY29tcHJpc2VkIG9mIGF0IGxlYXN0IGEgdHlwZSBhbmQgYW4gb3B0aW9uYWxcbiAgICogcGF5bG9hZC4gRXhwcmVzc2luZyBhY3Rpb25zIGFzIGNsYXNzZXMgZW5hYmxlcyBwb3dlcmZ1bFxuICAgKiB0eXBlIGNoZWNraW5nIGluIHJlZHVjZXIgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBTZWUgRGlzY3JpbWluYXRlZCBVbmlvbnM6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2FkdmFuY2VkLXR5cGVzLmh0bWwjZGlzY3JpbWluYXRlZC11bmlvbnNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBJbml0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuSU5JVDtcbiAgICBwYXlsb2FkOiBzdHJpbmcgPSBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEluaXRpYWxpemVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuSU5JVElBTElaRUQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQXJyYXk8c3RyaW5nPikgeyB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgSW5pdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gICAgdHlwZSA9IEFjdGlvblR5cGVzLklOSVRfRkFJTEVEO1xuICAgIHBheWxvYWQ6IHN0cmluZyA9IG51bGw7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQWRkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuQUREO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgTmFtZUFkZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuTkFNRV9BRERFRDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhIHR5cGUgYWxpYXMgb2YgYWxsIGFjdGlvbnMgaW4gdGhpcyBhY3Rpb24gZ3JvdXBcbiAgICogc28gdGhhdCByZWR1Y2VycyBjYW4gZWFzaWx5IGNvbXBvc2UgYWN0aW9uIHR5cGVzXG4gICAqL1xuICBleHBvcnQgdHlwZSBBY3Rpb25zXG4gICAgPSBJbml0QWN0aW9uXG4gICAgfCBJbml0aWFsaXplZEFjdGlvblxuICAgIHwgSW5pdEZhaWxlZEFjdGlvblxuICAgIHwgQWRkQWN0aW9uXG4gICAgfCBOYW1lQWRkZWRBY3Rpb247XG59XG4iXX0=