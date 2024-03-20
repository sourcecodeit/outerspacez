export const playerSchema = {
	version: 0,
	primaryKey: 'id',
	type: 'object',
	properties: {
		id: {
			type: 'string',
			maxLength: 100
		},
		nickname: {
			type: 'string'
		},
		faceIndex: {
			type: 'number',
			default: 0
		},
		shipIndex: {
			type: 'number',
			default: 0
		},
		moneyIdx: {
			type: 'number',
			default: 1000
		},
		stats: {
			type: 'object',
			properties: {
				pilot: 'number',
				engineer: 'number',
				trader: 'number',
				hacker: 'number'
			}
		}
	}
}