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
