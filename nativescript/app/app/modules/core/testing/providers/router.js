Object.defineProperty(exports, "__esModule", { value: true });
// angular
var common_1 = require("@angular/common");
var testing_1 = require("@angular/common/testing");
function TEST_LOCATION_PROVIDERS() {
    return [
        { provide: common_1.Location, useClass: testing_1.SpyLocation },
        { provide: common_1.LocationStrategy, useClass: testing_1.MockLocationStrategy },
        { provide: common_1.APP_BASE_HREF, useValue: '/' }
    ];
}
exports.TEST_LOCATION_PROVIDERS = TEST_LOCATION_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBQ1YsMENBQTRFO0FBQzVFLG1EQUE0RTtBQUU1RTtJQUVFLE1BQU0sQ0FBQztRQUNMLEVBQUMsT0FBTyxFQUFFLGlCQUFRLEVBQUUsUUFBUSxFQUFFLHFCQUFXLEVBQUM7UUFDMUMsRUFBQyxPQUFPLEVBQUUseUJBQWdCLEVBQUUsUUFBUSxFQUFFLDhCQUFvQixFQUFDO1FBQzNELEVBQUUsT0FBTyxFQUFFLHNCQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtLQUMxQyxDQUFDO0FBQ0osQ0FBQztBQVBELDBEQU9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3B5TG9jYXRpb24sIE1vY2tMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL3Rlc3RpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9MT0NBVElPTl9QUk9WSURFUlMoKTogQXJyYXk8YW55PiB7XG5cbiAgcmV0dXJuIFtcbiAgICB7cHJvdmlkZTogTG9jYXRpb24sIHVzZUNsYXNzOiBTcHlMb2NhdGlvbn0sXG4gICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBNb2NrTG9jYXRpb25TdHJhdGVneX0sXG4gICAgeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogJy8nIH1cbiAgXTtcbn1cbiJdfQ==