'use client';

import { IRenderCharacterConfig, UnitSheet, IUnit} from "@dream-of-components/react";
import { RoDCharacterArray } from "@rod/config"
import { RoDRenderCharacter } from "@rod/config"
import { RoDArtistConfig } from "@rod/config"
import { useState } from "react";
import CharacterDetails from "@rod/components/characterDetails";

let characters: RoDRenderCharacter[];
let spritesheet: { [key: string]: IRenderItemConfig[] } = {};
let init = false;

export default function CharacterPage() {

	if(!init){
	  characters = RoDCharacterArray.map((character: IUnit) => new RoDRenderCharacter(character, {renderAll: true}));
	  spritesheet = {
			player: characters.map((character: RoDRenderCharacter) => {
			character.currentChapter = {chapter: Number.MAX_SAFE_INTEGER}; // this line will actually trigger the code to parse sh it
			return character.data; // this line gets the parsed 
		})
		};
	  init = true;
	}
	
	let activeCharacter: any; 

	const [characterPageState, updateCharacterPage] = useState({
			spritesheet,
			activeCharacter
		});

	const artistConfig = {};
	const expandedPortraits = new Map<string, boolean>();
	
	function toggleCharacter(name: string) {
		return () => { }
	};
	
	function onCharacterClick(characterData: any) {
		return () => {
                updateCharacterPage({ ...characterPageState, activeCharacter: characterData });
            }
	};
	
    function clearCharacter() {
        updateCharacterPage({ ...characterPageState, activeCharacter: undefined });
    }

	return <>
	{characterPageState.activeCharacter ? <CharacterDetails
            characterConfig={characterPageState.activeCharacter}
            clear={clearCharacter} /> : ''}
	<UnitSheet
			data={characterPageState.spritesheet}
			expansionState={expandedPortraits}
			toggleCharacter={toggleCharacter}
			getOnClick={onCharacterClick} 
			artistConfig={RoDArtistConfig} />
	</>
}