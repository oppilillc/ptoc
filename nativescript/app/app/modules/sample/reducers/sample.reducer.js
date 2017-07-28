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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYW1wbGUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQW1FO0FBQ25FLDBDQUE0QztBQUU1QyxpQkFDRSxLQUF3QztJQUN4QywyREFBMkQ7SUFDM0QsdUNBQXVDO0lBQ3ZDLG1FQUFtRTtJQUNuRSxNQUF3QjtJQUp4QixzQkFBQSxFQUFBLFFBQXNCLDBCQUFrQjtJQU14QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLGdCQUFRLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDbkMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3RCLENBQUMsQ0FBQztRQUVMLEtBQUssZ0JBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUNsQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxLQUFLLEVBQU0sS0FBSyxDQUFDLEtBQUssU0FBRSxNQUFNLENBQUMsT0FBTyxFQUFDO2FBQ3hDLENBQUMsQ0FBQztRQUVMO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQXJCRCwwQkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2FtcGxlU3RhdGUsIHNhbXBsZUluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9pbmRleCc7XHJcbmltcG9ydCB7IE5hbWVMaXN0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcclxuICBzdGF0ZTogSVNhbXBsZVN0YXRlID0gc2FtcGxlSW5pdGlhbFN0YXRlLFxyXG4gIC8vIGNvdWxkIHN1cHBvcnQgbXVsdGlwbGUgc3RhdGUgYWN0aW9ucyB2aWEgdW5pb24gdHlwZSBoZXJlXHJcbiAgLy8gaWU6IE5hbWVMaXN0LkFjdGlvbnMgfCBPdGhlci5BY3Rpb25zXHJcbiAgLy8gdGhlIHNlZWQncyBleGFtcGxlIGp1c3QgaGFzIG9uZSBzZXQgb2YgYWN0aW9uczogTmFtZUxpc3QuQWN0aW9uc1xyXG4gIGFjdGlvbjogTmFtZUxpc3QuQWN0aW9uc1xyXG4pOiBJU2FtcGxlU3RhdGUge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTmFtZUxpc3QuQWN0aW9uVHlwZXMuSU5JVElBTElaRUQ6XHJcbiAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBuYW1lczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2FzZSBOYW1lTGlzdC5BY3Rpb25UeXBlcy5OQU1FX0FEREVEOlxyXG4gICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbmFtZXM6IFsuLi5zdGF0ZS5uYW1lcywgYWN0aW9uLnBheWxvYWRdXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIl19