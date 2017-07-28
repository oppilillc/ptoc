"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SharedService = (function () {
    function SharedService() {
    }
    SharedService.IS_NATIVESCRIPT = function () {
        return ((typeof NSObject !== 'undefined' && typeof NSString !== 'undefined') || (typeof android !== 'undefined' && typeof java !== 'undefined'));
    };
    return SharedService;
}());
exports.SharedService = SharedService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9zaGFyZWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBSUEsQ0FBQztJQUhlLDZCQUFlLEdBQTdCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLHNDQUFhIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9zaGFyZWQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBOU09iamVjdCwgTlNTdHJpbmcsIGFuZHJvaWQsIGphdmE6YW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJlZFNlcnZpY2Uge1xyXG4gIHB1YmxpYyBzdGF0aWMgSVNfTkFUSVZFU0NSSVBUKCkge1xyXG4gICAgcmV0dXJuICgodHlwZW9mIE5TT2JqZWN0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTlNTdHJpbmcgIT09ICd1bmRlZmluZWQnKSB8fCAodHlwZW9mIGFuZHJvaWQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBqYXZhICE9PSAndW5kZWZpbmVkJykpO1xyXG4gIH1cclxufVxyXG4iXX0=
