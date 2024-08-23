import { AccountType } from "../../../entities/accout/types/accountType"
import { GroupType } from "../../../entities/group/types/groupType"
import { RoleType } from "../../../entities/role/types/roleTypes"
import { UserGroupType } from "../../../entities/userGroup/types/userGroupType"

type InitialStateType = {
    role: RoleType[],
    account: AccountType[],
    group: GroupType[],
    userGroup: UserGroupType[],
}


export const initialState:InitialStateType ={
    role: [],
    account:[], 
    group: [],  
    userGroup: [],
}