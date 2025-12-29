# Chatbot Setup Instructions

## To enable the AI chatbot, follow these steps:

1. **Create a `.env` file in the root directory with your Anthropic API key:**
```
ANTHROPIC_API_KEY=your_api_key_here
```

2. **Get your API key from Anthropic:**
   - Visit https://console.anthropic.com/
   - Create an account or log in
   - Navigate to API keys section
   - Create a new API key

3. **Run the backend server in a separate terminal:**
```bash
node server.js
```

4. **In another terminal, run the development server:**
```bash
npm run dev
```

5. **The chatbot will appear as a 💬 button in the bottom-right corner of the screen**

## Features:
- ✅ AI-powered responses using Claude
- ✅ Light/Dark mode support
- ✅ Smooth animations
- ✅ Message history
- ✅ Typing indicator
- ✅ Responsive design

## Environment Variables:
- `ANTHROPIC_API_KEY` - Your Anthropic Claude API key (required for chatbot to work)
- `PORT` - Server port (default: 3001)

## Notes:
- The chatbot backend runs on port 3001
- The Vite dev server proxies `/api` requests to the backend
- Make sure both servers are running for the chatbot to function
