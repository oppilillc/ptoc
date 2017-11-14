Object.defineProperty(exports, "__esModule", { value: true });
// libs
var core_1 = require("@ngx-translate/core");
// module
var index_1 = require("../services/index");
// mocks
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLDRDQUF3RTtBQUV4RSxTQUFTO0FBQ1QsMkNBQXdEO0FBRXhELFFBQVE7QUFDUixpRUFBMkQ7QUFDM0QsK0VBQXdFO0FBRXhFO0lBRUUsSUFBSSxTQUFTLEdBQWU7UUFDMUIsRUFBRSxPQUFPLEVBQUUsc0JBQWUsRUFBRSxRQUFRLEVBQUUsK0NBQW1CLEVBQUU7UUFDM0QsRUFBRSxPQUFPLEVBQUUsdUJBQWdCLEVBQUUsUUFBUSxFQUFFLGtDQUFhLEVBQUU7UUFDdEQsMkJBQW1CO0tBQ3BCLENBQUM7SUFFRixNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFURCxrRUFTQztBQUVEO0lBQ0UsTUFBTSxDQUFDO1FBQ0wsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7S0FDbkMsQ0FBQztBQUNKLENBQUM7QUFSRCxvQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIG1vY2tzXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2NrIH0gZnJvbSAnLi9tb2Nrcy9uZzItdHJhbnNsYXRlLm1vY2snO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyTW9jayB9IGZyb20gJy4vbW9ja3MvbmcyLXRyYW5zbGF0ZS1sb2FkZXIubW9jayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBURVNUX01VTFRJTElOR1VBTF9QUk9WSURFUlMoKTogQXJyYXk8YW55PiB7XG5cbiAgbGV0IHByb3ZpZGVyczogQXJyYXk8YW55PiA9IFtcbiAgICB7IHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZUxvYWRlck1vY2sgfSxcbiAgICB7IHByb3ZpZGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHVzZUNsYXNzOiBUcmFuc2xhdGVNb2NrIH0sXG4gICAgTXVsdGlsaW5ndWFsU2VydmljZVxuICBdO1xuXG4gIHJldHVybiBwcm92aWRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZXMoKTogQXJyYXk8YW55PiB7XG4gIHJldHVybiBbXG4gICAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXG4gICAgeyBjb2RlOiAnZXMnLCB0aXRsZTogJ1NwYW5pc2gnIH0sXG4gICAgeyBjb2RlOiAnZnInLCB0aXRsZTogJ0ZyZW5jaCcgfSxcbiAgICB7IGNvZGU6ICdydScsIHRpdGxlOiAnUnVzc2lhbicgfSxcbiAgICB7IGNvZGU6ICdiZycsIHRpdGxlOiAnQnVsZ2FyaWFuJyB9XG4gIF07XG59XG4iXX0=