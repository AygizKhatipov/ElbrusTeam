


export type UserGroupType = {
    beginning: Date,
    ending: Date,
    userId: number,
    groupId: number,
    phaseId: number,
    statusId: number,
}


export type UserGroupWithoutId = Omit<UserGroupType, 'id'>