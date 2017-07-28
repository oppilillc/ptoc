"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log("Electron launching with NODE_ENV: " + process.env.NODE_ENV);
var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var shell = electron.shell;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var template;
var menu;
var index_1 = require("./app/modules/electron/index");
if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 900, height: 620 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.webContents.on('did-navigate-in-page', function (e, url) {
        console.log("Page navigated: " + url);
    });
    var appTitle = "Angular Seed Advanced";
    var langMenu = {
        label: 'Language',
        submenu: []
    };
    var _loop_1 = function () {
        var code = lang.code;
        var langOption = {
            label: lang.title,
            click: function () {
                console.log("Change lang: " + code);
                mainWindow.webContents.executeJavaScript("window.dispatchEvent(new CustomEvent('changeLang', {detail: { value: '" + code + "'} }));");
            }
        };
        langMenu.submenu.push(langOption);
    };
    for (var _i = 0, _a = index_1.DesktopConfig.GET_SUPPORTED_LANGUAGES(); _i < _a.length; _i++) {
        var lang = _a[_i];
        _loop_1();
    }
    var helpMenu = {
        label: 'Help',
        submenu: [{
                label: 'Learn More',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced');
                }
            }, {
                label: 'Issues',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced/issues');
                }
            }, {
                label: "My Amazing Parent: Minko Gechev's Angular Seed",
                click: function () {
                    shell.openExternal('https://github.com/mgechev/angular-seed');
                }
            }, {
                label: 'Angular 2',
                click: function () {
                    shell.openExternal('https://angular.io/');
                }
            }, {
                label: 'Electron',
                click: function () {
                    shell.openExternal('http://electron.atom.io/');
                }
            }, {
                label: 'Electron Docs',
                click: function () {
                    shell.openExternal('https://github.com/atom/electron/tree/master/docs');
                }
            }, {
                label: 'Codeology Visualization',
                click: function () {
                    shell.openExternal('http://codeology.braintreepayments.com/nathanwalker/angular-seed-advanced');
                }
            }]
    };
    if (process.platform === 'darwin') {
        template = [{
                label: appTitle,
                submenu: [{
                        label: "About " + appTitle,
                        selector: 'orderFrontStandardAboutPanel:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Services',
                        submenu: []
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Hide Angular Seed Advanced',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    }, {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    }, {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
                    }]
            }, {
                label: 'Edit',
                submenu: [{
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    }, {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    }, {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    }, {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    }, {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }]
            }, {
                label: 'View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: 'Reload',
                        accelerator: 'Command+R',
                        click: function () {
                            mainWindow.reload();
                        }
                    }, {
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Alt+Command+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            }, {
                label: 'Window',
                submenu: [{
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    }, {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
    else {
        template = [{
                label: '&File',
                submenu: [{
                        label: '&Open',
                        accelerator: 'Ctrl+O'
                    }, {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: function () {
                            mainWindow.close();
                        }
                    }]
            }, {
                label: '&View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: '&Reload',
                        accelerator: 'Ctrl+R',
                        click: function () {
                            mainWindow.reload();
                        }
                    }, {
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O3dCQUNELEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUM5QixDQUFDO3FCQUNGLENBQUMsR0FBRyxDQUFDO3dCQUNKLEtBQUssRUFBRSxxQkFBcUI7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxDQUFDO3FCQUNGLENBQUM7YUFDTDtZQUNELFFBQVE7WUFDUixRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0FBRUgsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5kZXNrdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsicHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbic7XHJcbmNvbnNvbGUubG9nKGBFbGVjdHJvbiBsYXVuY2hpbmcgd2l0aCBOT0RFX0VOVjogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcclxuXHJcbi8vIGVsZWN0cm9uXHJcbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcclxuY29uc3QgYXBwID0gZWxlY3Ryb24uYXBwO1xyXG5jb25zdCBNZW51OiBhbnkgPSBlbGVjdHJvbi5NZW51O1xyXG5jb25zdCBzaGVsbDogYW55ID0gZWxlY3Ryb24uc2hlbGw7XHJcbi8vIGNvbnN0IHtjcmFzaFJlcG9ydGVyfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XHJcbmNvbnN0IEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbi5Ccm93c2VyV2luZG93O1xyXG5sZXQgbWFpbldpbmRvdzogYW55ID0gbnVsbDtcclxubGV0IHRlbXBsYXRlOiBhbnk7XHJcbmxldCBtZW51OiBhbnk7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgRGVza3RvcENvbmZpZyB9IGZyb20gJy4vYXBwL21vZHVsZXMvZWxlY3Ryb24vaW5kZXgnO1xyXG5cclxuLy8gU2FtcGxlXHJcbi8vIFlvdSB3b3VsZCBuZWVkIGEgdmFsaWQgYHN1Ym1pdFVSTGAgdG8gdXNlXHJcbi8vIGNyYXNoUmVwb3J0ZXIuc3RhcnQoe1xyXG4vLyAgIHByb2R1Y3ROYW1lOiAnQW5ndWxhclNlZWRBZHZhbmNlZCcsXHJcbi8vICAgY29tcGFueU5hbWU6ICdOYXRoYW5XYWxrZXInLFxyXG4vLyAgIHN1Ym1pdFVSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkJyxcclxuLy8gICBhdXRvU3VibWl0OiB0cnVlXHJcbi8vIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgcmVxdWlyZSgnZWxlY3Ryb24tZGVidWcnKSgpO1xyXG59XHJcblxyXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xyXG4gICAgYXBwLnF1aXQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuYXBwLm9uKCdyZWFkeScsICgpID0+IHtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgd2luZG93IHRvIG91ciBzcGVjaWZpZWQgZGltZW5zaW9uc1xyXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7IHdpZHRoOiA5MDAsIGhlaWdodDogNjIwIH0pO1xyXG5cclxuICAvLyBUZWxsIEVsZWN0cm9uIHdoZXJlIHRvIGxvYWQgdGhlIGVudHJ5IHBvaW50IGZyb21cclxuICBtYWluV2luZG93LmxvYWRVUkwoJ2ZpbGU6Ly8nICsgX19kaXJuYW1lICsgJy9pbmRleC5odG1sJyk7XHJcblxyXG4gIC8vIENsZWFyIG91dCB0aGUgbWFpbiB3aW5kb3cgd2hlbiB0aGUgYXBwIGlzIGNsb3NlZFxyXG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcclxuICAgIG1haW5XaW5kb3cgPSBudWxsO1xyXG4gIH0pO1xyXG5cclxuICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9uKCdkaWQtbmF2aWdhdGUtaW4tcGFnZScsIChlOiBhbnksIHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgUGFnZSBuYXZpZ2F0ZWQ6ICR7dXJsfWApO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgYXBwVGl0bGU6IHN0cmluZyA9IGBBbmd1bGFyIFNlZWQgQWR2YW5jZWRgO1xyXG5cclxuICBsZXQgbGFuZ01lbnU6IGFueSA9IHtcclxuICAgIGxhYmVsOiAnTGFuZ3VhZ2UnLFxyXG4gICAgc3VibWVudTogW11cclxuICB9O1xyXG4gIGZvciAodmFyIGxhbmcgb2YgRGVza3RvcENvbmZpZy5HRVRfU1VQUE9SVEVEX0xBTkdVQUdFUygpKSB7XHJcbiAgICBsZXQgY29kZSA9IGxhbmcuY29kZTtcclxuICAgIGxldCBsYW5nT3B0aW9uID0ge1xyXG4gICAgICBsYWJlbDogbGFuZy50aXRsZSxcclxuICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGFuZ2UgbGFuZzogJHtjb2RlfWApO1xyXG4gICAgICAgIG1haW5XaW5kb3cud2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoYHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlTGFuZycsIHtkZXRhaWw6IHsgdmFsdWU6ICcke2NvZGV9J30gfSkpO2ApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGFuZ01lbnUuc3VibWVudS5wdXNoKGxhbmdPcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGhlbHBNZW51OiBhbnkgPSB7XHJcbiAgICBsYWJlbDogJ0hlbHAnLFxyXG4gICAgc3VibWVudTogW3tcclxuICAgICAgbGFiZWw6ICdMZWFybiBNb3JlJyxcclxuICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL05hdGhhbldhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnSXNzdWVzJyxcclxuICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkL2lzc3VlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBgTXkgQW1hemluZyBQYXJlbnQ6IE1pbmtvIEdlY2hldidzIEFuZ3VsYXIgU2VlZGAsXHJcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9hbmd1bGFyLXNlZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ0FuZ3VsYXIgMicsXHJcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2FuZ3VsYXIuaW8vJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICdFbGVjdHJvbicsXHJcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwOi8vZWxlY3Ryb24uYXRvbS5pby8nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ0VsZWN0cm9uIERvY3MnLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9hdG9tL2VsZWN0cm9uL3RyZWUvbWFzdGVyL2RvY3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ0NvZGVvbG9neSBWaXN1YWxpemF0aW9uJyxcclxuICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHA6Ly9jb2Rlb2xvZ3kuYnJhaW50cmVlcGF5bWVudHMuY29tL25hdGhhbndhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1dXHJcbiAgfTtcclxuXHJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XHJcbiAgICB0ZW1wbGF0ZSA9IFt7XHJcbiAgICAgIGxhYmVsOiBhcHBUaXRsZSxcclxuICAgICAgc3VibWVudTogW3tcclxuICAgICAgICBsYWJlbDogYEFib3V0ICR7YXBwVGl0bGV9YCxcclxuICAgICAgICBzZWxlY3RvcjogJ29yZGVyRnJvbnRTdGFuZGFyZEFib3V0UGFuZWw6J1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnU2VydmljZXMnLFxyXG4gICAgICAgICAgc3VibWVudTogW11cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnSGlkZSBBbmd1bGFyIFNlZWQgQWR2YW5jZWQnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0gnLFxyXG4gICAgICAgICAgc2VsZWN0b3I6ICdoaWRlOidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ0hpZGUgT3RoZXJzJyxcclxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtTaGlmdCtIJyxcclxuICAgICAgICAgIHNlbGVjdG9yOiAnaGlkZU90aGVyQXBwbGljYXRpb25zOidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ1Nob3cgQWxsJyxcclxuICAgICAgICAgIHNlbGVjdG9yOiAndW5oaWRlQWxsQXBwbGljYXRpb25zOidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnUXVpdCcsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrUScsXHJcbiAgICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcC5xdWl0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ0VkaXQnLFxyXG4gICAgICAgIHN1Ym1lbnU6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ1VuZG8nLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1onLFxyXG4gICAgICAgICAgc2VsZWN0b3I6ICd1bmRvOidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUmVkbycsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnU2hpZnQrQ29tbWFuZCtaJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdyZWRvOidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdDdXQnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrWCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnY3V0OidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdDb3B5JyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0MnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2NvcHk6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1Bhc3RlJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1YnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3Bhc3RlOidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3QgQWxsJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0EnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdEFsbDonXHJcbiAgICAgICAgICB9XVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICdWaWV3JyxcclxuICAgICAgICBzdWJtZW51OiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gW3tcclxuICAgICAgICAgIGxhYmVsOiAnUmVsb2FkJyxcclxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtSJyxcclxuICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgbWFpbldpbmRvdy5yZWxvYWQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIEZ1bGwgU2NyZWVuJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK0NvbW1hbmQrRicsXHJcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIERldmVsb3BlciBUb29scycsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQWx0K0NvbW1hbmQrSScsXHJcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dIDogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrQ29tbWFuZCtGJyxcclxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ1dpbmRvdycsXHJcbiAgICAgICAgc3VibWVudTogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTWluaW1pemUnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK00nLFxyXG4gICAgICAgICAgc2VsZWN0b3I6ICdwZXJmb3JtTWluaWF0dXJpemU6J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtXJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwZXJmb3JtQ2xvc2U6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0JyaW5nIEFsbCB0byBGcm9udCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXJyYW5nZUluRnJvbnQ6J1xyXG4gICAgICAgICAgfV1cclxuICAgICAgfSxcclxuICAgICAgbGFuZ01lbnUsXHJcbiAgICAgIGhlbHBNZW51XTtcclxuXHJcbiAgICBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcGxhdGUgPSBbe1xyXG4gICAgICBsYWJlbDogJyZGaWxlJyxcclxuICAgICAgc3VibWVudTogW3tcclxuICAgICAgICBsYWJlbDogJyZPcGVuJyxcclxuICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrTydcclxuICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICcmQ2xvc2UnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK1cnLFxyXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICBtYWluV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJyZWaWV3JyxcclxuICAgICAgICBzdWJtZW51OiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gW3tcclxuICAgICAgICAgIGxhYmVsOiAnJlJlbG9hZCcsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrUicsXHJcbiAgICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5XaW5kb3cucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRnVsbCBTY3JlZW4nLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMScsXHJcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlICZEZXZlbG9wZXIgVG9vbHMnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0FsdCtDdHJsK0knLFxyXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy50b2dnbGVEZXZUb29scygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XSA6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlICZGdWxsIFNjcmVlbicsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnRjExJyxcclxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhbmdNZW51LFxyXG4gICAgICBoZWxwTWVudV07XHJcbiAgICBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgICBtYWluV2luZG93LnNldE1lbnUobWVudSk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiJdfQ==
