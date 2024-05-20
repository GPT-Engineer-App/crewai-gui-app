export const testApiKey = async (apiKey, baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/test-api-key`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey }),
    });
    if (!response.ok) throw new Error("API test failed");
    return await response.json();
  } catch (error) {
    throw new Error("API test failed");
  }
};

export const sendInitialPrompt = async (prompt, apiKey, baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/send-initial-prompt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, apiKey }),
    });
    if (!response.ok) throw new Error("Failed to send initial prompt");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to send initial prompt");
  }
};

export const fetchTools = async (apiKey, baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/tools`, {
      method: "GET",
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!response.ok) throw new Error("Failed to fetch tools");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch tools");
  }
};

export const updateToolStatus = async (toolId, enabled, apiKey, baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/tools/${toolId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ enabled }),
    });
    if (!response.ok) throw new Error("Failed to update tool status");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to update tool status");
  }
};

export const fetchConfig = async (apiKey, baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/config`, {
      method: "GET",
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!response.ok) throw new Error("Failed to fetch config");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch config");
  }
};

export const updateConfig = async (config, apiKey, baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/config`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(config),
    });
    if (!response.ok) throw new Error("Failed to update config");
    return await response.json();
  } catch (error) {
    throw new Error("Failed to update config");
  }
};
