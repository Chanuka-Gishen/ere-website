import { useCallback } from "react";

export const useWhatsApp = (phoneNumber) => {
  const sendWhatsApp = useCallback(
    (message = "") => {
      const formattedNumber = phoneNumber.replace(/\D/g, "");
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${formattedNumber}${message ? `?text=${encodedMessage}` : ""}`;
      window.open(url, "_blank");
    },
    [phoneNumber],
  );

  return { sendWhatsApp };
};

export default useWhatsApp;
