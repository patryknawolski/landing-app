import { ReactNode, createContext, useContext, useState } from "react";

type CalendlyContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export const CalendlyContext = createContext<CalendlyContextType | null>(null);

export const useCalendlyContext = () => {
  const calendlyContext = useContext(CalendlyContext);

  if (!calendlyContext) {
    throw new Error(
      "useCalendlyContext has to be used within <CalendlyContext.Provider>"
    );
  }

  return calendlyContext;
};

export const CalendlyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CalendlyContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </CalendlyContext.Provider>
  );
};
