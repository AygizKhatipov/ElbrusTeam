import { ChatType } from "../../../entities/Chat/types/chatType"
import { PesonalPageType } from "../../../entities/accout/types/accountType"
import { GroupType } from "../../../entities/group/types/groupType"
import { Roles } from "../../../entities/role/types/roleType"
import { UserGroupType } from "../../../entities/userGroup/types/userGroupType"

type InitialStateType = {
    role: Roles[],
    account: PesonalPageType,
    group: GroupType[],
    userGroup: UserGroupType[],
    chat: ChatType[],
    allAccounts: PesonalPageType[],
}

const initialAccount: PesonalPageType = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  isMember: null,
  roleId: null,
  Account: {
    idUser: 0,
    photo: null,
    country: null,
    city: null,
    phone: null,
    about: null,
    Points: [],
  },
};


export const initialState:InitialStateType ={
    role: [],
    account: initialAccount, 
    group: [],  
    userGroup: [],
    chat: [],
    allAccounts: [],
}