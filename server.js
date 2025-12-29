import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Anthropic from '@anthropic-ai/sdk'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Validate API key
if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY.trim() === '') {
  console.error('❌ Error: ANTHROPIC_API_KEY is not set in .env file')
  console.error('Please set your API key in the .env file')
  console.error('Get your API key from: https://console.anthropic.com/')
  process.exit(1)
}

app.use(cors())
app.use(express.json())

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      system: 'You are a helpful assistant for a personal tech blog website. You help users with questions about React, web development, state management, Java, AI, and AWS. Keep your responses concise and friendly.',
    })

    const reply =
      response.content[0].type === 'text' ? response.content[0].text : 'I could not generate a response.'

    res.json({ reply })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to process your message' })
  }
})

app.listen(PORT, () => {
  console.log(`Chat API server running on http://localhost:${PORT}`)
})
