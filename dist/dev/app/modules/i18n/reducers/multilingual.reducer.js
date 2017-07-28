"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multilingual_state_1 = require("../states/multilingual.state");
var multilingual_action_1 = require("../actions/multilingual.action");
function reducer(state, action) {
    if (state === void 0) { state = multilingual_state_1.initialState; }
    switch (action.type) {
        case multilingual_action_1.ActionTypes.LANG_CHANGED:
            if (state.lang !== action.payload)
                return Object.assign({}, state, {
                    lang: action.payload
                });
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vcmVkdWNlcnMvbXVsdGlsaW5ndWFsLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtRUFBZ0Y7QUFDaEYsc0VBQXNFO0FBRXRFLGlCQUNJLEtBQXdDLEVBQ3hDLE1BQWU7SUFEZixzQkFBQSxFQUFBLFFBQTRCLGlDQUFZO0lBRzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssaUNBQVcsQ0FBQyxZQUFZO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDaEMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtvQkFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2lCQUNyQixDQUFDLENBQUM7WUFFUCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2Y7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9yZWR1Y2Vycy9tdWx0aWxpbmd1YWwucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBJTXVsdGlsaW5ndWFsU3RhdGUsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9tdWx0aWxpbmd1YWwuc3RhdGUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbXVsdGlsaW5ndWFsLmFjdGlvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcclxuICAgIHN0YXRlOiBJTXVsdGlsaW5ndWFsU3RhdGUgPSBpbml0aWFsU3RhdGUsXHJcbiAgICBhY3Rpb246IEFjdGlvbnNcclxuKTogSU11bHRpbGluZ3VhbFN0YXRlIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLkxBTkdfQ0hBTkdFRDpcclxuICAgICAgaWYgKHN0YXRlLmxhbmcgIT09IGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgbGFuZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXX0=
