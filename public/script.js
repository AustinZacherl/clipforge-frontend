async function handleSubmit() {
  const userInput = prompt("Paste a video description or transcript:");

  if (!userInput) return;

  try {
    const response = await fetch("https://clipforge-backend-rzpe.onrender.com/generate-title", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input_text: userInput })
    });

    const data = await response.json();

    alert("Generated Title: " + data.title);
  } catch (error) {
    alert("Error generating title: " + error.message);
    console.error(error);
  }
}

