import { OptionTypes } from "./option-types";
import { Option } from "./option-model";
import LizardImage from '@/assets/images/icon-lizard.svg'

export class Lizard extends Option {
    constructor() {
        super('Lizard', LizardImage, OptionTypes.LIZARD, [OptionTypes.SPOCK, OptionTypes.PAPER])
    }
}