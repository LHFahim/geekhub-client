import React from 'react';

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto space-y-10">
      <section className="space-y-5 border p-5 rounded border-indigo-600 mt-5 ">
        <h1 className="uppercase text-2xl font-bold">what is cors?</h1>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </section>

      <section className="space-y-5 border p-5 rounded border-indigo-600">
        <h1 className="uppercase text-2xl font-bold">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          I am using Google's firebase because it's widely popular. Google
          Firebase offers many features that pitch it as the go-to backend
          development tool for web and mobile apps. It reduces development
          workload and time. And it's a perfect prototyping tool. Firebase is
          simple, lightweight, friendly, and industrially recognized. Some of
          the firebase alternative are: Back4App, Backendless, Kuzzle, Pubnub,
          Kumulos, Appwrite, Deployd, NHost.
        </p>
      </section>
      <section className="space-y-5 border p-5 rounded border-indigo-600">
        <h1 className="uppercase text-2xl font-bold">
          How does the private route work?
        </h1>
        <p>
          The react private route component renders child components (children)
          if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property. PrivateRoute component is the blueprint for all private
          routes in the application. If the user is logged in, go on and display
          the component in question; otherwise, redirect the user to sign-in
          page.
        </p>
      </section>
      <section className="space-y-5 border p-5 rounded border-indigo-600">
        <h1 className="uppercase text-2xl font-bold">
          What is Node? How does Node work?
        </h1>
        <p>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
        </p>
      </section>
    </div>
  );
};

export default Blog;

// 4.1 what is cors?

// 4.2 Why are you using firebase? What other options do you have to implement authentication?

// 4.3 How does the private route work?

// 4.4 What is Node? How does Node work?
