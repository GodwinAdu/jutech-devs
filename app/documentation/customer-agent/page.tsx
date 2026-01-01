"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MessageSquare } from "lucide-react"

export default function CustomerAgentDocs() {
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
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Customer Agent SDK</h1>
                <p className="text-muted-foreground">AI-powered customer support chat widget</p>
              </div>
            </div>
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <code className="text-accent">npm install @jutech-devs/customer-agent</code>
            </div>

            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { CustomerAgent } from '@jutech-devs/customer-agent';

const agent = new CustomerAgent({
  apiKey: 'your-api-key',
  position: 'bottom-right',
  theme: 'light'
});

agent.init();`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">React Hook Usage</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useCustomerAgent } from '@jutech-devs/customer-agent';

function App() {
  const { isOpen, toggle, sendMessage } = useCustomerAgent({
    apiKey: 'your-api-key',
    autoGreeting: true
  });

  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? 'Close' : 'Open'} Support
      </button>
    </div>
  );
}`}</code></pre>
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
                    <td className="border border-border p-3">apiKey</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">required</td>
                    <td className="border border-border p-3">Your API key</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">position</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">'bottom-right'</td>
                    <td className="border border-border p-3">Widget position</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">theme</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">'light'</td>
                    <td className="border border-border p-3">UI theme</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">language</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">'en'</td>
                    <td className="border border-border p-3">Interface language</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>
            
            <h3 className="text-xl font-semibold mb-3">Custom Branding</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const agent = new CustomerAgent({
  apiKey: 'your-api-key',
  branding: {
    primaryColor: '#007bff',
    logo: 'https://your-domain.com/logo.png',
    companyName: 'Your Company'
  }
});`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">Analytics Integration</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`agent.on('message', (data) => {
  console.log('Message sent:', data);
});

agent.on('conversation_start', () => {
  console.log('New conversation started');
});

agent.on('conversation_end', () => {
  console.log('Conversation ended');
});`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">API Methods</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold">agent.init()</h3>
                <p className="text-muted-foreground">Initialize the chat widget on the page.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">agent.show()</h3>
                <p className="text-muted-foreground">Show the chat widget.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">agent.hide()</h3>
                <p className="text-muted-foreground">Hide the chat widget.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">agent.sendMessage(message)</h3>
                <p className="text-muted-foreground">Send a message programmatically.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">agent.updateConfig(config)</h3>
                <p className="text-muted-foreground">Update configuration options.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Free Tier</h3>
              <ul className="space-y-2 mb-6">
                <li>• Up to 1,000 messages/month</li>
                <li>• Basic AI responses</li>
                <li>• Email support</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">Pro Plan - $29/month</h3>
              <ul className="space-y-2">
                <li>• Up to 10,000 messages/month</li>
                <li>• Advanced AI with context</li>
                <li>• Custom branding</li>
                <li>• Analytics dashboard</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}