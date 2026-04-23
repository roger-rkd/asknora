export async function POST(req: Request) {
  try {
    const { message, sessionId } = await req.json()

    if (!message || !sessionId) {
      return Response.json(
        { error: 'Message and sessionId are required' },
        { status: 400 }
      )
    }

    const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, sessionId }),
    })

    if (!response.ok) {
      throw new Error(`n8n responded with ${response.status}`)
    }

const text = await response.text()
return Response.json({ reply: text })

  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}