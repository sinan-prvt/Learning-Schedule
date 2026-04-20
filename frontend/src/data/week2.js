export const week2 = {
  id: "W2",
  title: "Django Core",
  days: [
    {
      day_number: 1,
      topic: "Django Architecture & Setup",
      category: "Django",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "MVT Architecture", description: "Understanding Model-View-Template and how it differs from MVC." },
        { time: "11:00 AM", title: "Installation & Project Structure", description: "Setting up virtualenv, pip, and creating your first Django project." },
        { time: "01:00 PM", title: "Settings & Configuration", description: "Deep dive into settings.py, INSTALLED_APPS, and Middleware." },
        { time: "03:00 PM", title: "Database Setup & Migrations", description: "Connecting SQLite/PostgreSQL and managing database versions." },
        { time: "05:00 PM", title: "Running the Dev Server", description: "Using manage.py and understanding the development environment." }
      ],
      quiz: [
        { text: "What architecture does Django follow?", options: ["MVC", "MVT", "MVP", "Microservices"], correct: 1 },
        { text: "Which command is used to start a new project?", options: ["django-admin startproject", "python manage.py new", "django start", "init-django"], correct: 0 },
        { text: "Where are the paths to installed apps defined?", options: ["urls.py", "wsgi.py", "settings.py", "apps.py"], correct: 2 },
        { text: "What is the default database for a new Django project?", options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"], correct: 2 },
        { text: "Which file is the entry point for WSGI-compatible web servers?", options: ["wsgi.py", "asgi.py", "manage.py", "server.py"], correct: 0 },
        { text: "How do you apply database migrations?", options: ["python manage.py makemigrations", "python manage.py migrate", "python manage.py up", "python manage.py runmigrations"], correct: 1 },
        { text: "What command creates a superuser?", options: ["python manage.py superuser", "python manage.py createsuperuser", "django-admin admin", "python manage.py adduser"], correct: 1 },
        { text: "Which file is used to manage the project locally?", options: ["manage.py", "django.py", "admin.py", "main.py"], correct: 0 },
        { text: "What does 'The web framework for perfectionists with deadlines' refer to?", options: ["Flask", "FastAPI", "Django", "Pyramid"], correct: 2 },
        { text: "Which setting defines the secret security string?", options: ["SECURITY_TOKEN", "SECRET_KEY", "APP_ID", "PRIVATE_STRING"], correct: 1 },
        { text: "What is a Django 'App'?", options: ["A whole website", "A submodule that does one thing", "A mobile application", "A database table"], correct: 1 },
        { text: "How do you check your current Django version?", options: ["python -m django --version", "django version", "python manage.py v", "django-admin check"], correct: 0 },
        { text: "Which of these is NOT a core Django component?", options: ["ORM", "Template Engine", "View Dispatcher", "React Renderer"], correct: 3 },
        { text: "What is the purpose of migrations?", options: ["Copying data", "Handling database schema changes over time", "Deploying to cloud", "Writing CSS"], correct: 1 },
        { text: "Which setting allows you to enable/disable debug mode?", options: ["DEBUG", "DEV_MODE", "TESTING", "VERBOSE"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is Django?", a: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.", type: "Conceptual" },
        { level: "Junior", q: "Explain the MVT architecture.", a: "Model (Data structure), View (Logic/Bridge), Template (User Interface/HTML).", type: "Conceptual" },
        { level: "Junior", q: "List some advantages of Django.", a: "It is extremely fast, secure (built-in protection against SQLi, XSS, CSRF), fully loaded (admin, auth, ORM), and scalable.", type: "Conceptual" },
        { level: "Junior", q: "What is manage.py?", a: "A command-line utility that lets you interact with your Django project (start server, migrate, create superuser, etc.).", type: "Conceptual" },
        { level: "Mid", q: "What is a 'Project' vs an 'App' in Django?", a: "A project is the entire web application. An app is a specific module or feature within that project (e.g., 'blog', 'users').", type: "Conceptual" },
        { level: "Mid", q: "Difference between makemigrations and migrate?", a: "makemigrations records the changes you've made to your models into a migration file. migrate applies those files to the database.", type: "Conceptual" },
        { level: "Mid", q: "What is a Superuser?", a: "A user with all permissions who has full access to the Django Admin interface.", type: "Conceptual" },
        { level: "Mid", q: "Explain the role of settings.py.", a: "It's the heart of the project configuration, containing database settings, installed apps, middleware, static files, and time zones.", type: "Conceptual" },
        { level: "Senior", q: "How does Django handle security against SQL Injection?", a: "Django's ORM uses query parameterization, ensuring that user input is never executed directly as SQL.", type: "Conceptual" },
        { level: "Senior", q: "What is Middleware in Django?", a: "A framework of hooks into Django’s request/response processing. It's used for global tasks like authentication, session management, and CSRF protection.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle multiple environments (Dev, Staging, Prod) in Django settings?", a: "By splitting settings into multiple files (base.py, dev.py, prod.py) or using environment variables via libraries like python-dotenv.", type: "Scenario" },
        { level: "Senior", q: "Explain the purpose of the wsgi.py file.", a: "It provides an entry point for WSGI-compatible web servers to serve your project. It’s essential for production deployment.", type: "Conceptual" }
      ]
    },
    {
      day_number: 2,
      topic: "URL Dispatching & Views",
      category: "Django",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "URL Routing & Patterns", description: "Using path() and re_path() to map URLs to views." },
        { time: "11:00 AM", title: "Function-Based Views (FBV)", description: "Writing simple, clean logic to handle web requests." },
        { time: "01:00 PM", title: "Class-Based Views (CBV)", description: "Leveraging inheritance for reusable view logic (ListView, DetailView)." },
        { time: "03:00 PM", title: "Request & Response Objects", description: "Understanding HttpRequest and returning HttpResponse, JSON, or Redirects." },
        { time: "05:00 PM", title: "URL Names & Namespacing", description: "Avoiding hardcoded URLs and organizing app-specific routes." }
      ],
      quiz: [
        { text: "Where do you configure URL patterns?", options: ["models.py", "urls.py", "views.py", "settings.py"], correct: 1 },
        { text: "Which function is used to include URLs from another app?", options: ["map()", "include()", "redirect()", "import()"], correct: 1 },
        { text: "What is the first argument of every Function-Based View?", options: ["user", "self", "request", "response"], correct: 2 },
        { text: "Which object should a view return?", options: ["HTML String", "HttpResponse", "dictionary", "List"], correct: 1 },
        { text: "What is a 'slug' in a URL?", options: ["A database ID", "A user-friendly label for a URL", "A security key", "A type of view"], correct: 1 },
        { text: "Which CBV is used to display a list of objects?", options: ["ListView", "DetailView", "CreateView", "TemplateView"], correct: 0 },
        { text: "How do you avoid hardcoding URLs in templates?", options: ["Using raw IDs", "Using the 'url' tag with a name", "Using JavaScript", "Copy-pasting"], correct: 1 },
        { text: "What status code does a normal successful request return?", options: ["404", "500", "200", "301"], correct: 2 },
        { text: "Which object handles redirects in Django?", options: ["ResponseRedirect", "HttpRedirect", "HttpResponseRedirect", "RedirectView"], correct: 2 },
        { text: "What does the reverse() function do?", options: ["Flips a string", "Returns a URL path given a view name", "Undoes a migration", "Clears the cache"], correct: 1 },
        { text: "Can you use Regex in Django URLs?", options: ["No, only path()", "Yes, using re_path()", "Yes, using url()", "Only in settings"], correct: 1 },
        { text: "Every Django view must return a response.", options: ["True", "False"], correct: 0 },
        { text: "What is a decorator often used on views?", options: ["@login_required", "@animate", "@style", "@database"], correct: 0 },
        { text: "Which view handles a single object display?", options: ["ListView", "DetailView", "SingleView", "ObjectView"], correct: 1 },
        { text: "What is namespacing in URLs?", options: ["Naming computers", "Differentiating URLs between multiple apps", "Setting timezones", "Organizing files"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is a View in Django?", a: "A view is a Python function or class that takes a Web Request and returns a Web Response (HTML, JSON, etc.).", type: "Conceptual" },
        { level: "Junior", q: "Explain the difference between include() and path().", a: "path() defines a specific URL pattern. include() delegates URL patterns to other app-specific url.py files.", type: "Conceptual" },
        { level: "Junior", q: "What information does the HttpRequest object contain?", a: "It contains metadata about the request, such as headers, cookies, user authentication status, and GET/POST data.", type: "Conceptual" },
        { level: "Mid", q: "When would you use a Class-Based View over a Function-Based View?", a: "CBVs are better for repetitive tasks that can benefit from inheritance and mixins (like CRUD operations). FBVs are better for very custom, simple logic.", type: "Conceptual" },
        { level: "Mid", q: "What is method decoration in CBVs?", a: "You can decorate the dispatch() method or use the @method_decorator at the class level to apply logic like @login_required.", type: "Coding" },
        { level: "Mid", q: "Explain namespacing in URLs.", a: "It allows you to uniquely identify URL names across different apps. Example: 'blog:detail' vs 'news:detail'.", type: "Conceptual" },
        { level: "Mid", q: "What is the purpose of the 'reverse' function?", a: "It allows you to get the URL string for a specific view name, which avoids hardcoding the URL paths in your Python code.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a custom 404 page in Django?", a: "By defining a handler404 = 'my_app.views.my_custom_view' in the main urls.py and creating a matching template.", type: "Scenario" },
        { level: "Senior", q: "Explain the resolution order of URL patterns.", a: "Django searches through the url patterns sequentially and stops at the first match. This is why order matters, especially when using regex.", type: "Conceptual" },
        { level: "Senior", q: "How do you pass extra arguments to a view through URL configuration?", a: "By passing a dictionary as the third argument to the path() function.", type: "Coding" },
        { level: "Senior", q: "What are Mixins in Django views?", a: "A type of multiple inheritance where you provide a specific behavior to a class-based view (e.g., LoginRequiredMixin).", type: "Conceptual" },
        { level: "Senior", q: "How do you limit a view to only accept POST requests?", a: "Using the @require_POST decorator for FBVs, or overriding the post() method in CBVs.", type: "Coding" }
      ]
    },
    {
      day_number: 3,
      topic: "Templates & Static Files",
      category: "Django",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Django Template Language (DTL)", description: "Variables, tags, and filters in depth." },
        { time: "11:00 AM", title: "Template Inheritance", description: "Mastering base.py, blocks, and extending layouts." },
        { time: "01:00 PM", title: "Static Files Strategy", description: "Handling CSS, JS, and Images in development and production." },
        { time: "03:00 PM", title: "Context Processors & Custom Filters", description: "Injecting global data into all templates and creating custom DTL tags." },
        { time: "05:00 PM", title: "Media Files Handling", description: "Managing user-uploaded content (images/documents) using Media Root." }
      ],
      quiz: [
        { text: "What syntax is used for variables in DTL?", options: ["{% var %}", "{{ var }}", "[ var ]", "(( var ))"], correct: 1 },
        { text: "Which tag is used for loops?", options: ["{% for %}", "{% loop %}", "{% iter %}", "{% each %}"], correct: 0 },
        { text: "How do you extend a base template?", options: ["{% include 'base.html' %}", "{% extends 'base.html' %}", "{% base 'base.html' %}", "{% inherit 'base.html' %}"], correct: 1 },
        { text: "What tag marks a block that can be overridden?", options: ["{% section %}", "{% slot %}", "{% block %}", "{% area %}"], correct: 2 },
        { text: "Where should you store CSS and JS files?", options: ["templates/", "static/", "media/", "media/root/"], correct: 1 },
        { text: "What command gathers static files for production?", options: ["python manage.py collectstatic", "python manage.py buildstatic", "python manage.py publish", "python manage.py static-up"], correct: 0 },
        { text: "Which tag allows including another template?", options: ["{% render %}", "{% include %}", "{% import %}", "{% draw %}"], correct: 1 },
        { text: "How do you format a date in a template?", options: ["{{ my_date|format:'Y-m-d' }}", "{{ my_date|date:'Y-m-d' }}", "{% date my_date %}", "{{ my_date.to_string() }}"], correct: 1 },
        { text: "What is a context processor?", options: ["A tool to debug CSS", "A function that provides data to all templates", "A database manager", "An image optimizer"], correct: 1 },
        { text: "How do you access the current user in a template?", options: ["{{ user }}", "{{ request.user }}", "{{ current_user }}", "{{ auth.user }}"], correct: 1 },
        { text: "What is the purpose of load static?", options: ["To speed up the server", "To enable the 'static' tag in a template", "To load the database", "To load CSS into memory"], correct: 1 },
        { text: "Which tag is used for conditional logic?", options: ["{% if %}", "{% case %}", "{% when %}", "{% check %}"], correct: 0 },
        { text: "A filter in DTL is used to ___ data.", options: ["Delete", "Transform/Format", "Search", "Encrypt"], correct: 1 },
        { text: "Can you run arbitrary Python code in a Django template?", options: ["Yes, using {{ py }}", "No, DTL is intentionally restricted", "Only in debug mode", "Only in settings"], correct: 1 },
        { text: "Which setting defines where user-uploaded files are stored?", options: ["STATIC_ROOT", "MEDIA_ROOT", "FILE_ROOT", "UPLOAD_PATH"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is the Django Template Language (DTL)?", a: "Django’s built-in template system that allows creating dynamic HTML using variables and tags.", type: "Conceptual" },
        { level: "Junior", q: "How does template inheritance work?", a: "By creating a base template with 'blocks' and having other templates 'extend' it and fill those blocks with specific content.", type: "Conceptual" },
        { level: "Junior", q: "Difference between static files and media files?", a: "Static files are part of your code (CSS/JS). Media files are uploaded by users (profile pictures, PDFs).", type: "Conceptual" },
        { level: "Mid", q: "How do you create a custom template filter?", a: "By creating a 'templatetags' directory in your app, adding an __init__.py, a Python module, and using the @register.filter decorator.", type: "Coding" },
        { level: "Mid", q: "What are context processors?", a: "Functions that take the request object as an argument and return a dictionary of data that is then available to every single template rendered.", type: "Conceptual" },
        { level: "Mid", q: "Why would you use 'include' vs 'extends'?", a: "Use 'extends' to build a layout from a base. Use 'include' to insert reusable components (like a navbar or footer) into a template.", type: "Scenario" },
        { level: "Mid", q: "How do you handle static files in production?", a: "Run collectstatic to gather all files into STATIC_ROOT and use a server like Nginx or a library like WhiteNoise to serve them.", type: "Scenario" },
        { level: "Senior", q: "Explain the security implications of using the 'safe' filter.", a: "The 'safe' filter tells Django not to escape the HTML. If used on user-provided data, it can lead to XSS (Cross-Site Scripting) attacks.", type: "Scenario" },
        { level: "Senior", q: "How would you implement a multilingual template system?", a: "By using Django's i18n support, the {% trans %} tag, and managing translation files (PO/MO files).", type: "Scenario" },
        { level: "Senior", q: "Explain how WhiteNoise works.", a: "It's a middleware that allows your web application to serve its own static files, avoiding the need for a separate server like Nginx for small/medium sites.", type: "Conceptual" },
        { level: "Senior", q: "What is the purpose of the AppConfig for templatetags?", a: "It ensures your custom tags are loaded as soon as the app starts, preventing 'tag not found' errors in your templates.", type: "Conceptual" }
      ]
    },
    {
      day_number: 4,
      topic: "Django Admin & Security",
      category: "Django",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Customizing the Admin Interface", description: "Configuring ModelAdmin, list_display, filters, and searches." },
        { time: "11:00 AM", title: "Django Auth System", description: "Users, Groups, Permissions, and extending the User model." },
        { time: "01:00 PM", title: "Security Best Practices", description: "XSS, CSRF, SQL Injection, and using the check --deploy tool." },
        { time: "03:00 PM", title: "Passwords & Hashing", description: "How Django stores passwords securely using PBKDF2." },
        { time: "05:00 PM", title: "Admin Actions & Permissions", description: "Creating custom actions and managing fine-grained user access." }
      ],
      quiz: [
        { text: "Where do you customize the admin interface for a model?", options: ["models.py", "admin.py", "views.py", "urls.py"], correct: 1 },
        { text: "Which setting reveals security issues in production?", options: ["DEBUG", "SECRET_KEY", "ALLOWED_HOSTS", "python manage.py check --deploy"], correct: 3 },
        { text: "Django's default CSRF protection uses a ___.", options: ["Password", "Token", "Script", "Database"], correct: 1 },
        { text: "Which field option in Admin allows searching?", options: ["search_fields", "find_labels", "lookup_keys", "query_attrs"], correct: 0 },
        { text: "How does Django store user passwords?", options: ["Plain text", "MD5 hash", "Encrypted with salt", "Hashed with PBKDF2/Argon2"], correct: 3 },
        { text: "Which admin attribute limits the fields shown in a list?", options: ["list_display", "show_fields", "admin_cols", "view_items"], correct: 0 },
        { text: "What is the purpose of the 'Groups' feature?", options: ["To categorize products", "To manage multiple user permissions at once", "To send emails", "To host forums"], correct: 1 },
        { text: "Which middleware protects against Clickjacking?", options: ["CsrfViewMiddleware", "XFrameOptionsMiddleware", "SecurityMiddleware", "AuthMiddleware"], correct: 1 },
        { text: "What is the best way to extend the built-in User model?", options: ["Editing Django source code", "Using AbstractUser or AbstractBaseUser", "Creating a Profile model with OneToOneLink", "Both B and C"], correct: 3 },
        { text: "How do you restrict the Admin to staff only?", options: ["is_active", "is_staff", "is_superuser", "is_admin"], correct: 1 },
        { text: "___ prevents Cross-Site Request Forgery.", options: ["HTTPS", "SQLi", "CSRF Token", "OAuth"], correct: 2 },
        { text: "Which attribute in admin.py adds filters to the side panel?", options: ["list_filter", "side_filter", "filter_horizontal", "panel_filters"], correct: 0 },
        { text: "Can you change the Admin URL prefix?", options: ["No, it must be /admin/", "Yes, in the main urls.py", "Only in settings", "Only in dev mode"], correct: 1 },
        { text: "What is the purpose of the secret key?", options: ["Encrypting database", "Providing cryptographic signing", "Saving logs", "Logging into admin"], correct: 1 },
        { text: "What does the @admin.register() decorator do?", options: ["Registers a user", "Links a ModelAdmin to a model", "Exports the database", "Speeds up the admin"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is the Django Admin?", a: "A built-in automated interface that provides an easy way to manage site content and users.", type: "Conceptual" },
        { level: "Junior", q: "How do you protect a form from CSRF?", a: "By adding the {% csrf_token %} tag inside the HTML <form> element.", type: "Conceptual" },
        { level: "Junior", q: "What is the difference between is_staff and is_superuser?", a: "is_staff allows logging into the admin. is_superuser grants all permissions automatically.", type: "Conceptual" },
        { level: "Mid", q: "How do you customize the fields shown in the Admin list view?", a: "By defining a class inheriting from admin.ModelAdmin and setting the 'list_display' attribute.", type: "Coding" },
        { level: "Mid", q: "Explain the difference between AbstractUser and AbstractBaseUser.", a: "AbstractUser keeps the default fields (username, email, etc.) and lets you add more. AbstractBaseUser starts from scratch (just ID and password).", type: "Conceptual" },
        { level: "Mid", q: "What is Cross-Site Scripting (XSS) and how does Django prevent it?", a: "XSS is injecting malicious scripts into pages. Django prevents this by auto-escaping HTML in templates.", type: "Conceptual" },
        { level: "Mid", q: "How would you implement a custom Admin action?", a: "By defining a function in admin.py and adding it to the 'actions' list in your ModelAdmin class.", type: "Coding" },
        { level: "Senior", q: "What is the 'Double Submit Cookie' pattern in CSRF?", a: "It's a way to verify requests using matched values in a cookie and a hidden form field, which Django uses for its CSRF protection.", type: "Conceptual" },
        { level: "Senior", q: "How do you securely handle sensitive environment variables?", a: "Using environment variables or a secret manager, never hardcoding them in the codebase, and using .env files (ignored by Git).", type: "Scenario" },
        { level: "Senior", q: "Explain how Django protects against SQL Injection.", a: "By using prepared statements/parameterized queries in its ORM, preventing user input from being parsed as part of the SQL command.", type: "Conceptual" },
        { level: "Senior", q: "How do you manage sessions in production?", a: "Usually by storing them in the database or a high-performance cache like Redis, and setting SESSION_COOKIE_SECURE = True.", type: "Scenario" }
      ]
    },
    {
      day_number: 5,
      topic: "Forms & Validation",
      category: "Django",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Standard Forms vs ModelForms", description: "Defining manual forms and auto-generating forms from models." },
        { time: "11:00 AM", title: "Form Validation & Error Handling", description: "Using clean(), clean_fieldname(), and displaying errors in templates." },
        { time: "01:00 PM", title: "Widgets & Styling", description: "Customizing how form fields appear as HTML (Select, Password, DatePicker)." },
        { time: "03:00 PM", title: "File & Image Uploads in Forms", description: "Handling multipart data and processing file uploads securely." },
        { time: "05:00 PM", title: "Formsets & Advanced Logic", description: "Managing multiple forms on a single page and handling complex submissions." }
      ],
      quiz: [
        { text: "Which class should you inherit for a form based on a model?", options: ["forms.Form", "forms.ModelForm", "models.Form", "forms.DataForm"], correct: 1 },
        { text: "What is the common method to check if a form is valid?", options: ["is_good()", "is_clean()", "is_valid()", "check()"], correct: 2 },
        { text: "Where do you define the model used in a ModelForm?", options: ["class Args", "class Config", "class Meta", "class Model"], correct: 2 },
        { text: "Which method is used for field-specific cleaning?", options: ["clean()", "clean_fieldname()", "validate_field()", "sanitize()"], correct: 1 },
        { text: "What attribute controls how a field is rendered as HTML?", options: ["Widget", "Style", "Decorator", "Skin"], correct: 0 },
        { text: "How do you display all form errors in a template?", options: ["{{ form.errors }}", "{{ form.all_errors }}", "{{ errors }}", "{% show_errors %}"], correct: 0 },
        { text: "What argument must be passed to handle file uploads in a form?", options: ["request.FILES", "request.DATA", "request.UPLOADS", "request.BLOB"], correct: 0 },
        { text: "Which HTML attribute is required for file uploads?", options: ["type='multipart'", "enctype='multipart/form-data'", "method='UP'", "auth='file'"], correct: 1 },
        { text: "What is a Formset?", options: ["A list of forms", "A styling kit", "A database table", "A security layer"], correct: 0 },
        { text: "How do you automatically generate a field's HTML in a template?", options: ["{{ form.field }}", "{{ field.as_p }}", "{{ field.render }}", "Both A and B"], correct: 3 },
        { text: "By default, Django forms treat all fields as ___.", options: ["Optional", "Required", "ReadOnly", "Hidden"], correct: 1 },
        { text: "Where do you write general validation across multiple fields?", options: ["__init__()", "save()", "clean()", "validate()"], correct: 2 },
        { text: "Which widget is best for a password input?", options: ["TextInput", "PasswordInput", "HiddenInput", "SecretWidget"], correct: 1 },
        { text: "How do you save a ModelForm directly to the database?", options: ["form.submit()", "form.save()", "form.push()", "form.create()"], correct: 1 },
        { text: "Can you add CSS classes to form widgets in Python?", options: ["No, must use JS", "Yes, using the 'attrs' argument", "Only in templates", "Only in settings"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is a Django Form?", a: "A class that handles the rendering, validation, and processing of user-provided data from HTML forms.", type: "Conceptual" },
        { level: "Junior", q: "Difference between forms.Form and forms.ModelForm?", a: "forms.Form is for general data. forms.ModelForm is specifically tied to a Django model and saves directly to the DB.", type: "Conceptual" },
        { level: "Junior", q: "How do you display a field's error in a template?", a: "By accessing {{ form.field_name.errors }} inside the template.", type: "Conceptual" },
        { level: "Mid", q: "Explain the form validation process (the 'is_valid' flow).", a: "When is_valid() is called, Django runs full_clean(), which then triggers clean_field() methods and the general clean() method.", type: "Conceptual" },
        { level: "Mid", q: "How do you create a custom validator function?", a: "By defining a function that raises a ValidationError if a condition fails, and assigning it to the 'validators' list of a field.", type: "Coding" },
        { level: "Mid", q: "What is a Django Widget?", a: "A representation of an HTML input element. It controls how a field is displayed (e.g., rendering a CharField as a multi-line Textarea).", type: "Conceptual" },
        { level: "Mid", q: "Explain the 'cleaned_data' attribute.", a: "It's a dictionary containing the validated and sanitized data after is_valid() has been called and returned True.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a form that needs to dynamic content based on the logged-in user?", a: "By overriding the form's __init__ method to accept a 'user' argument and filtering the querysets or choices accordingly.", type: "Coding" },
        { level: "Senior", q: "What are Formsets and when would you use one?", a: "A layer of abstraction to work with multiple forms on a single page. Great for projects where a user needs to edit many objects at once.", type: "Scenario" },
        { level: "Senior", q: "How do you handle CSRF protection for AJAX form submissions?", a: "By setting the X-CSRFToken header in the JavaScript request using the value from the 'csrftoken' cookie.", type: "Scenario" },
        { level: "Senior", q: "How do you prevent a user from submitting the same form twice accidentally?", a: "By using redirects after a successful POST (POST/Redirect/Get pattern) or implementing JS-level button disabling.", type: "Scenario" }
      ]
    }
  ]
};
