export class Option {
    name: string
    icon: string
    type: string
    winToTypes: string[]

    protected constructor(name:string, icon:string, type: string, winToTypes: string[]){
        this.name = name
        this.icon = icon
        this.type = type
        this.winToTypes = winToTypes
    }

    winsOver (option: Option) : boolean {
        return this.winToTypes.includes(option.type)
    }
}
