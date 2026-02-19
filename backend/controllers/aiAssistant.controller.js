import { ChatOpenAI } from "@langchain/openai";
import { StateGraph } from "@langchain/langgraph";

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  temperature: 0
});

const graph = new StateGraph({
  channels: {
    input: {},
    intent: {},
    action: {}
  }
});

graph.addNode("detect_intent", async (state) => {
  const prompt = `
Classify the user intent as one of:
- filter_update
- job_search
- help

User message:
"${state.input}"

Return ONLY JSON:
{ "intent": "filter_update|job_search|help" }
`;
  const res = await llm.invoke(prompt);

  let intent = "help";
  try {
    intent = JSON.parse(res.content).intent;
  } catch {}

  return { intent };
});

graph.addNode("route_action", async (state) => {
  if (state.intent === "filter_update") {
    const prompt = `
Extract filters from the message.
Return ONLY JSON like:
{
  "action": "updateFilters",
  "filters": {
    "remote": true,
    "matchScore": "high"
  }
}
Message:
"${state.input}"
`;
    const res = await llm.invoke(prompt);
    try {
      return { action: JSON.parse(res.content) };
    } catch {
      return { action: { action: "error" } };
    }
  }

  return {
    action: {
      action: "help",
      message:
        "You can upload your resume, see match scores, and track applications."
    }
  };
});

graph.addEdge("detect_intent", "route_action");
graph.setEntryPoint("detect_intent");

const app = graph.compile();

export const aiAssistant = async (req, res) => {
  try {
    const result = await app.invoke({ input: req.body.message });
    res.json(result.action);
  } catch {
    res.status(500).json({
      action: "error",
      message: "AI assistant failed"
    });
  }
};
