import { OptionTypes } from "./option-types";
import { Option } from "./option-model";
import ScissorsImage from '@/assets/images/icon-scissors.svg'

export class Scissors extends Option {
    constructor() {
        super('Scissors', ScissorsImage, OptionTypes.SCISSORS, [OptionTypes.PAPER, OptionTypes.LIZARD])
    }
}