"use client";

import { CharacterRoom, getQuotedTexts } from "@virtual-protocol/react-virtual-ai";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  
  return (
    <main className="flex relative w-screen h-screen">
      <CharacterRoom
        userName="User"
        virtualName="Lady"
        virtualId={1}
        metadata={{
          apiKey: "npcf3ZyBdWhj0vhxZXrJ",
          apiSecret: "BZHsUrQsksCg5WS4IvI4oyZHUloffz6siuV",
          userUid: "1",
          userName: "User",
        }}
        onUserMessageCreated={async (v) => {
          console.log("user", v);
          setMessages((prev) => [...prev, v.text]);
        }}
        onVirtualMessageCreated={async (v) => {
          console.log("user", v);
          setMessages((prev) => [...prev,
            getQuotedTexts(v.text ?? "").join("")]);
        }}
        configs={{
          skipTTS: true,
        }}
      />
      <div className="abolute top-0 left-0 w-full h-[50%] flex flex-col gap-2">
        {messages.map((m, index) => (
          <p key={m + index}>{m}</p>
        ))}
      </div>
    </main>
  );
}
