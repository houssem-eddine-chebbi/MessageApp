import {MessageAction, MessagesContextState} from "./Messages.types";
import produce from "immer";


export const messagesReducer =
  (state: MessagesContextState, action: MessageAction): MessagesContextState => {
    switch (action.type) {
      case "GET_PUBLIC_MESSAGES": return produce(state, draft => { draft.publicMessages = action.payload.publicMessages ?? [] })
      case "GET_PRIVATE_MESSAGES": return produce(state, draft => { draft.privateMessages = action.payload.privateMessages ?? [] })
      case "POST_MESSAGE": return produce(state, draft => {
        const { message } = action.payload
        if (message) {
          if (message.private)
            draft.privateMessages = [...draft.privateMessages, message]
          else draft.publicMessages = [...draft.publicMessages, message]
        }
      })
      default:
        return { ...state }
    }
  }
