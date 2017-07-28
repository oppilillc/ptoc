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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWUtbGlzdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdEQUE4QztBQUU5Qzs7OztHQUlHO0FBQ0gsSUFBaUIsUUFBUSxDQXlFeEI7QUF6RUQsV0FBaUIsUUFBUTtJQUN2Qiw0Q0FBNEM7SUFDL0IsaUJBQVEsR0FBVyxVQUFVLENBQUM7SUFrQjlCLG9CQUFXLEdBQXFCO1FBQzNDLElBQUksRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLFVBQU8sQ0FBQztRQUM5QixXQUFXLEVBQUUsWUFBSSxDQUFJLFNBQUEsUUFBUSxpQkFBYyxDQUFDO1FBQzVDLFdBQVcsRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLGlCQUFjLENBQUM7UUFDNUMsR0FBRyxFQUFFLFlBQUksQ0FBSSxTQUFBLFFBQVEsU0FBTSxDQUFDO1FBQzVCLFVBQVUsRUFBRSxZQUFJLENBQUksU0FBQSxRQUFRLGdCQUFhLENBQUM7S0FDM0MsQ0FBQztJQUVGOzs7Ozs7T0FNRztJQUNIO1FBQUE7WUFDRSxTQUFJLEdBQUcsU0FBQSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3hCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFELGlCQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFIWSxtQkFBVSxhQUd0QixDQUFBO0lBRUQ7UUFHRSwyQkFBbUIsT0FBc0I7WUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtZQUZ6QyxTQUFJLEdBQUcsU0FBQSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBRWMsQ0FBQztRQUNoRCx3QkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBSlksMEJBQWlCLG9CQUk3QixDQUFBO0lBRUQ7UUFBQTtZQUNFLFNBQUksR0FBRyxTQUFBLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDL0IsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQUFDLEFBSEQsSUFHQztJQUhZLHlCQUFnQixtQkFHNUIsQ0FBQTtJQUVEO1FBR0UsbUJBQW1CLE9BQWU7WUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBRmxDLFNBQUksR0FBRyxTQUFBLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFFZSxDQUFDO1FBQ3pDLGdCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSxrQkFBUyxZQUlyQixDQUFBO0lBRUQ7UUFHRSx5QkFBbUIsT0FBZTtZQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFGbEMsU0FBSSxHQUFHLFNBQUEsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUVRLENBQUM7UUFDekMsc0JBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUpZLHdCQUFlLGtCQUkzQixDQUFBO0FBWUgsQ0FBQyxFQXpFZ0IsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUF5RXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy9pbmRleCc7XHJcblxyXG4vKipcclxuICogRWFjaCBhY3Rpb24gc2hvdWxkIGJlIG5hbWVzcGFjZWRcclxuICogdGhpcyBhbGxvd3MgdGhlIGludGVyaW9yIHRvIGhhdmUgc2ltaWxhciB0eXBlZCBuYW1lcyBhcyBvdGhlciBhY3Rpb25zXHJcbiAqIGhvd2V2ZXIgc3RpbGwgYWxsb3cgaW5kZXggZXhwb3J0c1xyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBOYW1lTGlzdCB7XHJcbiAgLy8gQ2F0ZWdvcnkgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhlIGFjdGlvbnNcclxuICBleHBvcnQgY29uc3QgQ0FURUdPUlk6IHN0cmluZyA9ICdOYW1lTGlzdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBlYWNoIGFjdGlvbiB0eXBlIGluIGFuIGFjdGlvbiBncm91cCwgbWFrZSBhIHNpbXBsZVxyXG4gICAqIGVudW0gb2JqZWN0IGZvciBhbGwgb2YgdGhpcyBncm91cCdzIGFjdGlvbiB0eXBlcy5cclxuICAgKlxyXG4gICAqIFRoZSAndHlwZScgdXRpbGl0eSBmdW5jdGlvbiBjb2VyY2VzIHN0cmluZ3MgaW50byBzdHJpbmdcclxuICAgKiBsaXRlcmFsIHR5cGVzIGFuZCBydW5zIGEgc2ltcGxlIGNoZWNrIHRvIGd1YXJhbnRlZSBhbGxcclxuICAgKiBhY3Rpb24gdHlwZXMgaW4gdGhlIGFwcGxpY2F0aW9uIGFyZSB1bmlxdWUuXHJcbiAgICovXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJTmFtZUxpc3RBY3Rpb25zIHtcclxuICAgIElOSVQ6IHN0cmluZztcclxuICAgIElOSVRJQUxJWkVEOiBzdHJpbmc7XHJcbiAgICBJTklUX0ZBSUxFRDogc3RyaW5nO1xyXG4gICAgQUREOiBzdHJpbmc7XHJcbiAgICBOQU1FX0FEREVEOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY29uc3QgQWN0aW9uVHlwZXM6IElOYW1lTGlzdEFjdGlvbnMgPSB7XHJcbiAgICBJTklUOiB0eXBlKGAke0NBVEVHT1JZfSBJbml0YCksXHJcbiAgICBJTklUSUFMSVpFRDogdHlwZShgJHtDQVRFR09SWX0gSW5pdGlhbGl6ZWRgKSxcclxuICAgIElOSVRfRkFJTEVEOiB0eXBlKGAke0NBVEVHT1JZfSBJbml0IEZhaWxlZGApLFxyXG4gICAgQUREOiB0eXBlKGAke0NBVEVHT1JZfSBBZGRgKSxcclxuICAgIE5BTUVfQURERUQ6IHR5cGUoYCR7Q0FURUdPUll9IE5hbWUgQWRkZWRgKVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZXJ5IGFjdGlvbiBpcyBjb21wcmlzZWQgb2YgYXQgbGVhc3QgYSB0eXBlIGFuZCBhbiBvcHRpb25hbFxyXG4gICAqIHBheWxvYWQuIEV4cHJlc3NpbmcgYWN0aW9ucyBhcyBjbGFzc2VzIGVuYWJsZXMgcG93ZXJmdWxcclxuICAgKiB0eXBlIGNoZWNraW5nIGluIHJlZHVjZXIgZnVuY3Rpb25zLlxyXG4gICAqXHJcbiAgICogU2VlIERpc2NyaW1pbmF0ZWQgVW5pb25zOiBodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9hZHZhbmNlZC10eXBlcy5odG1sI2Rpc2NyaW1pbmF0ZWQtdW5pb25zXHJcbiAgICovXHJcbiAgZXhwb3J0IGNsYXNzIEluaXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgdHlwZSA9IEFjdGlvblR5cGVzLklOSVQ7XHJcbiAgICBwYXlsb2FkOiBzdHJpbmcgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIEluaXRpYWxpemVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHR5cGUgPSBBY3Rpb25UeXBlcy5JTklUSUFMSVpFRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQXJyYXk8c3RyaW5nPikgeyB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgSW5pdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuSU5JVF9GQUlMRUQ7XHJcbiAgICBwYXlsb2FkOiBzdHJpbmcgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIEFkZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuQUREO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIE5hbWVBZGRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICB0eXBlID0gQWN0aW9uVHlwZXMuTkFNRV9BRERFRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4cG9ydCBhIHR5cGUgYWxpYXMgb2YgYWxsIGFjdGlvbnMgaW4gdGhpcyBhY3Rpb24gZ3JvdXBcclxuICAgKiBzbyB0aGF0IHJlZHVjZXJzIGNhbiBlYXNpbHkgY29tcG9zZSBhY3Rpb24gdHlwZXNcclxuICAgKi9cclxuICBleHBvcnQgdHlwZSBBY3Rpb25zXHJcbiAgICA9IEluaXRBY3Rpb25cclxuICAgIHwgSW5pdGlhbGl6ZWRBY3Rpb25cclxuICAgIHwgSW5pdEZhaWxlZEFjdGlvblxyXG4gICAgfCBBZGRBY3Rpb25cclxuICAgIHwgTmFtZUFkZGVkQWN0aW9uO1xyXG59XHJcbiJdfQ==