import { useState } from "react";
import axios from "axios";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {
    try {
      const res = await axios.post("http://localhost:5000/ask", { question });
      setResponse(res.data.answer);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResponse("AI failed to respond.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="p-4 bg-warning bg-opacity-25 rounded shadow-sm">
        <h2 className="h5 mb-3 fw-semibold">🤖 Ask AI Anything</h2>
        <div className="mb-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="form-control"
            rows="4"
            placeholder="E.g., How to be more productive?"
          />
        </div>
        <button onClick={askAI} className="btn btn-primary">Enter</button>
        {response && (
          <div className="mt-3 p-3 bg-white rounded border">
            <p className="mb-0">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAI;
