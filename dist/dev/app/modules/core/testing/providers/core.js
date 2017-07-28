"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../analytics/index");
var index_2 = require("../../services/index");
var window_mock_1 = require("../mocks/window.mock");
var router_extensions_mock_1 = require("../mocks/router-extensions.mock");
function TEST_CORE_PROVIDERS(options) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtEQUErRDtBQUcvRCw4Q0FBbUs7QUFHbkssb0RBQWtEO0FBQ2xELDBFQUF1RTtBQUV2RSw2QkFBb0MsT0FBYTtJQUkvQyxJQUFJLFNBQVMsR0FBRztRQUNkLEVBQUUsT0FBTyxFQUFFLHNCQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtRQUM5QyxFQUFFLE9BQU8sRUFBRSxzQkFBYyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7UUFDbkQsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHdCQUFVLEVBQUU7UUFDL0U7WUFDRSxPQUFPLEVBQUUsaUJBQVM7WUFDbEIsSUFBSSxFQUFFLENBQUMsc0JBQWMsQ0FBQztZQUN0QixVQUFVLEVBQUUsVUFBQyxDQUFpQixJQUFLLE9BQUEsSUFBSSxxQkFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxnQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQXJELENBQXFEO1lBQ3hGLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxrQkFBVTtRQUNWLDJCQUFtQjtRQUNuQixFQUFFLE9BQU8sRUFBRSx3QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkNBQW9CLEVBQUU7UUFDN0Qsa0JBQVU7S0FDWCxDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBckJELGtEQXFCQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3Rlc3RpbmcvcHJvdmlkZXJzL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHBcclxuaW1wb3J0IHsgQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4uLy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSwgU3RvcmFnZVNlcnZpY2UsIENvbnNvbGVTZXJ2aWNlLCBMb2dTZXJ2aWNlLCBMb2dUYXJnZXQsIENvbnNvbGVUYXJnZXQsIExvZ0xldmVsLCBSb3V0ZXJFeHRlbnNpb25zLCBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuLy8gbW9ja3NcclxuaW1wb3J0IHsgV2luZG93TW9jayB9IGZyb20gJy4uL21vY2tzL3dpbmRvdy5tb2NrJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc01vY2sgfSBmcm9tICcuLi9tb2Nrcy9yb3V0ZXItZXh0ZW5zaW9ucy5tb2NrJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBURVNUX0NPUkVfUFJPVklERVJTKG9wdGlvbnM/OiBhbnkpOiBBcnJheTxhbnk+IHtcclxuICAvLyBvcHRpb25zOlxyXG4gIC8vIHdpbmRvdzogICA9IGN1c3RvbSB3aW5kb3cgbW9jayAobWFpbmx5IGZvciBjaGFuZ2luZyBvdXQgbGFuZ3VhZ2UpXHJcblxyXG4gIGxldCBwcm92aWRlcnMgPSBbXHJcbiAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VWYWx1ZTogY29uc29sZSB9LFxyXG4gICAgeyBwcm92aWRlOiBTdG9yYWdlU2VydmljZSwgdXNlVmFsdWU6IGxvY2FsU3RvcmFnZSB9LFxyXG4gICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VDbGFzczogKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3cpIHx8IFdpbmRvd01vY2sgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTG9nVGFyZ2V0LFxyXG4gICAgICBkZXBzOiBbQ29uc29sZVNlcnZpY2VdLFxyXG4gICAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IExvZ0xldmVsLkRlYnVnIH0pLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIExvZ1NlcnZpY2UsXHJcbiAgICBBTkFMWVRJQ1NfUFJPVklERVJTLFxyXG4gICAgeyBwcm92aWRlOiBSb3V0ZXJFeHRlbnNpb25zLCB1c2VDbGFzczogUm91dGVyRXh0ZW5zaW9uc01vY2sgfSxcclxuICAgIEFwcFNlcnZpY2VcclxuICBdO1xyXG5cclxuICByZXR1cm4gcHJvdmlkZXJzO1xyXG59XHJcbiJdfQ==
