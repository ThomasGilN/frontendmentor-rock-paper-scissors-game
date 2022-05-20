import { OptionTypes } from "./option-types";
import { Option } from "./option-model";
import PaperImage from '@/assets/images/icon-paper.svg'

export class Paper extends Option {
    constructor() {
        super('Paper', PaperImage, OptionTypes.PAPER, [OptionTypes.ROCK, OptionTypes.SPOCK])
    }
}