import { IRoDPlayable } from "@rod/config"

export const Emerson: IRoDPlayable = {
	name: 'Emerson',
	displayName: 'Emerson',
	artists: ['levin'],
	class: 'Bow Armor',
	//affinity: 'Light',
	level: 1,
	description: 'Wandering hedge knight currently working in Meraly. Their unusual armaments are a tribute to their martyred parents.',
	classDesc: 'Determined to prove them all wrong. For every enemy with an arrow-hole in the chest, their point is made better.',
	fullName: 'Wesley Emerson',
	pronouns: 'They/She/He',
	height: '5\'5\"',
	age: 21,
	hobby: 'No time for that.',
	birthday: 'September 4',
	promotesTo: 'Juggernaut',
	promoDesc: 'Proved them all wrong. Mastery of lances and bows turns them into an all-ranged solo enemy decimator.',
	recruitment: 'Parados - Auto joins on Turn 1.',
	stats: {
		hp: 25,
		str: 9,
		int: 0,
		dex: 6,
		agi: 3,
		cha: 6,
		def: 8,
		res: 7,
		bld: 18
	},
	growths: {
		hp: 63,
		str: 56,
		int: 14,
		dex: 42,
		agi: 14,
		cha: 28,
		def: 42,
		res: 42
	},
	ranks: {
		bow: 31
	}
}
