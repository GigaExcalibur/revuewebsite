import { IRenderCharacterConfig, IRenderItemConfig, UnitSheet, IUnit, CharacterOverlay} from "@dream-of-components/react";
import { IRoDPlayable } from "@rod/config";

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
		addBlossom: (isAtLimit: boolean) => '+'
	};

		function renderSideProfile() {
			  return <div>
			    <img src={characterDef.path} />
				<p>{characterDef.displayName}</p>
				<p className="font-sm">{characterDef.description}</p>
			  </div>
			}

		function renderContent(state: string) {
			return <div>
				<p>{characterDef.class}</p>
				<p className="font-sm">{characterDef.classDesc}</p>
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

