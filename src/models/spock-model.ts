import { OptionTypes } from "./option-types";
import { Option } from "./option-model";
import SpockImage from '@/assets/images/icon-spock.svg'

export class Spock extends Option {
    constructor() {
        super('Scissors', SpockImage, OptionTypes.SPOCK, [OptionTypes.SCISSORS, OptionTypes.ROCK])
    }
}