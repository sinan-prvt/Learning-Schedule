export const week9 = {
  id: "W9",
  title: "React Mastery",
  days: [
    {
      day_number: 1,
      topic: "Hooks Deep Dive",
      category: "React",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "useEffect Mastery", description: "Dependencies, cleanup functions, and avoiding infinite loops." },
        { time: "11:00 AM", title: "useMemo & useCallback", description: "Optimizing Performance by memoizing values and functions." },
        { time: "01:00 PM", title: "useRef & DOM Access", description: "Storing persistent values and interacting with browser APIs directly." },
        { time: "03:00 PM", title: "useReducer for Complex State", description: "When to choose useReducer over multiple useState hooks." },
        { time: "05:00 PM", title: "Standard Hook Best Practices", description: "Rules of hooks and common pitfalls in functional components." }
      ],
      quiz: [
        { text: "Which hook is used to perform side effects?", options: ["useState", "useEffect", "useMemo", "useContext"], correct: 1 },
        { text: "What is the second argument of useEffect?", options: ["The cleanup function", "An array of dependencies", "The component name", "None"], correct: 1 },
        { text: "An empty dependency array [] in useEffect means ___.", options: ["Run on every render", "Run only once on mount", "Error out", "Run only on unmount"], correct: 1 },
        { text: "Which hook returns a memoized version of a callback function?", options: ["useMemo", "useCallback", "useRef", "useState"], correct: 1 },
        { text: "Which hook returns a memoized value?", options: ["useMemo", "useCallback", "useRef", "useState"], correct: 0 },
        { text: "useRef values trigger a re-render when changed.", options: ["True", "False"], correct: 1 },
        { text: "How do you access the current value of a ref?", options: ["ref.val", "ref.current", "ref.value", "ref.get()"], correct: 1 },
        { text: "useReducer is typically used for ___.", options: ["Storing simple strings", "Managing complex state logic involving multiple sub-values", "Routing", "None"], correct: 1 },
        { text: "The cleanup function in useEffect runs ___.", options: ["Before the next effect runs", "When the component unmounts", "Both A and B", "Never"], correct: 2 },
        { text: "Which hook is best for storing a DOM element reference?", options: ["useState", "useRef", "useEffect", "useMemo"], correct: 1 },
        { text: "What is 'Memoization'?", options: ["Deleting memory", "Caching results of expensive function calls", "Managing state", "None"], correct: 1 },
        { text: "Can you call hooks inside a loop or condition?", options: ["Yes", "No (Rules of Hooks)", "Only in dev", "Only for IDs"], correct: 1 },
        { text: "useLayoutEffect runs ___.", options: ["After a delay", "Synchronously after all DOM mutations", "On the server", "None"], correct: 1 },
        { text: "Which hook allows you to use state in a functional component?", options: ["useState", "useClass", "useEffect", "useLogic"], correct: 0 },
        { text: "What happens if you omit the dependency array in useEffect?", options: ["It runs only on mount", "It runs after every render", "It causes an error", "It never runs"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What are React Hooks?", a: "Functions that allow you to 'hook into' React state and lifecycle features from functional components.", type: "Conceptual" },
        { level: "Junior", q: "What is useEffect used for?", a: "For handling side effects like data fetching, manual DOM manipulations, or subscriptions.", type: "Conceptual" },
        { level: "Junior", q: "Why do we need a cleanup function in useEffect?", a: "To clear timers, cancel network requests, or unsubscribe from events to prevent memory leaks.", type: "Conceptual" },
        { level: "Mid", q: "Difference between useMemo and useCallback?", a: "useMemo returns a memoized VALUE. useCallback returns a memoized CALLBACK function.", type: "Conceptual" },
        { level: "Mid", q: "When would you use useReducer instead of useState?", a: "When the state logic is complex, has multiple sub-values, or when the next state depends on the previous one.", type: "Conceptual" },
        { level: "Mid", q: "What is the difference between useRef and useState?", a: "useState triggers a re-render on change; useRef does not. Use useRef for values that don't affect the UI directly.", type: "Conceptual" },
        { level: "Mid", q: "Explain the Rules of Hooks.", a: "1. Only call hooks at the top level. 2. Only call hooks from React functional components or custom hooks.", type: "Conceptual" },
        { level: "Senior", q: "How would you optimize a component that re-renders too often?", a: "Using React.memo for the component, and useMemo/useCallback for the props being passed to it.", type: "Scenario" },
        { level: "Senior", q: "Explain the 'stale closure' problem with useEffect.", a: "When a hook captures a variable from an old render because it wasn't included in the dependency array.", type: "Conceptual" },
        { level: "Senior", q: "What is the difference between useEffect and useLayoutEffect?", a: "useEffect is asynchronous and runs after the browser paints. useLayoutEffect is synchronous and runs before the browser paints.", type: "Conceptual" },
        { level: "Senior", q: "How would you implement a custom 'usePrevious' hook using useRef?", a: "By using a ref to store the value of the previous render inside a useEffect.", type: "Coding" },
        { level: "Senior", q: "Why is 'exhaust-deps' linting important?", a: "It ensures that the effect stays in sync with any props or state it uses, avoiding difficult-to-debug logic errors.", type: "Scenario" }
      ]
    },
    {
      day_number: 2,
      topic: "Custom Hooks",
      category: "React",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Extracting Logic to Custom Hooks", description: "Making code reusable by separating stateful logic from UI." },
        { time: "11:00 AM", title: "Naming & Conventions", description: "Why custom hooks must start with 'use' and where to store them." },
        { time: "01:00 PM", title: "Building a useFetch Hook", description: "Abstracting data fetching, loading, and error states." },
        { time: "03:00 PM", title: "Building a useLocalStorage Hook", description: "Syncing component state with browser storage automatically." },
        { time: "05:00 PM", title: "Composing Multiple Hooks", description: "Sharing logic between custom hooks and maintaining clean APIs." }
      ],
      quiz: [
        { text: "What prefix must every custom hook have?", options: ["get", "util", "use", "react"], correct: 2 },
        { text: "A custom hook is a ___.", options: ["Class", "Standard Python function", "A Javascript function that calls other hooks", "A CSS file"], correct: 2 },
        { text: "Do custom hooks share state between components?", options: ["Yes", "No (they only share logic; each instance has its own state)", "Only in dev", "Only for IDs"], correct: 1 },
        { text: "Where should you store custom hooks?", options: ["In /models", "In /hooks", "In /styles", "In index.html"], correct: 1 },
        { text: "Can a custom hook return a JSX element?", options: ["Yes, but it's usually better to return data", "No", "Only for IDs", "None"], correct: 0 },
        { text: "Custom hooks allow for better ___.", options: ["Database speed", "Code reuse and readability", "CSS styling", "None"], correct: 1 },
        { text: "Which hook would you use inside a useLocalStorage hook?", options: ["useEffect and useState", "useHistory", "useParams", "None"], correct: 0 },
        { text: "Can you use one custom hook inside another?", options: ["Yes", "No", "Only in latest React", "None"], correct: 0 },
        { text: "A custom hook must return an array.", options: ["True", "False (it can return anything: object, array, value)", "Only in dev", "None"], correct: 1 },
        { text: "Custom hooks are automatically updated by React.", options: ["True", "False"], correct: 0 },
        { text: "To handle an API call in a hook, use ___.", options: ["useEffect", "useRouter", "useID", "None"], correct: 0 },
        { text: "Why use custom hooks instead of standard utility functions?", options: ["They are faster", "They can hold state and trigger re-renders", "They are easier to name", "None"], correct: 1 },
        { text: "What is the main benefit of useFetch hook?", options: ["Speeds up internet", "Avoids repeating loading/error state logic in every component", "Encrypts data", "None"], correct: 1 },
        { text: "Rules of Hooks apply to custom hooks too.", options: ["True", "False"], correct: 0 },
        { text: "Custom hooks are a bridge between ___ and ___.", options: ["UI and Data logic", "Database and CSS", "Browser and OS", "None"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is a custom hook?", a: "A JavaScript function whose name starts with 'use' and that can call other hooks.", type: "Conceptual" },
        { level: "Junior", q: "Why use custom hooks?", a: "To extract component logic into reusable functions, keeping components clean and focused on UI.", type: "Conceptual" },
        { level: "Junior", q: "Does every instance of a custom hook share the same state?", a: "No. Each time you use a custom hook, all state and effects inside of it are completely isolated.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle a generic useFetch hook error state?", a: "By returning an error object or message from the hook and using it in the component to show a UI alert.", type: "Coding" },
        { level: "Mid", q: "What should a custom hook return?", a: "Anything needed by the component. Usually an array for Destructuring (like useState) or an object (like useForm).", type: "Conceptual" },
        { level: "Mid", q: "How would you build a useWindowSize hook?", a: "By adding a listener to the 'resize' event in a useEffect and storing the width/height in a useState.", type: "Coding" },
        { level: "Mid", q: "Explain the benefit of custom hooks for testing.", a: "You can test the logic of the hook separately from the UI components using libraries like @testing-library/react-hooks.", type: "Scenario" },
        { level: "Senior", q: "How do you ensure a custom hook is performant?", a: "By using useMemo and useCallback internally to prevent unnecessary downstream re-renders for components consuming the hook.", type: "Scenario" },
        { level: "Senior", q: "Explain the use of 'refs' inside custom hooks.", a: "Refs can be used to track if a component is still mounted before updating state in an async callback to avoid errors.", type: "Scenario" },
        { level: "Senior", q: "How would you implement a useDebounce hook?", a: "By using a useEffect that sets a timeout to update the debounced value, and clearing that timeout on cleanup/value change.", type: "Coding" },
        { level: "Senior", q: "When is logic 'complex' enough to warrant a custom hook?", a: "If it's used in 2+ components or if it takes up more than 10-15 lines of state/effect logic in a single component.", type: "Scenario" },
        { level: "Senior", q: "How does React distinguish a custom hook from a regular function?", a: "It mainly relies on the 'use' naming convention for linting and enforcing the Rules of Hooks.", type: "Conceptual" }
      ]
    },
    {
      day_number: 3,
      topic: "Context API & State Management",
      category: "React",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to Context API", description: "Solving 'Prop Drilling' problems by sharing data globally." },
        { time: "11:00 AM", title: "Context Providers & Consumers", description: "Wrapping the app and accessing data with the useContext hook." },
        { time: "01:00 PM", title: "Context vs State Management Libraries", description: "When to use Context vs Redux/Zustand." },
        { time: "03:00 PM", title: "Performance: Avoiding Context Over-renders", description: "Splitting context and memoizing provider values." },
        { time: "05:00 PM", title: "Building a Theme Switcher", description: "Practical example of global state management using Context." }
      ],
      quiz: [
        { text: "What is Prop Drilling?", options: ["A performance tool", "Passing data through multiple levels of components that don't need it", "A CSS technique", "None"], correct: 1 },
        { text: "Which function creates a new Context?", options: ["initContext()", "createContext()", "newContext()", "setContext()"], correct: 1 },
        { text: "Which component provides the context to children?", options: ["Consumer", "Supplier", "Provider", "Parent"], correct: 2 },
        { text: "How do you consume a context in functional components?", options: ["useContext()", "getContext()", "withContext()", "readContext()"], correct: 0 },
        { text: "Can you have multiple Contexts in one app?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "What happens to the children when the Context value changes?", options: ["Nothing", "They all re-render", "They are deleted", "None"], correct: 1 },
        { text: "Context is ideal for ___.", options: ["Forms", "Theme, Authenticated User, Localization", "Animation states", "None"], correct: 1 },
        { text: "Where should the Provider usually be placed?", options: ["At the bottom of the component tree", "Near the root of the component tree", "Inside every leaf component", "None"], correct: 1 },
        { text: "Which hook is often paired with Context for complex updates?", options: ["useMemo", "useReducer", "useHistory", "None"], correct: 1 },
        { text: "Context API is part of React core.", options: ["True", "False"], correct: 0 },
        { text: "Does Context replace Redux in every situation?", options: ["Yes", "No", "Only for IDs", "None"], correct: 1 },
        { text: "Which prop is passed to the Provider to share a value?", options: ["data", "value", "state", "props"], correct: 1 },
        { text: "To avoid re-rendering entire trees, you should ___.", options: ["Use only one context", "Split context into smaller pieces", "Stop using state", "None"], correct: 1 },
        { text: "The default value of createContext() is used when ___.", options: ["Always", "No provider is found in the tree", "Data is loading", "None"], correct: 1 },
        { text: "Consumer component is the only way to read context today.", options: ["True", "False (useContext is preferred)", "Only in dev", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is the React Context API?", a: "A way for a React app to effectively produce global variables that can be passed around without passing props manually at every level.", type: "Conceptual" },
        { level: "Junior", q: "What is 'Prop Drilling'?", a: "The process of passing data through several layers of components just to get it down to a deep child component.", type: "Conceptual" },
        { level: "Junior", q: "How do you use the useContext hook?", a: "By importing the hook and the Context object, then calling 'useContext(MyContext)' inside the component.", type: "Coding" },
        { level: "Mid", q: "When should you use Context over Redux?", a: "For simple global state like themes or user authentication. Use Redux for complex, high-frequency state changes or when you need advanced debugging tools.", type: "Conceptual" },
        { level: "Mid", q: "What are the performance downsides of Context?", a: "Every component consuming a context will re-render whenever the context value changes, which can be inefficient for large trees.", type: "Conceptual" },
        { level: "Mid", q: "How do you prevent unnecessary re-renders in Context?", a: "By splitting contexts, using useMemo for the value object, or using memoization on the children components.", type: "Scenario" },
        { level: "Mid", q: "Can you update a context value from a child component?", a: "Yes, by passing an update function (e.g., from useState) into the context value itself.", type: "Coding" },
        { level: "Senior", q: "Explain the 'Context Provider Pattern'.", a: "Creating a custom wrapper component that contains the state logic and the Provider, exposing only the necessary data and actions via the Context.", type: "Conceptual" },
        { level: "Senior", q: "What is the difference between the 'default value' in createContext and the 'value' prop in the Provider?", a: "The default value is used only when a component is not wrapped in a Provider. The 'value' prop is the actual live data shared with children.", type: "Conceptual" },
        { level: "Senior", q: "How would you implement a global Toast/Notification system using Context?", a: "By creating a NotificationProvider that manages a list of messages and provides a 'showNotification' function via Context.", type: "Scenario" },
        { level: "Senior", q: "Why is it often better to split 'State' and 'Dispatch' contexts?", a: "So that components only needing to trigger actions (dispatch) don't re-render when the actual state values change.", type: "Scenario" },
        { level: "Senior", q: "How does React Context interact with Server-Side Rendering (SSR)?", a: "It works well, but the provider must be initialized on the server and its state serialized for hydration on the client.", type: "Conceptual" }
      ]
    },
    {
      day_number: 4,
      topic: "React Router",
      category: "React",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Routing Fundamentals", description: "Configuring BrowserRouter, Routes, and Route for SPA navigation." },
        { time: "11:00 AM", title: "Dynamic Routing & Params", description: "Using useParams to capture dynamic IDs from the URL." },
        { time: "01:00 PM", title: "Navigation & Links", description: "Using Link and useNavigate to move between pages without reloading." },
        { time: "03:00 PM", title: "Nested Routes & Outlets", description: "Creating layouts with sub-routes using the <Outlet /> component." },
        { time: "05:00 PM", title: "Protected Routes", description: "Implementing authentication guards for specific routes." }
      ],
      quiz: [
        { text: "Which library is most common for React routing?", options: ["React Router", "NavigateJS", "RouteBuilder", "None"], correct: 0 },
        { text: "Which wrapper component must surround the entire app?", options: ["Routes", "BrowserRouter", "Link", "RouterHub"], correct: 1 },
        { text: "Which component defines an individual route?", options: ["Path", "Route", "Link", "View"], correct: 1 },
        { text: "How do you go to a URL without a click in v6?", options: ["useHistory.push()", "useNavigate()", "window.go()", "None"], correct: 1 },
        { text: "Which component is used for relative links without page reloads?", options: ["<a>", "<Link>", "<Nav>", "<Url>"], correct: 1 },
        { text: "How do you access a dynamic parameter like /user/:id?", options: ["useParams()", "useID()", "useRoute()", "None"], correct: 0 },
        { text: "Which component renders sub-routes in a layout?", options: ["<Sub />", "<Outlet />", "<Child />", "<Stage />"], correct: 1 },
        { text: "The '*' path in a route is used for ___.", options: ["Search", "404 Not Found pages", "Linking", "None"], correct: 1 },
        { text: "How do you read query strings like ?search=name?", options: ["useQuery()", "useSearchParams()", "useParams()", "None"], correct: 1 },
        { text: "NavLink provides an 'active' state for styling.", options: ["True", "False"], correct: 0 },
        { text: "Is dynamic routing supported in React Router v6?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "What is a 'Programmatic Navigation'?", options: ["Using a Link", "Using code (like after a form submit) to redirect", "Manual URL entry", "None"], correct: 1 },
        { text: "What is the 'element' prop in <Route /> for?", options: ["Setting CSS", "The component to render", "Naming", "None"], correct: 1 },
        { text: "Can you nest routes inside each other?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "Which hook is used for reading current location/path?", options: ["usePath()", "useLocation()", "useNav()", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is React Router?", a: "A library for routing in React web applications, allowing navigation between components without page reloads.", type: "Conceptual" },
        { level: "Junior", q: "Difference between Link and <a> tag?", a: "<Link> prevents a full page reload and instead updates the component tree using the history API.", type: "Conceptual" },
        { level: "Junior", q: "How do you create a 404 page?", a: "By adding a <Route path='*' element={<NotFound />} /> at the end of your routes list.", type: "Coding" },
        { level: "Mid", q: "How do you handle dynamic parameters?", a: "By using the ':' syntax in the route path (e.g., /user/:id) and the useParams() hook in the component.", type: "Conceptual" },
        { level: "Mid", q: "Explain the useNavigate hook.", a: "It returns a function that allows you to programmatically navigate the user to different routes (e.g., after a login).", type: "Conceptual" },
        { level: "Mid", q: "What is an <Outlet />?", a: "A component that should be used in parent route elements to render their child route elements.", type: "Conceptual" },
        { level: "Mid", q: "Explain the difference between useParams and useSearchParams.", a: "useParams is for dynamic segments in the URL path. useSearchParams is for query parameters (?key=value).", type: "Conceptual" },
        { level: "Senior", q: "How do you implement a 'Protected Route'?", a: "By creating a wrapper component that checks for an authentication token; if exists, it renders the <Outlet />, otherwise it redirects to /login.", type: "Scenario" },
        { level: "Senior", q: "What is 'Code Splitting' with React Router?", a: "Using React.lazy() and Suspense to only load the code for the route the user is currently visiting, improving initial load speed.", type: "Scenario" },
        { level: "Senior", q: "Explain the 'Data Loader' feature in React Router 6.4+.", a: "It allows fetching route-specific data before the component even starts rendering, leading to faster user experiences.", type: "Conceptual" },
        { level: "Senior", q: "What is the benefit of the 'index' route?", a: "It defines the default child route to render within an Outlet when the parent path is matched exactly.", type: "Conceptual" },
        { level: "Senior", q: "How do you handle 'Breadcrumbs' dynamically?", a: "By using useLocation to parse the current path and mapping the segments to display a navigation trail.", type: "Scenario" }
      ]
    },
    {
      day_number: 5,
      topic: "Performance & Design Systems",
      category: "React",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "React.memo & Memoization", description: "Preventing functional components from re-rendering unless props change." },
        { time: "11:00 AM", title: "Windowing & Virtualization", description: "Rendering large lists efficiently using react-window." },
        { time: "01:00 PM", title: "CSS-in-JS vs CSS Modules", description: "Organizing styles for large-scale production applications." },
        { time: "03:00 PM", title: "Atomic Design Principles", description: "Structuring components as atoms, molecules, organisms, and pages." },
        { time: "05:00 PM", title: "Component Libraries", description: "Leveraging MUI, Radix, or Shadcn/ui for fast UI development." }
      ],
      quiz: [
        { text: "Which function wraps a component to prevent re-renders?", options: ["useMemo", "React.memo", "useEffect", "None"], correct: 1 },
        { text: "What is 'Virtualization' in lists?", options: ["Deleting items", "Rendering only the visible items in the viewport", "Adding 3D effects", "None"], correct: 1 },
        { text: "Atomic Design defines components as ___.", options: ["Files", "Atoms, Molecules, Organisms", "Rows and Columns", "None"], correct: 1 },
        { text: "React.memo compares which values by default?", options: ["Deep equality", "Shallow equality of props", "IDs only", "None"], correct: 1 },
        { text: "Which library is popular for 'Headless' UI components?", options: ["MUI", "Radix UI", "Bootstrap", "None"], correct: 1 },
        { text: "CSS Modules help to ___.", options: ["Write CSS faster", "Scope CSS locally to a component automatically", "Animate", "None"], correct: 1 },
        { text: "Code splitting is done using ___.", options: ["split()", "React.lazy() and Suspense", "for loop", "None"], correct: 1 },
        { text: "The 'Profiler' tool is used for ___.", options: ["Storage", "Measuring component rendering performance", "Security", "None"], correct: 1 },
        { text: "A 'Design System' is a/an ___.", options: ["Color palette only", "Comprehensive set of reusable components and standards", "Adobe file", "None"], correct: 1 },
        { text: "Lighthouse is used for ___.", options: ["Writing code", "Auditing web performance, accessibility, and SEO", "Debugging Python", "None"], correct: 1 },
        { text: "___ is a popular utility-first CSS framework.", options: ["Tailwind CSS", "MUI", "Sass", "None"], correct: 0 },
        { text: "What is a 'Fragment' in React?", options: ["A broken part", "A way to group children without adding a node to the DOM", "A type of state", "None"], correct: 1 },
        { text: "Error Boundaries help to ___.", options: ["Prevent code from running", "Catch JS errors in children and show a fallback UI", "Fix bugs", "None"], correct: 1 },
        { text: "Can you use React.memo and useMemo together?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "Which hook helps to skip expensive calculations on every render?", options: ["useEffect", "useMemo", "useState", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is React.memo?", a: "A higher-order component that memoizes the result of a functional component based on its props.", type: "Conceptual" },
        { level: "Junior", q: "What is a 'Pure Component' in React?", a: "A component that renders the same output given the same props and state, usually optimized for performance.", type: "Conceptual" },
        { level: "Junior", q: "Why use fragments (<>...</>)?", a: "To group multiple elements without adding unnecessary extra wrappers to the HTML DOM.", type: "Conceptual" },
        { level: "Mid", q: "Explain 'Code Splitting'.", a: "The process of splitting your application code into smaller chunks that can be loaded on demand, reducing the initial load time.", type: "Conceptual" },
        { level: "Mid", q: "When would you use React.lazy()?", a: "For large components like complex graphs or entire pages (routes) that aren't needed immediately upon app startup.", type: "Scenario" },
        { level: "Mid", q: "What is 'Atomic Design' in React?", a: "A methodology for building design systems by breaking components down into Atoms (buttons), Molecules (search bars), and Organisms (headers).", type: "Conceptual" },
        { level: "Mid", q: "Explain CSS Modules.", a: "A way to write CSS files where all class names are scoped locally to the component that imports them by default.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle rendering a list of 10,000 items?", a: "By using 'Windowing' or 'Virtualization' (e.g., react-window) so only the 10-20 visible items are rendered in the DOM.", type: "Scenario" },
        { level: "Senior", q: "What is an Error Boundary?", a: "A React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the whole app.", type: "Conceptual" },
        { level: "Senior", q: "Difference between Tailwind CSS and Styled Components?", a: "Tailwind uses utility classes in HTML. Styled Components uses CSS-in-JS with actual CSS syntax inside template literals.", type: "Conceptual" },
        { level: "Senior", q: "How do you measure performance bottlenecks in a React app?", a: "Using the React DevTools Profiler to identify which components are re-rendering and how long it takes.", type: "Scenario" },
        { level: "Senior", q: "What is 'Tree Shaking'?", a: "A build-step optimization that removes unused code (dead code) from the final bundle to reduce its size.", type: "Conceptual" }
      ]
    }
  ]
};
