import { IRoDPlayable } from "@rod/config"

export const Beth: IRoDPlayable = {
	name: 'Beth',
	displayName: 'Beth',
	artists: ['xvi'],
	class: 'Villager',
	//affinity: 'Dark',
	level: 1,
	description: 'Young and pragmatic villager looking for a way to move up in the world. Always taught to get her hands dirty if needed.',
	classDesc: 'The lance itself stood taller than her, but looking at her you\'d know she was liable to slay giants twice her height.',
	fullName: 'Bethelyn Tiller',
	pronouns: 'She/Her',
	height: '5\'1\"',
	age: 14,
	hobby: 'Eavesdropping',
	birthday: 'June 15',
	promotesTo: 'Starosta',
	promoDesc: 'Klaudia handed her the cuirass and shook her hand, and at long last her efforts had finally borne fruit.',
	recruitment: 'Parados - auto joins on Turn 1.',
	stats: {
		hp: 21,
		str: 2,
		int: 7,
		dex: 5,
		agi: 6,
		cha: 4,
		def: 5,
		res: 5,
		bld: 10
	},
	growths: {
		hp: 63,
		str: 49,
		int: 49,
		dex: 35,
		agi: 42,
		cha: 35,
		def: 42,
		res: 28
	}
}
