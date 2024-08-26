export type pointType = { 
    id: number | null,
    point: number | null,
    userId: number | null
}


export type AccountType = {
    idUser: number,
    photo: string | null,
    country: string | null,
    city: string | null,
    phone: string | null,
    about: string | null,
    Points: pointType[],
}

export type PesonalPageType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    isMember: boolean | null,
    roleId: number | null,
    Account: AccountType | null
}


export interface UpdateAccountType {
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    city: string,
    phone: string,
    about: string
}