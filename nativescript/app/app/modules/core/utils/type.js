/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
exports.type = type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7O0FBRUgsSUFBSSxTQUFTLEdBQWlDLEVBQUUsQ0FBQztBQUNqRCxjQUF3QixLQUFhO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBZ0IsS0FBSyx1QkFBa0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxTQUFTLENBQVMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWhDLE1BQU0sQ0FBSSxLQUFLLENBQUM7QUFDbEIsQ0FBQztBQVJELG9CQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gY29lcmNlcyBhIHN0cmluZyBpbnRvIGEgc3RyaW5nIGxpdGVyYWwgdHlwZS5cclxuICogVXNpbmcgdGFnZ2VkIHVuaW9uIHR5cGVzIGluIFR5cGVTY3JpcHQgMi4wLCB0aGlzIGVuYWJsZXNcclxuICogcG93ZXJmdWwgdHlwZWNoZWNraW5nIG9mIG91ciByZWR1Y2Vycy5cclxuICogXHJcbiAqIFNpbmNlIGV2ZXJ5IGFjdGlvbiBsYWJlbCBwYXNzZXMgdGhyb3VnaCB0aGlzIGZ1bmN0aW9uIGl0XHJcbiAqIGlzIGEgZ29vZCBwbGFjZSB0byBlbnN1cmUgYWxsIG9mIG91ciBhY3Rpb24gbGFiZWxzXHJcbiAqIGFyZSB1bmlxdWUuXHJcbiAqL1xyXG5cclxubGV0IHR5cGVDYWNoZTogeyBbbGFiZWw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5leHBvcnQgZnVuY3Rpb24gdHlwZTxUPihsYWJlbDogVCB8ICcnKTogVCB7XHJcbiAgaWYgKHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBY3Rpb24gdHlwZSBcIiR7bGFiZWx9XCIgaXMgbm90IHVucWl1ZVwiYCk7XHJcbiAgfVxyXG5cclxuICB0eXBlQ2FjaGVbPHN0cmluZz5sYWJlbF0gPSB0cnVlO1xyXG5cclxuICByZXR1cm4gPFQ+bGFiZWw7XHJcbn1cclxuIl19