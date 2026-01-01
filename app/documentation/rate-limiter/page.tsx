"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap } from "lucide-react"

export default function RateLimiterDocs() {
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
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">API Rate Limiter</h1>
                <p className="text-muted-foreground">Advanced rate limiting with multiple strategies</p>
              </div>
            </div>
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <code className="text-accent">npm install @jutech-devs/api-rate-limiter</code>
            </div>
            
            <div className="flex gap-4 mb-6">
              <Link
                href="https://github.com/jutech-devs/api-rate-limiter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 transition-all"
              >
                <span>⭐</span>
                View on GitHub
              </Link>
              <Link
                href="https://www.npmjs.com/package/@jutech-devs/api-rate-limiter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 transition-all"
              >
                <span>📦</span>
                NPM Package
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useRateLimiter } from '@jutech-devs/api-rate-limiter';

function APIComponent() {
  const { makeRequest, state, canMakeRequest } = useRateLimiter({
    maxRequests: 10,
    windowMs: 60000, // 1 minute
    strategy: 'sliding-window'
  });

  const fetchData = async () => {
    try {
      const result = await makeRequest(() => 
        fetch('/api/data').then(res => res.json())
      );
      console.log('Data:', result);
    } catch (error) {
      console.error('Rate limited:', error.message);
    }
  };

  return (
    <div>
      <p>Remaining requests: {state.remaining}</p>
      <button onClick={fetchData} disabled={!canMakeRequest()}>
        Fetch Data
      </button>
    </div>
  );
}`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">Rate Limiting Strategies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">Sliding Window</h3>
                <p className="text-sm text-muted-foreground mb-3">Most accurate but uses more memory. Maintains a rolling window of requests.</p>
                <div className="bg-background p-2 rounded text-xs">
                  <code className="text-accent">strategy: 'sliding-window'</code>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">Fixed Window</h3>
                <p className="text-sm text-muted-foreground mb-3">Memory efficient but can allow bursts. Resets counter at fixed intervals.</p>
                <div className="bg-background p-2 rounded text-xs">
                  <code className="text-accent">strategy: 'fixed-window'</code>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">Token Bucket</h3>
                <p className="text-sm text-muted-foreground mb-3">Allows burst requests up to bucket capacity. Smooth rate limiting.</p>
                <div className="bg-background p-2 rounded text-xs">
                  <code className="text-accent">strategy: 'token-bucket'</code>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Advanced Usage</h2>

            <h3 className="text-xl font-semibold mb-3">Automatic Retry</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useRateLimitedAPI } from '@jutech-devs/api-rate-limiter';

function APIComponent() {
  const { makeAPIRequest, state } = useRateLimitedAPI({
    maxRequests: 10,
    windowMs: 60000
  });

  const fetchWithRetry = async () => {
    try {
      const result = await makeAPIRequest(
        () => fetch('/api/data').then(res => res.json()),
        {
          maxRetries: 3,
          retryDelay: 1000,
          exponentialBackoff: true
        }
      );
      console.log('Success:', result);
    } catch (error) {
      console.error('Failed after retries:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchWithRetry}>Fetch with Auto-Retry</button>
      <p>Status: {state.isLimited ? 'Rate Limited' : 'Available'}</p>
    </div>
  );
}`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">Batch Processing</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useBatchRateLimiter } from '@jutech-devs/api-rate-limiter';

function BatchProcessor() {
  const { addToQueue, state, queueLength } = useBatchRateLimiter({
    maxRequests: 5,
    windowMs: 10000
  });

  const processBatch = async () => {
    const requests = [
      () => fetch('/api/item/1').then(res => res.json()),
      () => fetch('/api/item/2').then(res => res.json()),
      () => fetch('/api/item/3').then(res => res.json()),
    ];

    const results = await Promise.all(
      requests.map(req => addToQueue(req))
    );
    
    console.log('Batch results:', results);
  };

  return (
    <div>
      <button onClick={processBatch}>Process Batch</button>
      <p>Queue length: {queueLength}</p>
      <p>Remaining: {state.remaining}</p>
    </div>
  );
}`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">Multiple API Rate Limiters</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`import { useMultiRateLimiter } from '@jutech-devs/api-rate-limiter';

function MultiAPIComponent() {
  const { makeRequest, getAllStates } = useMultiRateLimiter({
    github: { maxRequests: 60, windowMs: 3600000 },
    twitter: { maxRequests: 300, windowMs: 900000 },
    internal: { maxRequests: 1000, windowMs: 60000 }
  });

  const fetchGitHubData = () => 
    makeRequest('github', () => 
      fetch('/api/github/user').then(res => res.json())
    );

  const states = getAllStates();

  return (
    <div>
      <button onClick={fetchGitHubData}>
        GitHub API (Remaining: {states.github?.remaining})
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
                    <td className="border border-border p-3">maxRequests</td>
                    <td className="border border-border p-3">number</td>
                    <td className="border border-border p-3">required</td>
                    <td className="border border-border p-3">Maximum requests per window</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">windowMs</td>
                    <td className="border border-border p-3">number</td>
                    <td className="border border-border p-3">required</td>
                    <td className="border border-border p-3">Time window in milliseconds</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">strategy</td>
                    <td className="border border-border p-3">string</td>
                    <td className="border border-border p-3">'sliding-window'</td>
                    <td className="border border-border p-3">Rate limiting strategy</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">retryAfter</td>
                    <td className="border border-border p-3">number</td>
                    <td className="border border-border p-3">undefined</td>
                    <td className="border border-border p-3">Default retry delay</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mb-4">Available Hooks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">useRateLimiter</h3>
                <p className="text-sm text-muted-foreground">Basic rate limiting hook with full control</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">useRateLimitedAPI</h3>
                <p className="text-sm text-muted-foreground">API requests with automatic retry logic</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">useBatchRateLimiter</h3>
                <p className="text-sm text-muted-foreground">Queue and process requests in batches</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-2">useMultiRateLimiter</h3>
                <p className="text-sm text-muted-foreground">Manage multiple rate limiters for different APIs</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">•</span>
                </div>
                <span>API Integration - Respect third-party limits</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">•</span>
                </div>
                <span>User Actions - Prevent spam clicking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">•</span>
                </div>
                <span>Background Jobs - Throttle processes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">•</span>
                </div>
                <span>Resource Protection - Protect your APIs</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Free & Open Source</h3>
              <ul className="space-y-2">
                <li>• All rate limiting strategies</li>
                <li>• React hooks included</li>
                <li>• TypeScript support</li>
                <li>• MIT License</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}