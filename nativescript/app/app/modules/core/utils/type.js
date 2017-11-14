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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7O0FBRUgsSUFBSSxTQUFTLEdBQWlDLEVBQUUsQ0FBQztBQUNqRCxjQUF3QixLQUFhO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBZ0IsS0FBSyx1QkFBa0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxTQUFTLENBQVMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWhDLE1BQU0sQ0FBSSxLQUFLLENBQUM7QUFDbEIsQ0FBQztBQVJELG9CQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvZXJjZXMgYSBzdHJpbmcgaW50byBhIHN0cmluZyBsaXRlcmFsIHR5cGUuXG4gKiBVc2luZyB0YWdnZWQgdW5pb24gdHlwZXMgaW4gVHlwZVNjcmlwdCAyLjAsIHRoaXMgZW5hYmxlc1xuICogcG93ZXJmdWwgdHlwZWNoZWNraW5nIG9mIG91ciByZWR1Y2Vycy5cbiAqIFxuICogU2luY2UgZXZlcnkgYWN0aW9uIGxhYmVsIHBhc3NlcyB0aHJvdWdoIHRoaXMgZnVuY3Rpb24gaXRcbiAqIGlzIGEgZ29vZCBwbGFjZSB0byBlbnN1cmUgYWxsIG9mIG91ciBhY3Rpb24gbGFiZWxzXG4gKiBhcmUgdW5pcXVlLlxuICovXG5cbmxldCB0eXBlQ2FjaGU6IHsgW2xhYmVsOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiB0eXBlPFQ+KGxhYmVsOiBUIHwgJycpOiBUIHtcbiAgaWYgKHR5cGVDYWNoZVs8c3RyaW5nPmxhYmVsXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQWN0aW9uIHR5cGUgXCIke2xhYmVsfVwiIGlzIG5vdCB1bnFpdWVcImApO1xuICB9XG5cbiAgdHlwZUNhY2hlWzxzdHJpbmc+bGFiZWxdID0gdHJ1ZTtcblxuICByZXR1cm4gPFQ+bGFiZWw7XG59XG4iXX0=