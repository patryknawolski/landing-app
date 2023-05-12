import { useCalendlyContext } from "contexts/CalendlyContext";
import { PopupModal } from "react-calendly";

export const CalendlyModal = () => {
  const rootElement =
    typeof window !== "undefined"
      ? (window.document.getElementById("__next") as HTMLElement)
      : null;

  const { isModalOpen, setIsModalOpen } = useCalendlyContext();

  const onModalClose = () => setIsModalOpen(false);

  return rootElement ? (
    <PopupModal
      url="https://calendly.com/realaml/online-ceo-co-founder-meeting"
      rootElement={rootElement}
      open={isModalOpen}
      onModalClose={onModalClose}
    />
  ) : null;
};
