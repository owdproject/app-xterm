<script setup lang="ts">
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'

const runtimeConfig = useRuntimeConfig()

const terminalManager = useTerminalManager()
const terminalContainer = ref<HTMLElement | null>(null)

let terminal: Terminal | null = null
const fitAddon = new FitAddon()
const currentInput = ref('')

const welcomeMessage = `Welcome to Open Web Desktop!\r\n
Version: ${runtimeConfig.public.coreVersion}\r
To get started, try using the 'help' command.\r`

onMounted(() => {
  if (terminalContainer.value) {
    terminal = new Terminal()
    terminal.loadAddon(fitAddon)
    terminal.open(terminalContainer.value)
    fitAddon.fit()

    writeWelcomeMessage()

    terminal.onData(data => {
      terminal?.write(data)
      currentInput.value += data

      if (data.includes('\r')) {
        const command = currentInput.value.trim()
        currentInput.value = ''

        const output = terminalManager.execCommand(command);

        if (output) {
          terminal?.write('\r\n')
          terminal?.write(output.text)
          terminal?.write('\r\n')
        }
      }
    })

    window.addEventListener('resize', fitTerminal)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', fitTerminal)
  terminal?.dispose()
  terminal = null
})

const fitTerminal = () => {
  fitAddon.fit()
}

const writeWelcomeMessage = () => {
  terminal?.write(welcomeMessage + '\r\n')
}
</script>

<template>
  <Window>
    <div ref="terminalContainer" class="xterm-container"></div>
  </Window>
</template>

<style scoped lang="scss">
.xterm-container {
  height: 100%;

}
:deep(.xterm) {
  height: 100%;

  .xterm-screen {
    padding: 8px;
  }
}
</style>