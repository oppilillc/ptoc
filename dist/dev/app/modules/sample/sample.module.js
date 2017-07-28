"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../shared/index");
var index_2 = require("./services/index");
var multilingual_module_1 = require("../i18n/multilingual.module");
var SampleModule = (function () {
    function SampleModule(parentModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
    SampleModule = __decorate([
        core_1.NgModule({
            imports: [
                index_1.SharedModule,
                multilingual_module_1.MultilingualModule,
            ],
            providers: index_2.SAMPLE_PROVIDERS.slice(),
            schemas: [
                core_1.NO_ERRORS_SCHEMA,
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ],
            exports: [
                index_1.SharedModule
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [SampleModule])
    ], SampleModule);
    return SampleModule;
}());
exports.SampleModule = SampleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9zYW1wbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQXVHO0FBT3ZHLHlDQUErQztBQUMvQywwQ0FBb0Q7QUFDcEQsbUVBQWlFO0FBc0JqRTtJQUVFLHNCQUFvQyxZQUEwQjtRQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQU5VLFlBQVk7UUFoQnhCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxvQkFBWTtnQkFDWix3Q0FBa0I7YUFDbkI7WUFDRCxTQUFTLEVBQ0osd0JBQWdCLFFBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjtnQkFDaEIsNkJBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG9CQUFZO2FBQ2I7U0FDRixDQUFDO1FBR2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUsWUFBWTtPQUZuRCxZQUFZLENBT3hCO0lBQUQsbUJBQUM7Q0FQRCxBQU9DLElBQUE7QUFQWSxvQ0FBWSIsImZpbGUiOiJhcHAvbW9kdWxlcy9zYW1wbGUvc2FtcGxlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcbmltcG9ydCB7IFNBTVBMRV9QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcclxuXHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIE11bHRpbGluZ3VhbE1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLi4uU0FNUExFX1BST1ZJREVSU1xyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcclxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNoYXJlZE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbXBsZU1vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU2FtcGxlTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2FtcGxlTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
