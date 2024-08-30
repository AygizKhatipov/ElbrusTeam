export type Roles={
    id: number,
    role: string

}
export type RolesWithoutId = Omit<Roles, 'id'>