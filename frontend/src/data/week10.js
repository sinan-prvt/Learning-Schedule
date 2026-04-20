export const week10 = {
  id: "W10",
  title: "Redux Toolkit & RTK Query",
  days: [
    {
      day_number: 1,
      topic: "Redux Foundations & Store Setup",
      category: "Redux",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to Global State", description: "Why we need Redux and the 'Single Source of Truth' principle." },
        { time: "11:00 AM", title: "Redux Toolkit (RTK) vs Legacy Redux", description: "Why RTK is the modern standard (less boilerplate, Immer integration)." },
        { time: "01:00 PM", title: "Configuring the Store", description: "Using configureStore to set up the central app state." },
        { time: "03:00 PM", title: "The Provider Component", description: "Wrapping the React app to enable Redux access globally." },
        { time: "05:00 PM", title: "Redux DevTools", description: "Debugging state changes and time-traveling through actions." }
      ],
      quiz: [
        { text: "What is Redux?", options: ["A database", "A global state management library", "A routing tool", "None"], correct: 1 },
        { text: "Redux follows the '___ Source of Truth' principle.", options: ["Multiple", "Single", "Dynamic", "Shared"], correct: 1 },
        { text: "Which library is the modern way to write Redux?", options: ["Redux Classic", "Redux Toolkit (RTK)", "Redux Lite", "None"], correct: 1 },
        { text: "Which function is used to create the Redux store in RTK?", options: ["createStore()", "configureStore()", "initStore()", "setStore()"], correct: 1 },
        { text: "Which component makes the store available to React?", options: ["<Store />", "<Provider />", "<Context />", "<Redux />"], correct: 1 },
        { text: "RTK includes which library for 'mutable' state logic?", options: ["Axios", "Immer", "Lodash", "None"], correct: 1 },
        { text: "What is an 'Action' in Redux?", options: ["A function", "A plain object describing a change", "A CSS style", "None"], correct: 1 },
        { text: "What is a 'Reducer'?", options: ["A tool to shrink files", "A function that determines how state changes based on an action", "A button", "None"], correct: 1 },
        { text: "State in Redux is intended to be ___.", options: ["Mutable", "Immutable", "Deleted", "None"], correct: 1 },
        { text: "Redux DevTools allows you to ___.", options: ["Write code", "Inspect state and time-travel through actions", "Encrypt data", "None"], correct: 1 },
        { text: "The first argument of configureStore is usually ___.", options: ["The store name", "The reducer object", "A list of users", "None"], correct: 1 },
        { text: "Redux is only for React.", options: ["True", "False (it's framework-agnostic)", "Only for IDs", "None"], correct: 1 },
        { text: "How many Stores should a Redux app have?", options: ["One", "One per component", "Two", "Unlimited"], correct: 0 },
        { text: "What is meant by 'Boilerplate' in Redux?", options: ["Fast code", "Repetitive code needed to set up a feature", "A server template", "None"], correct: 1 },
        { text: "Can you pass the store directly to props in every component?", options: ["Yes", "No (use Provider and hooks instead)", "Only in dev", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is Redux?", a: "A predictable state container for JavaScript apps, commonly used with React to manage global state.", type: "Conceptual" },
        { level: "Junior", q: "Why use Redux instead of Context API?", a: "Redux is better for high-frequency updates, complex state logic, and provides powerful debugging tools (DevTools).", type: "Conceptual" },
        { level: "Junior", q: "What is a Reducer?", a: "A pure function that takes the current state and an action, and returns the next state.", type: "Conceptual" },
        { level: "Mid", q: "What is Redux Toolkit (RTK)?", a: "The official, opinionated, batteries-included toolset for efficient Redux development, designed to reduce boilerplate.", type: "Conceptual" },
        { level: "Mid", q: "How does RTK simplify Redux?", a: "It provides configureStore(), createSlice(), and automatic setup of middleware like Redux Thunk and DevTools.", type: "Conceptual" },
        { level: "Mid", q: "What is an Action Creator?", a: "A function that returns an action object (with type and payload properties).", type: "Conceptual" },
        { level: "Mid", q: "Explain the 'Single Source of Truth'.", a: "The entire state of your application is stored in an object tree within a single store.", type: "Conceptual" },
        { level: "Senior", q: "How does Immer work inside Redux Toolkit?", a: "It allows you to write 'mutative' code (like state.value = x) which is then translated into safe, immutable updates automatically.", type: "Conceptual" },
        { level: "Senior", q: "What are the benefits of using configureStore?", a: "It automatically combines reducers, adds useful middleware (like thunk), and enables the Redux DevTools extension.", type: "Conceptual" },
        { level: "Senior", q: "When should you NOT use Redux?", a: "If the state is local to a single component or if the application is simple enough that Prop Drilling or Context API is sufficient.", type: "Scenario" },
        { level: "Senior", q: "How do you handle multiple reducers in configureStore?", a: "By passing them as an object to the 'reducer' parameter; RTK calls combineReducers under the hood.", type: "Coding" },
        { level: "Senior", q: "How does Redux ensure predictability?", a: "By enforcing that state is read-only and that changes are made only via pure functions (reducers).", type: "Conceptual" }
      ]
    },
    {
      day_number: 2,
      topic: "Slices & Reducers",
      category: "Redux",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "The createSlice API", description: "Combining initial state, reducers, and actions into one logic bundle." },
        { time: "11:00 AM", title: "Writing Reducer Logic", description: "Handling payloads and updating state objects/arrays." },
        { time: "01:00 PM", title: "Actions & Payloads", description: "Dispatching data to the store and accessing it in the reducer." },
        { time: "03:00 PM", title: "Immutability with Immer", description: "Understanding why we can now 'mutate' state safely in RTK slices." },
        { time: "05:00 PM", title: "Exporting Actions & Reducers", description: "Connecting your slice to the store and the UI." }
      ],
      quiz: [
        { text: "Which RTK function creates slice-based logic?", options: ["createStore", "createSlice", "createReducer", "none"], correct: 1 },
        { text: "A Slice contains ___.", options: ["Initial state", "Reducers", "Actions", "All of the above"], correct: 3 },
        { text: "Which property in createSlice defines the slice name?", options: ["name", "id", "title", "key"], correct: 0 },
        { text: "The 'reducers' object contains ___.", options: ["Database tables", "Functions that handle state updates", "CSS", "None"], correct: 1 },
        { text: "In an RTK reducer, you can write state.push(). This is safe because of ___.", options: ["React", "Immer", "Axios", "None"], correct: 1 },
        { text: "Where do you define the starting value of the state?", options: ["startState", "initialState", "defaultState", "None"], correct: 1 },
        { text: "Action creators are ___ generated by createSlice.", options: ["Manually", "Automatically", "Never", "None"], correct: 1 },
        { text: "How do you access the data sent with an action?", options: ["action.data", "action.payload", "action.item", "action.body"], correct: 1 },
        { text: "Should you perform side effects (like fetch) inside a Reducer?", options: ["Yes", "No (Reducers must be pure)", "Only for IDs", "None"], correct: 1 },
        { text: "What part of the slice should be exported to the store?", options: ["slice.actions", "slice.reducer", "slice.state", "None"], correct: 1 },
        { text: "createSlice replaces the need for ___.", options: ["Switch statements", "Constants for action types", "Manual action creators", "All of the above"], correct: 3 },
        { text: "What is a 'Pure Function'?", options: ["A fast function", "A function that returns the same output for same input and has no side effects", "A clean code", "None"], correct: 1 },
        { text: "Can you have async logic in a standard reducer?", options: ["Yes", "No", "Only in dev", "None"], correct: 1 },
        { text: "State updates in Redux are ___.", options: ["Synchronous", "Asynchronous", "Random", "None"], correct: 0 },
        { text: "A Slice represents a ___ of your application state.", options: ["Page", "Feature / Domain", "Button", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is createSlice in Redux Toolkit?", a: "A function that accepts a name, initial state, and an object of reducer functions, and automatically generates action creators and action types.", type: "Conceptual" },
        { level: "Junior", q: "What is the second argument to a reducer function in a slice?", a: "The 'action' object, which typically contains a 'payload' with new data.", type: "Conceptual" },
        { level: "Junior", q: "Why is 'initialState' required?", a: "To define the shape and starting values of that part of the store before any actions are dispatched.", type: "Conceptual" },
        { level: "Mid", q: "How does RTK use Immer internally?", a: "Immer tracks 'mutations' to a draft state and produces a new, immutable state from those changes.", type: "Conceptual" },
        { level: "Mid", q: "What are 'Action Creators' in RTK?", a: "Functions generated by createSlice (e.g., mySlice.actions.increment) that you call to create an action object for dispatching.", type: "Conceptual" },
        { level: "Mid", q: "Can one slice's reducer react to another slice's action?", a: "Yes, by using the 'extraReducers' property in createSlice.", type: "Conceptual" },
        { level: "Mid", q: "Explain 'payload' in Redux actions.", a: "It's the standard property name in an action object used to carry data (like a user object or an ID) to the reducer.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a complex update of a nested object in a reducer?", a: "In RTK, you simply drill down into the object (state.user.profile.name = 'New Name') and let Immer handle the rest.", type: "Coding" },
        { level: "Senior", q: "What is the difference between 'reducers' and 'extraReducers'?", a: "Reducers are for actions defined within the slice. extraReducers are for actions defined elsewhere (like other slices or thunks).", type: "Conceptual" },
        { level: "Senior", q: "Why should reducers remain pure?", a: "To ensure predictability, enable time-travel debugging, and make state changes easy to test.", type: "Conceptual" },
        { level: "Senior", q: "How do you handle a toggle state (e.g., light/dark mode) efficiently in a slice?", a: "state.mode = state.mode === 'light' ? 'dark' : 'light'.", type: "Coding" },
        { level: "Senior", q: "Can you return a completely new state object from an RTK reducer?", a: "Yes, if you return a value, it replaces the entire state. If you mutate the draft, you shouldn't return anything.", type: "Conceptual" }
      ]
    },
    {
      day_number: 3,
      topic: "Selectors & Dispatching",
      category: "Redux",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "useSelector Hook", description: "Extracting specific bits of data from the store for your components." },
        { time: "11:00 AM", title: "useDispatch Hook", description: "Getting the dispatch function to send actions to the store." },
        { time: "01:00 PM", title: "Performance with Selectors", description: "How useSelector determines when a component needs to re-render." },
        { time: "03:00 PM", title: "Derived State with Selectors", description: "Calculating values (like filter totals) within the selector." },
        { time: "05:00 PM", title: "Memoized Selectors (Reselect)", description: "Ensuring complex state derivations don't run more than necessary with createSelector." }
      ],
      quiz: [
        { text: "Which hook is used to read data from the store?", options: ["useStore", "useSelector", "useData", "none"], correct: 1 },
        { text: "Which hook is used to send actions to the store?", options: ["useDispatch", "useSend", "useAction", "none"], correct: 0 },
        { text: "The argument of useSelector is a ___.", options: ["String", "Selector function", "Number", "Array"], correct: 1 },
        { text: "When does a component using useSelector re-render?", options: ["Every second", "Whenever the store changes at all", "When the selected data changes", "None"], correct: 2 },
        { text: "How do you call an action named 'increment'?", options: ["dispatch(increment())", "increment()", "send(increment)", "None"], correct: 0 },
        { text: "useSelector performs a/an ___ comparison by default.", options: ["Deep", "Identity / Strict Equality (===)", "Regex", "None"], correct: 1 },
        { text: "Where should you write logic to filter a list from the store?", options: ["In the component JSX", "In a Selector function", "In the reducer", "None"], correct: 1 },
        { text: "What is a 'Derived State'?", options: ["A broken state", "Values calculated based on state (e.g., item count)", "The initial state", "None"], correct: 1 },
        { text: "Which library is used by RTK for memoized selectors?", options: ["Axios", "Reselect", "Lodash", "None"], correct: 1 },
        { text: "A selector function receives which argument?", options: ["The dispatch function", "The entire state object", "The payload", "None"], correct: 1 },
        { text: "useDispatch doesn't take any arguments.", options: ["True", "False"], correct: 0 },
        { text: "Can you use multiple useSelector hooks in one component?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "Selectors improve component ___.", options: ["Styling", "Decoupling and Performance", "Database speed", "None"], correct: 1 },
        { text: "What is createSelector used for?", options: ["Creating actions", "Creating memoized selectors for performance", "Creating slices", "None"], correct: 1 },
        { text: "Can you call dispatch inside a useEffect?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is useSelector?", a: "A hook that allows your React components to read data from the Redux store.", type: "Conceptual" },
        { level: "Junior", q: "What is useDispatch?", a: "A hook that returns a reference to the dispatch function from the Redux store, used to send actions.", type: "Conceptual" },
        { level: "Junior", q: "How do you dispatch an action with a payload?", a: "By calling dispatch(actionCreator(data)).", type: "Coding" },
        { level: "Mid", q: "How does useSelector optimize performance?", a: "It compares the result of the selector function with the previous result using strict equality (===). If they are the same, it doesn't re-render.", type: "Conceptual" },
        { level: "Mid", q: "What is a Selector function?", a: "A function that takes the entire Redux state as an argument and returns a specific piece of it.", type: "Conceptual" },
        { level: "Mid", q: "Difference between useSelector(state => state.user) and useSelector(state => state.user.name)?", a: "The first re-renders if ANY field in user changes. The second ONLY re-renders if 'name' specifically changes.", type: "Conceptual" },
        { level: "Mid", q: "Why use 'createSelector' from RTK/Reselect?", a: "To create memoized selectors that only re-calculate their output if the input state slices have changed, protecting performance for expensive derivations.", type: "Conceptual" },
        { level: "Senior", q: "Explain the 'Identity Reference' issue with useSelector.", a: "If your selector returns a new object/array every time (e.g., using .filter()), it will trigger a re-render on every store change unless memoized.", type: "Scenario" },
        { level: "Senior", q: "How do you handle parameterized selectors (selectors with arguments)?", a: "By creating a factory function or using a memoized selector creator that accepts the parameter (like an ID).", type: "Coding" },
        { level: "Senior", q: "Wait, can I use regular state logic (useState) alongside Redux?", a: "Yes. Use Redux for global/shared data. Use useState for UI-specific state (like 'isModalOpen') that doesn't need to be shared.", type: "Scenario" },
        { level: "Senior", q: "How would you debug a component that's re-rendering too often due to a selector?", a: "Check if the selector is returning a new object reference every time it runs and use createSelector to fix it.", type: "Scenario" },
        { level: "Senior", q: "Why is it better to name your selector functions (e.g., selectUser)?", a: "For reusability across components and easier profiling/debugging in DevTools.", type: "Scenario" }
      ]
    },
    {
      day_number: 4,
      topic: "RTK Query",
      category: "Redux",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to RTK Query", description: "Why data fetching belongs in the global state layer." },
        { time: "11:00 AM", title: "createApi & fetchBaseQuery", description: "Defining your API service, base URLs, and endpoints." },
        { time: "01:00 PM", title: "Using Auto-generated Hooks", description: "Mastering the usage of useGetItemsQuery and handling loading/error states." },
        { time: "03:00 PM", title: "Mutations & Cache Invalidation", description: "Updating data with useMutation and using tags to refresh current data automatically." },
        { time: "05:00 PM", title: "Query Lifecycle & Polling", description: "Advanced features like interval-based fetching and prefetching." }
      ],
      quiz: [
        { text: "What is RTK Query?", options: ["A CSS tool", "A powerful data fetching and caching tool built into RTK", "A new database", "None"], correct: 1 },
        { text: "Which function defines an RTK Query service?", options: ["createStore", "createApi", "createFetch", "None"], correct: 1 },
        { text: "What is 'fetchBaseQuery'?", options: ["A lightweight wrapper around the fetch API", "A database query", "A storage tool", "None"], correct: 0 },
        { text: "Query hooks are ___ generated by createApi.", options: ["Manually", "Automatically", "Never", "None"], correct: 1 },
        { text: "Which hook is used for Read operations (GET)?", options: ["useQuery", "useGet...Query", "useFetch", "None"], correct: 1 },
        { text: "Which hook is used for Write operations (POST/PUT/DELETE)?", options: ["useQuery", "useMutation", "usePost", "None"], correct: 1 },
        { text: "RTK Query handles loading and error states automatically.", options: ["True", "False"], correct: 0 },
        { text: "What is 'Cache Invalidation'?", options: ["Deleting code", "Marking old data as 'stale' so it is refetched automatically after a mutation", "Encrypting data", "None"], correct: 1 },
        { text: "What are 'Tags' in RTK Query used for?", options: ["Styling components", "Labeling data for automated cache invalidation", "Naming files", "None"], correct: 1 },
        { text: "Does RTK Query support Polling?", options: ["No", "Yes (fetching data at set intervals)", "Only for IDs", "None"], correct: 1 },
        { text: "Query results are cached by ___ by default.", options: ["URL and arguments", "Time only", "Size", "None"], correct: 0 },
        { text: "RTK Query helps to avoid which hook?", options: ["useState", "useEffect (for fetching)", "useContext", "None"], correct: 1 },
        { text: "Mutations return an array with [___, ___].", options: ["data, status", "triggerFunction, resultObject", "error, loading", "None"], correct: 1 },
        { text: "Where do you add the API service in the store?", options: ["In 'reducers'", "In 'middleware'", "In both 'reducer' and 'middleware'", "None"], correct: 2 },
        { text: "RTK Query is inspired by ___.", options: ["React Query / SWR", "Django", "Angular", "None"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is RTK Query?", a: "An advanced data fetching and caching tool designed to simplify loading data in web applications.", type: "Conceptual" },
        { level: "Junior", q: "What does useGetPostsQuery return?", a: "An object containing { data, isLoading, isError, error, isFetching, refetch }.", type: "Conceptual" },
        { level: "Junior", q: "Difference between Query and Mutation?", a: "Query is for fetching data (GET). Mutation is for changing data on the server (POST, PUT, DELETE).", type: "Conceptual" },
        { level: "Mid", q: "How do you invalidate the cache after a post is added?", a: "By using 'providesTags' on the query and 'invalidatesTags' on the mutation with a matching tag name.", type: "Coding" },
        { level: "Mid", q: "What is fetchBaseQuery?", a: "A default wrapper around fetch that handles common tasks like setting headers and parsing JSON.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle a dynamic URL with RTK Query?", a: "By passing parameters to the hook: const { data } = useGetItemQuery(itemId).", type: "Coding" },
        { level: "Mid", q: "Why use RTK Query over axios inside a useEffect?", a: "RTK Query gives you automatic caching, loading states, deduplication of requests, and automated refetching for free.", type: "Scenario" },
        { level: "Senior", q: "Explain 'Optimistic Updates' in RTK Query.", a: "Manually updating the cache to show the predicted success of a mutation before the server response arrives, making the UI feel instant.", type: "Conceptual" },
        { level: "Senior", q: "What is the purpose of the 'transformResponse' property?", a: "To allow you to change the shape of the data received from the server before it is stored in the Redux cache.", type: "Coding" },
        { level: "Senior", q: "How would you implement 'infinite scrolling' with RTK Query?", a: "By using a query with a 'page' parameter and merging the new results with existing ones in the component or using specialized libraries.", type: "Scenario" },
        { level: "Senior", q: "How do you handle authentication headers globally in RTK Query?", a: "By creating a custom 'baseQuery' that adds the 'Authorization' header to every request automatically.", type: "Coding" },
        { level: "Senior", q: "What is the 'onQueryStarted' lifecycle hint used for?", a: "For performing side effects when a query starts, like showing a global progress bar or performing optimistic updates.", type: "Conceptual" }
      ]
    },
    {
      day_number: 5,
      topic: "Advanced Store Logic",
      category: "Redux",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Middlewares in RTK", description: "Understanding how to intercept and augment actions globally." },
        { time: "11:00 AM", title: "Async Logic with createAsyncThunk", description: "Writing complex asynchronous scripts for non-API tasks." },
        { time: "01:00 PM", title: "Redux Persist", description: "Saving your Redux state to LocalStorage so it survives page refreshes." },
        { time: "03:00 PM", title: "Performance Benchmarking", description: "Using the profiling tools to find slow state updates." },
        { time: "05:00 PM", title: "Scaling Large Stores", description: "Best practices for folder structure and combining dozens of slices." }
      ],
      quiz: [
        { text: "What is Middleware in Redux?", options: ["A database", "A piece of code that runs between dispatching an action and reaching the reducer", "A CSS file", "None"], correct: 1 },
        { text: "Which function handles async logic in RTK?", options: ["createSlice", "createAsyncThunk", "createStore", "None"], correct: 1 },
        { text: "Where is Thunk middleware added by default in RTK?", options: ["In configureStore", "In createSlice", "Nowhere", "None"], correct: 0 },
        { text: "What is Redux Persist used for?", options: ["Speeding up code", "Saving state to LocalStorage automatically", "Deleting data", "None"], correct: 1 },
        { text: "createAsyncThunk generates which three action types?", options: ["start, middle, end", "pending, fulfilled, rejected", "get, set, delete", "None"], correct: 1 },
        { text: "Where do you handle thunk outcomes in a slice?", options: ["reducers", "extraReducers", "initialState", "None"], correct: 1 },
        { text: "Which tool is best for spying on store changes?", options: ["Browser console", "Redux DevTools", "Not possible", "None"], correct: 1 },
        { text: "How do you add a custom middleware in RTK?", options: ["getDefaultMiddleware().concat(myMiddleware)", "push(myMiddleware)", "middleware = []", "None"], correct: 0 },
        { text: "Redux Persist uses which concept to load data?", options: ["Rehydrate", "Restart", "Refresh", "None"], correct: 0 },
        { text: "Can you dispatch an action inside another action?", options: ["No", "Yes (via Thunks)", "Only for IDs", "None"], correct: 1 },
        { text: "Which folder structure is recommended by many Redux experts?", options: ["Folders by type (actions/reducers/views)", "Feature-based (slice per feature)", "Single huge file", "None"], correct: 1 },
        { text: "A thunk is a function that returns ___.", options: ["A string", "Another function", "An ID", "None"], correct: 1 },
        { text: "What is the 'serializable' check in RTK?", options: ["Checking for virus", "Ensuring only plain JS objects enter the state", "Measuring speed", "None"], correct: 1 },
        { text: "Is it okay to put a Class instance in Redux state?", options: ["Yes", "No (only serializable data)", "Only for IDs", "None"], correct: 1 },
        { text: "Why avoid non-serializable data in Redux?", options: ["It breaks time-travel debugging and persistence", "It is slow", "It looks bad", "None"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is a Thunk?", a: "A middleware that allows you to write action creators that return a function instead of an action object, used for async logic.", type: "Conceptual" },
        { level: "Junior", q: "What are the three states of an async thunk?", a: "Pending (started), Fulfilled (success), and Rejected (failed).", type: "Conceptual" },
        { level: "Junior", q: "What is Redux Persist?", a: "A library that saves your Redux store state to persistence (like LocalStorage) and loads it back when the app restarts.", type: "Conceptual" },
        { level: "Mid", q: "Explain the purpose of middleware in Redux.", a: "It provides a third-party extension point between dispatching an action and the moment it reaches the reducer (e.g., for logging, crash reporting).", type: "Conceptual" },
        { level: "Mid", q: "Difference between createAsyncThunk and RTK Query?", a: "RTK Query is specialized for server data/caching. createAsyncThunk is for any custom async logic (like accessing browser APIs).", type: "Conceptual" },
        { level: "Mid", q: "What is Serializability and why does Redux care?", a: "It means the data can be easily converted to a string (JSON). It's crucial for persistence and debugging features like time-travel.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle errors in a createAsyncThunk?", a: "By returning a rejected value using rejectWithValue() in the payload creator.", type: "Coding" },
        { level: "Senior", q: "How would you implement a custom 'Action Logger' middleware?", a: "By defining a function that intercepts the 'next' and 'action' arguments and logs the action type/payload to the console.", type: "Coding" },
        { level: "Senior", q: "What are the pros and cons of Redux Persist?", a: "Pros: Good User Experience (persistence). Cons: Potential for stale data or schema mismatches if the state structure changes after a save.", type: "Scenario" },
        { level: "Senior", q: "How do you scale a Redux store for a very large application?", a: "By strictly using feature-slices, memoized selectors, and avoiding storing too much UI state that should be local.", type: "Scenario" },
        { level: "Senior", q: "Explain 'Hydration' in the context of Redux Persist.", a: "The process of taking the stringified state from LocalStorage and loading it back into memory as a JS object when the app starts.", type: "Conceptual" },
        { level: "Senior", q: "How do you prevent a specific state branch from being persisted?", a: "By using 'blacklist' or 'whitelist' (now 'allowlist') properties in the Redux Persist configuration.", type: "Coding" }
      ]
    }
  ]
};
