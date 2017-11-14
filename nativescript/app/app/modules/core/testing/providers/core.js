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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixrREFBK0Q7QUFFL0QsU0FBUztBQUNULDhDQUFtSztBQUVuSyxRQUFRO0FBQ1Isb0RBQWtEO0FBQ2xELDBFQUF1RTtBQUV2RSw2QkFBb0MsT0FBYTtJQUMvQyxXQUFXO0lBQ1gsb0VBQW9FO0lBRXBFLElBQUksU0FBUyxHQUFHO1FBQ2QsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1FBQzlDLEVBQUUsT0FBTyxFQUFFLHNCQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTtRQUNuRCxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQVUsRUFBRTtRQUMvRTtZQUNFLE9BQU8sRUFBRSxpQkFBUztZQUNsQixJQUFJLEVBQUUsQ0FBQyxzQkFBYyxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxVQUFDLENBQWlCLElBQUssT0FBQSxJQUFJLHFCQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLGdCQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBckQsQ0FBcUQ7WUFDeEYsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELGtCQUFVO1FBQ1YsMkJBQW1CO1FBQ25CLEVBQUUsT0FBTyxFQUFFLHdCQUFnQixFQUFFLFFBQVEsRUFBRSw2Q0FBb0IsRUFBRTtRQUM3RCxrQkFBVTtLQUNYLENBQUM7SUFFRixNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFyQkQsa0RBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXG5pbXBvcnQgeyBBTkFMWVRJQ1NfUFJPVklERVJTIH0gZnJvbSAnLi4vLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSwgQ29uc29sZVNlcnZpY2UsIExvZ1NlcnZpY2UsIExvZ1RhcmdldCwgQ29uc29sZVRhcmdldCwgTG9nTGV2ZWwsIFJvdXRlckV4dGVuc2lvbnMsIEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIG1vY2tzXG5pbXBvcnQgeyBXaW5kb3dNb2NrIH0gZnJvbSAnLi4vbW9ja3Mvd2luZG93Lm1vY2snO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc01vY2sgfSBmcm9tICcuLi9tb2Nrcy9yb3V0ZXItZXh0ZW5zaW9ucy5tb2NrJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfQ09SRV9QUk9WSURFUlMob3B0aW9ucz86IGFueSk6IEFycmF5PGFueT4ge1xuICAvLyBvcHRpb25zOlxuICAvLyB3aW5kb3c6ICAgPSBjdXN0b20gd2luZG93IG1vY2sgKG1haW5seSBmb3IgY2hhbmdpbmcgb3V0IGxhbmd1YWdlKVxuXG4gIGxldCBwcm92aWRlcnMgPSBbXG4gICAgeyBwcm92aWRlOiBDb25zb2xlU2VydmljZSwgdXNlVmFsdWU6IGNvbnNvbGUgfSxcbiAgICB7IHByb3ZpZGU6IFN0b3JhZ2VTZXJ2aWNlLCB1c2VWYWx1ZTogbG9jYWxTdG9yYWdlIH0sXG4gICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VDbGFzczogKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3cpIHx8IFdpbmRvd01vY2sgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBMb2dUYXJnZXQsXG4gICAgICBkZXBzOiBbQ29uc29sZVNlcnZpY2VdLFxuICAgICAgdXNlRmFjdG9yeTogKGM6IENvbnNvbGVTZXJ2aWNlKSA9PiBuZXcgQ29uc29sZVRhcmdldChjLCB7IG1pbkxvZ0xldmVsOiBMb2dMZXZlbC5EZWJ1ZyB9KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBMb2dTZXJ2aWNlLFxuICAgIEFOQUxZVElDU19QUk9WSURFUlMsXG4gICAgeyBwcm92aWRlOiBSb3V0ZXJFeHRlbnNpb25zLCB1c2VDbGFzczogUm91dGVyRXh0ZW5zaW9uc01vY2sgfSxcbiAgICBBcHBTZXJ2aWNlXG4gIF07XG5cbiAgcmV0dXJuIHByb3ZpZGVycztcbn1cbiJdfQ==