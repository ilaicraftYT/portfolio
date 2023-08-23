<script>
  import { isDark } from "$lib/themeStore"
  import "../app.css"
  import { onMount } from "svelte"
  
  onMount(() => {
    isDark.subscribe(value => {
      if(value == true || value == null && window.matchMedia("(prefers-color-scheme: dark)")){
        if (value == null) value.set(true)
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    })
  })
</script>

<main>
  <slot />
</main>