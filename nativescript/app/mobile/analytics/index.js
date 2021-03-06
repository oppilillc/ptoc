Object.defineProperty(exports, "__esModule", { value: true });
// libs
var angulartics2_1 = require("angulartics2");
// app
var index_1 = require("../../app/modules/analytics/index");
var ns_angulartics2_segment_service_1 = require("./services/ns-angulartics2-segment.service");
exports.NS_ANALYTICS_PROVIDERS = [
    angulartics2_1.Angulartics2,
    { provide: angulartics2_1.Angulartics2Segment, useClass: ns_angulartics2_segment_service_1.NSAngulartics2Segment },
    index_1.AnalyticsService
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLDZDQUFpRTtBQUVqRSxNQUFNO0FBQ04sMkRBQXFFO0FBQ3JFLDhGQUFtRjtBQUV0RSxRQUFBLHNCQUFzQixHQUFlO0lBQ2hELDJCQUFZO0lBQ1osRUFBRSxPQUFPLEVBQUUsa0NBQW1CLEVBQUUsUUFBUSxFQUFFLHVEQUFxQixFQUFFO0lBQ2pFLHdCQUFnQjtDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL21vZHVsZXMvYW5hbHl0aWNzL2luZGV4JztcbmltcG9ydCB7IE5TQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJy4vc2VydmljZXMvbnMtYW5ndWxhcnRpY3MyLXNlZ21lbnQuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBOU19BTkFMWVRJQ1NfUFJPVklERVJTOiBBcnJheTxhbnk+ID0gW1xuICBBbmd1bGFydGljczIsXG4gIHsgcHJvdmlkZTogQW5ndWxhcnRpY3MyU2VnbWVudCwgdXNlQ2xhc3M6IE5TQW5ndWxhcnRpY3MyU2VnbWVudCB9LFxuICBBbmFseXRpY3NTZXJ2aWNlXG5dO1xuIl19