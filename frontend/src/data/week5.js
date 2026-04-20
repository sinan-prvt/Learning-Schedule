export const week5 = {
  id: "W5",
  title: "FastAPI Foundations",
  days: [
    {
      day_number: 1,
      topic: "FastAPI Introduction & Setup",
      category: "FastAPI",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Why FastAPI?", description: "Speed, performance, and automatic documentation comparison with Django/Flask." },
        { time: "11:00 AM", title: "Installation & Environment", description: "Installing fastapi, uvicorn, and creating a 'Hello World' app." },
        { time: "01:00 PM", title: "ASGI vs WSGI", description: "Understanding the asynchronous server gateway interface." },
        { time: "03:00 PM", title: "Type Hints & Validation", description: "How FastAPI uses Python types for request parsing." },
        { time: "05:00 PM", title: "Automatic Docs (Swagger & Redoc)", description: "Exploring /docs and /redoc interactive interfaces." }
      ],
      quiz: [
        { text: "Who is the creator of FastAPI?", options: ["Guido van Rossum", "Andrew Godwin", "Sebastian Ramírez", "Tom Christie"], correct: 2 },
        { text: "FastAPI is built on top of which two foundations?", options: ["Django and Flask", "Starlette and Pydantic", "Aiohttp and Requests", "Express and Node"], correct: 1 },
        { text: "Which server is used to run FastAPI apps?", options: ["Gunicorn", "Uvicorn", "Apache", "Nginx"], correct: 1 },
        { text: "FastAPI uses ___ for data validation.", options: ["Pydantic", "Marshmallow", "Django Forms", "Regex"], correct: 0 },
        { text: "What is the default interactive documentation URL?", options: ["/api", "/docs", "/swagger", "/home"], correct: 1 },
        { text: "FastAPI is natively asynchronous.", options: ["True", "False"], correct: 0 },
        { text: "What does ASGI stand for?", options: ["Async System Gateway Interface", "Asynchronous Server Gateway Interface", "Async Socket Group Interface", "None"], correct: 1 },
        { text: "Which keyword is used to define an async endpoint?", options: ["await", "async def", "def async", "async"], correct: 1 },
        { text: "FastAPI speed is comparable to ___.", options: ["Node.js and Go", "Python 2", "PHP 5", "Java"], correct: 0 },
        { text: "Which decorator is used to handle a GET request?", options: ["@app.get()", "@app.route(method='GET')", "@get()", "@app.handler()"], correct: 0 },
        { text: "Type hints in FastAPI are used for ___.", options: ["Documentation", "Validation", "Serialization", "All of the above"], correct: 3 },
        { text: "Does FastAPI create a database automatically?", options: ["Yes", "No", "Only for SQLite", "Only in dev"], correct: 1 },
        { text: "Which tool provides the alternative documentation interface?", options: ["Swagger", "Redoc", "Doxygen", "Sphinx"], correct: 1 },
        { text: "FastAPI is based on ___ style hints.", options: ["Python 3.6+", "JavaScript", "C#", "TypeScript"], correct: 0 },
        { text: "Which function defines the status code of a response?", options: ["status_code=", "return_code=", "response_status=", "code="], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is FastAPI?", a: "A modern, high-performance web framework for building APIs with Python 3.6+ based on standard Python type hints.", type: "Conceptual" },
        { level: "Junior", q: "How is FastAPI different from Django?", a: "FastAPI is lightweight, focused on APIs, and built for high performance/asynchrony. Django is more 'batteries-included' for full-stack apps.", type: "Conceptual" },
        { level: "Junior", q: "What are the automatic documentation features?", a: "FastAPI automatically generates interactive API documentation using Swagger UI (/docs) and ReDoc (/redoc).", type: "Conceptual" },
        { level: "Mid", q: "Explain the role of Pydantic in FastAPI.", a: "Pydantic handles data validation, serialization (conversion to JSON), and documentation of schemas. It ensures that the input data matches the defined Python types.", type: "Conceptual" },
        { level: "Mid", q: "What is Uvicorn?", a: "Uvicorn is a lightning-fast ASGI server implementation, used to serve FastAPI applications.", type: "Conceptual" },
        { level: "Mid", q: "How do you define an asynchronous path operation?", a: "By using the 'async def' syntax for the function handling the request.", type: "Coding" },
        { level: "Mid", q: "Difference between ASGI and WSGI?", a: "WSGI (Web Server Gateway Interface) is synchronous. ASGI (Asynchronous Server Gateway Interface) is built to support asynchronous features like WebSockets and HTTP/2.", type: "Conceptual" },
        { level: "Senior", q: "Why is FastAPI faster than traditional Python frameworks?", a: "Due to its underlying foundations (Starlette and Pydantic) and its efficient use of Python's asyncio for non-blocking I/O.", type: "Conceptual" },
        { level: "Senior", q: "How does FastAPI handle data type conversion automatically?", a: "It uses Python type hints for function parameters. If a parameter is typed as an 'int', FastAPI automatically converts the incoming URL string into an integer.", type: "Conceptual" },
        { level: "Senior", q: "What is the significance of Python 3.6+ type hints in FastAPI?", a: "They are the core of the framework, providing data validation, serialization, and auto-generated editor support (autocompletion).", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a production deployment of FastAPI?", a: "Typically using Gunicorn with Uvicorn worker classes to manage multiple processes and provide robustness.", type: "Scenario" },
        { level: "Senior", q: "Can you use synchronous code in FastAPI? Should you?", a: "Yes, you can use regular 'def' functions. FastAPI will run them in a separate thread pool to avoid blocking the event loop.", type: "Conceptual" }
      ]
    },
    {
      day_number: 2,
      topic: "Path & Query Parameters",
      category: "FastAPI",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Path Parameters", description: "Capturing dynamic values from URL paths and using type hints." },
        { time: "11:00 AM", title: "Path Validation", description: "Adding constraints like min_length, regex, and gt/lt." },
        { time: "01:00 PM", title: "Query Parameters", description: "Handling optional and required parameters in the URL query string." },
        { time: "03:00 PM", title: "Default Values & Optionals", description: "Setting default behaviors and using the Optional type." },
        { time: "05:00 PM", title: "Query Parameter Validation", description: "Using Query() class for titles, descriptions, and metadata." }
      ],
      quiz: [
        { text: "Where are path parameters located?", options: ["In the URL path", "In the URL query string", "In the request body", "In the headers"], correct: 0 },
        { text: "How do you define a path parameter in a decorator?", options: ["@app.get('/item/{id}')", "@app.get('/item/:id')", "@app.get('/item/id')", "@app.get('/item/<id>')"], correct: 0 },
        { text: "Query parameters are defined in which part of the function?", options: ["Decorator", "Function arguments", "Return statement", "Settings"], correct: 1 },
        { text: "What makes a query parameter required?", options: ["Setting it to None", "Not giving it a default value", "Using Query()", "Always required"], correct: 1 },
        { text: "Which class is used to add metadata to path parameters?", options: ["Path()", "Query()", "Argument()", "Param()"], correct: 0 },
        { text: "Which class is used to add metadata to query parameters?", options: ["Path()", "Query()", "Argument()", "Param()"], correct: 1 },
        { text: "How do you specify a parameter must be greater than 0?", options: ["gt=0", "min=1", "start=0", "limit=0"], correct: 0 },
        { text: "How do you specify a maximum length for a string query?", options: ["len=10", "max_length=10", "max=10", "size=10"], correct: 1 },
        { text: "Path parameters are automatically parsed into the declared type.", options: ["True", "False"], correct: 0 },
        { text: "Query parameters are separated by which character in a URL?", options: ["/", "&", "?", "#"], correct: 2 },
        { text: "How do you declare multiple query parameters with the same name?", options: ["List[str]", "str", "Many(str)", "Array"], correct: 0 },
        { text: "Parameters defined in path but not function arguments cause an error.", options: ["True", "False"], correct: 0 },
        { text: "Which library is Query() imported from?", options: ["fastapi", "pydantic", "starlette", "requests"], correct: 0 },
        { text: "How do you mark a parameter as deprecated in docs?", options: ["deprecated=True", "old=True", "remove=True", "hidden=True"], correct: 0 },
        { text: "Query parameters are always strings in the raw request.", options: ["True", "False"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is a path parameter?", a: "A dynamic part of a URL (e.g., /items/{item_id}) where {item_id} is captured as a variable in the function.", type: "Conceptual" },
        { level: "Junior", q: "What is a query parameter?", a: "A set of key-value pairs appended after a '?' in a URL (e.g., /items?skip=0&limit=10).", type: "Conceptual" },
        { level: "Junior", q: "How do you make a query parameter optional?", a: "By giving it a default value (like None or 0) in the function argument signature.", type: "Conceptual" },
        { level: "Mid", q: "Explain the difference between Path() and Query() classes.", a: "They are used for adding metadata and validation to path and query parameters respectively. Path() is for URL segments, Query() is for query strings.", type: "Conceptual" },
        { level: "Mid", q: "How do you validate a query parameter with a regular expression?", a: "By passing the regex argument to the Query() class: Query(..., regex='^fixedquery$').", type: "Coding" },
        { level: "Mid", q: "Can you have multiple path parameters in one URL?", a: "Yes, e.g., /users/{user_id}/items/{item_id}. Both will be available as function arguments.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle a list of values in a query parameter?", a: "By typing the argument as a List (e.g., q: List[str] = Query(None)). The URL would look like ?q=foo&q=bar.", type: "Coding" },
        { level: "Senior", q: "Why use 'gt' and 'ge' instead of checking inside the function?", a: "Using these in Path()/Query() allows FastAPI to automatically generate validation errors and include these constraints in the API documentation.", type: "Conceptual" },
        { level: "Senior", q: "What is the 'Required' ellipsis (...) in Query/Path?", a: "It tells FastAPI that a parameter is required even if it has a Query/Path metadata object attached.", type: "Conceptual" },
        { level: "Senior", q: "How does FastAPI differentiate between a path parameter and a query parameter?", a: "If a variable is declared in the path (inside {}), it's a path parameter. If not, and it's a simple type, it's a query parameter.", type: "Conceptual" },
        { level: "Senior", q: "How would you hide a query parameter from the generated documentation?", a: "By setting include_in_schema=False in the Query() instance.", type: "Scenario" },
        { level: "Senior", q: "What order should path and query parameters be in the function signature?", a: "Technically order doesn't matter, but it's good practice to list path parameters first for readability.", type: "Scenario" }
      ]
    },
    {
      day_number: 3,
      topic: "Request Body & Pydantic Models",
      category: "FastAPI",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Creating Pydantic Models", description: "Defining schemas using BaseModel and type hints." },
        { time: "11:00 AM", title: "Nested Models", description: "Building complex, hierarchical data structures." },
        { time: "01:00 PM", title: "Response Models", description: "Filtering and controlling the data sent back to the client." },
        { time: "03:00 PM", title: "Field Validation with Pydantic", description: "Using Field() for descriptions, examples, and constraints." },
        { time: "05:00 PM", title: "Handling Multiple Body Parameters", description: "Combining multiple Pydantic models or singular values in one request." }
      ],
      quiz: [
        { text: "Which class do Pydantic models inherit from?", options: ["Model", "BaseModel", "Schema", "DataModel"], correct: 1 },
        { text: "Where is the request body typically sent?", options: ["In the URL", "In the headers", "In the HTTP body", "In the query string"], correct: 2 },
        { text: "Which HTTP methods commonly include a body?", options: ["GET and DELETE", "POST, PUT, and PATCH", "OPTIONS and HEAD", "None"], correct: 1 },
        { text: "How do you mark a field as optional in a Pydantic model?", options: ["Using Optional[type]", "Setting default as None", "Both A and B", "Is not possible"], correct: 2 },
        { text: "Nested models are allowed in Pydantic.", options: ["True", "False"], correct: 0 },
        { text: "The ___ attribute in a path decorator controls the output data.", options: ["output_model", "response_model", "return_model", "schema"], correct: 1 },
        { text: "Which class adds metadata to Pydantic model fields?", options: ["Query()", "Path()", "Field()", "Body()"], correct: 2 },
        { text: "What does response_model_exclude_unset do?", options: ["Hides all fields", "Hides fields that were not explicitly set in the data", "Deletes data", "None"], correct: 1 },
        { text: "You can use a list of models as a request body.", options: ["True", "False"], correct: 0 },
        { text: "Pydantic performs validation based on ___.", options: ["JSON schema only", "Python type hints", "Manual checks", "Regex"], correct: 1 },
        { text: "Which method converts a Pydantic model to a dictionary?", options: ["to_dict()", "dict() (deprecated) / model_dump()", "json()", "vars()"], correct: 1 },
        { text: "Pydantic models are used for ___.", options: ["Request validation", "Response serialization", "Documentation schema", "All of the above"], correct: 3 },
        { text: "How do you specify an example value for a field in the docs?", options: ["Field(example=...)", "example=...", "Field(default=...)", "config = {}"], correct: 0 },
        { text: "Can you inherit from one Pydantic model to another?", options: ["Yes", "No", "Only for IDs", "Only in dev"], correct: 0 },
        { text: "The ___ parameter in decorator hides fields like passwords from responses.", options: ["exclude", "hide", "response_model", "private"], correct: 2 }
      ],
      interview: [
        { level: "Junior", q: "What is a Pydantic model?", a: "A class that defines the structure and validation requirements for a piece of data (request body or response).", type: "Conceptual" },
        { level: "Junior", q: "How do you receive a JSON body in a FastAPI endpoint?", a: "By creating a Pydantic model and declaring it as a parameter in your path operation function.", type: "Coding" },
        { level: "Junior", q: "What is the response_model?", a: "A parameter in the path decorator that defines the structure and filtering of the data returned by the API.", type: "Conceptual" },
        { level: "Mid", q: "Why use response_model instead of just returning a dictionary?", a: "It provides automatic data validation, conversion, filtering of secret fields, and generates the correct documentation for the response.", type: "Conceptual" },
        { level: "Mid", q: "Explain 'Body(..., embed=True)'.", a: "It tells FastAPI to expect the parameter inside a JSON object key rather than as the root body.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle nested JSON objects in a request?", a: "By defining a separate Pydantic model for the nested object and using it as a field type in the main model.", type: "Coding" },
        { level: "Mid", q: "What is the Field() class used for?", a: "To add extra validation (gt, lt, min_length) and documentation (description, example) to Pydantic model attributes.", type: "Conceptual" },
        { level: "Senior", q: "Explain 'Data Filtering' using response_model.", a: "If your model has 10 fields but your response_model only has 5, FastAPI will automatically strip the extra 5 fields before sending the response.", type: "Conceptual" },
        { level: "Senior", q: "How do you handle unions of types (e.g., a field could be int or str)?", a: "By using 'Union[int, str]' from the typing module as the field type.", type: "Coding" },
        { level: "Senior", q: "What is the difference between response_model_exclude and response_model_include?", a: "Exclude specifies fields to remove; include specifies the only fields to keep. Exclude is generally more common.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a giant JSON body without loading it all into a model at once?", a: "By using the Request object directly and calling await request.json() or await request.body().", type: "Scenario" },
        { level: "Senior", q: "What are Pydantic 'Config' classes used for?", a: "To configure model-wide settings like string stripping, extra field allowances, or ORM mode compatibility.", type: "Conceptual" }
      ]
    },
    {
      day_number: 4,
      topic: "Dependency Injection",
      category: "FastAPI",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to DI", description: "Understanding the 'Depends' keyword and shared logic." },
        { time: "11:00 AM", title: "Database Session Dependency", description: "Creating a common dependency to provide DB connections to routes." },
        { time: "01:00 PM", title: "Sub-dependencies", description: "Building a hierarchy of dependencies for complex logic." },
        { time: "03:00 PM", title: "Global Dependencies", description: "Applying logic to all endpoints in the app or a specific router." },
        { time: "05:00 PM", title: "Dependency Overriding", description: "Techniques for mocking dependencies during tests." }
      ],
      quiz: [
        { text: "Which keyword is used for Dependency Injection in FastAPI?", options: ["Include", "Provide", "Depends", "Inject"], correct: 2 },
        { text: "Dependencies can be ___.", options: ["Functions", "Classes", "Methods", "All of the above"], correct: 3 },
        { text: "Where do you pass 'Depends()'?", options: ["In the decorator", "In the function argument", "In the settings", "In main.py"], correct: 1 },
        { text: "Directly calling a dependency function is required.", options: ["True", "False (FastAPI handles it)", "Only for DB", "Only in dev"], correct: 1 },
        { text: "What is a sub-dependency?", options: ["A dependency that depends on another dependency", "A small file", "A hidden function", "None"], correct: 0 },
        { text: "Global dependencies are added in ___.", options: ["The app instance constructor", "Each view", "Middleware", "Settings"], correct: 0 },
        { text: "Can you use async functions as dependencies?", options: ["Yes", "No", "Only for I/O", "Only in dev"], correct: 0 },
        { text: "Dependency injection helps to avoid ___.", options: ["Writing code", "Code duplication (DRY)", "Serialization", "Routing"], correct: 1 },
        { text: "What happens if a dependency code raises an exception?", options: ["App crashes", "FastAPI catches it and handles the response accordingly", "Silent failure", "Log error"], correct: 1 },
        { text: "Dependency injection is a/an ___ in FastAPI.", options: ["Library", "Optional tool", "First-class citizen", "Database"], correct: 2 },
        { text: "Dependencies can access the Request object.", options: ["True", "False"], correct: 0 },
        { text: "Which attribute in a router adds dependencies to all routes in it?", options: ["dependencies=[]", "auth=[]", "middleware=[]", "shared=[]"], correct: 0 },
        { text: "Overriding dependencies is primarily used for ___.", options: ["Speed", "Testing/Mocking", "Security", "Documentation"], correct: 1 },
        { text: "A dependency with a 'yield' statement is used for ___.", options: ["Generators", "Resource management (teardown)", "Infinite loops", "None"], correct: 1 },
        { text: "Does a dependency run for every request?", options: ["Yes (if listed in route)", "Only once", "Randomly", "Only in production"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is Dependency Injection in FastAPI?", a: "A way to declare things that your code needs to work, and have the framework provide them automatically (e.g., DB sessions, Auth checks).", type: "Conceptual" },
        { level: "Junior", q: "How do you use the Depends keyword?", a: "By setting it as the default value for an argument in your path operation function.", type: "Coding" },
        { level: "Junior", q: "What is a common use case for DI?", a: "Handling database connections, reading settings, or checking if a user is authenticated.", type: "Conceptual" },
        { level: "Mid", q: "Explain 'yield' dependencies.", a: "They allow you to perform setup code, yield a value to the view, and then perform teardown code after the request is finished.", type: "Conceptual" },
        { level: "Mid", q: "How do you use sub-dependencies?", a: "Simply by having one dependency function use 'Depends' to call another dependency function.", type: "Coding" },
        { level: "Mid", q: "Why use DI instead of global variables for DB sessions?", a: "DI allows for easier testing (overriding), better resource management (closing sessions), and avoids hidden state issues.", type: "Scenario" },
        { level: "Mid", q: "Can a dependency return a class instance?", a: "Yes, FastAPI can instantiate a class and use its instance as a dependency.", type: "Conceptual" },
        { level: "Senior", q: "How does FastAPI handle shared dependencies across one request?", a: "By default, it caches the result of a dependency if it's used multiple times within the same request. You can disable this with 'use_cache=False'.", type: "Conceptual" },
        { level: "Senior", q: "How do you apply a dependency to a whole group of routes?", a: "By passing a list of dependencies to the APIRouter constructor.", type: "Coding" },
        { level: "Senior", q: "Explain the importance of 'use_cache' in Dependencies.", a: "It determines whether a dependency is executed every time it is encountered or if a previous result from the same request is reused.", type: "Conceptual" },
        { level: "Senior", q: "How would you implement a 'current_user' dependency that works with OAuth2?", a: "By using Depends(oauth2_scheme) and then querying the database to find the user associated with that token.", type: "Scenario" },
        { level: "Senior", q: "What is the benefit of using classes as dependencies?", a: "They can maintain state or accept parameters in their constructors, making them highly reusable for things like pagination or filtering.", type: "Conceptual" }
      ]
    },
    {
      day_number: 5,
      topic: "Middleware & Background Tasks",
      category: "FastAPI",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to Middleware", description: "Writing code that runs for every request and response." },
        { time: "11:00 AM", title: "CORS Middleware", description: "Configuring Cross-Origin Resource Sharing for frontend/backend communication." },
        { time: "01:00 PM", title: "Custom Middleware Logic", description: "Adding headers, logging info, or measuring processing time." },
        { time: "03:00 PM", title: "Background Tasks", description: "Scheduling functions to run after the response has been sent." },
        { time: "05:00 PM", title: "Advanced Background Workflows", description: "When to use FastAPI BackgroundTasks vs Celery/Redis." }
      ],
      quiz: [
        { text: "What is Middleware?", options: ["A database", "A function that runs for every request and response", "A type of UI", "A security key"], correct: 1 },
        { text: "Which middleware is needed to allow frontend apps to talk to an API?", options: ["Auth", "CORS", "Logging", "Session"], correct: 1 },
        { text: "CORS stands for ___.", options: ["Cross-Origin Resource Sharing", "Core Object Resource System", "Common Original Request Software", "None"], correct: 0 },
        { text: "Background tasks start before the response is sent.", options: ["True", "False"], correct: 1 },
        { text: "Which class is used to add a background task?", options: ["BackgroundTask", "TaskQueue", "BackgroundTasks", "AsyncJob"], correct: 2 },
        { text: "Middleware is added using ___.", options: ["app.add_middleware()", "app.middleware()", "settings.MIDDLEWARE", "app.wrap()"], correct: 0 },
        { text: "Can you add custom headers in middleware?", options: ["Yes", "No", "Only for IDs", "Only in dev"], correct: 0 },
        { text: "Background tasks are best for ___.", options: ["Deleting DB", "Sending emails / slow processes", "Calculating response", "Routing"], correct: 1 },
        { text: "For very heavy background work, you should use ___.", options: ["FastAPI BackgroundTasks", "Celery", "A for loop", "None"], correct: 1 },
        { text: "Middleware can block a request from reaching the view.", options: ["True", "False"], correct: 0 },
        { text: "Which argument is used to specify allowed domains in CORS?", options: ["allow_origins", "allow_hosts", "cors_list", "ips"], correct: 0 },
        { text: "BackgroundTasks is imported from ___.", options: ["fastapi", "task_lib", "starlette", "requests"], correct: 0 },
        { text: "Does middleware affect every route in the app?", options: ["Yes (unless filtered)", "No", "Only GET", "Only in prod"], correct: 0 },
        { text: "A background task can receive arguments.", options: ["True", "False"], correct: 0 },
        { text: "Middleware runs in which order?", options: ["First added first run", "Alphabetical", "Random", "Recursive"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is Middleware?", a: "A function that works with every request before it reaches any path operation and every response before leaving.", type: "Conceptual" },
        { level: "Junior", q: "Why do we need CORS middleware?", a: "To allow requests from a frontend running on a different domain or port than the backend.", type: "Conceptual" },
        { level: "Junior", q: "What is a Background Task?", a: "A function that is executed after the response is returned to the user, useful for non-essential slow processes like sending emails.", type: "Conceptual" },
        { level: "Mid", q: "How do you implement custom middleware in FastAPI?", a: "By using the @app.middleware('http') decorator and handling the request and call_next(request).", type: "Coding" },
        { level: "Mid", q: "How do you add a background task to a route?", a: "Declare 'background_tasks: BackgroundTasks' and call 'background_tasks.add_task(func, args)'.", type: "Coding" },
        { level: "Mid", q: "Explain the difference between FastAPI BackgroundTasks and Celery.", a: "FastAPI BackgroundTasks is built-in and runs in the same process (good for simple things). Celery is a distributed queue (better for complex/heavy tasks).", type: "Conceptual" },
        { level: "Mid", q: "What is 'Pre-flight' in CORS?", a: "A check that the browser performs (using OPTIONS method) before sending the actual request to see if it's allowed.", type: "Conceptual" },
        { level: "Senior", q: "How would you use middleware to measure the time it takes to process a request?", a: "Save the start time before 'call_next', get the end time after it returns, and add a custom header like 'X-Process-Time' to the response.", type: "Coding" },
        { level: "Senior", q: "What are the limitations of FastAPI's BackgroundTasks?", a: "If the server process crashes, the tasks in the queue are lost. They also share the same resources (CPU/Memory) as your main app.", type: "Conceptual" },
        { level: "Senior", q: "Explain the security risk of using allow_origins=['*'] in CORS.", a: "It allows any website to make requests to your API on behalf of your users, which can lead to data theft or CSRF-like attacks.", type: "Scenario" },
        { level: "Senior", q: "How does middleware handle exceptions raised in path operations?", a: "Unless handled inside the middleware, exceptions will bubble up and might prevent the response-processing part of the middleware from running.", type: "Conceptual" },
        { level: "Senior", q: "Can you have multiple middleware in a FastAPI app?", a: "Yes, and they are executed in the order they were added for requests, and in reverse order for responses.", type: "Conceptual" }
      ]
    }
  ]
};
