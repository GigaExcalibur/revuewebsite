const unpromotedcaps = {hp: 60, str: 20, int: 20, dex: 20, agi: 20, cha: 20, def: 20, res: 20, bld: 20};
const promotedcaps = {hp: 60, str: 30, int: 30, dex: 30, agi: 30, cha: 30, def: 30, res: 30, bld: 20};

export const RoDUnpromotedClasses: { [key: string]: any } = {
	Gremory: {
		caps: unpromotedcaps,
		weapons: {
			anima: 1,
			light: 1,
			dark: 1
		}
	},
	
	'Mage Armor': {
		caps: unpromotedcaps,
		weapons: {
			light: 31
		}
	},
	
	'Bow Armor': {
		caps: unpromotedcaps,
		weapons: {
			bow: 31
		}		
	},
	
	'Villager': {
		caps: unpromotedcaps,
		weapons: {
			lance: 1
		}	
	}
}

export const RoDPromotedClasses: { [key: string]: any } = {
	'High Gremory': {
		caps: promotedcaps,
		promo: {
			hp: 2,
			str: 2,
			int: 2,
			dex: 2,
			agi: 2,
			cha: 0,
			def: 2,
			res: 2,
			bld: 2,
			mov: 0
		},
		weapons: {
			lance: 71,
			anima: 71,
			light: 71,
			dark: 71
		}
	},
	
	'Runelord': {
		caps: promotedcaps,
		promo: {
			hp: 0,
			str: 0,
			int: 0,
			dex: 0,
			agi: 0,
			cha: 0,
			def: 0,
			res: 0,
			bld: 0,
			mov: 0
		},
		weapons: {
			sword: 131,
			dark: 71
		}
	},
	
	'Thaumachine': {
		caps: promotedcaps,
		promo: {
			hp: 0,
			str: 0,
			int: 0,
			dex: 0,
			agi: 0,
			cha: 0,
			def: 0,
			res: 0,
			bld: 0,
			mov: 0
		},
		weapons: {
			anima: 71,
			light: 71,
			dark: 71
		}	
	},
	
	'Starosta': {
		caps: promotedcaps,
		promo: {
			hp: 0,
			str: 0,
			int: 0,
			dex: 0,
			agi: 0,
			cha: 0,
			def: 0,
			res: 0,
			bld: 0,
			mov: 0
		},
		weapons: {
			sword: 71,
			lance: 71,
			axe: 71
		}		
	},
	
	Juggernaut: {
		caps: promotedcaps,
		promo: {
			hp: 0,
			str: 0,
			int: 0,
			dex: 0,
			agi: 0,
			cha: 0,
			def: 0,
			res: 0,
			bld: 0,
			mov: 0
		},
		weapons: {
			sword: 71,
			bow: 71
		}			
	},
}