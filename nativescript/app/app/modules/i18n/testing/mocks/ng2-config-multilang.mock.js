Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMockMultilang = (function () {
    function ConfigMockMultilang() {
    }
    ConfigMockMultilang.prototype.init = function () {
        return null;
    };
    ConfigMockMultilang.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    { code: 'en', title: 'English' },
                    { code: 'es', title: 'Spanish' },
                    { code: 'fr', title: 'French' },
                    { code: 'ru', title: 'Russian' },
                    { code: 'bg', title: 'Bulgarian' }
                ]
            },
            logging: {
                DEBUG: {
                    LEVEL_1: false,
                    LEVEL_2: false,
                    LEVEL_3: false,
                    LEVEL_4: false
                }
            }
        };
    };
    return ConfigMockMultilang;
}());
exports.ConfigMockMultilang = ConfigMockMultilang;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvbmZpZy1tdWx0aWxhbmcubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1jb25maWctbXVsdGlsYW5nLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUE4QkEsQ0FBQztJQTdCQyxrQ0FBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBYyxFQUFFLEdBQVk7UUFDdEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLGVBQWUsRUFBRTtvQkFDZixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0Qsa0JBQWtCLEVBQUU7b0JBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7b0JBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtpQkFDbkM7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25maWdNb2NrTXVsdGlsYW5nIHtcclxuICBpbml0KCk6IGFueSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdzKGdyb3VwPzogc3RyaW5nLCBrZXk/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaTE4bjoge1xyXG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZToge1xyXG4gICAgICAgICAgY29kZTogJ2VuJyxcclxuICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF2YWlsYWJsZUxhbmd1YWdlczogW1xyXG4gICAgICAgICAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXHJcbiAgICAgICAgICB7IGNvZGU6ICdlcycsIHRpdGxlOiAnU3BhbmlzaCcgfSxcclxuICAgICAgICAgIHsgY29kZTogJ2ZyJywgdGl0bGU6ICdGcmVuY2gnIH0sXHJcbiAgICAgICAgICB7IGNvZGU6ICdydScsIHRpdGxlOiAnUnVzc2lhbicgfSxcclxuICAgICAgICAgIHsgY29kZTogJ2JnJywgdGl0bGU6ICdCdWxnYXJpYW4nIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ2dpbmc6IHtcclxuICAgICAgICBERUJVRzoge1xyXG4gICAgICAgICAgTEVWRUxfMTogZmFsc2UsXHJcbiAgICAgICAgICBMRVZFTF8yOiBmYWxzZSxcclxuICAgICAgICAgIExFVkVMXzM6IGZhbHNlLFxyXG4gICAgICAgICAgTEVWRUxfNDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==