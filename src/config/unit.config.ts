import { RenderCharacter } from "@dream-of-components/react"
import { IUnit } from "@dream-of-components/react"
import { Klaudia, Zero, Josephine, Emerson, Beth } from "@rod/config/playables"

export interface IRoDPlayable extends IUnit {
	description: string,
	affinity?: string,
	classDesc: string,
	fullName?: string,
	pronouns?: string,
	age?: number | string,
	hobby: string,
	birthday: string,
	promo: string,
	promoDesc: string,
}

export class RoDRenderCharacter extends RenderCharacter {
	constructor(private rodCharacter: IUnit, private rules: any) {
		const getPath = (name: string) => {
			return `/mugs/${name}_trim.png`;
		}
		super(rodCharacter, getPath, rules);
	}
}

export const RoDPlayables: IRoDPlayable[] = [
	Klaudia,
	Zero,
	Josephine,
	Emerson,
	Beth,
];

export const RoDCharacterArray: IUnit[] = [
	...RoDPlayables,
];