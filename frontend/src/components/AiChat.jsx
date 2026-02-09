import { useState } from "react";
import { api } from "../services/api";
import { useFilters } from "../context/FiltersContext";

export default function AiChat() {
  const [msg, setMsg] = useState("");
  const { setFilters } = useFilters();

  const send = async () => {
    if (!msg) return;
    const res = await api.post("/api/ai/chat", { message: msg });

    if (res.data.action === "updateFilters") {
      setFilters(prev => ({ ...prev, ...res.data.filters }));
    }
    setMsg("");
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      <input
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Ask AI..."
      />
      <button onClick={send}>AI</button>
    </div>
  );
}

