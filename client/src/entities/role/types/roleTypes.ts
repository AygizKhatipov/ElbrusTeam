

export type RoleType = {
    id: number,
    role: string
}

export type RoleTypeWithoutId = Omit<RoleType, 'id'>