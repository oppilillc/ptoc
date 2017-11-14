Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../states/index");
var index_2 = require("../actions/index");
function reducer(state, 
    // could support multiple state actions via union type here
    // ie: NameList.Actions | Other.Actions
    // the seed's example just has one set of actions: NameList.Actions
    action) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW1wbGUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQW1FO0FBQ25FLDBDQUE0QztBQUU1QyxpQkFDRSxLQUF3QztJQUN4QywyREFBMkQ7SUFDM0QsdUNBQXVDO0lBQ3ZDLG1FQUFtRTtJQUNuRSxNQUF3QjtJQUp4QixzQkFBQSxFQUFBLFFBQXNCLDBCQUFrQjtJQU14QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLGdCQUFRLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDbkMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3RCLENBQUMsQ0FBQztRQUVMLEtBQUssZ0JBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUNsQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxLQUFLLEVBQU0sS0FBSyxDQUFDLEtBQUssU0FBRSxNQUFNLENBQUMsT0FBTyxFQUFDO2FBQ3hDLENBQUMsQ0FBQztRQUVMO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQXJCRCwwQkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2FtcGxlU3RhdGUsIHNhbXBsZUluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9pbmRleCc7XG5pbXBvcnQgeyBOYW1lTGlzdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IElTYW1wbGVTdGF0ZSA9IHNhbXBsZUluaXRpYWxTdGF0ZSxcbiAgLy8gY291bGQgc3VwcG9ydCBtdWx0aXBsZSBzdGF0ZSBhY3Rpb25zIHZpYSB1bmlvbiB0eXBlIGhlcmVcbiAgLy8gaWU6IE5hbWVMaXN0LkFjdGlvbnMgfCBPdGhlci5BY3Rpb25zXG4gIC8vIHRoZSBzZWVkJ3MgZXhhbXBsZSBqdXN0IGhhcyBvbmUgc2V0IG9mIGFjdGlvbnM6IE5hbWVMaXN0LkFjdGlvbnNcbiAgYWN0aW9uOiBOYW1lTGlzdC5BY3Rpb25zXG4pOiBJU2FtcGxlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBOYW1lTGlzdC5BY3Rpb25UeXBlcy5JTklUSUFMSVpFRDpcbiAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmFtZXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcblxuICAgIGNhc2UgTmFtZUxpc3QuQWN0aW9uVHlwZXMuTkFNRV9BRERFRDpcbiAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmFtZXM6IFsuLi5zdGF0ZS5uYW1lcywgYWN0aW9uLnBheWxvYWRdXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==