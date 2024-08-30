export type PesonalCommunityType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    isMember: boolean | null,
    roleId: number | null,
    DataBase: BaseDatesType | null
}

export type BaseDatesType = {
    id: number,
    title: string | null,
    description: string | null,
    article: string | null,
    pic: string | null,
    userId: number,
}
    

export type BaseDatesTypeWithoutId = Omit<BaseDatesType, 'id'>