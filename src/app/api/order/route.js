// app/api/order/route.js

export async function POST(req) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers,
    });
  }

  const { service, link, amount } = await req.json();

  if (!service || !link || !amount) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400, headers }
    );
  }

  // Prepare the request data to send to the external API
  const data = {
    key: "c004e22e832c4fd8c7e73847e15734fd", // Your API key
    action: "add",
    service: service,
    link: link,
    quantity: amount,
  };

  try {
    // Send the request to the external API (using server-side fetch)
    const response = await fetch("https://fortunesmm.com/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      // If the external API request is successful, return the result
      return new Response(JSON.stringify(result), {
        status: 200,
        headers,
      });
    } else {
      // Return an error message if the external API fails
      return new Response(
        JSON.stringify({ message: result.message || "Failed to create order" }),
        { status: 500, headers }
      );
    }
  } catch (error) {
    // Catch any errors in the request process
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
}
