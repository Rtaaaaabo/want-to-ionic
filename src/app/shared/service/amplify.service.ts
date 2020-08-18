/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateCompanyInput = {
  id?: string | null;
  name: string;
  domain: string;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  domain?: ModelStringInput | null;
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

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  domain?: string | null;
};

export type DeleteCompanyInput = {
  id?: string | null;
};

export type CreateRoomInput = {
  id?: string | null;
  companyID: string;
  name: string;
  description: string;
};

export type ModelRoomConditionInput = {
  companyID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
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

export type UpdateRoomInput = {
  id: string;
  companyID?: string | null;
  name?: string | null;
  description?: string | null;
};

export type DeleteRoomInput = {
  id?: string | null;
};

export type CreateTaskInput = {
  id?: string | null;
  authorID: string;
  roomID: string;
  title: string;
  description?: string | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
};

export type ModelTaskConditionInput = {
  authorID?: ModelIDInput | null;
  roomID?: ModelIDInput | null;
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
  title?: string | null;
  description?: string | null;
  scheduleDate?: string | null;
  priority?: number | null;
  status?: number | null;
  createdAt?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  taskID: string;
  content: string;
  createdAt?: string | null;
  isSent?: boolean | null;
};

export type ModelMessageConditionInput = {
  taskID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  isSent?: ModelBooleanInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateMessageInput = {
  id: string;
  taskID?: string | null;
  content?: string | null;
  createdAt?: string | null;
  isSent?: boolean | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  email: string;
  companyID: string;
  username: string;
  registered?: boolean | null;
  authority?: string | null;
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  username?: ModelStringInput | null;
  registered?: ModelBooleanInput | null;
  authority?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  companyID?: string | null;
  username?: string | null;
  registered?: boolean | null;
  authority?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  domain?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  authorID?: ModelIDInput | null;
  roomID?: ModelIDInput | null;
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

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  taskID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  isSent?: ModelBooleanInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  username?: ModelStringInput | null;
  registered?: ModelBooleanInput | null;
  authority?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items: Array<{
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    taskID: string;
    author: {
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    content: string;
    createdAt: string | null;
    isSent: boolean | null;
    task: {
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    };
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name: string;
  domain: string;
  room: {
    __typename: "ModelRoomConnection";
    items: Array<{
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  members: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  companyID: string;
  name: string;
  description: string;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  tasks: {
    __typename: "ModelTaskConnection";
    items: Array<{
      __typename: "Task";
      id: string;
      authorID: string;
      roomID: string;
      title: string;
      description: string | null;
      scheduleDate: string | null;
      priority: number | null;
      status: number | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  authorID: string;
  roomID: string;
  title: string;
  description: string | null;
  scheduleDate: string | null;
  priority: number | null;
  status: number | null;
  createdAt: string | null;
  members: Array<{
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  room: {
    __typename: "Room";
    id: string;
    companyID: string;
    name: string;
    description: string;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    tasks: {
      __typename: "ModelTaskConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      taskID: string;
      content: string;
      createdAt: string | null;
      isSent: boolean | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  taskID: string;
  author: {
    __typename: "User";
    id: string;
    email: string;
    companyID: string;
    username: string;
    registered: boolean | null;
    authority: string | null;
    company: {
      __typename: "Company";
      id: string;
      name: string;
      domain: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  isSent: boolean | null;
  task: {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    members: Array<{
      __typename: "User";
      id: string;
      email: string;
      companyID: string;
      username: string;
      registered: boolean | null;
      authority: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    room: {
      __typename: "Room";
      id: string;
      companyID: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    updatedAt: string;
  };
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  companyID: string;
  username: string;
  registered: boolean | null;
  authority: string | null;
  company: {
    __typename: "Company";
    id: string;
    name: string;
    domain: string;
    room: {
      __typename: "ModelRoomConnection";
      nextToken: string | null;
    } | null;
    members: {
      __typename: "ModelUserConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class AmplifyService {
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          companyID
          name
          description
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
          companyID
          name
          description
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
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
          companyID
          name
          description
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
          title
          description
          scheduleDate
          priority
          status
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
          title
          description
          scheduleDate
          priority
          status
          createdAt
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          room {
            __typename
            id
            companyID
            name
            description
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            tasks {
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
              content
              createdAt
              isSent
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
          title
          description
          scheduleDate
          priority
          status
          createdAt
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          room {
            __typename
            id
            companyID
            name
            description
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            tasks {
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
              content
              createdAt
              isSent
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
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          taskID
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
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
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
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
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
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
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
            domain
            room {
              __typename
              nextToken
            }
            members {
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
    return <ListCompanysQuery>response.data.listCompanys;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          companyID
          name
          description
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
            companyID
            name
            description
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
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          authorID
          roomID
          title
          description
          scheduleDate
          priority
          status
          createdAt
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          room {
            __typename
            id
            companyID
            name
            description
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            tasks {
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
              content
              createdAt
              isSent
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
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          taskID
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
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
            author {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            content
            createdAt
            isSent
            task {
              __typename
              id
              authorID
              roomID
              title
              description
              scheduleDate
              priority
              status
              createdAt
              updatedAt
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
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
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
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateCompanyListener: Observable<
    OnCreateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
  ) as Observable<OnCreateCompanySubscription>;

  OnUpdateCompanyListener: Observable<
    OnUpdateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
  ) as Observable<OnUpdateCompanySubscription>;

  OnDeleteCompanyListener: Observable<
    OnDeleteCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          domain
          room {
            __typename
            items {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          members {
            __typename
            items {
              __typename
              id
              email
              companyID
              username
              registered
              authority
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
  ) as Observable<OnDeleteCompanySubscription>;

  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          companyID
          name
          description
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
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
  ) as Observable<OnCreateRoomSubscription>;

  OnUpdateRoomListener: Observable<OnUpdateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          companyID
          name
          description
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
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
  ) as Observable<OnUpdateRoomSubscription>;

  OnDeleteRoomListener: Observable<OnDeleteRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          companyID
          name
          description
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          tasks {
            __typename
            items {
              __typename
              id
              authorID
              roomID
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
  ) as Observable<OnDeleteRoomSubscription>;

  OnCreateTaskListener: Observable<OnCreateTaskSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          authorID
          roomID
          title
          description
          scheduleDate
          priority
          status
          createdAt
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          room {
            __typename
            id
            companyID
            name
            description
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            tasks {
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
              content
              createdAt
              isSent
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTaskSubscription>;

  OnUpdateTaskListener: Observable<OnUpdateTaskSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          authorID
          roomID
          title
          description
          scheduleDate
          priority
          status
          createdAt
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          room {
            __typename
            id
            companyID
            name
            description
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            tasks {
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
              content
              createdAt
              isSent
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTaskSubscription>;

  OnDeleteTaskListener: Observable<OnDeleteTaskSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          authorID
          roomID
          title
          description
          scheduleDate
          priority
          status
          createdAt
          members {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          room {
            __typename
            id
            companyID
            name
            description
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            tasks {
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
              content
              createdAt
              isSent
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTaskSubscription>;

  OnCreateMessageListener: Observable<
    OnCreateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          taskID
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnUpdateMessageListener: Observable<
    OnUpdateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          taskID
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateMessageSubscription>;

  OnDeleteMessageListener: Observable<
    OnDeleteMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          taskID
          author {
            __typename
            id
            email
            companyID
            username
            registered
            authority
            company {
              __typename
              id
              name
              domain
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          isSent
          task {
            __typename
            id
            authorID
            roomID
            title
            description
            scheduleDate
            priority
            status
            createdAt
            members {
              __typename
              id
              email
              companyID
              username
              registered
              authority
              createdAt
              updatedAt
            }
            room {
              __typename
              id
              companyID
              name
              description
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            updatedAt
          }
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteMessageSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          email
          companyID
          username
          registered
          authority
          company {
            __typename
            id
            name
            domain
            room {
              __typename
              nextToken
            }
            members {
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
  ) as Observable<OnDeleteUserSubscription>;
}