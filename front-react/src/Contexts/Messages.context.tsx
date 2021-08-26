import {createContext, FunctionComponent, useContext, useReducer} from "react";
import {MessagesContextState} from "./Messages.types";
import {messagesReducer} from "./Messages.reducer";
import {useMessagesActions} from "./Messages.actions";
import {dispatchMiddleware} from "./Messages.middleware";


export const initialState: MessagesContextState = {
  publicMessages: [],
  privateMessages: []
}

const MessagesContext = createContext(initialState)


const MessagesProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer, initialState)
  const enhancedDispatch = dispatchMiddleware(dispatch)
  const actions = useMessagesActions(state, enhancedDispatch)

  return (
    <MessagesContext.Provider value={{ ...state, actions }} >
      {children}
    </MessagesContext.Provider>
  )
}

const useMessagesContext = () : MessagesContextState => useContext(MessagesContext)

export {
  MessagesProvider,
  MessagesContext,
  useMessagesContext,
}
