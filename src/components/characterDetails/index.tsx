'use client';

import { IRenderCharacterConfig, IRenderItemConfig, UnitSheet, IUnit, CharacterOverlay, PlayerAverages, } from "@dream-of-components/react";
import { IRoDPlayable, RoDUnpromotedClasses, RoDPromotedClasses } from "@rod/config";
import { useState } from "react";

export default function CharacterDetails({characterConfig, clear}: {
    characterConfig: IRenderCharacterConfig,
    clear: () => void
}) {
	const defaultView = 'test';
	const validViews = new Set('test');
	
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
			disablePercentageDisplay: true,
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
				<br />
				<p className="font-sm">{characterDef.recruitment}</p>
			  </div>
			}

		function renderContent(state: string) {
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

		function renderTabs(currentState: string, onTabSelect: (selectedState: string) => void) {
			return '';
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

