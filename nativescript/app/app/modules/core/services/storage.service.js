Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.setItem = function (key, value) {
        localStorage.setItem('' + key, value === null ? null : JSON.stringify(value));
    };
    StorageService.prototype.getItem = function (key) {
        var value = localStorage.getItem('' + key);
        return value === null ? null : JSON.parse(value);
    };
    StorageService.prototype.removeItem = function (key) {
        localStorage.removeItem('' + key);
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable()
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQTJDO0FBTTNDLElBQWEsY0FBYztJQUEzQjtJQWNBLENBQUM7SUFaQyxnQ0FBTyxHQUFQLFVBQVEsR0FBZSxFQUFFLEtBQVU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEdBQWU7UUFDckIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxHQUFlO1FBQ3hCLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksY0FBYztJQUQxQixpQkFBVSxFQUFFO0dBQ0EsY0FBYyxDQWMxQjtBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IElTdG9yYWdlLCBTdG9yYWdlS2V5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcblxuICBzZXRJdGVtKGtleTogU3RvcmFnZUtleSwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCcnICsga2V5LCB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgZ2V0SXRlbShrZXk6IFN0b3JhZ2VLZXkpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJycgKyBrZXkpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJycgKyBrZXkpO1xuICB9XG59XG4iXX0=