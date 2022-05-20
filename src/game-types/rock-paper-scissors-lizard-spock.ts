import RulesImage from '@/assets/images/image-rules-bonus.svg'
import LogoImage from '@/assets/images/logo-bonus.svg'
import ComponentLayout from '@/components/game-layouts/RockPaperScissorsLizardSpockLayout.vue';
import { Paper } from "@/models/paper-model";
import { Rock } from "@/models/rock-model";
import { Scissors } from "@/models/scissors-model";
import {Lizard} from "@/models/lizard-model";
import {Spock} from "@/models/spock-model";
import type {GameType} from "@/game-types/game-type";

const config: GameType = {
    name: 'RockPaperScissorsLizardSpock',
    options: [
        new Rock(),
        new Paper(),
        new Scissors(),
        new Lizard(),
        new Spock()
    ],
    gameVariantImage: LogoImage,
    rulesImage: RulesImage,
    layout: ComponentLayout
}

export default config