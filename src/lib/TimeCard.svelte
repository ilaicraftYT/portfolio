<script>
  export let data;
  import GridCard from "$lib/GridCard.svelte"
  
  const formatter = new Intl.DateTimeFormat("en-US", { timeZone: "America/Mexico_City", hour12: true, hour: "2-digit", minute: "2-digit" })
  let time = formatter.format(new Date())
  setInterval(() => {
    time = formatter.format(new Date())
  }, 1000)
</script>
<GridCard bento="{true}" color="bg-surface0" extraClasses="timecard text-text p-4">
  <img src="https://openweathermap.org/img/wn/{data?.weather[0].icon}@2x.png" class="absolute right-0" />
  <p class="font-medium">Xalapa, Veracruz MX</p>
  <p class="font-black text-l">{data?.main.temp.toFixed(0) + "°"} - {data?.weather[0].main}</p>
  <p class="font-light">{time}</p>
</GridCard>