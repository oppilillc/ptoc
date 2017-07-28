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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO0lBNkJBLENBQUM7SUE1QkMseUJBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEtBQWMsRUFBRSxHQUFZO1FBQ3RDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRTtnQkFDSixlQUFlLEVBQUU7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELGtCQUFrQixFQUFFO29CQUNsQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vY2sge1xyXG4gIGluaXQoKTogYW55IHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoZ3JvdXA/OiBzdHJpbmcsIGtleT86IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpMThuOiB7XHJcbiAgICAgICAgZGVmYXVsdExhbmd1YWdlOiB7XHJcbiAgICAgICAgICBjb2RlOiAnZW4nLFxyXG4gICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvZGU6ICdlbicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ2dpbmc6IHtcclxuICAgICAgICBERUJVRzoge1xyXG4gICAgICAgICAgTEVWRUxfMTogZmFsc2UsXHJcbiAgICAgICAgICBMRVZFTF8yOiBmYWxzZSxcclxuICAgICAgICAgIExFVkVMXzM6IGZhbHNlLFxyXG4gICAgICAgICAgTEVWRUxfNDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==