export interface IPokemon{
    id: number,
    name: string,
    types: ITypeA[] | undefined,
    sprites: ISprites
}

export interface ISprites{
    front_default: string
    back_default: string
}

export interface ITypeA{
    slot:number
    type: IType
}

export interface IType{
    name: string
}