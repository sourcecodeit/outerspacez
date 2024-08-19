<template>
	<div>
		<div class="border-t border-b border-slate-700 py-2">
			<ShipPageStats :agi="ship.agi" :hull="ship.hull" :cargo="ship.cargo" />
		</div>
		<div>
			<h3 class="uppercase text-sm">Shields</h3>
			<div class="grid grid-cols-6 gap-2">
				<UiSlot v-for="n in ship.shield_slots" :key="n" :name="`Shield ${n}`" />
			</div>
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