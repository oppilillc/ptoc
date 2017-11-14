Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var RouterExtensionsMock = (function () {
    function RouterExtensionsMock() {
    }
    RouterExtensionsMock.prototype.navigate = function (commands, extras) {
        return Promise.resolve(true);
    };
    RouterExtensionsMock.prototype.navigateByUrl = function (url, options) {
        return Promise.resolve(true);
    };
    RouterExtensionsMock.prototype.back = function () {
        return;
    };
    return RouterExtensionsMock;
}());
RouterExtensionsMock = __decorate([
    core_1.Injectable()
], RouterExtensionsMock);
exports.RouterExtensionsMock = RouterExtensionsMock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLWV4dGVuc2lvbnMubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRlci1leHRlbnNpb25zLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBMkM7QUFPM0MsSUFBYSxvQkFBb0I7SUFBakM7SUFZQSxDQUFDO0lBWEMsdUNBQVEsR0FBUixVQUFTLFFBQW9CLEVBQUUsTUFBaUM7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxHQUFxQixFQUFFLE9BQWtDO1FBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxvQkFBb0I7SUFEaEMsaUJBQVUsRUFBRTtHQUNBLG9CQUFvQixDQVloQztBQVpZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IElSb3V0ZXJFeHRlbnNpb25zLCBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJFeHRlbnNpb25zTW9jayBpbXBsZW1lbnRzIElSb3V0ZXJFeHRlbnNpb25zIHtcbiAgbmF2aWdhdGUoY29tbWFuZHM6IEFycmF5PGFueT4sIGV4dHJhcz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cblxuICBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nIHwgVXJsVHJlZSwgb3B0aW9ucz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19