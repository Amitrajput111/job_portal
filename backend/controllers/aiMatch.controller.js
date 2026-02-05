import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "langchain/prompts";

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  temperature: 0
});

const template = `
You are an AI system that matches a candidate resume with a job description.

Resume:
{resume}

Job Description:
{job}

Return ONLY valid JSON in this format:
{
  "matchScore": number,
  "matchingSkills": string[],
  "missingSkills": string[],
  "explanation": string
}
`;

const prompt = new PromptTemplate({
  template,
  inputVariables: ["resume", "job"]
});

export const getJobMatch = async (resumeText, jobDescription) => {
  try {
    const input = await prompt.format({
      resume: resumeText,
      job: jobDescription
    });

    const response = await llm.invoke(input);

    return JSON.parse(response.content);
  } catch (err) {
    return {
      matchScore: 0,
      matchingSkills: [],
      missingSkills: [],
      explanation: "AI matching unavailable"
    };
  }
};
