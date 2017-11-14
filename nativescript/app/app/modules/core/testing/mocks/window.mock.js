Object.defineProperty(exports, "__esModule", { value: true });
var WindowMock = (function () {
    function WindowMock() {
        this.navigator = {
            language: 'en-US',
            userAgent: 'testing'
        };
        this.location = {};
    }
    WindowMock.prototype.alert = function (msg) {
        return;
    };
    WindowMock.prototype.confirm = function (msg) {
        return;
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
var WindowMockFrench = (function (_super) {
    __extends(WindowMockFrench, _super);
    function WindowMockFrench() {
        var _this = _super.call(this) || this;
        _this.navigator.language = 'fr-US';
        return _this;
    }
    return WindowMockFrench;
}(WindowMock));
exports.WindowMockFrench = WindowMockFrench;
var WindowMockNoLanguage = (function (_super) {
    __extends(WindowMockNoLanguage, _super);
    function WindowMockNoLanguage() {
        var _this = _super.call(this) || this;
        _this.navigator.language = undefined;
        return _this;
    }
    return WindowMockNoLanguage;
}(WindowMock));
exports.WindowMockNoLanguage = WindowMockNoLanguage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93Lm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNTLGNBQVMsR0FBUTtZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBQ0ssYUFBUSxHQUFRLEVBQUUsQ0FBQztJQU81QixDQUFDO0lBTlEsMEJBQUssR0FBWixVQUFhLEdBQVc7UUFDdEIsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNNLDRCQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksZ0NBQVU7QUFjdkI7SUFBc0Msb0NBQVU7SUFDOUM7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7O0lBQ3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFMRCxDQUFzQyxVQUFVLEdBSy9DO0FBTFksNENBQWdCO0FBTzdCO0lBQTBDLHdDQUFVO0lBQ2xEO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDOztJQUN0QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMEMsVUFBVSxHQUtuRDtBQUxZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXaW5kb3dNb2NrIHtcbiAgcHVibGljIG5hdmlnYXRvcjogYW55ID0ge1xuICAgIGxhbmd1YWdlOiAnZW4tVVMnLFxuICAgIHVzZXJBZ2VudDogJ3Rlc3RpbmcnXG4gIH07XG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XG4gIHB1YmxpYyBhbGVydChtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICBwdWJsaWMgY29uZmlybShtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luZG93TW9ja0ZyZW5jaCBleHRlbmRzIFdpbmRvd01vY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmF2aWdhdG9yLmxhbmd1YWdlID0gJ2ZyLVVTJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luZG93TW9ja05vTGFuZ3VhZ2UgZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19