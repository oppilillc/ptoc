Object.defineProperty(exports, "__esModule", { value: true });
// module
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWxpbmd1YWwucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUztBQUNULG1FQUFnRjtBQUNoRixzRUFBc0U7QUFFdEUsaUJBQ0ksS0FBd0MsRUFDeEMsTUFBZTtJQURmLHNCQUFBLEVBQUEsUUFBNEIsaUNBQVk7SUFHMUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxpQ0FBVyxDQUFDLFlBQVk7WUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3JCLENBQUMsQ0FBQztZQUVQLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZjtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFmRCwwQkFlQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBJTXVsdGlsaW5ndWFsU3RhdGUsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9tdWx0aWxpbmd1YWwuc3RhdGUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbXVsdGlsaW5ndWFsLmFjdGlvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcclxuICAgIHN0YXRlOiBJTXVsdGlsaW5ndWFsU3RhdGUgPSBpbml0aWFsU3RhdGUsXHJcbiAgICBhY3Rpb246IEFjdGlvbnNcclxuKTogSU11bHRpbGluZ3VhbFN0YXRlIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLkxBTkdfQ0hBTkdFRDpcclxuICAgICAgaWYgKHN0YXRlLmxhbmcgIT09IGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgbGFuZzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXX0=