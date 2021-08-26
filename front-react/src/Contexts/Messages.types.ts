
export interface Message {
  body: string
  private: boolean
  to?: string
  from: string
}

export type Messages = Array<Message>

export interface MessagesActions {
  getPublicMessages: () => void
  getPrivateMessages: (displayName: string) => void
}

export interface MessagesContextState {
  publicMessages: Messages
  PrivateMessages: Messages
  actions?: MessagesActions
}

export type MessagesActionType =
  | 'GET_PUBLIC_MESSAGES'
  | 'GET_PRIVATE_MESSAGES'

export interface MessageAction {
  type: MessagesActionType
  payload: {
    displayName?: string
    publicMessages?: Messages
    privateMessages?: Messages
  }
}