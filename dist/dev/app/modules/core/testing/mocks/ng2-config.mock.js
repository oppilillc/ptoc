"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBNkJBLENBQUM7SUE1QkMseUJBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEtBQWMsRUFBRSxHQUFZO1FBQ3RDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRTtnQkFDSixlQUFlLEVBQUU7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELGtCQUFrQixFQUFFO29CQUNsQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLGdDQUFVIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlnTW9jayB7XHJcbiAgaW5pdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5ncyhncm91cD86IHN0cmluZywga2V5Pzogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGkxOG46IHtcclxuICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGNvZGU6ICdlbicsXHJcbiAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdmFpbGFibGVMYW5ndWFnZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29kZTogJ2VuJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgbG9nZ2luZzoge1xyXG4gICAgICAgIERFQlVHOiB7XHJcbiAgICAgICAgICBMRVZFTF8xOiBmYWxzZSxcclxuICAgICAgICAgIExFVkVMXzI6IGZhbHNlLFxyXG4gICAgICAgICAgTEVWRUxfMzogZmFsc2UsXHJcbiAgICAgICAgICBMRVZFTF80OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
