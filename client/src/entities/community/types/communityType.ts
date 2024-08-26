
export type PesonalCommunityType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    isMember: boolean | null,
    roleId: number | null,
    Account: CommunityType | null
}
export type CommunityType = {
    idUser: number,
    photo: string | null,
    country: string | null,
    city: string | null,
    phone: string | null,
    about: string | null,
}




export type CommunityWithoutId = Omit<PesonalCommunityType, 'id'>