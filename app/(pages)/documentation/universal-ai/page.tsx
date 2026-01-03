"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, BarChart3 } from "lucide-react"

export default function UniversalAIDocs() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/documentation" className="inline-flex items-center gap-2 text-accent hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Documentation
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Universal AI SDK</h1>
                <p className="text-muted-foreground">Unified SDK for ALL major AI providers</p>
              </div>
            </div>
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <code className="text-accent">npm install @jutech-devs/universal-ai</code>
            </div>
            
            <div className="flex gap-4 mb-6">
              <Link
                href="https://github.com/jutech-devs/universal-ai-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 transition-all"
              >
                <span>⭐</span>
                View on GitHub
              </Link>
              <Link
                href="https://www.npmjs.com/package/@jutech-devs/universal-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 transition-all"
              >
                <span>📦</span>
                NPM Package
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-4">Supported Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🤖 OpenAI</h3>
                <ul className="text-sm space-y-1">
                  <li>• gpt-4o, gpt-4o-mini</li>
                  <li>• o1-preview, o1-mini</li>
                  <li>• gpt-4-turbo, gpt-4, gpt-4-32k</li>
                  <li>• gpt-3.5-turbo, gpt-3.5-turbo-16k</li>
                  <li>• text-davinci-003, code-davinci-002</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🧠 Anthropic Claude</h3>
                <ul className="text-sm space-y-1">
                  <li>• claude-3-5-sonnet-20241022</li>
                  <li>• claude-3-5-haiku-20241022</li>
                  <li>• claude-3-opus-20240229</li>
                  <li>• claude-3-sonnet-20240229</li>
                  <li>• claude-2.1, claude-2.0</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🔍 Google Gemini</h3>
                <ul className="text-sm space-y-1">
                  <li>• gemini-2.0-flash-exp</li>
                  <li>• gemini-1.5-pro-002, gemini-1.5-pro</li>
                  <li>• gemini-1.5-flash-002, gemini-1.5-flash</li>
                  <li>• gemini-1.5-flash-8b</li>
                  <li>• gemini-pro, gemini-pro-vision</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🚀 Groq (Ultra-Fast)</h3>
                <ul className="text-sm space-y-1">
                  <li>• llama-3.3-70b-versatile</li>
                  <li>• llama-3.2-90b-text-preview</li>
                  <li>• llama-3.1-70b-versatile</li>
                  <li>• mixtral-8x7b-32768</li>
                  <li>• gemma2-9b-it, gemma-7b-it</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🎯 Cohere</h3>
                <ul className="text-sm space-y-1">
                  <li>• command-r-plus, command-r</li>
                  <li>• command, command-nightly</li>
                  <li>• command-light</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🌟 Mistral AI</h3>
                <ul className="text-sm space-y-1">
                  <li>• mistral-large-latest</li>
                  <li>• mistral-medium-latest</li>
                  <li>• open-mistral-7b, open-mixtral-8x7b</li>
                  <li>• codestral-latest, codestral-2405</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🤖 xAI (Grok)</h3>
                <ul className="text-sm space-y-1">
                  <li>• grok-beta</li>
                  <li>• grok-vision-beta</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">🧮 DeepSeek</h3>
                <ul className="text-sm space-y-1">
                  <li>• deepseek-chat</li>
                  <li>• deepseek-coder</li>
                  <li>• deepseek-reasoner</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { UniversalAI } from '@jutech-devs/universal-ai';

// OpenAI
const openai = new UniversalAI({
  provider: 'openai',
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4'
});

// Anthropic Claude
const claude = new UniversalAI({
  provider: 'anthropic',
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: 'claude-3-5-sonnet-20241022'
});

const messages = [
  { role: 'user', content: 'Explain quantum computing' }
];

const response = await openai.chat(messages);
console.log(response.content);`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">React Hooks</h2>
            
            <h3 className="text-xl font-semibold mb-3">useAI Hook</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useAI } from '@jutech-devs/universal-ai';

function ChatComponent() {
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    models
  } = useAI({
    provider: 'openai',
    apiKey: 'your-api-key',
    model: 'gpt-4'
  });

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>{msg.content}</div>
      ))}
      <button 
        onClick={() => sendMessage('Hello!')}
        disabled={isLoading}
      >
        Send Message
      </button>
    </div>
  );
}`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">useAIStream Hook</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useAIStream } from '@jutech-devs/universal-ai';

function StreamingChat() {
  const {
    messages,
    streamingContent,
    isLoading,
    sendMessage
  } = useAIStream({
    provider: 'openai',
    apiKey: 'your-api-key',
    model: 'gpt-4'
  });

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>{msg.content}</div>
      ))}
      {streamingContent && (
        <div className="streaming">{streamingContent}</div>
      )}
    </div>
  );
}`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>
            
            <h3 className="text-xl font-semibold mb-3">Custom System Prompts</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { createSystemMessage, createUserMessage } from '@jutech-devs/universal-ai';

const messages = [
  createSystemMessage('You are a helpful coding assistant.'),
  createUserMessage('How do I create a React component?'),
];

const response = await ai.chat(messages);`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">Token Usage Tracking</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const response = await ai.chat(messages);

if (response.usage) {
  console.log(\`Tokens used: \${response.usage.totalTokens}\`);
  console.log(\`Prompt tokens: \${response.usage.promptTokens}\`);
  console.log(\`Completion tokens: \${response.usage.completionTokens}\`);
}`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">Function Calling & Tools</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { ToolRegistry, builtInTools } from '@jutech-devs/universal-ai';

const registry = new ToolRegistry();
builtInTools.forEach(tool => registry.register(tool));

// Custom tool
const weatherTool = {
  name: 'get_weather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: { type: 'string', description: 'City name' },
    },
    required: ['location'],
  },
  handler: async ({ location }) => {
    return { temperature: 22, condition: 'sunny' };
  },
};

registry.register(weatherTool);

const ai = new UniversalAI({
  provider: 'openai',
  apiKey: 'your-key',
  model: 'gpt-4',
  tools: registry.getAll(),
});`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">Multi-Modal Support</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { createUserMessage } from '@jutech-devs/universal-ai';

// Image input
const message = createUserMessage([
  { type: 'text', data: 'What do you see in this image?' },
  { type: 'image', data: 'data:image/jpeg;base64,...', mimeType: 'image/jpeg' },
]);

// Audio input
const audioMessage = createUserMessage([
  { type: 'text', data: 'Transcribe this audio:' },
  { type: 'audio', data: 'data:audio/wav;base64,...', mimeType: 'audio/wav' },
]);

const response = await ai.chat([message]);`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">Configuration Options</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-card">
                    <th className="border border-border p-3 text-left">Option</th>
                    <th className="border border-border p-3 text-left">Type</th>
                    <th className="border border-border p-3 text-left">Default</th>
                    <th className="border border-border p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">provider</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">required</td>
                    <td className="border border-border p-3">AI provider name</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">apiKey</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">required</td>
                    <td className="border border-border p-3">Provider API key</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">model</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">required</td>
                    <td className="border border-border p-3">Model name</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">temperature</td>
                    <td className="border border-border p-3">number</td>
                    <td className="border border-border p-3">0.7</td>
                    <td className="border border-border p-3">Response creativity (0-1)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">maxTokens</td>
                    <td className="border border-border p-3">number</td>
                    <td className="border border-border p-3">undefined</td>
                    <td className="border border-border p-3">Max response tokens</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">topP</td>
                    <td className="border border-border p-3">number</td>
                    <td className="border border-border p-3">undefined</td>
                    <td className="border border-border p-3">Nucleus sampling (0-1)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">baseURL</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">undefined</td>
                    <td className="border border-border p-3">Custom API endpoint</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">tools</td>
                    <td className="border border-border p-3">array</td>
                    <td className="border border-border p-3">[]</td>
                    <td className="border border-border p-3">Function calling tools</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4">API Methods</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold">ai.chat(messages)</h3>
                <p className="text-muted-foreground">Send chat messages and get a response.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">ai.stream(messages)</h3>
                <p className="text-muted-foreground">Stream responses in real-time.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">ai.getModels()</h3>
                <p className="text-muted-foreground">Get available models for the current provider.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">ai.updateConfig(config)</h3>
                <p className="text-muted-foreground">Update configuration options.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Completely Free & Open Source</h3>
              <ul className="space-y-2 mb-6">
                <li>• 100% free to use - no limits</li>
                <li>• All 65+ AI models supported</li>
                <li>• All 8 providers included</li>
                <li>• Use your own API keys</li>
                <li>• No usage tracking or restrictions</li>
                <li>• MIT License</li>
                <li>• Community support</li>
              </ul>
              
              <div className="bg-card p-4 rounded-lg border border-accent/30 mt-4">
                <h4 className="font-semibold mb-2">💡 How it works:</h4>
                <p className="text-sm text-muted-foreground">
                  You provide your own API keys from OpenAI, Anthropic, Google, etc. 
                  The SDK is just a unified interface - you pay the providers directly for usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}