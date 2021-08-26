import {Dispatch} from "react";
import {MessageAction, Messages} from "./Messages.types";
import Axios from "axios";

export const dispatchMiddleware = (dispatch: Dispatch<MessageAction>) => async (action: MessageAction) => {
  switch (action.type) {
    case 'GET_PUBLIC_MESSAGES': dispatch(await getPublicMessages(action)); break
    case 'GET_PRIVATE_MESSAGES': dispatch(await getPrivateMessages(action)); break
    case 'POST_MESSAGE': dispatch(await postMessages(action)); break
    default: dispatch(action); break
  }
}

const getPublicMessages = async (action: MessageAction): Promise<MessageAction> => {
  const response = await Axios.get<{ messages: Messages }>(`http://localhost:5555/api/messages/publicmessages`)
  return { type: 'GET_PUBLIC_MESSAGES', payload: { publicMessages: response.data.messages } }
}

const getPrivateMessages = async (action: MessageAction): Promise<MessageAction> => {
  const { displayName } = action.payload

  const response = await Axios.get<{ messages: Messages }>(`http://localhost:5555/api/messages/privatemessages?displayName=${displayName}`)
  return { type: 'GET_PRIVATE_MESSAGES', payload: { privateMessages: response.data.messages } }
}

const postMessages = async (action: MessageAction): Promise<MessageAction> => {
  const { message } = action.payload

  await Axios.post<{ messages: Messages }>(`http://localhost:5555/api/messages/postmessage`, { message })

  return { type: 'POST_MESSAGE', payload: { message: message } }
}