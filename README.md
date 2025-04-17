# About Xterm

> Xterm app for your Open Web Desktop client

## Overview

The OWD Xterm App is a simple terminal implementation for Open Web Desktop.

## Quick Installation

1.  Navigate to your OWD client folder in your terminal:

    ```bash
    cd owd-client
    ```

2.  Install the module using npm or yarn:

    ```bash
    npm install github:owdproject/app-xterm @xterm/xterm @xterm/addon-fit
    ```

3.  Register the application in your OWD configuration file:

    ```typescript
    // owd.config.ts
    import AppXterm from 'owd-app-xterm/owd.config'
    
    export const owdConfig = {
        theme: ['github:owdproject/theme-win95', { install: true }],
    
        apps: [
           './node_modules/owd-app-xterm',
        ],
    
        loader: async () => {
            await defineDesktopApp(AppXterm)
        }
    }
    ```

## Compatibility

This application is compatible with Open Web Desktop client version `3.0.0-alpha.0`.

## License

This project is released under the [MIT License](LICENSE).