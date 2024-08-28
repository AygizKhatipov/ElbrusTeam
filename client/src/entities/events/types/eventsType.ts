export type PesonalCommunityType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    isMember: boolean | null,
    roleId: number | null,
    Events: EventsType | null
}

export type EventsType = {
    id: number,
    date: Date | string | null,
    title: string | null,
    description: string | null,
    pic: string | null,
    userId: number,
}
    

export type EventsTypeWithoutId = Omit<EventsType, 'id'>