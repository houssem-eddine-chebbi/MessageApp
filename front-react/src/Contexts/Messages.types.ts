
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
  postMessage: (message: Message) => void
}

export interface MessagesContextState {
  publicMessages: Messages
  privateMessages: Messages
  actions?: MessagesActions
}

export type MessagesActionType =
  | 'GET_PUBLIC_MESSAGES'
  | 'GET_PRIVATE_MESSAGES'
  | 'POST_MESSAGE'

export interface MessageAction {
  type: MessagesActionType
  payload: {
    displayName?: string
    publicMessages?: Messages
    privateMessages?: Messages
    message?: Message
  }
}