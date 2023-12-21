'use client';

import { IRenderCharacterConfig, UnitSheet, IUnit} from "@dream-of-components/react";
import { RoDCharacterArray } from "@rod/config"
import { RoDRenderCharacter } from "@rod/config"
import { RoDArtistConfig } from "@rod/config"

export default function characterPage() {

	const characters = RoDCharacterArray.map((character: IUnit) => new RoDRenderCharacter(character, {renderAll: true}));
	const spritesheet = {
		player: characters.map((character: RoDRenderCharacter) => {
		character.currentChapter = {chapter: Number.MAX_SAFE_INTEGER}; // this line will actually trigger the code to parse sh it
		return character.data; // this line gets the parsed 
	})
	};

	const artistConfig = {};
	const expandedPortraits = new Map<string, boolean>();
	
	function toggleCharacter(name: string) {
		return () => { }
	};
	
	function onCharacterClick(characterData: any) {
		return () => {
		
		}
	};

	return <UnitSheet
        data={spritesheet}
		expansionState={expandedPortraits}
        toggleCharacter={toggleCharacter}
		getOnClick={onCharacterClick} 
        artistConfig={RoDArtistConfig} />;
}