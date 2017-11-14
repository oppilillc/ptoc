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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQUlBLENBQUM7SUFIZSw2QkFBZSxHQUE3QjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkosQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIE5TT2JqZWN0LCBOU1N0cmluZywgYW5kcm9pZCwgamF2YTphbnk7XG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRTZXJ2aWNlIHtcbiAgcHVibGljIHN0YXRpYyBJU19OQVRJVkVTQ1JJUFQoKSB7XG4gICAgcmV0dXJuICgodHlwZW9mIE5TT2JqZWN0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTlNTdHJpbmcgIT09ICd1bmRlZmluZWQnKSB8fCAodHlwZW9mIGFuZHJvaWQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBqYXZhICE9PSAndW5kZWZpbmVkJykpO1xuICB9XG59XG4iXX0=