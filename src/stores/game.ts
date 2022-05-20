import {defineStore} from "pinia";
import type {GameType} from "@/game-types/game-type";

export const useGameStore = defineStore({
    id: 'gameStore',
    state: (): {
        config: null | GameType
    } => ({
        config: null
    }),
    actions: {
        setGameConfig(config: GameType){
            this.config = config
        }
    }
})