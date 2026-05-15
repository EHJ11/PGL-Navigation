// Cambiar esta URL según dónde esté tu servidor
// Para desarrollo local: "http://localhost:5000"
// Para red local: "http://192.168.0.11:5000"
const API_URL = "http://192.168.0.11:5000";

export async function apiRequest(
  endpoint: string,
  method: string,
  body?: any,
  token?: string,
) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      ok: false,
      data: {
        message: `Error de conexión con el servidor: ${error instanceof Error ? error.message : "Error desconocido"}`,
      },
    };
  }
}
