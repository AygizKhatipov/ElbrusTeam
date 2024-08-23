

export type GroupType = {
    id: number,
    team: number,
    start: Date,
    end: Date
}

export type GroupWithoutId = Omit<GroupType, 'id'>