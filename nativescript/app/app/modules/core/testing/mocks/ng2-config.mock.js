Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMock = (function () {
    function ConfigMock() {
    }
    ConfigMock.prototype.init = function () {
        return null;
    };
    ConfigMock.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    {
                        code: 'en',
                        title: 'English'
                    }
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
    return ConfigMock;
}());
exports.ConfigMock = ConfigMock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBNkJBLENBQUM7SUE1QkMseUJBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEtBQWMsRUFBRSxHQUFZO1FBQ3RDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRTtnQkFDSixlQUFlLEVBQUU7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELGtCQUFrQixFQUFFO29CQUNsQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vY2sge1xuICBpbml0KCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTZXR0aW5ncyhncm91cD86IHN0cmluZywga2V5Pzogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaTE4bjoge1xuICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6IHtcbiAgICAgICAgICBjb2RlOiAnZW4nLFxuICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCdcbiAgICAgICAgfSxcbiAgICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29kZTogJ2VuJyxcbiAgICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBsb2dnaW5nOiB7XG4gICAgICAgIERFQlVHOiB7XG4gICAgICAgICAgTEVWRUxfMTogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfMjogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfMzogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfNDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==