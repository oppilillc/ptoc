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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWxpbmd1YWwucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUztBQUNULG1FQUFnRjtBQUNoRixzRUFBc0U7QUFFdEUsaUJBQ0ksS0FBd0MsRUFDeEMsTUFBZTtJQURmLHNCQUFBLEVBQUEsUUFBNEIsaUNBQVk7SUFHMUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxpQ0FBVyxDQUFDLFlBQVk7WUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3JCLENBQUMsQ0FBQztZQUVQLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZjtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFmRCwwQkFlQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZVxuaW1wb3J0IHsgSU11bHRpbGluZ3VhbFN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvbXVsdGlsaW5ndWFsLnN0YXRlJztcbmltcG9ydCB7IEFjdGlvbnMsIEFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9tdWx0aWxpbmd1YWwuYWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gICAgc3RhdGU6IElNdWx0aWxpbmd1YWxTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246IEFjdGlvbnNcbik6IElNdWx0aWxpbmd1YWxTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGVzLkxBTkdfQ0hBTkdFRDpcbiAgICAgIGlmIChzdGF0ZS5sYW5nICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgbGFuZzogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==