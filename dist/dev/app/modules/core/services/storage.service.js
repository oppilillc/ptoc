"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    StorageService = __decorate([
        core_1.Injectable()
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQTJDO0FBTTNDO0lBQUE7SUFjQSxDQUFDO0lBWkMsZ0NBQU8sR0FBUCxVQUFRLEdBQWUsRUFBRSxLQUFVO1FBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxHQUFlO1FBQ3JCLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsR0FBZTtRQUN4QixZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBYlUsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQWMxQjtJQUFELHFCQUFDO0NBZEQsQUFjQyxJQUFBO0FBZFksd0NBQWMiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBJU3RvcmFnZSwgU3RvcmFnZUtleSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXN0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBJU3RvcmFnZSB7XHJcblxyXG4gIHNldEl0ZW0oa2V5OiBTdG9yYWdlS2V5LCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnJyArIGtleSwgdmFsdWUgPT09IG51bGwgPyBudWxsIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW0oa2V5OiBTdG9yYWdlS2V5KTogYW55IHtcclxuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJycgKyBrZXkpO1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShrZXk6IFN0b3JhZ2VLZXkpOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCcnICsga2V5KTtcclxuICB9XHJcbn1cclxuIl19
