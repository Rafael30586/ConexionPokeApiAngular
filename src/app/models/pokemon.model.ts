export interface IPokemon{
    id: number,
    name: string,
    types: TypeA[] | undefined,
    sprites: ISprites
}

export interface ISprites{
    front_default: string
    back_default: string
}

export interface TypeA{
    slot:number
    type: Type
}

export interface Type{
    name: string
}