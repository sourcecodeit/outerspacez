<template>
	<div>
		<div class="border-t border-b border-slate-700 py-2">
			<ShipPageStats :agi="ship.agi" :hull="ship.hull" :cargo="ship.cargo" />
		</div>
		<div>

		</div>
	</div>

</template>
<script lang="ts" setup>
const g = useGame()
const ships = useShips()
const game = await g.loadJSON()

const ship = ships.value[game.player.shipIndex] as Ship
console.log(ship.weapon_slots)
</script>