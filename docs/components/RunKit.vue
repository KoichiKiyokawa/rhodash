<script setup>
import { ref, onMounted } from 'vue'

const runkitURL = 'https://embed.runkit.com'
const codeBlockContainer = ref(null)

onMounted(() => {
  if (document.querySelector(`script[src="${runkitURL}"]`)) {
    setupRunKit()
  } else {
    const script = Object.assign(document.createElement('script'), {
      src: runkitURL,
      onload: setupRunKit,
    })
    document.head.appendChild(script)
  }

  function setupRunKit() {
    const codeBlock = codeBlockContainer.value.querySelector('pre')
    const innerText = codeBlock.firstChild
    // cf) https://runkit.com/docs/embed
    window.RunKit.createNotebook({
      element: codeBlock,
      nodeVersion: '16.x.x',
      source: innerText.wholeText,
      onLoad: () => {
        innerText.remove()
        // To avoid showing the pre tag
        codeBlockContainer.value.style.opacity = 1
      },
    })
  }
})
</script>

<template>
  <div ref="codeBlockContainer" style="opacity: 0"><slot></slot></div>
</template>
