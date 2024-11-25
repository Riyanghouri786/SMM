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

  const data = {
    key: "c004e22e832c4fd8c7e73847e15734fd",
    action: "add",
    service: service,
    link: link,
    quantity: amount,
  };

  try {
    const response = await fetch("https://fortunesmm.com/api/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify(result), {
        status: 200,
        headers,
      });
    } else {
      return new Response(
        JSON.stringify({ message: result.message || "Failed to create order" }),
        { status: 500, headers }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
}
