import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const kbData = [
  {
    id: 1,
    category: "SEO",
    question: "How to rank a React SPA?",
    answer:
      "I use SSR with Next.js and dynamic JSON-LD injection for rich snippets.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Backend",
    question: "Why use Go for blockchain?",
    answer:
      "Go's concurrency model (goroutines) makes it ideal for handling high-throughput immutable ledgers.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Performance",
    question: "How to fix LCP issues?",
    answer:
      "I focus on optimizing Largest Contentful Paint (LCP) by using modern image formats and lazy loading.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Performance",
    question: "How do you reduce load times in react apps javascript",
    answer:
      "To reduce load times in React apps, you must minimize the initial JavaScript bundle size and optimize asset delivery. Because client-side React apps require the browser to download, parse, and execute the JavaScript before rendering the page, reducing the amount of code shipped upfront is the most effective approach.",
    image:
      "https://i.pinimg.com/1200x/3f/b3/4f/3fb34f709b563ca4036796d98c869380.jpg",
  },
  {
    id: 5,
    category: "Architecture",
    question: "How do you ensure your backend API is scalable?",
    answer:
      "To ensure your backend API is scalable, you must design a stateless architecture, optimize the database layer, implement efficient caching mechanisms, and use asynchronous processing for heavy workloads. This prevents your core application servers from becoming a bottleneck during unexpected traffic spikes.",
    image:
      "https://i.pinimg.com/1200x/3d/64/d0/3d64d065313c7fc92e53d82350760d64.jpg",
  },
  {
    id: 6,
    category: "Blockchain",
    question: "What is blockchain in simple words?",
    answer:
      "A blockchain is a secure digital record-keeping system. Imagine a notebook of transactions that is copied and shared across thousands of computers. When a new page is filled, it is sealed as a `block` and permanently chained to the previous pages, making it impossible to alter past entries without everyone noticing.",
    image:
      "https://i.pinimg.com/1200x/97/81/55/97815516ed640908a393f7d0c6c4544e.jpg",
  },
  {
    id: 7,
    category: "Frontend",
    question:
      "How does the Virtual DOM work in React, and how does it differ from the real DOM?",
    answer:
      "Render: React creates a new Virtual DOM.  Diffing: React checks what changed.Reconciliation: React decides the best way to update.Update: React updates only the changed parts of the real DOM.",
    image:
      "https://medium.com/front-end-world/understanding-the-virtual-dom-how-frameworks-like-react-optimize-performance-6802ed34b638",
  },
  {
    id: 8,
    category: "Frontend",
    question:
      "When should you choose Tailwind CSS over traditional CSS modules or styled-components?",
    answer:
      "You should choose Tailwind CSS when your priority is maximizing UI development speed, enforcing design system consistency, and optimizing for modern server-side rendering (SSR) frameworks like Next.js without dealing with runtime performance overhead.",
    image:
      "https://i.pinimg.com/736x/58/b1/40/58b140c11fe335b8ce8bc5c25737e6dc.jpg",
  },
  {
    id: 9,
    category: "Frontend",
    question:
      "What is the difference between localStorage, sessionStorage, and cookies in HTML5?",
    answer:
      "localStorage, sessionStorage, and cookies are used to store data in the browser. localStorage keeps data permanently until it is deleted, sessionStorage keeps data only while the browser tab is open, and cookies store small amounts of data that can be sent automatically to the server with each request.",
    image:
      "https://i.pinimg.com/1200x/d9/c5/b9/d9c5b9f8db184a02ff6b04e33dab4506.jpg",
  },
  {
    id: 10,
    category: "Frontend",
    question:
      "How do you optimize CSS and JavaScript to prevent render-blocking and improve page load speeds?",
    answer:
      "To optimize CSS and JavaScript and prevent render-blocking, developers should minify and compress files, remove unused code, and load only the resources needed for the current page. CSS can be optimized by combining files and loading non-critical styles asynchronously. JavaScript can be optimized by using the defer or async attributes so scripts do not block page rendering. Additionally, caching, code splitting, and lazy loading help improve page load speed and overall website performance.",
    image:
      "https://i.pinimg.com/736x/be/b5/df/beb5dfbdcde070f48f915246065cf8a5.jpg",
  },
  {
    id: 11,
    category: "Next.js & SEO",
    question:
      "What is the difference between Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js?",
    answer:
      "Server-Side Rendering (SSR) generates a page on the server each time a user requests it, ensuring the content is always up to date. Static Site Generation (SSG) generates pages at build time and serves pre-built HTML files, making pages load faster and reducing server workload. In Next.js, SSR is best for frequently changing data, while SSG is ideal for content that does not change often.",
    image:
      "https://i.pinimg.com/736x/68/54/d0/6854d03b556279c5f0bfcd6af078f97c.jpg",
  },
  {
    id: 12,
    category: "Next.js & SEO",
    question:
      "How does the Next.js App Router handle nested layouts and server components?",
    answer:
      "In Next.js App Router, nested layouts allow developers to create shared UI components (such as navigation bars and sidebars) that automatically wrap pages within a folder structure. Server Components run on the server by default, reducing the amount of JavaScript sent to the browser and improving performance. Together, nested layouts provide reusable page structures, while server components enable faster rendering and efficient data fetching.",
    image:
      "https://i.pinimg.com/736x/5d/91/65/5d91653dadc207fb95ec2ddcd746ebe2.jpg",
  },
  {
    id: 13,
    category: "Next.js & SEO",
    question:
      "Why are Core Web Vitals important for SEO, and how do you improve the Largest Contentful Paint (LCP)?",
    answer:
      "Core Web Vitals are important for SEO because they measure user experience factors such as loading speed, interactivity, and visual stability, which can affect search engine rankings. To improve Largest Contentful Paint (LCP), optimize images, use faster hosting, enable caching, reduce server response times, and eliminate unnecessary render-blocking CSS and JavaScript so the main content loads more quickly.",
    image:
      "https://i.pinimg.com/1200x/3f/b3/4f/3fb34f709b563ca4036796d98c869380.jpg",
  },
  {
    id: 14,
    category: "Next.js & SEO",
    question:
      "How do dynamic routes and the getStaticPaths function work together for SEO-friendly pages?",
    answer:
      "Dynamic routes in Next.js allow developers to create pages with dynamic URLs, such as /blog/[id] or /product/[slug]. The getStaticPaths function works with Static Site Generation (SSG) by defining which dynamic pages should be generated at build time. This creates fast, pre-rendered pages with unique URLs that search engines can easily crawl and index, improving SEO and page performance.",
    image:
      "https://i.pinimg.com/736x/62/c6/6d/62c66d23791649a89e56ba4deece7ffe.jpg",
  },
  {
    id: 15,
    category: "Next.js & SEO",
    question:
      "What is the role of structured data (JSON-LD) in modern SEO implementation?",
    answer:
      "Structured data (JSON-LD) is a format used to provide search engines with detailed information about a webpage's content. It helps search engines better understand the page and can enable rich results such as star ratings, FAQs, product information, and event details in search results. This improves a website's visibility, click-through rate (CTR), and overall SEO performance.",
    image:
      "https://i.pinimg.com/1200x/f0/99/fd/f099fd6dba0c6ecabcd96e18d4493a56.jpg",
  },
  {
    id: 16,
    category: "JavaScript & Core Web",
    question:
      "What is the difference between prototypal inheritance and class-based inheritance in JavaScript?",
    answer:
      "Prototypal inheritance is JavaScript’s native inheritance model, where objects inherit properties and methods directly from other objects through the prototype chain. Class-based inheritance, introduced in ES6, provides a simpler and more familiar syntax using classes and the extends keyword, but it is built on top of JavaScript’s prototypal inheritance. In other words, classes are syntactic sugar over the prototype-based system.",
    image:
      "https://i.pinimg.com/736x/6e/d6/a5/6ed6a58ed8103d758124062f6fbb1350.jpg",
  },

  {
    id: 17,
    category: "JavaScript & Core Web",
    question:
      "How do closures work in JavaScript, and what is a practical use case for them?",
    answer:
      "Closures in JavaScript occur when a function remembers and can access variables from its outer scope even after the outer function has finished executing. A practical use case is data privacy, where closures allow variables to remain private and accessible only through specific functions, helping protect data from direct modification.",
    image:
      "https://i.pinimg.com/736x/96/eb/89/96eb8996f6a1a590de0750ceddc85605.jpg",
  },
  {
    id: 18,
    category: "JavaScript & Core Web",
    question:
      "What is the event loop, and how does JavaScript handle asynchronous operations?",
    answer:
      "The event loop is a mechanism in JavaScript that allows non-blocking, asynchronous operations. It continuously checks the call stack and the task queue, moving tasks from the queue to the stack when the stack is empty. This enables JavaScript to handle operations such as API requests, timers, and file reading asynchronously without stopping the execution of other code.",
    image:
      "https://i.pinimg.com/736x/5f/8d/c6/5f8dc6160ab5db53f329d5dfddfb09c9.jpg",
  },
  {
    id: 19,
    category: "JavaScript & Core Web",
    question:
      "How do Promise.all, Promise.race, and Promise.allSettled differ from each other?",
    answer:
      "Promise.all(), Promise.race(), and Promise.allSettled() are methods for handling multiple promises in JavaScript. Promise.all() waits for all promises to resolve and returns their results, but it rejects immediately if any promise fails. Promise.race() returns the result of the first promise that settles, whether it resolves or rejects. Promise.allSettled() waits for all promises to complete and returns their outcomes, regardless of whether they were fulfilled or rejected.",
    image:
      "https://i.pinimg.com/1200x/b2/ae/3b/b2ae3bf8ad48db95155e3bde3cd3c47c.jpg",
  },
  {
    id: 20,
    category: "JavaScript & Core Web",
    question:
      "What is the difference between debouncing and throttling, and how do they improve performance?",
    answer:
      "Debouncing and throttling are techniques used to improve performance by controlling how often a function is executed. Debouncing delays the execution of a function until a specified period has passed without further events, making it useful for search input fields. Throttling limits a function to run at most once within a specified time interval, making it useful for events like scrolling or resizing. Both techniques reduce unnecessary function calls, improving application performance and responsiveness.",
    image:
      "https://i.pinimg.com/736x/28/c8/1e/28c81e742fe0a78dc02590b152229376.jpg",
  },
  {
    id: 21,
    category: "Systems & Backend Languages (C++ & Go)",
    question:
      "How does memory management differ between C++ (manual/smart pointers) and Go (garbage collection)?",
    answer:
      "Memory management in C++ and Go differs mainly in how memory is allocated and released. In C++, developers manage memory manually using pointers, new and delete, or use smart pointers (unique_ptr, shared_ptr) to automate memory cleanup. In Go, memory is managed automatically through garbage collection (GC), which detects and frees unused memory without requiring manual intervention. This makes Go easier and safer for memory management, while C++ offers more control and potentially higher performance.",
    image:
      "https://i.pinimg.com/736x/92/58/fc/9258fca33d14d56f2ecd4ac2eee6b271.jpg",
  },
  {
    id: 22,
    category: "Systems & Backend Languages (C++ & Go)",
    question:
      "What are goroutines in Go, and how do they differ from OS threads?",
    answer:
      "Goroutines are lightweight concurrent functions in Go that are managed by the Go runtime rather than the operating system. They require much less memory and can be created in large numbers compared to OS threads. While OS threads are managed directly by the operating system and are more resource-intensive, goroutines are efficiently scheduled onto a smaller number of OS threads, making concurrent programming simpler and more scalable.",
    image:
      "https://i.pinimg.com/1200x/eb/47/93/eb4793d4a3078cf4a83b1e521786a1b4.jpg",
  },
  {
    id: 23,
    category: "Systems & Backend Languages (C++ & Go)",
    question:
      "What is the difference between std::unique_ptr and std::shared_ptr in modern C++?",
    answer:
      "std::unique_ptr and std::shared_ptr are smart pointers in modern C++ used for automatic memory management. std::unique_ptr has exclusive ownership of an object, meaning only one pointer can own the object at a time, making it lightweight and efficient. std::shared_ptr allows multiple pointers to share ownership of the same object using reference counting, and the object is automatically deleted when the last shared_ptr is destroyed. Use unique_ptr when a single owner is needed and shared_ptr when shared ownership is required.",
    image:
      "https://i.pinimg.com/736x/51/03/0e/51030edeacb29b2acc44a1916cfba64f.jpg",
  },
  {
    id: 24,
    category: "Systems & Backend Languages (C++ & Go)",
    question: "How do you handle concurrency safely using channels in Go?",
    answer:
      "In Go, you safely handle concurrency by using channels to pass data between goroutines, following the principle: `Do not communicate by sharing memory; instead, share memory by communicating.`` Channels act as synchronized conduits that transfer ownership of data, ensuring that only one goroutine accesses the information at a time and preventing race conditions.",
    image:
      "https://i.pinimg.com/736x/26/4b/01/264b01cfad33738830f719743bfa2297.jpg",
  },

  {
    id: 25,
    category: "Full Stack & Architecture",
    question:
      "What is the difference between REST APIs and GraphQL, and how do you choose between them?",
    answer:
      "REST uses fixed endpoints where clients often suffer from over-fetching or under-fetching, while GraphQL provides a single endpoint and a flexible query language that allows clients to request exactly the data they need. Choose REST for simplicity, standardized caching, and predictable resource-based needs; opt for GraphQL when managing complex data relationships, optimizing network performance, or requiring rapid evolution of data structures.",
    image:
      "https://i.pinimg.com/736x/2f/2e/98/2f2e983937aa7cc4074c5faddf4e7913.jpg",
  },
  {
    id: 26,
    category: "Full Stack & Architecture",
    question:
      "What is the difference between std::unique_ptr and std::shared_ptr in modern C++?",
    answer:
      "In modern C++, the main difference is ownership. std::unique_ptr enforces exclusive ownership (no copies allowed), while std::shared_ptr allows for shared ownership using reference counting.",
    image:
      "https://i.pinimg.com/1200x/3f/b3/4f/3fb34f709b563ca4036796d98c869380.jpg",
  },
  {
    id: 27,
    category: "Full Stack & Architecture",
    question:
      "How do you handle user authentication and authorization securely across a decoupled frontend and backend?",
    answer:
      "Securely manage authentication and authorization in decoupled systems by using JWTs stored in HttpOnly and Secure cookies to mitigate XSS risks, while validating token signatures and embedded roles (RBAC) on the backend for every request. This approach ensures session integrity and strict access control without exposing sensitive credentials to client-side scripts.",
    image:
      "https://i.pinimg.com/736x/8e/3c/89/8e3c89753072073b1a765b006db8a730.jpg",
  },
  {
    id: 28,
    category: "Full Stack & Architecture",
    question:
      "What are the trade-offs between monolithic architectures and microservices?",
    answer:
      "Monoliths offer simplicity in development and deployment but struggle with scaling and coupling, while microservices enable independent scalability and fault isolation at the cost of significantly higher operational complexity.",
    image:
      "https://i.pinimg.com/736x/19/dc/87/19dc87a2639ff03dff299b68a428d1c0.jpg",
  },
  {
    id: 29,
    category: "Full Stack & Architecture",
    question:
      "How do you implement database indexing to optimize slow-running SQL or NoSQL queries?",
    answer:
      "Implement indexes on frequently filtered or joined columns to enable efficient data lookups instead of slow full table scans, while carefully balancing index count to minimize write overhead and always using execution plans to verify performance gains.",
    image:
      "https://i.pinimg.com/736x/fd/d0/9c/fdd09cacc647c7aea8164f0eca7b6b80.jpg",
  },
  {
    id: 30,
    category: "Full Stack & Architecture",
    question:
      "What is the difference between horizontal scaling and vertical scaling for web applications?",
    answer:
      "Vertical scaling adds more power (CPU, RAM) to a single server to handle increased load, while horizontal scaling adds more individual server instances to a cluster to distribute the traffic. Choose vertical scaling for simplicity when your application cannot be easily distributed, but prefer horizontal scaling for high availability, unlimited growth potential, and fault tolerance.",
    image:
      "https://i.pinimg.com/736x/c8/19/68/c81968ba97649f8c668d84e9773aecce.jpg",
  },
];

const KnowledgeBase = () => {
  const [openId, setOpenId] = useState(null);

  // Define Schema outside to keep it clean
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": kbData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Technical Knowledge Base | Yasser Osama</title>
        <meta
          name="description"
          content="Explore Yasser Osama's technical knowledge base featuring expert insights on React, Next.js, Backend architecture, and Blockchain development."
        />
        {/* Corrected path - no double slash */}
        <link rel="canonical" href="https://yasserportofolio.netlify.app/knowledge-base" />
        
        {/* Inject schema via Helmet instead of manual DOM manipulation */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section
        id="knowledge-base"
        className="bg-[#0a0a0a] min-h-screen py-20 px-6 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical <span className="text-cyan-400">Knowledge Base</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {kbData.map((item) => (
              <article // Changed div to article for semantic SEO
                key={item.id}
                className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="w-full h-48 bg-gray-900">
                  <img
                    src={item.image}
                    alt="" // Decorative image, keep alt empty or describe content
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 grow">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    {item.question}
                  </h3>
                </div>
                
                {/* Semantic button with aria controls */}
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  aria-expanded={openId === item.id}
                  aria-controls={`answer-${item.id}`}
                  className="w-full py-3 text-cyan-400 text-sm font-semibold border-t border-white/10 hover:bg-white/5 transition-colors"
                >
                  {openId === item.id ? "Collapse Answer" : "Read Answer"}
                </button>
                
                <div
                  id={`answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ${openId === item.id ? "max-h-40 border-t border-white/10" : "max-h-0"}`}
                >
                  <div className="p-6 text-gray-400 text-sm leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeBase;

