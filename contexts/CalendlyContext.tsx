import { ReactNode, createContext, useContext, useState } from "react";

type CalendlyContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  emailPrefill?: string;
  setEmailPrefill: (value: string) => void;
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
  const [emailPrefill, setEmailPrefill] = useState<string | undefined>(
    undefined
  );

  return (
    <CalendlyContext.Provider
      value={{ isModalOpen, setIsModalOpen, emailPrefill, setEmailPrefill }}
    >
      {children}
    </CalendlyContext.Provider>
  );
};
