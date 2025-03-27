export default defineDesktopApp({
    id: "org.owdproject.xterm",
    name: "Terminal",
    category: 'tools',
    provides: "terminal",
    icon: "lucide:console",
    windows: {
        main: {
            component: () => import('./app/components/Window/WindowXterm.vue'),
            name: "WindowXterm",
            category: "tools",
            title: "Console",
            icon: "lucide:console",
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
    onLaunch: (app) => {
        app.openWindow('main')
    }
})