'use client';

import { IRenderCharacterConfig, IRenderItemConfig, UnitSheet, IUnit, CharacterOverlay, PlayerAverages, } from "@dream-of-components/react";
import { IRoDPlayable, RoDUnpromotedClasses, RoDPromotedClasses, RoDRenderCharacter } from "@rod/config";
import { useState } from "react";
import CharacterProfile from "@rod/components/characterDetails"

enum CharacterDetailState {
    Stat = 'stat',
    ExtendedProfile = 'profile',
};

export default function CharacterDetails({characterConfig, clear}: {
    characterConfig: IRenderCharacterConfig,
    clear: () => void
}) {
	let defaultView = CharacterDetailState.Stat;
	const validViews = new Set<string>();
	validViews.add(CharacterDetailState.Stat);
	validViews.add(CharacterDetailState.ExtendedProfile)
	
	const characterDef: IRoDPlayable = characterConfig.unitData;

	const uiIcons = {
		dragDrop: () => 'drag',
		exit: () => 'x',
		removeBlossom: () => '-',
		addBlossom: (isAtLimit: boolean) => '+ Starlight'
	};
	
	const unitDisplayConfig = {
			enableBlossomDew: true,
			blossomCap: 1,
			blossomValue: 7,
			displayWeaponIcons: false,
            promotedClasses: RoDPromotedClasses,
            unpromotedClasses: RoDUnpromotedClasses,
			levelCap: 20,
			promotedLevelCap: 20,
			disableCapRowDisplay: true,
			totalWeaponTypes: ['sword', 'lance', 'axe', 'bow', 'staff', 'anima', 'light', 'dark'],
            uiIcons
        };
		
	const [widgetState, setWidgetState] = useState({showPromotedText: false});

	function getCurrentLevel(data:any) {
	  const {unpromotedLevel, promotedLevel, blossomEnabled} = data;
	  if(widgetState.showPromotedText !== promotedLevel > 0){
			setWidgetState({...widgetState, showPromotedText:promotedLevel > 0});
		}
	}

		function renderSideProfile() {
			  return <div>
			    <img src={characterDef.path} className="center"/>
				<p className="center"><u>{characterDef.displayName}</u></p>
				<p className="font-sm center"><em>{characterDef.description}</em></p>
				<hr />
				<p className="font-sm">{characterDef.recruitment}</p>
			  </div>
			}

		function renderContent(state: string) {
			switch(state) {
				case CharacterDetailState.ExtendedProfile:
					return <CharacterProfile characterDef={characterDef} />;
				case CharacterDetailState.Stat:
					return <div>
						<PlayerAverages
							characterDef={characterDef}
							config={unitDisplayConfig}
							onDataChange = {getCurrentLevel}
						/>
						{widgetState.showPromotedText? 
						  <>
							<p><u>{characterDef.promotesTo}</u></p>
							<p className="font-sm"><em>{characterDef.promoDesc}</em></p>
						  </> : <>
							<p><u>{characterDef.class}</u></p>
							<p className="font-sm"><em>{characterDef.classDesc}</em></p>
						  </>
						}
					  </div>		
			}
		}

		function renderTabs(currentState: string, onTabSelect: (selectedState: string) => void) {
			const getSectionTab = (state: CharacterDetailState, label: string) =>
				(<li>
					<button onClick={() => onTabSelect(state)}> {label}</button>
				</li>);
			const stats = getSectionTab(CharacterDetailState.Stat, 'Stats');
			const profile = getSectionTab(CharacterDetailState.ExtendedProfile, 'Profile');
			
			return <ul className='flex list-none gap-3'>
				{stats}
				{profile}
			</ul>;
		}
	return <CharacterOverlay
			clear={clear}
			renderContent={renderContent}
			renderTabs={renderTabs}
			renderSideProfile={renderSideProfile}
			initialState={defaultView!}
			validViews={validViews}
			uiIcons={uiIcons}
		/>
}

