import {useEffect, useState} from "react";
import {useDisplayNameContext} from "../Contexts/UserContext";
import Axios from 'axios'
import {Messages} from "../Contexts/Messages.types";


export const useUserMessages = (): Messages => {
  const { displayName } = useDisplayNameContext()
  const [messages, setMessages] = useState<Messages>([])

  useEffect(() => {
    Axios.get(`http://localhost:5555/api/messages?displayName=${displayName}`)
      .then(response => setMessages(response.data.messages))
  }, [])

  return messages
}