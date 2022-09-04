import { useContext, useState, ReactNode, createContext } from "react";

interface Props {
  children: ReactNode;
}

const TattooContext = createContext(false);
const TattooUpdateContext = createContext(() => {});

export const useTattoo = () => useContext(TattooContext);
export const useTattooUpdate = () => useContext(TattooUpdateContext);

const TattooProvider = ({ children }: Props) => {
  const [isPermanent, setPermanent] = useState(false);

  const toggleStatus = () => setPermanent((prevState) => !prevState);

  return (
    <TattooContext.Provider value={isPermanent}>
      <TattooUpdateContext.Provider value={toggleStatus}>{children}</TattooUpdateContext.Provider>
    </TattooContext.Provider>
  );
};

export default TattooProvider;
