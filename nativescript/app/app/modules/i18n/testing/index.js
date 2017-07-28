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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTztBQUNQLDRDQUF3RTtBQUV4RSxTQUFTO0FBQ1QsMkNBQXdEO0FBRXhELFFBQVE7QUFDUixpRUFBMkQ7QUFDM0QsK0VBQXdFO0FBRXhFO0lBRUUsSUFBSSxTQUFTLEdBQWU7UUFDMUIsRUFBRSxPQUFPLEVBQUUsc0JBQWUsRUFBRSxRQUFRLEVBQUUsK0NBQW1CLEVBQUU7UUFDM0QsRUFBRSxPQUFPLEVBQUUsdUJBQWdCLEVBQUUsUUFBUSxFQUFFLGtDQUFhLEVBQUU7UUFDdEQsMkJBQW1CO0tBQ3BCLENBQUM7SUFFRixNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFURCxrRUFTQztBQUVEO0lBQ0UsTUFBTSxDQUFDO1FBQ0wsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7S0FDbkMsQ0FBQztBQUNKLENBQUM7QUFSRCxvQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbi8vIG1vY2tzXHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vY2sgfSBmcm9tICcuL21vY2tzL25nMi10cmFuc2xhdGUubW9jayc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlck1vY2sgfSBmcm9tICcuL21vY2tzL25nMi10cmFuc2xhdGUtbG9hZGVyLm1vY2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfTVVMVElMSU5HVUFMX1BST1ZJREVSUygpOiBBcnJheTxhbnk+IHtcclxuXHJcbiAgbGV0IHByb3ZpZGVyczogQXJyYXk8YW55PiA9IFtcclxuICAgIHsgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlTG9hZGVyTW9jayB9LFxyXG4gICAgeyBwcm92aWRlOiBUcmFuc2xhdGVTZXJ2aWNlLCB1c2VDbGFzczogVHJhbnNsYXRlTW9jayB9LFxyXG4gICAgTXVsdGlsaW5ndWFsU2VydmljZVxyXG4gIF07XHJcblxyXG4gIHJldHVybiBwcm92aWRlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgY29kZTogJ2VuJywgdGl0bGU6ICdFbmdsaXNoJyB9LFxyXG4gICAgeyBjb2RlOiAnZXMnLCB0aXRsZTogJ1NwYW5pc2gnIH0sXHJcbiAgICB7IGNvZGU6ICdmcicsIHRpdGxlOiAnRnJlbmNoJyB9LFxyXG4gICAgeyBjb2RlOiAncnUnLCB0aXRsZTogJ1J1c3NpYW4nIH0sXHJcbiAgICB7IGNvZGU6ICdiZycsIHRpdGxlOiAnQnVsZ2FyaWFuJyB9XHJcbiAgXTtcclxufVxyXG4iXX0=