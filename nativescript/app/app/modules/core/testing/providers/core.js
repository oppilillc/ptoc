Object.defineProperty(exports, "__esModule", { value: true });
// app
var index_1 = require("../../../analytics/index");
// module
var index_2 = require("../../services/index");
// mocks
var window_mock_1 = require("../mocks/window.mock");
var router_extensions_mock_1 = require("../mocks/router-extensions.mock");
function TEST_CORE_PROVIDERS(options) {
    // options:
    // window:   = custom window mock (mainly for changing out language)
    var providers = [
        { provide: index_2.ConsoleService, useValue: console },
        { provide: index_2.StorageService, useValue: localStorage },
        { provide: index_2.WindowService, useClass: (options && options.window) || window_mock_1.WindowMock },
        {
            provide: index_2.LogTarget,
            deps: [index_2.ConsoleService],
            useFactory: function (c) { return new index_2.ConsoleTarget(c, { minLogLevel: index_2.LogLevel.Debug }); },
            multi: true
        },
        index_2.LogService,
        index_1.ANALYTICS_PROVIDERS,
        { provide: index_2.RouterExtensions, useClass: router_extensions_mock_1.RouterExtensionsMock },
        index_2.AppService
    ];
    return providers;
}
exports.TEST_CORE_PROVIDERS = TEST_CORE_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixrREFBK0Q7QUFFL0QsU0FBUztBQUNULDhDQUFtSztBQUVuSyxRQUFRO0FBQ1Isb0RBQWtEO0FBQ2xELDBFQUF1RTtBQUV2RSw2QkFBb0MsT0FBYTtJQUMvQyxXQUFXO0lBQ1gsb0VBQW9FO0lBRXBFLElBQUksU0FBUyxHQUFHO1FBQ2QsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1FBQzlDLEVBQUUsT0FBTyxFQUFFLHNCQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtRQUNuRCxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQVUsRUFBRTtRQUMvRTtZQUNFLE9BQU8sRUFBRSxpQkFBUztZQUNsQixJQUFJLEVBQUUsQ0FBQyxzQkFBYyxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxVQUFDLENBQWlCLElBQUssT0FBQSxJQUFJLHFCQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLGdCQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBckQsQ0FBcUQ7WUFDeEYsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELGtCQUFVO1FBQ1YsMkJBQW1CO1FBQ25CLEVBQUUsT0FBTyxFQUFFLHdCQUFnQixFQUFFLFFBQVEsRUFBRSw2Q0FBb0IsRUFBRTtRQUM3RCxrQkFBVTtLQUNYLENBQUM7SUFFRixNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFyQkQsa0RBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXHJcbmltcG9ydCB7IEFOQUxZVElDU19QUk9WSURFUlMgfSBmcm9tICcuLi8uLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlLCBDb25zb2xlU2VydmljZSwgTG9nU2VydmljZSwgTG9nVGFyZ2V0LCBDb25zb2xlVGFyZ2V0LCBMb2dMZXZlbCwgUm91dGVyRXh0ZW5zaW9ucywgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbi8vIG1vY2tzXHJcbmltcG9ydCB7IFdpbmRvd01vY2sgfSBmcm9tICcuLi9tb2Nrcy93aW5kb3cubW9jayc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnNNb2NrIH0gZnJvbSAnLi4vbW9ja3Mvcm91dGVyLWV4dGVuc2lvbnMubW9jayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9DT1JFX1BST1ZJREVSUyhvcHRpb25zPzogYW55KTogQXJyYXk8YW55PiB7XHJcbiAgLy8gb3B0aW9uczpcclxuICAvLyB3aW5kb3c6ICAgPSBjdXN0b20gd2luZG93IG1vY2sgKG1haW5seSBmb3IgY2hhbmdpbmcgb3V0IGxhbmd1YWdlKVxyXG5cclxuICBsZXQgcHJvdmlkZXJzID0gW1xyXG4gICAgeyBwcm92aWRlOiBDb25zb2xlU2VydmljZSwgdXNlVmFsdWU6IGNvbnNvbGUgfSxcclxuICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZVZhbHVlOiBsb2NhbFN0b3JhZ2UgfSxcclxuICAgIHsgcHJvdmlkZTogV2luZG93U2VydmljZSwgdXNlQ2xhc3M6IChvcHRpb25zICYmIG9wdGlvbnMud2luZG93KSB8fCBXaW5kb3dNb2NrIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IExvZ1RhcmdldCxcclxuICAgICAgZGVwczogW0NvbnNvbGVTZXJ2aWNlXSxcclxuICAgICAgdXNlRmFjdG9yeTogKGM6IENvbnNvbGVTZXJ2aWNlKSA9PiBuZXcgQ29uc29sZVRhcmdldChjLCB7IG1pbkxvZ0xldmVsOiBMb2dMZXZlbC5EZWJ1ZyB9KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICBMb2dTZXJ2aWNlLFxyXG4gICAgQU5BTFlUSUNTX1BST1ZJREVSUyxcclxuICAgIHsgcHJvdmlkZTogUm91dGVyRXh0ZW5zaW9ucywgdXNlQ2xhc3M6IFJvdXRlckV4dGVuc2lvbnNNb2NrIH0sXHJcbiAgICBBcHBTZXJ2aWNlXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHByb3ZpZGVycztcclxufVxyXG4iXX0=