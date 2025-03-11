#include <windows.h>
#include <winsparkle.h>

#ifdef CURSOR_PLATFORM
    // Cursor-specific initialization
    #define APP_NAME L"{{PROJECT_NAME}}"
    #define APP_VERSION L"{{PROJECT_VERSION}}"
    #define APP_PUBLISHER L"{{COMPANY_NAME}}"
    #define APPCAST_URL L"https://{{PROJECT_DOMAIN}}/appcast.xml"
#else
    // Visual Studio initialization
    #include "resource.h"
    #define APP_NAME MAKEINTRESOURCEW(IDS_APP_NAME)
    #define APP_VERSION MAKEINTRESOURCEW(IDS_APP_VERSION)
    #define APP_PUBLISHER MAKEINTRESOURCEW(IDS_APP_PUBLISHER)
    #define APPCAST_URL MAKEINTRESOURCEW(IDS_APPCAST_URL)
#endif

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    win_sparkle_set_appcast_url(APPCAST_URL);
    win_sparkle_set_app_details(APP_PUBLISHER, APP_NAME, APP_VERSION);
    win_sparkle_init();

    // Your application code here

    win_sparkle_cleanup();
    return 0;
}