"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../states/index");
var index_2 = require("../actions/index");
function reducer(state, action) {
    if (state === void 0) { state = index_1.sampleInitialState; }
    switch (action.type) {
        case index_2.NameList.ActionTypes.INITIALIZED:
            return Object.assign({}, state, {
                names: action.payload
            });
        case index_2.NameList.ActionTypes.NAME_ADDED:
            return Object.assign({}, state, {
                names: state.names.concat([action.payload])
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9yZWR1Y2Vycy9zYW1wbGUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFtRTtBQUNuRSwwQ0FBNEM7QUFFNUMsaUJBQ0UsS0FBd0MsRUFJeEMsTUFBd0I7SUFKeEIsc0JBQUEsRUFBQSxRQUFzQiwwQkFBa0I7SUFNeEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXO1lBQ25DLE1BQU0sQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTzthQUN0QixDQUFDLENBQUM7UUFFTCxLQUFLLGdCQUFRLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDbEMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFNLEtBQUssQ0FBQyxLQUFLLFNBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQzthQUN4QyxDQUFDLENBQUM7UUFFTDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFyQkQsMEJBcUJDIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NhbXBsZS9yZWR1Y2Vycy9zYW1wbGUucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTYW1wbGVTdGF0ZSwgc2FtcGxlSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcclxuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxyXG4gIHN0YXRlOiBJU2FtcGxlU3RhdGUgPSBzYW1wbGVJbml0aWFsU3RhdGUsXHJcbiAgLy8gY291bGQgc3VwcG9ydCBtdWx0aXBsZSBzdGF0ZSBhY3Rpb25zIHZpYSB1bmlvbiB0eXBlIGhlcmVcclxuICAvLyBpZTogTmFtZUxpc3QuQWN0aW9ucyB8IE90aGVyLkFjdGlvbnNcclxuICAvLyB0aGUgc2VlZCdzIGV4YW1wbGUganVzdCBoYXMgb25lIHNldCBvZiBhY3Rpb25zOiBOYW1lTGlzdC5BY3Rpb25zXHJcbiAgYWN0aW9uOiBOYW1lTGlzdC5BY3Rpb25zXHJcbik6IElTYW1wbGVTdGF0ZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBOYW1lTGlzdC5BY3Rpb25UeXBlcy5JTklUSUFMSVpFRDpcclxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG5hbWVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIE5hbWVMaXN0LkFjdGlvblR5cGVzLk5BTUVfQURERUQ6XHJcbiAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBuYW1lczogWy4uLnN0YXRlLm5hbWVzLCBhY3Rpb24ucGF5bG9hZF1cclxuICAgICAgfSk7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXX0=
