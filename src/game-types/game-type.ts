import type {Option} from "@/models/option-model";
import type {Component} from "vue";

export interface GameType {
    name: string,
    options: Option[],
    gameVariantImage: string,
    rulesImage: string,
    layout: Component
}