export const gameSchema = {
	version: 0,
	primaryKey: 'id',
	type: 'object',
	properties: {
		id: {
			type: 'string',
			maxLength: 100
		},
		space: {
			type: 'object'
		},
		playerId: {
			type: 'number'
		}
	}
}