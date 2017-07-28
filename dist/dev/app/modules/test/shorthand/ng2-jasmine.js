"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
exports.Ng2Jasmine = {
    ae: afterEach,
    afterEach: afterEach,
    describe: describe,
    fdescribe: fdescribe,
    xdescribe: xdescribe,
    async: testing_1.async,
    fakeAsync: testing_1.fakeAsync,
    be: beforeEach,
    beforeEach: beforeEach,
    e: expect,
    expect: expect,
    fail: fail,
    inject: testing_1.inject,
    it: it,
    fit: fit,
    xit: xit,
    pending: pending,
    spyOn: spyOn,
    tick: testing_1.tick
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3Rlc3Qvc2hvcnRoYW5kL25nMi1qYXNtaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBSytCO0FBMEJsQixRQUFBLFVBQVUsR0FBWTtJQUNqQyxFQUFFLEVBQUUsU0FBUztJQUNiLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLEtBQUssRUFBRSxlQUFLO0lBQ1osU0FBUyxFQUFFLG1CQUFTO0lBQ3BCLEVBQUUsRUFBRSxVQUFVO0lBQ2QsVUFBVSxFQUFFLFVBQVU7SUFDdEIsQ0FBQyxFQUFFLE1BQU07SUFDVCxNQUFNLEVBQUUsTUFBTTtJQUNkLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLGdCQUFNO0lBQ2QsRUFBRSxFQUFFLEVBQUU7SUFDTixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsT0FBTyxFQUFFLE9BQU87SUFDaEIsS0FBSyxFQUFFLEtBQUs7SUFDWixJQUFJLEVBQUUsY0FBSTtDQUNYLENBQUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvdGVzdC9zaG9ydGhhbmQvbmcyLWphc21pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7XHJcbiAgYXN5bmMsXHJcbiAgZmFrZUFzeW5jLFxyXG4gIGluamVjdCxcclxuICB0aWNrXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbi8vIGludGVsbGlzZW5zZSB2aWEgc2hvcnRoYW5kXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVzdEFwaSB7XHJcbiAgYWU6IEZ1bmN0aW9uO1xyXG4gIGFmdGVyRWFjaDogRnVuY3Rpb247XHJcbiAgZGVzY3JpYmU6IEZ1bmN0aW9uO1xyXG4gIGZkZXNjcmliZTogRnVuY3Rpb247XHJcbiAgeGRlc2NyaWJlOiBGdW5jdGlvbjtcclxuICBhc3luYyhmbjogRnVuY3Rpb24pOiBGdW5jdGlvbjtcclxuICBmYWtlQXN5bmMoZm46IEZ1bmN0aW9uKTogRnVuY3Rpb247XHJcbiAgYmUoZm46IEZ1bmN0aW9uKTogdm9pZDtcclxuICBiZWZvcmVFYWNoKGZuOiBGdW5jdGlvbik6IHZvaWQ7XHJcbiAgZShhY3R1YWw6IGFueSk6IGphc21pbmUuTWF0Y2hlcnM7XHJcbiAgZXhwZWN0KGFjdHVhbDogYW55KTogamFzbWluZS5NYXRjaGVycztcclxuICBmYWlsKGU/OiBhbnkpOiB2b2lkO1xyXG4gIGluamVjdCh0b2tlbnM6IEFycmF5PGFueT4sIGZuOiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG4gIGl0KG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uLCB0aW1lT3V0PzogbnVtYmVyKTogdm9pZDtcclxuICBmaXQobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24sIHRpbWVPdXQ/OiBudW1iZXIpOiB2b2lkO1xyXG4gIHhpdChuYW1lOiBzdHJpbmcsIGZuOiBGdW5jdGlvbiwgdGltZU91dD86IG51bWJlcik6IHZvaWQ7XHJcbiAgcGVuZGluZyhyZWFzb24/OiBzdHJpbmcpOiB2b2lkO1xyXG4gIHNweU9uKG9iamVjdDogYW55LCBtZXRob2Q6IHN0cmluZyk6IGphc21pbmUuU3B5O1xyXG4gIHRpY2soZGVsYXk/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG4vLyBzaG9ydGhhbmQgLSByZWR1Y2VzIGJvaWxlcnBsYXRlIGluIGV2ZXJ5IHRlc3RcclxuZXhwb3J0IGNvbnN0IE5nMkphc21pbmU6IFRlc3RBcGkgPSB7XHJcbiAgYWU6IGFmdGVyRWFjaCwgLy8gc2hvcnRoYW5kXHJcbiAgYWZ0ZXJFYWNoOiBhZnRlckVhY2gsXHJcbiAgZGVzY3JpYmU6IGRlc2NyaWJlLFxyXG4gIGZkZXNjcmliZTogZmRlc2NyaWJlLFxyXG4gIHhkZXNjcmliZTogeGRlc2NyaWJlLFxyXG4gIGFzeW5jOiBhc3luYyxcclxuICBmYWtlQXN5bmM6IGZha2VBc3luYyxcclxuICBiZTogYmVmb3JlRWFjaCwgIC8vIHNob3J0aGFuZCBiZWZvcmVFYWNoXHJcbiAgYmVmb3JlRWFjaDogYmVmb3JlRWFjaCxcclxuICBlOiBleHBlY3QsIC8vIHNob3J0aGFuZCBleHBlY3RcclxuICBleHBlY3Q6IGV4cGVjdCxcclxuICBmYWlsOiBmYWlsLFxyXG4gIGluamVjdDogaW5qZWN0LFxyXG4gIGl0OiBpdCxcclxuICBmaXQ6IGZpdCxcclxuICB4aXQ6IHhpdCxcclxuICBwZW5kaW5nOiBwZW5kaW5nLFxyXG4gIHNweU9uOiBzcHlPbixcclxuICB0aWNrOiB0aWNrXHJcbn07XHJcbiJdfQ==