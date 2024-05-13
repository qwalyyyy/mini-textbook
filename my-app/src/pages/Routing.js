import React, { useState } from 'react';
import axios from 'axios';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const executeCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/execute-code', { code });
      setOutput(response.data.output);
      setError(null);
    } catch (error) {
      setOutput('');
      setError(error.response ? error.response.data.error : 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={80}
        placeholder="Enter your code here"
      />
      <button onClick={executeCode} disabled={loading}>
        {loading ? 'Running...' : 'Run'}
      </button>
      {error && <div>Error: {error}</div>}
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
