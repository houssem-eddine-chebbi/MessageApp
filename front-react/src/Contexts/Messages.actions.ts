import {Message, MessageAction, MessagesActions, MessagesContextState} from "./Messages.types";
import {Dispatch} from "react";

export const useMessagesActions =
  (state: MessagesContextState, dispatch: Dispatch<MessageAction>): MessagesActions => ({
    getPublicMessages: () => dispatch({ type: 'GET_PUBLIC_MESSAGES', payload: { } }),
    getPrivateMessages: (displayName: string) => dispatch({ type: 'GET_PRIVATE_MESSAGES', payload: { displayName } }),
    postMessage: (message: Message) => dispatch({ type: 'POST_MESSAGE', payload: { message } }),

  })