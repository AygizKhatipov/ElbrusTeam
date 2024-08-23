export type pointType = { 
    id: number,
    point: number,
    userId: number
}


export type AccountType = {
    idUser: number,
    photo: string,
    country: string,
    city: string,
    phone: string,
    about: string,
    point:pointType[],
}


export type AccountWithoutId = Omit<AccountType, 'id'>