"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonScale = 1 + noCount * 0.3; // Gradually increases size
  const extraPadding = noCount * 10; // Padding increase for Yes button growth

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Es-tu sûr???",
      "What if I asked really nicely?",
      "Pretty please",
      "svp ;)",
      "Por favoooor",
      "PLEASE POOKIE",
      "But :*(",
      "Yep im dead",
      "x__X",
      "c'est le fantôme a Arthur buuuuuu 👻",
      "I Refuse",
      "GOLD EXPERIENCE REQUIEM",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Change background to GIF when last phrase is shown
  const isFinalPhase = noCount >= 13;
  const backgroundImage = isFinalPhase
    ? "url('https://media1.tenor.com/m/274j_RLtt6UAAAAC/giorno-gold-experience.gif')"
    : "url('/assets.jpg')";

  return (
    <div
      className="flex h-screen flex-col items-center justify-center bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: `${extraPadding}px`, // Ensures space above
      }}
    >
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/36waWmxAhOQAAAAC/dbz-gohan.gif"
            className="border-4 border-pink-700 rounded-lg"
          />
          <div className="my-4 text-4xl font-bold text-white text-center">
            YAAAAAAAAAAAAAAAY!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] border-4 border-pink-700 rounded-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl text-white text-center">
            Wanna be my Valentine?
          </h1>
          <div className="relative flex flex-col items-center w-64">
            {/* YES button with dynamic margin to push NO button down */}
            <div className="relative" style={{ marginBottom: `${extraPadding}px` }}>
              <button
                className="rounded-lg bg-green-500 text-white font-bold hover:bg-green-700 
                          px-6 py-3 transition-transform duration-200 ease-in-out"
                style={{
                  transform: `scale(${yesButtonScale})`, // Grows proportionally
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
            </div>
            {/* NO button stays below Yes button, with a bit of default padding */}
            <button
              onClick={handleNoClick}
              className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-700 mt-4" // Added mt-4 for default padding
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
