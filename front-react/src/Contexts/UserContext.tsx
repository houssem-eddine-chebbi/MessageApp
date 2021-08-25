import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";


interface DisplayNameContext {
  displayName: string
  setDisplayName?: Dispatch<SetStateAction<string>>
}

const displayNameContext = createContext<DisplayNameContext>({ displayName: '' })

interface Props {
  children?: JSX.Element
}

// Provider
export const DisplayNameProvider = ({ children }: Props) => {
  const [displayName, setDisplayName] = useState<string>('')

  return (
    <displayNameContext.Provider value={{ displayName, setDisplayName }} >
      {children}
    </displayNameContext.Provider>
  )
}

export const useDisplayNameContext = () => useContext(displayNameContext)


