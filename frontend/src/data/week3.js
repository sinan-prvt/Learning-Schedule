export const week3 = {
  id: "W3",
  title: "Django Rest Framework (DRF)",
  days: [
    {
      day_number: 1,
      topic: "REST Principles & Setup",
      category: "DRF",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Web APIs & REST Overview", description: "Understanding HTTP methods (GET, POST, PUT, DELETE) and Statelessness." },
        { time: "11:00 AM", title: "Installing DRF", description: "Adding djangorestframework to requirements and settings." },
        { time: "01:00 PM", title: "Your First API View", description: "Creating a simple @api_view to return JSON data." },
        { time: "03:00 PM", title: "DRF Settings", description: "Configuring DEFAULT_RENDERER_CLASSES and parser classes." },
        { time: "05:00 PM", title: "Browsables API", description: "Exploring the powerful built-in DRF interactive web interface." }
      ],
      quiz: [
        { text: "What does REST stand for?", options: ["Representational State Transfer", "Relational State Transfer", "Remote State Transfer", "Representative State Tool"], correct: 0 },
        { text: "Which HTTP method is used for retrieving data?", options: ["POST", "PUT", "GET", "DELETE"], correct: 2 },
        { text: "Which HTTP method is typically used to create a new resource?", options: ["GET", "POST", "PATCH", "HEAD"], correct: 1 },
        { text: "Statelessness in REST means ___.", options: ["No data is stored", "The server doesn't store client context between requests", "The client has no state", "Requests are not allowed"], correct: 1 },
        { text: "Which decorator is used for function-based API views?", options: ["@view", "@api_view", "@rest_view", "@json_view"], correct: 1 },
        { text: "How do you add DRF to your project?", options: ["Add 'rest_framework' to INSTALLED_APPS", "Add 'drf' to settings", "Import drf in models", "It is built-in"], correct: 0 },
        { text: "What format does DRF primarily use for data exchange?", options: ["XML", "CSV", "JSON", "Protobuf"], correct: 2 },
        { text: "Which HTTP method is used for full resource updates?", options: ["POST", "PUT", "PATCH", "UPDATE"], correct: 1 },
        { text: "Which HTTP method is used for partial resource updates?", options: ["POST", "PUT", "PATCH", "UPDATE"], correct: 2 },
        { text: "The status code 201 indicates ___.", options: ["OK", "Created", "No Content", "Accepted"], correct: 1 },
        { text: "The status code 403 indicates ___.", options: ["Not Found", "Unauthorized", "Forbidden", "Bad Request"], correct: 2 },
        { text: "Which setting allows the interactive API interface?", options: ["WEB_UI", "BROWSABLE_API", "RENDERER_CLASSES", "None of these"], correct: 2 },
        { text: "What is an 'Endpoint'?", options: ["The end of a file", "A URL that handles an API request", "A database table", "A security key"], correct: 1 },
        { text: "Is REST a protocol or an architectural style?", options: ["Protocol", "Architectural Style", "Library", "Database"], correct: 1 },
        { text: "What is the purpose of the 'Response' object in DRF?", options: ["To log errors", "To wrap content into a content-negotiated response", "To save data", "To handle URLs"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is DRF?", a: "Django REST Framework is a powerful toolkit for building Web APIs using Django.", type: "Conceptual" },
        { level: "Junior", q: "What are the common HTTP methods used in REST?", a: "GET (Read), POST (Create), PUT (Update/Replace), PATCH (Partial Update), and DELETE (Remove).", type: "Conceptual" },
        { level: "Junior", q: "What is the difference between 200 and 201 status codes?", a: "200 OK means the request was successful. 201 Created means a new resource was successfully produced.", type: "Conceptual" },
        { level: "Mid", q: "What is statelessness in the context of REST?", a: "Every request from a client must contain all the information necessary for the server to understand and process the request, without relying on stored session context on the server.", type: "Conceptual" },
        { level: "Mid", q: "Explain the difference between PUT and PATCH.", a: "PUT is used for replacing a resource entirely. PATCH is used for making partial updates to a resource.", type: "Conceptual" },
        { level: "Mid", q: "What is Content Negotiation?", a: "The process of selecting the best representation for a given response when there are multiple representations available (e.g., JSON vs XML).", type: "Conceptual" },
        { level: "Mid", q: "How do you return a 404 response in DRF?", a: "By raising an Http404 exception or returning a Response with status=status.HTTP_404_NOT_FOUND.", type: "Coding" },
        { level: "Mid", q: "What is the @api_view decorator?", a: "A wrapper for function-based views to ensure they receive a Request instance and return a Response instance.", type: "Conceptual" },
        { level: "Senior", q: "Explain the 'Idempotency' property of REST methods.", a: "A method is idempotent if performing it multiple times has the same effect as performing it once (e.g., GET, PUT, DELETE). POST is generally not idempotent.", type: "Conceptual" },
        { level: "Senior", q: "What are the core constraints of REST?", a: "Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, and Code on Demand (optional).", type: "Conceptual" },
        { level: "Senior", q: "How would you handle versioning in a REST API?", a: "Common ways include URL versioning (/v1/), Query parameter versioning (?version=1), or Accept Header versioning.", type: "Scenario" },
        { level: "Senior", q: "Why use DRF instead of just returning JsonResponse from Django?", a: "DRF provides powerful features out of the box: Serializers, ViewSets, Browsable API, Auth/Permissions, and Throttle management.", type: "Conceptual" }
      ]
    },
    {
      day_number: 2,
      topic: "Serializers & ModelSerializers",
      category: "DRF",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to Serialization", description: "Converting complex data into Python native types and then JSON." },
        { time: "11:00 AM", title: "ModelSerializers", description: "Generating serializers automatically based on Django Models." },
        { time: "01:00 PM", title: "Validation Logic", description: "Writing field-level and object-level validation in Serializers." },
        { time: "03:00 PM", title: "Nested Serializers", description: "Handling related objects (Foreign keys, Many-to-Many) in API output." },
        { time: "05:00 PM", title: "SerializerMethodField", description: "Calculating custom values on the fly within a Serializer." }
      ],
      quiz: [
        { text: "What is the primary role of a Serializer?", options: ["To save data to DB", "To convert model instances to JSON/XML", "To route URLs", "To render HTML"], correct: 1 },
        { text: "Which class provides a shortcut for model-based serializers?", options: ["BaseSerializer", "PlainSerializer", "ModelSerializer", "AutoSerializer"], correct: 2 },
        { text: "Where do you specify the model and fields in a ModelSerializer?", options: ["class Meta", "class Model", "class Fields", "class Config"], correct: 0 },
        { text: "Which method is used for object-level validation?", options: ["validate()", "is_valid()", "clean()", "check()"], correct: 0 },
        { text: "How do you handle a read-only field in a Serializer?", options: ["Set read_only=True", "Omit it from fields", "Make it private", "Use constant()"], correct: 0 },
        { text: "Which field type allows calculating a dynamic value?", options: ["ChoiceField", "SerializerMethodField", "ComputedField", "ValueField"], correct: 1 },
        { text: "The method for SerializerMethodField must be named ___.", options: ["calculate_<field>", "get_<field>", "val_<field>", "show_<field>"], correct: 1 },
        { text: "How do you include all fields of a model in a ModelSerializer?", options: ["fields = 'all'", "fields = '__all__'", "fields = '*'", "exclude = []"], correct: 1 },
        { text: "What is 'De-serialization'?", options: ["Converting text to models", "Deleting JSON", "Parsing JSON into complex data types", "None of these"], correct: 2 },
        { text: "Which method in a serializer performs the actual DB save?", options: ["create()", "save()", "push()", "insert()"], correct: 1 },
        { text: "Can you have multiple serializers for one model?", options: ["No, only one", "Yes, for different views", "Only in settings", "Only in dev"], correct: 1 },
        { text: "___ is used to pass data from a view to a serializer.", options: ["data=", "body=", "context=", "json="], correct: 0 },
        { text: "How do you handle validation errors in a serializer?", options: ["return False", "raise serializers.ValidationError", "print error", "throw Exception"], correct: 1 },
        { text: "What argument allows a serializer to handle multiple objects?", options: ["many=True", "bulk=True", "list=True", "total=All"], correct: 0 },
        { text: "The 'source' argument in a field is used to ___.", options: ["Set a default", "Map to a different attribute name", "Define a URL", "Provide a file path"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is Serialization in DRF?", a: "The process of converting complex data (like Model instances) into native Python types that can then be rendered into JSON or XML.", type: "Conceptual" },
        { level: "Junior", q: "What is a ModelSerializer?", a: "A shortcut that automatically creates a Serializer class with fields that correspond to the Model fields.", type: "Conceptual" },
        { level: "Junior", q: "How do you validate data in a Serializer?", a: "By defining validate_<field_name> methods or the general validate() method for multi-field validation.", type: "Conceptual" },
        { level: "Mid", q: "Explain the difference between a Serializer and a ModelSerializer.", a: "Serializer requires explicit field definitions. ModelSerializer automatically generates fields, includes default validators, and implements create() and update().", type: "Conceptual" },
        { level: "Mid", q: "What is the SerializerMethodField?", a: "A read-only field that gets its value by calling a method on the serializer class, useful for including computed or extra data.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle nested serialization?", a: "By using another serializer class as a field, or by using 'depth' in class Meta (though 'depth' is restricted to read-only).", type: "Coding" },
        { level: "Mid", q: "Explain object-level vs field-level validation.", a: "Field-level (validate_<field>) checks a single field. Object-level (validate) checks constellations of multiple fields.", type: "Conceptual" },
        { level: "Senior", q: "How would you implement a Writable Nested Serializer?", a: "By overriding the create() and update() methods of the parent serializer to manually handle the creation/update of child objects.", type: "Coding" },
        { level: "Senior", q: "Explain the performance implications of 'depth' in serializers.", a: "High 'depth' values can lead to N+1 query problems. It's often better to use 'prefetch_related' or 'select_related' in the queryset.", type: "Scenario" },
        { level: "Senior", q: "What is the 'context' argument in a Serializer?", a: "A dictionary used to pass extra information from the view to the serializer (e.g., the current 'request' object).", type: "Conceptual" },
        { level: "Senior", q: "How do you serialize a model property as an API field?", a: "Simply by adding the property name to the 'fields' list in class Meta; ModelSerializer will pick it up as a read-only field.", type: "Coding" },
        { level: "Senior", q: "When would you prefer a Serializer over a ModelSerializer?", a: "When the API input/output structure differs significantly from the database model, or when the data isn't tied to a model at all.", type: "Scenario" }
      ]
    },
    {
      day_number: 3,
      topic: "Views & ViewSets",
      category: "DRF",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "APIView & Function Views", description: "Writing explicit logic with total control using APIView." },
        { time: "11:00 AM", title: "Generic Views", description: "Using pre-built logic for common tasks like ListCreateAPIView." },
        { time: "01:00 PM", title: "Introduction to ViewSets", description: "Combining multiple views into a single class (list, create, retrieve, update, delete)." },
        { time: "03:00 PM", title: "ModelViewSets", description: "The fastest way to create a full CRUD API." },
        { time: "05:00 PM", title: "Custom Actions", description: "Adding non-standard logic to ViewSets using the @action decorator." }
      ],
      quiz: [
        { text: "Which class is the base for all DRF class-based views?", options: ["View", "APIView", "RESTView", "BaseView"], correct: 1 },
        { text: "Generic views include logic for which common patterns?", options: ["List/Create", "Retrieve/Update/Delete", "Both A and B", "None"], correct: 2 },
        { text: "A ViewSet combines multiple views into one class.", options: ["True", "False"], correct: 0 },
        { text: "Which viewset provides full CRUD logic by default?", options: ["ReadOnlyModelViewSet", "ModelViewSet", "BaseViewSet", "CrudViewSet"], correct: 1 },
        { text: "What is the advantage of using ViewSets?", options: ["Less code", "Automatic URL routing", "Consistent logic", "All of the above"], correct: 3 },
        { text: "Which decorator adds a custom method to a ViewSet?", options: ["@method", "@action", "@route", "@extra"], correct: 1 },
        { text: "Generic views require which two attributes?", options: ["queryset and serializer_class", "model and view", "path and logic", "data and key"], correct: 0 },
        { text: "The 'dispatch' method in APIView handles ___.", options: ["JSON rendering", "URL mapping", "Calling the right HTTP method handler", "Database saving"], correct: 2 },
        { text: "How do you specify the serializer for a ModelViewSet?", options: ["model_serializer =", "serializer_class =", "data_class =", "map_class ="], correct: 1 },
        { text: "Read-only ViewSets only implement ___.", options: ["GET", "POST", "GET (List and Retrieve)", "DELETE"], correct: 2 },
        { text: "ViewSet methods are named after ___.", options: ["HTTP methods", "CRUD actions (list, create, etc.)", "Models", "Routes"], correct: 1 },
        { text: "Which generic view is only for creating objects?", options: ["ListAPIView", "CreateAPIView", "AddAPIView", "NewAPIView"], correct: 1 },
        { text: "The 'lookup_field' attribute in common views defaults to ___.", options: ["id", "pk", "slug", "name"], correct: 1 },
        { text: "Can you override methods in a ModelViewSet?", options: ["No", "Yes, like perform_create()", "Only in settings", "Only in dev"], correct: 1 },
        { text: "What is the purpose of perform_create()?", options: ["To log data", "To add extra logic (like setting the user) during save", "To speed up DB", "To validate JSON"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is APIView?", a: "The base class for DRF views, providing request/response handling and policy selection (auth/permissions).", type: "Conceptual" },
        { level: "Junior", q: "Difference between a View and a ViewSet?", a: "A View handles standard HTTP methods (get, post). A ViewSet handles actions (list, create, retrieve, update, partial_update, destroy).", type: "Conceptual" },
        { level: "Junior", q: "What are Generic Views?", a: "Pre-built views provided by DRF that implement common patterns like listing objects or creating new ones.", type: "Conceptual" },
        { level: "Mid", q: "Explain the benefits of using ModelViewSet.", a: "It provides a complete set of default read and write actions, reducing the amount of boilerplate code for standard CRUD APIs.", type: "Conceptual" },
        { level: "Mid", q: "What is the @action decorator?", a: "A way to add extra, custom endpoints to a ViewSet that don't fit the standard CRUD actions.", type: "Conceptual" },
        { level: "Mid", q: "How do you determine the current action in a ViewSet method?", a: "By checking the 'self.action' attribute (e.g., if self.action == 'list').", type: "Coding" },
        { level: "Mid", q: "Why use APIView over Generic Views?", a: "When you need completely custom logic that doesn't follow standard CRUD patterns and want full control over the method handlers.", type: "Scenario" },
        { level: "Senior", q: "Explain the method MRO in GenericAPIView.", a: "It combines Mixins (like ListModelMixin) with the GenericAPIView to provide the actual method implementation.", type: "Conceptual" },
        { level: "Senior", q: "How would you dynamically change the serializer class in a ViewSet?", a: "By overriding the get_serializer_class() method based on the current action or user permissions.", type: "Coding" },
        { level: "Senior", q: "What is the purpose of the 'queryset' attribute being a lazy object?", a: "It allows DRF to modify the query (e.g., adding filters or pagination) before it is actually executed against the database.", type: "Conceptual" },
        { level: "Senior", q: "How do you handle bulk creation in a ViewSet?", a: "Usually by overriding the create() method or using a 3rd party library like 'drf-writable-nested' for complex structures.", type: "Scenario" },
        { level: "Senior", q: "What is the role of the 'dispatch' method?", a: "It is the entry point that handles authentication, permissions, and throttling before calling the actual method handler.", type: "Conceptual" }
      ]
    },
    {
      day_number: 4,
      topic: "Routers & URL Patterns",
      category: "DRF",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Explicit URLs with Views", description: "Mapping APIView and Generic views using path()." },
        { time: "11:00 AM", title: "Automatic Routing with ViewSets", description: "Using SimpleRouter and DefaultRouter to skip manual URL config." },
        { time: "01:00 PM", title: "SimpleRouter vs DefaultRouter", description: "Understanding the extra roots and APIs provided by DefaultRouter." },
        { time: "03:00 PM", title: "Nested Routing", description: "Handling parent-child URL structures (/blogs/1/comments/)." },
        { time: "05:00 PM", title: "URL Namespacing in APIs", description: "Organizing complex API surfaces with multiple versions." }
      ],
      quiz: [
        { text: "Which class provides automatic URL routing for ViewSets?", options: ["PathBuilder", "Router", "SimpleRouter", "AutoLink"], correct: 2 },
        { text: "DefaultRouter includes a ___ compared to SimpleRouter.", options: ["Default API Root view", "Automatic security", "Database connector", "CSS file"], correct: 0 },
        { text: "Where do you register a ViewSet with a router?", options: ["router.add()", "router.register()", "router.link()", "router.connect()"], correct: 1 },
        { text: "What is the first argument of router.register()?", options: ["The viewset class", "The URL prefix", "The database name", "The app name"], correct: 1 },
        { text: "Standard path() uses which method for ViewSets?", options: ["as_view()", "as_router()", "as_url()", "as_action()"], correct: 0 },
        { text: "A router generates URLs for which actions?", options: ["list/create", "retrieve/update/delete", "All standard actions", "Custom actions only"], correct: 2 },
        { text: "Which function includes router URLs in main patterns?", options: ["path('', include(router.urls))", "path('', router)", "path('', get_urls(router))", "None of these"], correct: 0 },
        { text: "Nested routing is natively part of DRF core.", options: ["True", "False (requires 3rd party like drf-nested-routers)", "Only in v3.0+", "Only for SQLite"], correct: 1 },
        { text: "What is a 'basename' in router registration?", options: ["The DB table name", "The name used for reversed URLs", "The file path", "The class name"], correct: 1 },
        { text: "SimpleRouter does not provide an endpoint for /.", options: ["True", "False"], correct: 0 },
        { text: "How do you specify a URL suffix like .json?", options: ["format_suffix_patterns()", "add_json()", "suffix_urls()", "url_ext()"], correct: 0 },
        { text: "To use .as_view() with a ViewSet manually, you must pass a ___.", options: ["List", "Dictionary mapping methods to actions", "None", "Key"], correct: 1 },
        { text: "Which router is more common for building a full API?", options: ["SimpleRouter", "DefaultRouter", "HardRouter", "BaseRouter"], correct: 1 },
        { text: "Does a router handle permissions?", options: ["Yes", "No, views handle permissions", "Only for GET", "Only in dev"], correct: 1 },
        { text: "Router registration happens in which file?", options: ["models.py", "views.py", "urls.py", "settings.py"], correct: 2 }
      ],
      interview: [
        { level: "Junior", q: "What is a Router in DRF?", a: "A tool to automatically wire up URL patterns for a ViewSet, following standard REST conventions.", type: "Conceptual" },
        { level: "Junior", q: "Difference between DefaultRouter and SimpleRouter?", a: "DefaultRouter includes a default API root view (listing all registered endpoints) and handles format suffixes for the root.", type: "Conceptual" },
        { level: "Junior", q: "How do you include router URLs in your project?", a: "By adding a path to urls.py and using include(router.urls).", type: "Coding" },
        { level: "Mid", q: "When would you prefer manual URL configuration over Routers?", a: "When you have a highly custom URL structure that doesn't follow standard REST conventions, or when using APIView.", type: "Scenario" },
        { level: "Mid", q: "What is the 'basename' argument in router.register()?", a: "The name used for the generated URL patterns. If omitted, it defaults to the model name in the queryset.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle nested relationships in URLs?", a: "Using a library like 'drf-nested-routers' to define parent-child URL levels (e.g., /albums/{pk}/tracks/).", type: "Scenario" },
        { level: "Mid", q: "Explain format suffixes in DRF URLs.", a: "DRF can handle URLs like /api/items.json or /api/items.xml using format_suffix_patterns().", type: "Conceptual" },
        { level: "Senior", q: "How do routers handle custom @action methods?", a: "They automatically generate URL patterns for them, using the function name as the URL path by default (unless 'url_path' is specified).", type: "Conceptual" },
        { level: "Senior", q: "How would you implement API versioning within a router-based setup?", a: "By creating different routers for different versions and including them under different URL prefixes (/v1/, /v2/).", type: "Scenario" },
        { level: "Senior", q: "What is the benefit of the trailing_slash argument in routers?", a: "It allows you to control whether the generated URLs end with a slash or not, ensuring consistency with your frontend/client requirements.", type: "Conceptual" },
        { level: "Senior", q: "Explain the internal mechanism of how router.urls works.", a: "It is a property that yields a list of URL patterns by inspecting the registered ViewSets and their actions.", type: "Conceptual" },
        { level: "Senior", q: "Can you register the same ViewSet twice in a router?", a: "Yes, with different prefixes and basenames, usually to provide different filters or behaviors for the same model.", type: "Scenario" }
      ]
    },
    {
      day_number: 5,
      topic: "Authentication & Permissions",
      category: "DRF",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Authentication Schemes", description: "BasicAuth, SessionAuth, and Token-based authentication." },
        { time: "11:00 AM", title: "Token Authentication Setup", description: "Configuring authtoken app and managing user tokens." },
        { time: "01:00 PM", title: "Permission Classes", description: "AllowAny, IsAuthenticated, IsAdminUser, and IsAuthenticatedOrReadOnly." },
        { time: "03:00 PM", title: "Custom Permission Logic", description: "Writing your own IsOwner permission classes to protect individual objects." },
        { time: "05:00 PM", title: "JWT (JSON Web Tokens)", description: "Introduction to djangorestframework-simplejwt for robust production auth." }
      ],
      quiz: [
        { text: "Authentication answers which question?", options: ["Who are you?", "What can you do?", "Where are you?", "How are you?"], correct: 0 },
        { text: "Permissions answer which question?", options: ["Who are you?", "What can you do?", "Where are you?", "How are you?"], correct: 1 },
        { text: "Which class allows everyone to access an API?", options: ["IsAuthenticated", "AllowAny", "IsPublic", "FreeAccess"], correct: 1 },
        { text: "Which class restricts access to logged-in users only?", options: ["IsAuthenticated", "AllowAny", "IsUser", "CheckAuth"], correct: 0 },
        { text: "DRF's default token auth stores tokens in ___.", options: ["Cookies", "Database", "Memory", "Settings"], correct: 1 },
        { text: "JWT stands for ___.", options: ["Java Web Tool", "JSON Web Token", "Just Web Token", "Joint Web Team"], correct: 1 },
        { text: "Where do you set global default permissions?", options: ["urls.py", "views.py", "settings.py", "models.py"], correct: 2 },
        { text: "Which method must a custom Permission class implement?", options: ["has_permission", "is_allowed", "check()", "Both has_permission and has_object_permission"], correct: 3 },
        { text: "Token Auth typically uses which HTTP header?", options: ["Auth-Token", "Authorization: Token <key>", "Key", "User-Token"], correct: 1 },
        { text: "IsAuthenticatedOrReadOnly allows GET requests for everyone.", options: ["True", "False"], correct: 0 },
        { text: "Throttling is used to ___.", options: ["Speed up API", "Limit request rate for security/performance", "Encrypt data", "Log errors"], correct: 1 },
        { text: "Which scheme is best for Cross-Origin (CORS) mobile apps?", options: ["SessionAuth", "Token/JWT", "BasicAuth", "None"], correct: 1 },
        { text: "What happens if authentication fails in DRF?", options: ["404 Not Found", "401 Unauthorized", "500 Error", "Redirect to Home"], correct: 1 },
        { text: "Custom permissions inherit from ___.", options: ["BasePermission", "SimplePermission", "LogicPermission", "CheckPermission"], correct: 0 },
        { text: "The 'is_staff' property is checked by which permission?", options: ["IsAuthenticated", "IsAdminUser", "IsStaffOnly", "AllowAny"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "Difference between Authentication and Permissions?", a: "Authentication identifies the user. Permissions determine whether they have the right to perform a specific action.", type: "Conceptual" },
        { level: "Junior", q: "What are some built-in DRF permissions?", a: "AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly.", type: "Conceptual" },
        { level: "Junior", q: "How do you apply a permission to a specific view?", a: "By setting the 'permission_classes' attribute in the view class.", type: "Coding" },
        { level: "Mid", q: "Explain Token Authentication.", a: "A client sends a username/password to get a unique token. Subsequent requests include this token in the Authorization header to identify the user.", type: "Conceptual" },
        { level: "Mid", q: "What is IsAuthenticatedOrReadOnly?", a: "A permission that allows authenticated users to perform any request, but unauthenticated users can only perform 'safe' methods (GET, HEAD, OPTIONS).", type: "Conceptual" },
        { level: "Mid", q: "How do you implement a custom object-level permission?", a: "By creating a class that inherits from BasePermission and overriding 'has_object_permission(self, request, view, obj)'.", type: "Coding" },
        { level: "Mid", q: "Why is SessionAuthentication difficult for mobile apps?", a: "Because it relies on Browser cookies and CSRF tokens, which are harder to manage in non-browser environments.", type: "Scenario" },
        { level: "Senior", q: "What are the benefits of using JWT over standard Tokens?", a: "JWTs are stateless and self-contained (information is in the token itself), reducing database hits for authentication.", type: "Conceptual" },
        { level: "Senior", q: "Explain how DRF handles multiple authentication schemes.", a: "DRF iterates through the list in 'authentication_classes' and uses the first scheme that successfully authenticates the request.", type: "Conceptual" },
        { level: "Senior", q: "What is Throttling and how do you configure it?", a: "Throttling limits the frequency of requests (rate limiting). It's configured in settings.py using 'DEFAULT_THROTTLE_CLASSES' and 'DEFAULT_THROTTLE_RATES'.", type: "Scenario" },
        { level: "Senior", q: "How do you handle permission logic that depends on the time of day or other external factors?", a: "By writing a custom permission class that checks the current time/external factor in the has_permission() method.", type: "Coding" },
        { level: "Senior", q: "What is the difference between 401 Unauthorized and 403 Forbidden?", a: "401 means the server doesn't know who you are. 403 means the server knows who you are but you don't have the right to do this.", type: "Conceptual" }
      ]
    }
  ]
};
