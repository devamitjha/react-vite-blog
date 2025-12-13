import { useMemo } from "react";

const quotes = [
  "Good things come to those who wait.",
  "Patience is not the ability to wait, but how you act while waiting.",
  "Waiting is a form of faith.",
  "The strongest souls are shaped by waiting.",
  "Sometimes waiting is the bravest thing you can do.",
  "What’s meant for you will arrive in its own time.",
  "Growth happens quietly while you wait.",
  "Waiting teaches you the value of timing.",
  "Calmness is power when you are waiting.",
  "The pause is as important as the action."
];

const WaitingQuote = () => {
  const randomQuote = useMemo(() => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand px-6">
      <p className="text-center text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-2xl leading-relaxed fadeIn">
        “{randomQuote}”
      </p>
    </div>
  );
};

export default WaitingQuote;
