"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Code2 } from "lucide-react"

export default function ReactHooksDocs() {
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
                <Code2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">React Hooks Collection</h1>
                <p className="text-muted-foreground">42 production-ready React hooks</p>
              </div>
            </div>
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <code className="text-accent">npm install @jutech-devs/hooks</code>
            </div>
            
            <div className="flex gap-4 mb-6">
              <Link
                href="https://github.com/jutech-devs/react-hooks-collections"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 transition-all"
              >
                <span>⭐</span>
                View on GitHub
              </Link>
              <Link
                href="https://www.npmjs.com/package/@jutech-devs/hooks"
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
              <pre><code className="text-sm text-accent">{`import { useToggle, useFetch, useDarkMode } from '@jutech-devs/hooks';

function App() {
  const [isOpen, { toggle }] = useToggle();
  const { data, loading } = useFetch('/api/users');
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={toggle}>
        {isOpen ? 'Close' : 'Open'} Modal
      </button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {loading ? 'Loading...' : data?.length} users
    </div>
  );
}`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">Hook Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-3">🔧 Basic Utilities</h3>
                <ul className="text-sm space-y-1">
                  <li>• useToggle - Boolean state management</li>
                  <li>• useDebounce - Value debouncing</li>
                  <li>• usePrevious - Track previous values</li>
                  <li>• useCountdown - Timer functionality</li>
                  <li>• useHover - Mouse hover detection</li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-3">💾 Storage & Persistence</h3>
                <ul className="text-sm space-y-1">
                  <li>• useLocalStorage - localStorage sync</li>
                  <li>• useSessionStorage - sessionStorage sync</li>
                  <li>• useDarkMode - Complete theme system</li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-3">🌐 Network & Data</h3>
                <ul className="text-sm space-y-1">
                  <li>• useFetch - Smart HTTP requests</li>
                  <li>• useAsync - Async operation management</li>
                  <li>• useWebSocket - Real-time connections</li>
                  <li>• useWebRTC - Video/audio communication</li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-3">🎨 UI & Interactions</h3>
                <ul className="text-sm space-y-1">
                  <li>• useClickOutside - Outside click detection</li>
                  <li>• useWindowSize - Responsive dimensions</li>
                  <li>• useIntersectionObserver - Element visibility</li>
                  <li>• useDrag - Drag & drop functionality</li>
                  <li>• useGesture - Advanced touch gestures</li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-3">📱 Device & Hardware</h3>
                <ul className="text-sm space-y-1">
                  <li>• useIsMobile - Mobile device detection</li>
                  <li>• useGeolocation - GPS location tracking</li>
                  <li>• useBattery - Battery status monitoring</li>
                  <li>• useCamera - Camera access & capture</li>
                  <li>• usePermission - Browser permissions</li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-bold mb-3">🤖 AI & Machine Learning</h3>
                <ul className="text-sm space-y-1">
                  <li>• useML - Neural networks in browser</li>
                  <li>• useComputerVision - Image analysis</li>
                  <li>• useNLP - Natural language processing</li>
                  <li>• useRecommendationEngine - Personalization</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Popular Hooks Examples</h2>

            <h3 className="text-xl font-semibold mb-3">useToggle</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const [isVisible, { toggle, setTrue, setFalse }] = useToggle(false);

return (
  <div>
    <button onClick={toggle}>Toggle</button>
    <button onClick={setTrue}>Show</button>
    <button onClick={setFalse}>Hide</button>
    {isVisible && <div>Content</div>}
  </div>
);`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">useFetch</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const { data, loading, error, refetch } = useFetch('/api/posts', {
  cache: true,
  immediate: true
});

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return (
  <div>
    {data?.map(post => <div key={post.id}>{post.title}</div>)}
    <button onClick={refetch}>Refresh</button>
  </div>
);`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">useLocalStorage</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const [user, setUser] = useLocalStorage('user', null);

return (
  <div>
    {user ? (
      <div>Welcome, {user.name}!</div>
    ) : (
      <button onClick={() => setUser({ name: 'John' })}>
        Login
      </button>
    )}
  </div>
);`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">useGeolocation</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const { latitude, longitude, error } = useGeolocation({
  enableHighAccuracy: true,
  watch: true
});

return (
  <div>
    {error ? (
      <div>Error: {error.message}</div>
    ) : (
      <div>
        Lat: {latitude}, Lng: {longitude}
      </div>
    )}
  </div>
);`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold mb-3">useComputerVision</h3>
            <div className="bg-card p-4 rounded-lg border mb-6">
              <pre><code className="text-sm text-accent">{`const { detectObjects, detectFaces } = useComputerVision();

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  const objects = await detectObjects(file);
  const faces = await detectFaces(file);
  
  console.log('Objects:', objects);
  console.log('Faces:', faces);
};

return (
  <input type="file" onChange={handleImageUpload} />
);`}</code></pre>
            </div>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <span>TypeScript First - Full type safety</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <span>Zero Dependencies - Lightweight</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <span>SSR Compatible - Works with Next.js</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">✓</span>
                </div>
                <span>Tree Shakeable - Import only what you need</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Free & Open Source</h3>
              <ul className="space-y-2">
                <li>• All 42 hooks included</li>
                <li>• Full TypeScript support</li>
                <li>• MIT License</li>
                <li>• Community support</li>
                <li>• Regular updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}