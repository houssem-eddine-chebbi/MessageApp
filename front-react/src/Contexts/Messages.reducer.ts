import {MessageAction, MessagesContextState} from "./Messages.types";
import produce from "immer";


export const messagesReducer =
  (state: MessagesContextState, action: MessageAction): MessagesContextState => {
    switch (action.type) {
      case "GET_PUBLIC_MESSAGES": return produce(state, draft => { publicMessages: action.payload.publicMessages })
      case "GET_PRIVATE_MESSAGES": return produce(state, draft => { privateMessages: action.payload.privateMessages })
      default:
        return { ...state }
    }
  }
