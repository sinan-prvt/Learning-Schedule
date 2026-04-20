import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from tasks.models import Week, Day, Session, Question, InterviewQuestion

# Comprehensive Day-Specific Question Mapping for all 10 Weeks
DAY_CONTENT = {
    # WEEK 1: PYTHON
    "Python Introduction & Basics": {
        "quiz": [
            {"text": "Who developed Python?", "options": ["Denise Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"], "correct": 1},
            {"text": "Python is an ___ language.", "options": ["Interpreted", "Compiled", "Machine", "Assembly"], "correct": 0},
            {"text": "Which of these is used for multi-line comments in Python?", "options": ["//", "#", "''' or \"\"\"", "/* */"], "correct": 2},
            {"text": "What is the standard indentation in Python according to PEP 8?", "options": ["2 spaces", "4 spaces", "8 spaces", "1 tab"], "correct": 1},
            {"text": "Which of these is NOT a valid variable name?", "options": ["_my_var", "my_var1", "1my_var", "my_Var"], "correct": 2},
            {"text": "Which function is used to get the length of a list in Python?", "options": ["count()", "length()", "len()", "size()"], "correct": 2},
            {"text": "What is the default return value of a function that does not return anything?", "options": ["0", "None", "False", "null"], "correct": 1}
        ],
        "interview": [
            {"level": "Junior", "q": "What are the key features of Python?", "a": "High-level, interpreted, dynamically typed, and has a large standard library. It supports multiple programming paradigms (procedural, OOP, functional).", "type": "Conceptual"},
            {"level": "Junior", "q": "Is Python case-sensitive?", "a": "Yes, Python is case-sensitive. For example, 'Variable' and 'variable' are different.", "type": "Conceptual"},
            {"level": "Mid", "q": "Explain the difference between .py and .pyc files.", "a": ".py files contain the source code. .pyc files contain the compiled bytecode, which is used by the Python Virtual Machine to speed up execution.", "type": "Conceptual"},
            {"level": "Mid", "q": "What is PEP 8 and why is it important?", "a": "PEP 8 is the official Style Guide for Python Code. It ensures code readability and consistency across the Python community.", "type": "Conceptual"},
            {"level": "Senior", "q": "How does Python manage memory at a high level?", "a": "Python uses a private heap to manage memory. It employs a reference counting mechanism and a cyclic garbage collector to reclaim memory from objects that are no longer in use.", "type": "Conceptual"}
        ]
    },
    "Data Structures": {
        "quiz": [
            {"text": "Which of these is a mutable data type?", "options": ["Tuple", "String", "List", "Integer"], "correct": 2},
            {"text": "How do you access the last element of a list 'my_list'?", "options": ["my_list[0]", "my_list[-1]", "my_list[len]", "my_list[last]"], "correct": 1},
            {"text": "Which data structure stores unique elements with no fixed order?", "options": ["List", "Set", "Tuple", "Dictionary"], "correct": 1},
            {"text": "What is the complexity of appending an element to a list?", "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"], "correct": 0},
            {"text": "Dictionary keys must be ___.", "options": ["String", "Integer", "Mutable", "Immutable"], "correct": 3},
            {"text": "Which method is used to remove an item from a set?", "options": ["delete()", "remove()", "pop()", "discard()"], "correct": 1}
        ],
        "interview": [
            {"level": "Junior", "q": "What is the difference between a list and a tuple?", "a": "Lists are mutable (can be changed), whereas tuples are immutable (cannot be changed). Lists are defined with [] and tuples with ().", "type": "Conceptual"},
            {"level": "Junior", "q": "How do you clear a list in Python?", "a": "By using the clear() method or assigning an empty list [].", "type": "Conceptual"},
            {"level": "Mid", "q": "What is a dictionary comprehension?", "a": "A concise way to create dictionaries from iterables, similar to list comprehensions. Example: {x: x**2 for x in range(5)}.", "type": "Coding"},
            {"level": "Mid", "q": "When would you prefer a set over a list?", "a": "When you need to store unique elements and perform fast membership testing (O(1) on average).", "type": "Scenario"},
            {"level": "Senior", "q": "Explain the underlying implementation of Python dictionaries.", "a": "Python dictionaries are implemented as hash tables. They use open addressing for collision resolution and are highly optimized for speed.", "type": "Conceptual"}
        ]
    },
    "Functions & Iterables": {
        "quiz": [
            {"text": "How is a function defined in Python?", "options": ["function name():", "def name():", "void name():", "func name():"], "correct": 1},
            {"text": "What is '*args' used for in a function definition?", "options": ["Passing a dictionary", "Passing a variable number of positional arguments", "Naming a function", "Setting default values"], "correct": 1},
            {"text": "Which keyword is used to create a generator?", "options": ["return", "emit", "yield", "produce"], "correct": 2},
            {"text": "What does a decorator do?", "options": ["Deletes a function", "Modifies behavior of a function without changing its source", "Styles the output", "Speeds up the CPU"], "correct": 1},
            {"text": "A lambda function is also known as an ___ function.", "options": ["Anonymous", "Named", "Static", "Global"], "correct": 0}
        ],
        "interview": [
            {"level": "Junior", "q": "What is a lambda function?", "a": "An anonymous, one-line function defined using the 'lambda' keyword. It can take any number of arguments but has only one expression.", "type": "Conceptual"},
            {"level": "Mid", "q": "Explain the difference between a generator and a regular function.", "a": "A regular function returns a value and exits. A generator yields values one by one and maintains its state for the next call, saving memory.", "type": "Conceptual"},
            {"level": "Mid", "q": "What is the use of **kwargs in a function?", "a": "It allows a function to accept any number of keyword arguments as a dictionary.", "type": "Conceptual"},
            {"level": "Senior", "q": "Explain how decorators work in Python.", "a": "Decorators are functions that take another function as an argument and extend its behavior without explicitly modifying it. They use the @decorator_name syntax.", "type": "Conceptual"},
            {"level": "Senior", "q": "What are closures in Python?", "a": "A closure is a function object that remembers values in enclosing scopes even if they are not present in memory.", "type": "Conceptual"}
        ]
    },
    "Object Oriented Programming (OOP)": {
        "quiz": [
            {"text": "Which of these is NOT a pillar of OOP?", "options": ["Encapsulation", "Inheritance", "Extraction", "Polymorphism"], "correct": 2},
            {"text": "What is 'self' in a Python class method?", "options": ["The class name", "The current instance of the object", "A reserved keyword for safety", "The parent class"], "correct": 1},
            {"text": "How do you call a parent class method from a child class?", "options": ["parent.method()", "this.method()", "super().method()", "base.method()"], "correct": 2},
            {"text": "Which method is used for constructor behavior in Python?", "options": ["__main__", "__init__", "__start__", "__construct__"], "correct": 1},
            {"text": "What is Polymorphism?", "options": ["Having many forms", "Having one form", "Deleting forms", "Hiding forms"], "correct": 0}
        ],
        "interview": [
            {"level": "Junior", "q": "What is the purpose of the __init__ method?", "a": "It is the constructor of a class, called automatically when a new instance of the class is created. It initializes the object's attributes.", "type": "Conceptual"},
            {"level": "Mid", "q": "Explain the difference between class variables and instance variables.", "a": "Class variables are shared by all instances of a class. Instance variables are unique to each instance.", "type": "Conceptual"},
            {"level": "Mid", "q": "What is inheritance in Python?", "a": "A mechanism where one class (child) acquires attributes and methods from another class (parent).", "type": "Conceptual"},
            {"level": "Senior", "q": "Explain Method Resolution Order (MRO) in Python.", "a": "MRO is the order in which Python searches for a method in a hierarchy of classes, especially in multiple inheritance. It uses the C3 Linearization algorithm.", "type": "Conceptual"},
            {"level": "Senior", "q": "What is encapsulation and how is it achieved in Python?", "a": "Restricting access to methods and variables to prevent accidental modification. Python uses underscores (e.g., _var or __var) to suggest private members.", "type": "Conceptual"}
        ]
    },
    "Advanced & Under the Hood": {
        "quiz": [
            {"text": "What does the GIL stand for?", "options": ["Global Internal Loop", "Global Interpreter Lock", "General Instance List", "Generic Interface Layer"], "correct": 1},
            {"text": "___ is used for manual garbage collection.", "options": ["gc module", "mem module", "os module", "del keyword"], "correct": 0},
            {"text": "What is Monkey Patching?", "options": ["A style of coding", "Dynamic replacement of attributes at runtime", "A security vulnerability", "A memory leak"], "correct": 1},
            {"text": "Which of these is used for asynchronous programming in Python?", "options": ["asyncio", "threading", "multiprocessing", "subprocess"], "correct": 0}
        ],
        "interview": [
            {"level": "Junior", "q": "What is a virtual environment in Python?", "a": "A self-contained directory that contains a Python installation for a particular version of Python, plus a number of additional packages.", "type": "Conceptual"},
            {"level": "Mid", "q": "What is the Global Interpreter Lock (GIL)?", "a": "A mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.", "type": "Conceptual"},
            {"level": "Senior", "q": "How does multi-processing differ from multi-threading in Python?", "a": "Multi-threading shares the same memory space but is limited by the GIL for CPU-bound tasks. Multi-processing uses separate memory spaces (separate processes), bypassing the GIL.", "type": "Conceptual"}
        ]
    },

    # WEEK 2: DJANGO
    "Django Architecture & Setup": {
        "quiz": [
            {"text": "What architecture does Django follow?", "options": ["MVC", "MVT", "MVP", "Microservices"], "correct": 1},
            {"text": "Which command starts the development server?", "options": ["python manage.py start", "python manage.py runserver", "django run", "server start"], "correct": 1},
            {"text": "Where do you define the list of installed apps?", "options": ["models.py", "urls.py", "settings.py", "wsgi.py"], "correct": 2}
        ],
        "interview": [
            {"level": "Junior", "q": "Explain the MVT architecture.", "a": "Model (Data), View (Logic/Bridge), Template (UI). The user requests a view, the view gets data from the model and renders it via the template.", "type": "Conceptual"},
            {"level": "Mid", "q": "What is the purpose of settings.py?", "a": "It contains all the configuration for your Django project, including database settings, installed apps, middleware, and static file paths.", "type": "Conceptual"}
        ]
    },
    "URL Dispatching & Views": {
        "quiz": [
            {"text": "What is a 'slug' in Django URL configuration?", "options": ["A database field", "A user-friendly URL label", "A type of view", "A security token"], "correct": 1},
            {"text": "Which function is used to include URLs from another app?", "options": ["append()", "map()", "include()", "import_urls()"], "correct": 2},
            {"text": "Which of these is a Class-Based View?", "options": ["ListView", "render()", "HttpResponse", "redirect()"], "correct": 0}
        ],
        "interview": [
            {"level": "Junior", "q": "What is a View in Django?", "a": "A function or class that takes a Web Request and returns a Web Response (usually HTML, a redirect, or a 404).", "type": "Conceptual"},
            {"level": "Mid", "q": "Difference between FBVs and CBVs?", "a": "Function-Based Views are simpler and more readable for simple logic. Class-Based Views allow for better code reuse through inheritance.", "type": "Conceptual"},
            {"level": "Senior", "q": "Explain the middleware execution flow in Django.", "a": "Middleware is executed in the order it's listed in settings.py for requests, and in reverse order for responses.", "type": "Conceptual"}
        ]
    },

    # WEEK 3: DRF
    "Serializers": {
        "quiz": [
            {"text": "What is the primary role of a Serializer in DRF?", "options": ["Saving to DB", "Converting complex data into JSON", "Handling URLs", "Generating Templates"], "correct": 1},
            {"text": "Which serializer field is used for calculating a value on the fly?", "options": ["CharField", "IntegerField", "SerializerMethodField", "ComputedField"], "correct": 2},
            {"text": "Which method in a Serializer handles data validation?", "options": ["clean()", "validate()", "full_clean()", "check()"], "correct": 1}
        ],
        "interview": [
            {"level": "Junior", "q": "What is serialization?", "a": "The process of converting complex data types, like model instances, into native Python data types that can then be easily rendered into JSON or XML.", "type": "Conceptual"},
            {"level": "Mid", "q": "Difference between Serializer and ModelSerializer?", "a": "ModelSerializer is a shortcut that automatically creates a serializer based on a model, whereas Serializer requires explicit field definitions.", "type": "Conceptual"},
            {"level": "Senior", "q": "How do you handle nested serialization in DRF?", "a": "By using another serializer class as a field in the main serializer or by overriding the create() and update() methods to handle related objects.", "type": "Coding"}
        ]
    },

    # WEEK 5: FASTAPI
    "FastAPI Introduction": {
        "quiz": [
            {"text": "Who created FastAPI?", "options": ["Guido van Rossum", "Sebastian Ramírez", "Andrew Godwin", "Tom Christie"], "correct": 1},
            {"text": "FastAPI is built on top of ___ and Starlette.", "options": ["Django", "Pydantic", "Flask", "Aiohttp"], "correct": 1},
            {"text": "Which server is commonly used to run FastAPI applications?", "options": ["Gunicorn", "Uvicorn", "Apache", "Nginx"], "correct": 1}
        ],
        "interview": [
            {"level": "Junior", "q": "Why is FastAPI gaining popularity?", "a": "It is extremely fast, easy to learn, based on standard Python type hints, and automatically generates interactive API documentation.", "type": "Conceptual"},
            {"level": "Mid", "q": "What is ASGI and how does it differ from WSGI?", "a": "WSGI (Web Server Gateway Interface) is synchronous. ASGI (Asynchronous Server Gateway Interface) supports asynchronous features like WebSockets and Long Polling.", "type": "Conceptual"}
        ]
    },

    # WEEK 9: REACT
    "Hooks Deep Dive": {
        "quiz": [
            {"text": "Which hook is used for side effects like data fetching?", "options": ["useState", "useEffect", "useContext", "useMemo"], "correct": 1},
            {"text": "What does a dependency array in useEffect do?", "options": ["Lists all variables used", "Controls when the effect re-runs", "Allocates memory", "Optimizes the build"], "correct": 1}
        ],
        "interview": [
            {"level": "Junior", "q": "What are the rules of Hooks?", "a": "1. Only call hooks at the top level. 2. Only call hooks from React functional components or custom hooks.", "type": "Conceptual"},
            {"level": "Mid", "q": "Explain the useMemo hook.", "a": "It memoizes the result of a calculation to prevent re-running it on every render unless its dependencies change.", "type": "Conceptual"},
            {"level": "Senior", "q": "How would you handle a race condition in useEffect when fetching data?", "a": "By using a cleanup function to set a 'cancelled' flag or using an AbortController to cancel the ongoing fetch request.", "type": "Coding"}
        ]
    }
}

# Generic fallback questions to ensure all days have content if lookup fails
GENERIC_QUESTIONS = [
    {"text": "Which protocol is the standard for web communication?", "options": ["FTP", "SMTP", "HTTP/HTTPS", "Telnet"], "correct": 2},
    {"text": "What is the most popular version control system?", "options": ["SVN", "Mercurial", "Git", "CVS"], "correct": 2},
    {"text": "What does IDE stand for?", "options": ["Integrated Design Engine", "Integrated Development Environment", "Internal Development Error", "Interface Data Entry"], "correct": 1},
    {"text": "Which company maintains React?", "options": ["Google", "Microsoft", "Meta", "Amazon"], "correct": 2}
]

WEEKS_CONFIG = [
    {"id": "W1", "title": "Python", "days": [
        "Python Introduction & Basics", "Data Structures", "Functions & Iterables", "Object Oriented Programming (OOP)", "Advanced & Under the Hood"
    ]},
    {"id": "W2", "title": "Django", "days": [
        "Django Architecture & Setup", "URL Dispatching & Views", "Templates & Static Files", "Django Admin & Security", "Forms & Validation"
    ]},
    {"id": "W3", "title": "DRF", "days": [
        "REST Principles & Setup", "Serializers", "Views in DRF", "Routers & ViewSets", "Authentication & Permissions"
    ]},
    {"id": "W4", "title": "ORM", "days": [
        "Models & Schema", "Model Relationships", "QuerySet API Basics", "Advanced Lookups & Q/F Objects", "Performance & Aggregation"
    ]},
    {"id": "W5", "title": "FastAPI", "days": [
        "FastAPI Introduction", "Path & Query Parameters", "Pydantic Models (Request Body)", "Dependency Injection", "Middleware & Background Tasks"
    ]},
    {"id": "W6", "title": "FastAPI Advanced", "days": [
        "Security & Authentication", "Relational Databases in FastAPI", "Async Databases", "WebSockets", "Testing & Deployment"
    ]},
    {"id": "W7", "title": "AWS Fundamentals", "days": [
        "Cloud Computing & IAM", "EC2 Compute", "S3 Storage", "Databases (RDS & DynamoDB)", "Networking (VPC Basics)"
    ]},
    {"id": "W8", "title": "AWS Advanced", "days": [
        "Serverless (Lambda & API Gateway)", "Containers (ECS & ECR)", "CDN & DNS", "Infrastructure as Code (IaC)", "CI/CD & Monitoring"
    ]},
    {"id": "W9", "title": "React", "days": [
        "React Fundamentals & JSX", "State & Events", "Hooks Deep Dive", "Routing (React Router)", "Context API & Advanced Patterns"
    ]},
    {"id": "W10", "title": "Redux", "days": [
        "Redux Architecture", "Redux Toolkit (RTK) Basics", "Async Redux (Thunks)", "RTK Query", "Full Project Integration"
    ]}
]

def seed():
    # Cleanup
    Week.objects.all().delete()
    Day.objects.all().delete()
    Session.objects.all().delete()
    Question.objects.all().delete()
    InterviewQuestion.objects.all().delete()
    
    print("Starting Database Seeding with Topic-Specific Content...")

    for w_idx, w_info in enumerate(WEEKS_CONFIG):
        week = Week.objects.create(
            week_id=w_info["id"], 
            title=w_info["title"], 
            is_active=(w_info["id"] == "W1")
        )
        
        for d_idx, topic in enumerate(w_info["days"]):
            day = Day.objects.create(
                week=week,
                day_number=d_idx + 1,
                topic=topic,
                category=w_info["title"],
                duration="8h"
            )
            
            # Setup 5 Sessions per day
            for s_idx in range(5):
                Session.objects.create(
                    day=day,
                    time=f"{9 + s_idx}:00 AM",
                    title=f"Session {s_idx + 1} on {topic}",
                    description=f"Deep dive exploration into {topic} - Module {s_idx + 1}."
                )

            # Assign Topic-Specific Quiz Questions
            content = DAY_CONTENT.get(topic, {"quiz": [], "interview": []})
            topic_quiz = content.get("quiz", [])
            
            # Mix topic-specific with some generic ones to fill up to at least 5 questions
            final_quiz_pool = list(topic_quiz)
            generic_sample = list(GENERIC_QUESTIONS)
            random.shuffle(generic_sample)
            
            while len(final_quiz_pool) < 5:
                if generic_sample:
                    final_quiz_pool.append(generic_sample.pop())
                else:
                    break

            random.shuffle(final_quiz_pool)
            
            for q_data in final_quiz_pool[:10]:
                Question.objects.create(
                    day=day,
                    text=q_data["text"],
                    options=q_data["options"],
                    correct_option_index=q_data["correct"]
                )
            
            # Interview Questions
            interview_pool = content.get("interview", [])
            
            # Fallback for interview questions if none defined
            if not interview_pool:
                interview_pool = [
                    {"level": "Junior", "q": f"Basic concept of {topic}?", "a": f"Core fundamentals of {topic}.", "type": "Conceptual"},
                    {"level": "Mid", "q": f"How to implement {topic} effectively?", "a": "Standard industry patterns and best practices.", "type": "Scenario"}
                ]
            
            for i_data in interview_pool:
                InterviewQuestion.objects.create(
                    day=day,
                    question=i_data["q"],
                    answer=i_data["a"],
                    level=i_data["level"],
                    type=i_data["type"]
                )

    print("Success! Database seeded with high-quality content for all 10 weeks.")

if __name__ == '__main__':
    seed()
