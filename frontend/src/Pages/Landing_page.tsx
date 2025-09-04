import React from "react";
import FeatureCard from "../components/FeatureCard";
// import CryptoCard from "../components/CryptoCard";

const LandingPage: React.FC = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <section
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-12 md:py-16"
        aria-labelledby="hero-title"
      >
        <HeroTitle />
        <LampGlow />
        <Divider />
        <div className="grid w-full gap-6 sm:grid-cols-2">
          <FeatureCard
            title="Baycare"
            subtitle="Healthcare AI Dashboard"
            href="/baycare-dashboard"
            accent="cyan"
          />
          <FeatureCard
            title="Feelbot"
            subtitle="Emotional Support"
            href="#feelbot"
            accent="cyan"
          />
        </div>
        <SmallNote />
        {/* <CryptoCard width={250} height={250}
          title="ETH Balance"
          value="4.4"
          currency="ETH"
          percentChange={12}
          changeLabel="24h Change"
          onClose={() => console.log("Card closed")}
        /> */}
      </section>
    </main>
  );
};

function HeroTitle() {
  return (
    <div className="text-center">
      <h1
        id="hero-title"
        className="text-pretty text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
        style={{ filter: "drop-shadow(0 0 14px rgba(255,255,255,0.25))" }}
      >
        Your Personal AI
      </h1>
      <p
        className="text-pretty mt-2 text-2xl font-semibold md:text-5xl"
        style={{
          color: "white",
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.22))",
        }}
      >
        Healthcare Companion
      </p>
      <p className="mx-auto mt-3 max-w-xl text-balance text-sm text-white/70 md:text-base">
        Two focused assistants to help you stay informed and supported—anytime.
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="relative mt-4 h-px w-44 rounded-full bg-white/80 md:w-60"
      role="separator"
      aria-label="section divider"
      style={{ boxShadow: "0 0 18px rgba(255,255,255,0.35)" }}
    />
  );
}

function LampGlow() {
  return (
    <div className="relative mt-3 h-20 w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-20 w-72 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.75), rgba(255,255,255,0.25) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}

function SmallNote() {
  return (
    <p className="max-w-2xl text-center text-xs text-white/60">
      This interface is a preview. Always consult certified professionals for
      medical advice.
    </p>
  );
}

export default LandingPage;
