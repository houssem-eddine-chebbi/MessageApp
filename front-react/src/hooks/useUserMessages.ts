import {useState} from "react";
import {useDisplayNameContext} from "../Contexts/UserContext";
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface Message {
  body: string
  private: boolean
  to?: string
  from: string
}

type Messages = Array<Message>

export const useUserMessages = (): Messages => {
  const { displayName } = useDisplayNameContext()
  const [messages, setMessages] = useState<Messages>([])

  Axios.get(`http://localhost:3000/api/messages?displayName=${displayName}`)
    .then(response => setMessages(response.data.messages))

  return messages
}