import { IRoDPlayable, RoDPromotedClasses } from "@rod/config"

export const Klaudia: IRoDPlayable = {
	name: 'Klaudia',
	displayName: 'Klaudia',
	artists: ['zerimagi'],
	class: 'Gremory',
	//affinity: 'Wind',
	level: 1,
	description: 'Heir apparent to House Ouahed: just, driven, and unwavering in her devotion to House Sarka\'s righteous cause.',
	classDesc: 'To be worthy of House Ouahed\'s magical legacy requires rigorous study of all such schools, bordering on the demonic.',
	fullName: 'Klaudia el-Ouahed',
	pronouns: 'She/Her',
	height: '6\'0\"',
	age: 21,
	hobby: 'Lighting fireworks',
	birthday: 'October 27',
	promotesTo: 'High Gremory',
	promoDesc: 'The high magister of House Ouahed is a beacon of justice, swift to deliver with mastery of lances and all magic.',
	recruitment: 'Parados - Auto joins on Turn 1.',
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
	},
	ranks: {
		anima: 31,
		light: 31,
		dark: 31
	}
}
