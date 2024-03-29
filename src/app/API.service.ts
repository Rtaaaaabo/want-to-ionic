/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCompanyInput = {
  id?: string | null;
  name: string;
  officer: Array<OfficerInput | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: S3ObjectInput | null;
  billing?: boolean | null;
};

export type OfficerInput = {
  officerEmail: string;
  officerName: string;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  isRegistered?: ModelBooleanInput | null;
  otp?: ModelStringInput | null;
  tel?: ModelStringInput | null;
  officialEmail?: ModelStringInput | null;
  billing?: ModelBooleanInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<Officer | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: S3Object | null;
  billing?: boolean | null;
  room?: ModelRoomConnection | null;
  companyMembers?: ModelUserConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Officer = {
  __typename: "Officer";
  officerEmail: string;
  officerName: string;
};

export type S3Object = {
  __typename: "S3Object";
  bucket: string;
  region: string;
  key: string;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items?: Array<Room | null> | null;
  nextToken?: string | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: Company;
  tasks?: ModelTaskConnection | null;
  users?: ModelRoomGroupConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection";
  items?: Array<Task | null> | null;
  nextToken?: string | null;
};

export type Task = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: Room;
  description?: string | null;
  iconTask?: S3Object | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: User;
  messages?: ModelMessageConnection | null;
  users?: ModelTaskGroupConnection | null;
  updatedAt: string;
};

export type User = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: S3Object | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: Company;
  messages?: ModelMessageConnection | null;
  room?: ModelRoomGroupConnection | null;
  task?: ModelTaskGroupConnection | null;
  chargeTask?: ModelTaskConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items?: Array<Message | null> | null;
  nextToken?: string | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<S3Object | null> | null;
  author: User;
  task: Task;
  updatedAt: string;
  owner?: string | null;
};

export type ModelRoomGroupConnection = {
  __typename: "ModelRoomGroupConnection";
  items?: Array<RoomGroup | null> | null;
  nextToken?: string | null;
};

export type RoomGroup = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: Room | null;
  user?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelTaskGroupConnection = {
  __typename: "ModelTaskGroupConnection";
  items?: Array<TaskGroup | null> | null;
  nextToken?: string | null;
};

export type TaskGroup = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: Task | null;
  user?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  officer?: Array<OfficerInput | null> | null;
  isRegistered?: boolean | null;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: S3ObjectInput | null;
  billing?: boolean | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateTaskGroupInput = {
  id?: string | null;
  taskID: string;
  userID: string;
};

export type ModelTaskGroupConditionInput = {
  taskID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelTaskGroupConditionInput | null> | null;
  or?: Array<ModelTaskGroupConditionInput | null> | null;
  not?: ModelTaskGroupConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateTaskGroupInput = {
  id: string;
  taskID?: string | null;
  userID?: string | null;
};

export type DeleteTaskGroupInput = {
  id: string;
};

export type CreateTaskInput = {
  id?: string | null;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  description?: string | null;
  iconTask?: S3ObjectInput | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
};

export type ModelTaskConditionInput = {
  authorID?: ModelIDInput | null;
  roomID?: ModelIDInput | null;
  chargePersonID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  scheduleDate?: ModelStringInput | null;
  priority?: ModelIntInput | null;
  status?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateTaskInput = {
  id: string;
  authorID?: string | null;
  roomID?: string | null;
  chargePersonID?: string | null;
  title?: string | null;
  description?: string | null;
  iconTask?: S3ObjectInput | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
};

export type DeleteTaskInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: S3ObjectInput | null;
  registered?: boolean | null;
  authority?: boolean | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  tel?: ModelStringInput | null;
  positionName?: ModelStringInput | null;
  registered?: ModelBooleanInput | null;
  authority?: ModelBooleanInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  email?: string | null;
  companyID?: string | null;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: S3ObjectInput | null;
  registered?: boolean | null;
  authority?: boolean | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateRoomGroupInput = {
  id?: string | null;
  roomID: string;
  userID: string;
};

export type ModelRoomGroupConditionInput = {
  roomID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelRoomGroupConditionInput | null> | null;
  or?: Array<ModelRoomGroupConditionInput | null> | null;
  not?: ModelRoomGroupConditionInput | null;
};

export type UpdateRoomGroupInput = {
  id: string;
  roomID?: string | null;
  userID?: string | null;
};

export type DeleteRoomGroupInput = {
  id: string;
};

export type CreateRoomInput = {
  id?: string | null;
  name: string;
  companyID: string;
  description: string;
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type UpdateRoomInput = {
  id: string;
  name?: string | null;
  companyID?: string | null;
  description?: string | null;
};

export type DeleteRoomInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  taskID: string;
  authorID: string;
  content: string;
  createdAt?: string | null;
  isSent?: boolean | null;
  attachment?: Array<S3ObjectInput | null> | null;
};

export type ModelMessageConditionInput = {
  taskID?: ModelIDInput | null;
  authorID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  isSent?: ModelBooleanInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  taskID?: string | null;
  authorID?: string | null;
  content?: string | null;
  createdAt?: string | null;
  isSent?: boolean | null;
  attachment?: Array<S3ObjectInput | null> | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  isRegistered?: ModelBooleanInput | null;
  otp?: ModelStringInput | null;
  tel?: ModelStringInput | null;
  officialEmail?: ModelStringInput | null;
  billing?: ModelBooleanInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items?: Array<Company | null> | null;
  nextToken?: string | null;
};

export type ModelTaskGroupFilterInput = {
  id?: ModelIDInput | null;
  taskID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelTaskGroupFilterInput | null> | null;
  or?: Array<ModelTaskGroupFilterInput | null> | null;
  not?: ModelTaskGroupFilterInput | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  authorID?: ModelIDInput | null;
  roomID?: ModelIDInput | null;
  chargePersonID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  scheduleDate?: ModelStringInput | null;
  priority?: ModelIntInput | null;
  status?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  tel?: ModelStringInput | null;
  positionName?: ModelStringInput | null;
  registered?: ModelBooleanInput | null;
  authority?: ModelBooleanInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelRoomGroupFilterInput = {
  id?: ModelIDInput | null;
  roomID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelRoomGroupFilterInput | null> | null;
  or?: Array<ModelRoomGroupFilterInput | null> | null;
  not?: ModelRoomGroupFilterInput | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  taskID?: ModelIDInput | null;
  authorID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  isSent?: ModelBooleanInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateTaskGroupMutation = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskGroupMutation = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskGroupMutation = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomGroupMutation = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomGroupMutation = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomGroupMutation = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items?: Array<{
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTaskGroupQuery = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTaskGroupsQuery = {
  __typename: "ModelTaskGroupConnection";
  items?: Array<{
    __typename: "TaskGroup";
    id: string;
    taskID: string;
    userID: string;
    task?: {
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items?: Array<{
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetRoomGroupQuery = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomGroupsQuery = {
  __typename: "ModelRoomGroupConnection";
  items?: Array<{
    __typename: "RoomGroup";
    id: string;
    roomID: string;
    userID: string;
    room?: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    user?: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items?: Array<{
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items?: Array<{
    __typename: "Message";
    id: string;
    taskID: string;
    authorID: string;
    content: string;
    createdAt: string;
    isSent?: boolean | null;
    attachment?: Array<{
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null> | null;
    author: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    task: {
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    };
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type TaskByCreatedAtQuery = {
  __typename: "ModelMessageConnection";
  items?: Array<{
    __typename: "Message";
    id: string;
    taskID: string;
    authorID: string;
    content: string;
    createdAt: string;
    isSent?: boolean | null;
    attachment?: Array<{
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null> | null;
    author: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    task: {
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    };
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  officer: Array<{
    __typename: "Officer";
    officerEmail: string;
    officerName: string;
  } | null>;
  isRegistered: boolean;
  otp?: string | null;
  tel?: string | null;
  officialEmail?: string | null;
  iconCompany?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  billing?: boolean | null;
  room?: {
    __typename: "ModelRoomConnection";
    items?: Array<{
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  companyMembers?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateTaskGroupSubscription = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskGroupSubscription = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskGroupSubscription = {
  __typename: "TaskGroup";
  id: string;
  taskID: string;
  userID: string;
  task?: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  chargePersonID: string;
  title: string;
  room: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  description?: string | null;
  iconTask?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
  chargePerson: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username?: string | null;
  email: string;
  companyID: string;
  tel?: string | null;
  positionName?: string | null;
  iconImage?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  registered?: boolean | null;
  authority?: boolean | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  messages?: {
    __typename: "ModelMessageConnection";
    items?: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      authorID: string;
      content: string;
      createdAt: string;
      isSent?: boolean | null;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  room?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  task?: {
    __typename: "ModelTaskGroupConnection";
    items?: Array<{
      __typename: "TaskGroup";
      id: string;
      taskID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  chargeTask?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomGroupSubscription = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomGroupSubscription = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomGroupSubscription = {
  __typename: "RoomGroup";
  id: string;
  roomID: string;
  userID: string;
  room?: {
    __typename: "Room";
    id: string;
    name: string;
    companyID: string;
    description: string;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tasks?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user?: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  name: string;
  companyID: string;
  description: string;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    officer: Array<{
      __typename: "Officer";
      officerEmail: string;
      officerName: string;
    } | null>;
    isRegistered: boolean;
    otp?: string | null;
    tel?: string | null;
    officialEmail?: string | null;
    iconCompany?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    billing?: boolean | null;
    room?: {
      __typename: "ModelRoomConnection";
      nextToken?: string | null;
    } | null;
    companyMembers?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  tasks?: {
    __typename: "ModelTaskConnection";
    items?: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      chargePersonID: string;
      title: string;
      description?: string | null;
      scheduleDate?: string | null;
      priority?: number | null;
      status?: number | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  users?: {
    __typename: "ModelRoomGroupConnection";
    items?: Array<{
      __typename: "RoomGroup";
      id: string;
      roomID: string;
      userID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  taskID: string;
  authorID: string;
  content: string;
  createdAt: string;
  isSent?: boolean | null;
  attachment?: Array<{
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null> | null;
  author: {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    registered?: boolean | null;
    authority?: boolean | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      isRegistered: boolean;
      otp?: string | null;
      tel?: string | null;
      officialEmail?: string | null;
      billing?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    room?: {
      __typename: "ModelRoomGroupConnection";
      nextToken?: string | null;
    } | null;
    task?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    chargeTask?: {
      __typename: "ModelTaskConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
      __typename: "Room";
      id: string;
      name: string;
      companyID: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
      __typename: "User";
      id: string;
      username?: string | null;
      email: string;
      companyID: string;
      tel?: string | null;
      positionName?: string | null;
      registered?: boolean | null;
      authority?: boolean | null;
      createdAt: string;
      updatedAt: string;
    };
    messages?: {
      __typename: "ModelMessageConnection";
      nextToken?: string | null;
    } | null;
    users?: {
      __typename: "ModelTaskGroupConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateTaskGroup(
    input: CreateTaskGroupInput,
    condition?: ModelTaskGroupConditionInput
  ): Promise<CreateTaskGroupMutation> {
    const statement = `mutation CreateTaskGroup($input: CreateTaskGroupInput!, $condition: ModelTaskGroupConditionInput) {
        createTaskGroup(input: $input, condition: $condition) {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskGroupMutation>response.data.createTaskGroup;
  }
  async UpdateTaskGroup(
    input: UpdateTaskGroupInput,
    condition?: ModelTaskGroupConditionInput
  ): Promise<UpdateTaskGroupMutation> {
    const statement = `mutation UpdateTaskGroup($input: UpdateTaskGroupInput!, $condition: ModelTaskGroupConditionInput) {
        updateTaskGroup(input: $input, condition: $condition) {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskGroupMutation>response.data.updateTaskGroup;
  }
  async DeleteTaskGroup(
    input: DeleteTaskGroupInput,
    condition?: ModelTaskGroupConditionInput
  ): Promise<DeleteTaskGroupMutation> {
    const statement = `mutation DeleteTaskGroup($input: DeleteTaskGroupInput!, $condition: ModelTaskGroupConditionInput) {
        deleteTaskGroup(input: $input, condition: $condition) {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskGroupMutation>response.data.deleteTaskGroup;
  }
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateRoomGroup(
    input: CreateRoomGroupInput,
    condition?: ModelRoomGroupConditionInput
  ): Promise<CreateRoomGroupMutation> {
    const statement = `mutation CreateRoomGroup($input: CreateRoomGroupInput!, $condition: ModelRoomGroupConditionInput) {
        createRoomGroup(input: $input, condition: $condition) {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomGroupMutation>response.data.createRoomGroup;
  }
  async UpdateRoomGroup(
    input: UpdateRoomGroupInput,
    condition?: ModelRoomGroupConditionInput
  ): Promise<UpdateRoomGroupMutation> {
    const statement = `mutation UpdateRoomGroup($input: UpdateRoomGroupInput!, $condition: ModelRoomGroupConditionInput) {
        updateRoomGroup(input: $input, condition: $condition) {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomGroupMutation>response.data.updateRoomGroup;
  }
  async DeleteRoomGroup(
    input: DeleteRoomGroupInput,
    condition?: ModelRoomGroupConditionInput
  ): Promise<DeleteRoomGroupMutation> {
    const statement = `mutation DeleteRoomGroup($input: DeleteRoomGroupInput!, $condition: ModelRoomGroupConditionInput) {
        deleteRoomGroup(input: $input, condition: $condition) {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomGroupMutation>response.data.deleteRoomGroup;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanys(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompanysQuery> {
    const statement = `query ListCompanys($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanysQuery>response.data.listCompanys;
  }
  async GetTaskGroup(id: string): Promise<GetTaskGroupQuery> {
    const statement = `query GetTaskGroup($id: ID!) {
        getTaskGroup(id: $id) {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskGroupQuery>response.data.getTaskGroup;
  }
  async ListTaskGroups(
    filter?: ModelTaskGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTaskGroupsQuery> {
    const statement = `query ListTaskGroups($filter: ModelTaskGroupFilterInput, $limit: Int, $nextToken: String) {
        listTaskGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            taskID
            userID
            task {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTaskGroupsQuery>response.data.listTaskGroups;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetRoomGroup(id: string): Promise<GetRoomGroupQuery> {
    const statement = `query GetRoomGroup($id: ID!) {
        getRoomGroup(id: $id) {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomGroupQuery>response.data.getRoomGroup;
  }
  async ListRoomGroups(
    filter?: ModelRoomGroupFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomGroupsQuery> {
    const statement = `query ListRoomGroups($filter: ModelRoomGroupFilterInput, $limit: Int, $nextToken: String) {
        listRoomGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            roomID
            userID
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomGroupsQuery>response.data.listRoomGroups;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            taskID
            authorID
            content
            createdAt
            isSent
            attachment {
              __typename
              bucket
              region
              key
            }
            author {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            task {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async TaskByCreatedAt(
    taskID?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<TaskByCreatedAtQuery> {
    const statement = `query TaskByCreatedAt($taskID: ID, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        taskByCreatedAt(taskID: $taskID, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            taskID
            authorID
            content
            createdAt
            isSent
            attachment {
              __typename
              bucket
              region
              key
            }
            author {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            task {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (taskID) {
      gqlAPIServiceArguments.taskID = taskID;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <TaskByCreatedAtQuery>response.data.taskByCreatedAt;
  }
  OnCreateCompanyListener: Observable<
    SubscriptionResponse<OnCreateCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCompanySubscription>>;

  OnUpdateCompanyListener: Observable<
    SubscriptionResponse<OnUpdateCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCompanySubscription>>;

  OnDeleteCompanyListener: Observable<
    SubscriptionResponse<OnDeleteCompanySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          officer {
            __typename
            officerEmail
            officerName
          }
          isRegistered
          otp
          tel
          officialEmail
          iconCompany {
            __typename
            bucket
            region
            key
          }
          billing
          room {
            __typename
            items {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          companyMembers {
            __typename
            items {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCompanySubscription>>;

  OnCreateTaskGroupListener: Observable<
    SubscriptionResponse<OnCreateTaskGroupSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTaskGroup {
        onCreateTaskGroup {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskGroupSubscription>>;

  OnUpdateTaskGroupListener: Observable<
    SubscriptionResponse<OnUpdateTaskGroupSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTaskGroup {
        onUpdateTaskGroup {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskGroupSubscription>>;

  OnDeleteTaskGroupListener: Observable<
    SubscriptionResponse<OnDeleteTaskGroupSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTaskGroup {
        onDeleteTaskGroup {
          __typename
          id
          taskID
          userID
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskGroupSubscription>>;

  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          authorID
          roomID
          chargePersonID
          title
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          description
          iconTask {
            __typename
            bucket
            region
            key
          }
          scheduleDate
          priority
          status
          createdAt
          chargePerson {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          email
          companyID
          tel
          positionName
          iconImage {
            __typename
            bucket
            region
            key
          }
          registered
          authority
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          messages {
            __typename
            items {
              __typename
              id
              taskID
              authorID
              content
              createdAt
              isSent
              updatedAt
              owner
            }
            nextToken
          }
          room {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          task {
            __typename
            items {
              __typename
              id
              taskID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          chargeTask {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateRoomGroupListener: Observable<
    SubscriptionResponse<OnCreateRoomGroupSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoomGroup {
        onCreateRoomGroup {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateRoomGroupSubscription>>;

  OnUpdateRoomGroupListener: Observable<
    SubscriptionResponse<OnUpdateRoomGroupSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoomGroup {
        onUpdateRoomGroup {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateRoomGroupSubscription>>;

  OnDeleteRoomGroupListener: Observable<
    SubscriptionResponse<OnDeleteRoomGroupSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoomGroup {
        onDeleteRoomGroup {
          __typename
          id
          roomID
          userID
          room {
            __typename
            id
            name
            companyID
            description
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            tasks {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteRoomGroupSubscription>>;

  OnCreateRoomListener: Observable<
    SubscriptionResponse<OnCreateRoomSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateRoomSubscription>>;

  OnUpdateRoomListener: Observable<
    SubscriptionResponse<OnUpdateRoomSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateRoomSubscription>>;

  OnDeleteRoomListener: Observable<
    SubscriptionResponse<OnDeleteRoomSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          name
          companyID
          description
          company {
            __typename
            id
            name
            officer {
              __typename
              officerEmail
              officerName
            }
            isRegistered
            otp
            tel
            officialEmail
            iconCompany {
              __typename
              bucket
              region
              key
            }
            billing
            room {
              __typename
              nextToken
            }
            companyMembers {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            owner
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
              chargePersonID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          users {
            __typename
            items {
              __typename
              id
              roomID
              userID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteRoomSubscription>>;

  OnCreateMessageListener: Observable<
    SubscriptionResponse<OnCreateMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateMessageSubscription>>;

  OnUpdateMessageListener: Observable<
    SubscriptionResponse<OnUpdateMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateMessageSubscription>>;

  OnDeleteMessageListener: Observable<
    SubscriptionResponse<OnDeleteMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          taskID
          authorID
          content
          createdAt
          isSent
          attachment {
            __typename
            bucket
            region
            key
          }
          author {
            __typename
            id
            username
            email
            companyID
            tel
            positionName
            iconImage {
              __typename
              bucket
              region
              key
            }
            registered
            authority
            company {
              __typename
              id
              name
              isRegistered
              otp
              tel
              officialEmail
              billing
              createdAt
              updatedAt
              owner
            }
            messages {
              __typename
              nextToken
            }
            room {
              __typename
              nextToken
            }
            task {
              __typename
              nextToken
            }
            chargeTask {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          task {
            __typename
            id
            authorID
            roomID
            chargePersonID
            title
            room {
              __typename
              id
              name
              companyID
              description
              createdAt
              updatedAt
            }
            description
            iconTask {
              __typename
              bucket
              region
              key
            }
            scheduleDate
            priority
            status
            createdAt
            chargePerson {
              __typename
              id
              username
              email
              companyID
              tel
              positionName
              registered
              authority
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            users {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteMessageSubscription>>;
}
