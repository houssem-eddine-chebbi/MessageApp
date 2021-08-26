import {Dispatch} from "react";
import {MessageAction, Messages} from "./Messages.types";
import Axios from "axios";

export const dispatchMiddleware = (dispatch: Dispatch<MessageAction>) => async (action: MessageAction) => {
  switch (action.type) {
    case 'GET_PUBLIC_MESSAGES': dispatch(await getPublicMessages(action)); break
    case 'GET_PRIVATE_MESSAGES': dispatch(await getPrivateMessages(action)); break
    default: dispatch(action); break
  }
}

const getPublicMessages = async (action: MessageAction): Promise<MessageAction> => {
  const response = await Axios.get<{ messages: Messages }>(`http://localhost:5555/api/publicmessages`)
  return { type: 'GET_PUBLIC_MESSAGES', payload: { publicMessages: response.data.messages } }
}

const getPrivateMessages = async (action: MessageAction): Promise<MessageAction> => {
  const { displayName } = action.payload

  const response = await Axios.get<{ messages: Messages }>(`http://localhost:5555/api/privatemessages?displayName=${displayName}`)
  return { type: 'GET_PUBLIC_MESSAGES', payload: { publicMessages: response.data.messages } }
}