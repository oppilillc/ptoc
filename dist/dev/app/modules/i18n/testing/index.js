"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ngx-translate/core");
var index_1 = require("../services/index");
var ng2_translate_mock_1 = require("./mocks/ng2-translate.mock");
var ng2_translate_loader_mock_1 = require("./mocks/ng2-translate-loader.mock");
function TEST_MULTILINGUAL_PROVIDERS() {
    var providers = [
        { provide: core_1.TranslateLoader, useClass: ng2_translate_loader_mock_1.TranslateLoaderMock },
        { provide: core_1.TranslateService, useClass: ng2_translate_mock_1.TranslateMock },
        index_1.MultilingualService
    ];
    return providers;
}
exports.TEST_MULTILINGUAL_PROVIDERS = TEST_MULTILINGUAL_PROVIDERS;
function getLanguages() {
    return [
        { code: 'en', title: 'English' },
        { code: 'es', title: 'Spanish' },
        { code: 'fr', title: 'French' },
        { code: 'ru', title: 'Russian' },
        { code: 'bg', title: 'Bulgarian' }
    ];
}
exports.getLanguages = getLanguages;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUF3RTtBQUd4RSwyQ0FBd0Q7QUFHeEQsaUVBQTJEO0FBQzNELCtFQUF3RTtBQUV4RTtJQUVFLElBQUksU0FBUyxHQUFlO1FBQzFCLEVBQUUsT0FBTyxFQUFFLHNCQUFlLEVBQUUsUUFBUSxFQUFFLCtDQUFtQixFQUFFO1FBQzNELEVBQUUsT0FBTyxFQUFFLHVCQUFnQixFQUFFLFFBQVEsRUFBRSxrQ0FBYSxFQUFFO1FBQ3RELDJCQUFtQjtLQUNwQixDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBVEQsa0VBU0M7QUFFRDtJQUNFLE1BQU0sQ0FBQztRQUNMLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0tBQ25DLENBQUM7QUFDSixDQUFDO0FBUkQsb0NBUUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi90ZXN0aW5nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuLy8gbW9ja3NcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9jayB9IGZyb20gJy4vbW9ja3MvbmcyLXRyYW5zbGF0ZS5tb2NrJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyTW9jayB9IGZyb20gJy4vbW9ja3MvbmcyLXRyYW5zbGF0ZS1sb2FkZXIubW9jayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9NVUxUSUxJTkdVQUxfUFJPVklERVJTKCk6IEFycmF5PGFueT4ge1xyXG5cclxuICBsZXQgcHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVMb2FkZXJNb2NrIH0sXHJcbiAgICB7IHByb3ZpZGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHVzZUNsYXNzOiBUcmFuc2xhdGVNb2NrIH0sXHJcbiAgICBNdWx0aWxpbmd1YWxTZXJ2aWNlXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHByb3ZpZGVycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlcygpOiBBcnJheTxhbnk+IHtcclxuICByZXR1cm4gW1xyXG4gICAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXHJcbiAgICB7IGNvZGU6ICdlcycsIHRpdGxlOiAnU3BhbmlzaCcgfSxcclxuICAgIHsgY29kZTogJ2ZyJywgdGl0bGU6ICdGcmVuY2gnIH0sXHJcbiAgICB7IGNvZGU6ICdydScsIHRpdGxlOiAnUnVzc2lhbicgfSxcclxuICAgIHsgY29kZTogJ2JnJywgdGl0bGU6ICdCdWxnYXJpYW4nIH1cclxuICBdO1xyXG59XHJcbiJdfQ==
