import { addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { gameSchema, playerSchema } from '~/schemas';
addRxPlugin(RxDBDevModePlugin);

export default defineNuxtPlugin(async (nuxtApp) => {
	const db = await createRxDatabase({
		name: 'outerspacez',
		storage: getRxStorageDexie(),
		ignoreDuplicate: true
	});

	await db.addCollections({
		games: {
			schema: gameSchema
		},
		players: {
			schema: playerSchema
		}
	});

	return {
		provide: {
			db
		}
	}
})
