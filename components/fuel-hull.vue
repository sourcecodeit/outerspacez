<template>
	<div class="grid grid-cols-2 px-3">

		<div class="text-left">
			<h3 class="text-xs">Fuel supply</h3>
			{{ fuelPercentage }}%

			<div class="flex">
				<span class="text-cyan-500 -ml-1" v-for="n in fuelBars" :key="n">
					<SvgoStatusBar />
				</span>

				<span class="text-slate-500 -ml-1 opacity-30" v-for="n in (10 - fuelBars)                  " :key="n">
					<SvgoStatusBar />
				</span>
			</div>
		</div>

		<div class="text-right">
			<h3 class="text-xs">Hull</h3>
			{{ hullPercentage }}%
			<div class="flex justify-end">
				<span class="text-cyan-500 -ml-1" v-for="n in hullBars" :key="n">
					<SvgoStatusBar />
				</span>

				<span class="text-slate-500 -ml-1 opacity-30" v-for="n in (10 - hullBars) " :key="n">
					<SvgoStatusBar />
				</span>
			</div>
		</div>

	</div>
</template>
<script setup>
const g = useGame()
const ships = useShips()
const game = await g.loadJSON()

const ship = ships.value[game.player.shipIndex]

const fuelPercentage = computed(() => {
	return Math.ceil(game.player.spaceship.fuel / ship.fuel_max * 100)
})

const fuelBars = computed(() => {
	return Math.ceil(fuelPercentage.value / 10)
})

const hullPercentage = computed(() => {
	return Math.ceil(game.player.spaceship.hull / ship.hull * 100)
})

const hullBars = computed(() => {
	return Math.ceil(hullPercentage.value / 10)
})
</script>