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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWNvbmZpZy1tdWx0aWxhbmcubW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1jb25maWctbXVsdGlsYW5nLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUE4QkEsQ0FBQztJQTdCQyxrQ0FBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBYyxFQUFFLEdBQVk7UUFDdEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLGVBQWUsRUFBRTtvQkFDZixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0Qsa0JBQWtCLEVBQUU7b0JBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7b0JBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtpQkFDbkM7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25maWdNb2NrTXVsdGlsYW5nIHtcbiAgaW5pdCgpOiBhbnkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U2V0dGluZ3MoZ3JvdXA/OiBzdHJpbmcsIGtleT86IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG46IHtcbiAgICAgICAgZGVmYXVsdExhbmd1YWdlOiB7XG4gICAgICAgICAgY29kZTogJ2VuJyxcbiAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnXG4gICAgICAgIH0sXG4gICAgICAgIGF2YWlsYWJsZUxhbmd1YWdlczogW1xuICAgICAgICAgIHsgY29kZTogJ2VuJywgdGl0bGU6ICdFbmdsaXNoJyB9LFxuICAgICAgICAgIHsgY29kZTogJ2VzJywgdGl0bGU6ICdTcGFuaXNoJyB9LFxuICAgICAgICAgIHsgY29kZTogJ2ZyJywgdGl0bGU6ICdGcmVuY2gnIH0sXG4gICAgICAgICAgeyBjb2RlOiAncnUnLCB0aXRsZTogJ1J1c3NpYW4nIH0sXG4gICAgICAgICAgeyBjb2RlOiAnYmcnLCB0aXRsZTogJ0J1bGdhcmlhbicgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgbG9nZ2luZzoge1xuICAgICAgICBERUJVRzoge1xuICAgICAgICAgIExFVkVMXzE6IGZhbHNlLFxuICAgICAgICAgIExFVkVMXzI6IGZhbHNlLFxuICAgICAgICAgIExFVkVMXzM6IGZhbHNlLFxuICAgICAgICAgIExFVkVMXzQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=