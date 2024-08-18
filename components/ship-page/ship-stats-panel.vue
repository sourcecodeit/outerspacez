<template>
	<div>
		<div class="border-t border-b border-slate-700 py-2">
			<ShipPageStats :agi="ship.agi" :hull="ship.hull" :cargo="ship.cargo" />
		</div>
		<img :src="`/ships/${game.player.shipIndex + 1}-min.png`" class="w-[80%] object-contain m-auto" />
	</div>
</template>
<script setup>
const g = useGame()
const ships = useShips()
const game = await g.loadJSON()

const ship = ships.value[game.player.shipIndex]
</script>