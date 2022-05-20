import RulesImage from '@/assets/images/image-rules.svg'
import LogoImage from '@/assets/images/logo.svg'
import ComponentLayout from '@/components/game-layouts/RockPaperScissorsLayout.vue';
import { Paper } from "@/models/paper-model";
import { Rock } from "@/models/rock-model";
import { Scissors } from "@/models/scissors-model";
import type {GameType} from "@/game-types/game-type";

const config: GameType = {
    name: 'RockPaperScissors',
    options: [
        new Rock(),
        new Paper(),
        new Scissors()
    ],
    gameVariantImage: LogoImage,
    rulesImage: RulesImage,
    layout: ComponentLayout
}

export default config