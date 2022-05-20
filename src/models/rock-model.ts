import { OptionTypes } from "./option-types";
import { Option } from "./option-model";
import RockImage from '@/assets/images/icon-rock.svg'

export class Rock extends Option {
    constructor() {
        super('Rock', RockImage, OptionTypes.ROCK, [OptionTypes.SCISSORS, OptionTypes.LIZARD])
    }
}