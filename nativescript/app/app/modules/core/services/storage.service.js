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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1Ysc0NBQTJDO0FBTTNDLElBQWEsY0FBYztJQUEzQjtJQWNBLENBQUM7SUFaQyxnQ0FBTyxHQUFQLFVBQVEsR0FBZSxFQUFFLEtBQVU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEdBQWU7UUFDckIsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxHQUFlO1FBQ3hCLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksY0FBYztJQUQxQixpQkFBVSxFQUFFO0dBQ0EsY0FBYyxDQWMxQjtBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgSVN0b3JhZ2UsIFN0b3JhZ2VLZXkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lzdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xyXG5cclxuICBzZXRJdGVtKGtleTogU3RvcmFnZUtleSwgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJycgKyBrZXksIHZhbHVlID09PSBudWxsID8gbnVsbCA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGtleTogU3RvcmFnZUtleSk6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCcnICsga2V5KTtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBKU09OLnBhcnNlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnJyArIGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==