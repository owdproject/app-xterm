export default {
    id: "org.owdproject.xterm",
    title: "Terminal",
    category: 'tools',
    provides: {
        name: "terminal",
        entry: "xterm"
    },
    icon: "mdi:console",
    windows: {
        main: {
            component: () => import('./runtime/components/Window/WindowXterm.vue'),
            size: {
                width: 600,
                height: 400
            },
            position: {
                x: 400,
                y: 240,
                z: 0
            },
        }
    },
    entries: {
        xterm: {
            command: "xterm"
        },
    },
    commands: {
        xterm: (app) => {
            app.openWindow("main")
        }
    }
}