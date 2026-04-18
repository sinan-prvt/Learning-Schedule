import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from tasks.models import Week, Day, Session, Question

curriculum_deep = {
    "W1": {
        "title": "Python",
        "days": [
            {
                "topic": "Python Introduction & Basics",
                "sessions": ["Python Introduction", "Advantages and Disadvantages", "Working of Python Interpreter", "Python Syntax", "Python Variables", "Python Data Types", "Operators", "Python Conditional Statements", "Python Loops", "f-strings, raw strings, Input/Output & Casting", "range(), enumerate()", "Namespaces & Modules (math, sys)"]
            },
            {
                "topic": "Data Structures",
                "sessions": ["Mutability and Immutability", "List", "Tuple", "Python Sets", "Python Dictionary", "String", "Data Structures Extra Topics"]
            },
            {
                "topic": "Functions & Iterables",
                "sessions": ["Python Functions", "Lambda Functions & Functional Programming", "Recursion", "Exception Handling", "Decorators & Related Concepts", "Iterators", "Generators", "Advanced Concepts"]
            },
            {
                "topic": "Object Oriented Programming (OOP)",
                "sessions": ["OOP Concepts", "Methods and Constructors", "Types of Variables", "Types of Methods", "Inheritance", "Composition", "Polymorphism", "Duck Typing", "Abstraction", "Encapsulation", "super() keyword, __str__() and __repr__()"]
            },
            {
                "topic": "Advanced & Under the Hood",
                "sessions": ["File Handling", "Memory Management in Python", "Parameter Passing", "Monkey Patching", "Concurrency & Performance", "Global Interpreter Lock (GIL)", "Async Programming"]
            }
        ]
    },
    "W2": {
        "title": "Django",
        "days": [
            {
                "topic": "Django Architecture & Setup",
                "sessions": ["MVT Architecture Overview", "Virtual Environments & Installation", "django-admin and manage.py commands", "Project vs App Structure", "settings.py Configuration", "Running the Development Server"]
            },
            {
                "topic": "URL Dispatching & Views",
                "sessions": ["urls.py Mapping", "Function-Based Views (FBV)", "Request and Response Objects", "URL Parameters and Path Converters", "Include() and App-level URLs", "Class-Based Views (CBV) Introduction"]
            },
            {
                "topic": "Templates & Static Files",
                "sessions": ["Template Configuration", "Django Template Language (DTL)", "Variables and Tags", "Template Inheritance (extends, block)", "Serving Static Files (CSS, JS, Images)", "Custom Template Filters"]
            },
            {
                "topic": "Django Admin & Security",
                "sessions": ["Setting up the Django Admin Interface", "Customizing Admin Models", "Creating Superusers", "Cross-Site Request Forgery (CSRF)", "Cross-Site Scripting (XSS)", "Authentication System Basics"]
            },
            {
                "topic": "Forms & Validation",
                "sessions": ["Django Forms API", "ModelForms", "Form Validation and Cleaning Data", "Rendering Forms in Templates", "Handling Form Submission (POST)"]
            }
        ]
    },
    "W3": {
        "title": "Django Rest Framework (DRF)",
        "days": [
            {
                "topic": "REST Principles & Setup",
                "sessions": ["Introduction to RESTful APIs", "DRF Installation & Settings", "JSON vs XML", "HTTP Verbs (GET, POST, PUT, DELETE)", "Status Codes"]
            },
            {
                "topic": "Serializers",
                "sessions": ["What is a Serializer?", "Basic Serializers", "ModelSerializers", "Validation in Serializers (Field & Object Level)", "Nested Serializers", "SerializerMethodField"]
            },
            {
                "topic": "Views in DRF",
                "sessions": ["@api_view Decorator (FBV)", "APIView Class", "Generic Views", "Mixins", "ViewSets Introduction"]
            },
            {
                "topic": "Routers & ViewSets",
                "sessions": ["ViewSets vs Views", "ModelViewSet", "ReadOnlyModelViewSet", "SimpleRouter", "DefaultRouter", "Customizing Router Actions"]
            },
            {
                "topic": "Authentication & Permissions",
                "sessions": ["BasicAuthentication", "TokenAuthentication", "JWT Authentication setup", "AllowAny vs IsAuthenticated", "IsAdminUser", "Custom Permission Classes"]
            }
        ]
    },
    "W4": {
        "title": "Django ORM",
        "days": [
            {
                "topic": "Models & Schema",
                "sessions": ["Field Types (CharField, IntegerField, etc.)", "Field Options (null, blank, choices)", "Meta class definitions", "Migrations (makemigrations, migrate, sqlmigrate)", "Indexes and Constraints"]
            },
            {
                "topic": "Model Relationships",
                "sessions": ["ForeignKey (One-to-Many)", "ManyToManyField", "OneToOneField", "Reverse Relations (related_name)", "on_delete behaviors (CASCADE, SET_NULL)"]
            },
            {
                "topic": "QuerySet API Basics",
                "sessions": ["all(), filter(), exclude()", "get() vs filter()", "Chaining Querysets", "order_by()", "values() and values_list()", "count(), exists()"]
            },
            {
                "topic": "Advanced Lookups & Q/F Objects",
                "sessions": ["Field Lookups (__exact, __icontains, __in)", "Spanning Relationships (Joins with __)", "F() Expressions (Database-level updates)", "Q() Objects (Complex Filters & OR logic)"]
            },
            {
                "topic": "Performance & Aggregation",
                "sessions": ["select_related()", "prefetch_related()", "Database Caching concepts", "aggregate() vs annotate()", "Sum, Count, Avg, Min, Max"]
            }
        ]
    },
    "W5": {
        "title": "FastAPI",
        "days": [
            {
                "topic": "FastAPI Introduction",
                "sessions": ["What is FastAPI?", "ASGI vs WSGI", "Installation (Uvicorn)", "Creating the First Endpoint", "Automatic Interactive API Docs (Swagger UI/ReDoc)"]
            },
            {
                "topic": "Path & Query Parameters",
                "sessions": ["Path Parameters", "Query Parameters", "Type Hints in Python", "Optional Parameters", "String Validations (Query(min_length=3))", "Path Validations"]
            },
            {
                "topic": "Pydantic Models (Request Body)",
                "sessions": ["Introduction to Pydantic", "Declaring Request Bodies", "Nested Models", "Schema Extra / Examples", "Field Validations"]
            },
            {
                "topic": "Dependency Injection",
                "sessions": ["What is Dependency Injection?", "Creating a Dependency", "Using Depends()", "Classes as Dependencies", "Global Dependencies"]
            },
            {
                "topic": "Middleware & Background Tasks",
                "sessions": ["CORS Middleware", "Custom Middleware", "BackgroundTasks", "Handling Errors (HTTPException)", "Custom Exception Handlers"]
            }
        ]
    },
    "W6": {
        "title": "FastAPI Advanced",
        "days": [
            {
                "topic": "Security & Authentication",
                "sessions": ["OAuth2 with Password (and hashing)", "JWT Token Generation", "Verifying JWT Tokens", "Getting Current User", "Securing Endpoints"]
            },
            {
                "topic": "Relational Databases in FastAPI",
                "sessions": ["SQLAlchemy Integration", "Databases setup", "Creating Models", "CRUD Operations", "Yielding DB Sessions (Dependency)"]
            },
            {
                "topic": "Async Databases",
                "sessions": ["Async SQLModel/SQLAlchemy", "Alembic Migrations", "Async CRUD Operations", "Performance Benefits"]
            },
            {
                "topic": "WebSockets",
                "sessions": ["What are WebSockets?", "WebSocket Endpoints in FastAPI", "Handling Connections", "Broadcasting Messages", "Real-time chat example"]
            },
            {
                "topic": "Testing & Deployment",
                "sessions": ["Pytest Setup", "TestClient", "Mocking Dependencies", "Dockerizing a FastAPI App", "Deploying with Uvicorn & Gunicorn"]
            }
        ]
    },
    "W7": {
        "title": "AWS Fundamentals",
        "days": [
            {
                "topic": "Cloud Computing & IAM",
                "sessions": ["What is Cloud Computing?", "AWS Regions and Zones", "IAM Users and Groups", "IAM Policies and Roles", "AWS CLI Setup", "Security Best Practices"]
            },
            {
                "topic": "EC2 Compute",
                "sessions": ["EC2 Instance Types", "AMI (Amazon Machine Image)", "Security Groups", "SSH into EC2", "Elastic IPs", "EBS Volumes vs Instance Store"]
            },
            {
                "topic": "S3 Storage",
                "sessions": ["S3 Buckets and Objects", "Versioning and Lifecycle Rules", "Static Website Hosting on S3", "S3 IAM permissions", "Pre-signed URLs"]
            },
            {
                "topic": "Databases (RDS & DynamoDB)",
                "sessions": ["Managed vs Unmanaged DBs", "RDS (PostgreSQL setup)", "Connecting Django/FastAPI to RDS", "DynamoDB Basics (NoSQL)", "Partition Keys and Queries"]
            },
            {
                "topic": "Networking (VPC Basics)",
                "sessions": ["VPC, Subnets (Public/Private)", "Internet Gateways", "Route Tables", "NAT Gateways", "Security Groups vs NACLs"]
            }
        ]
    },
    "W8": {
        "title": "AWS Advanced",
        "days": [
            {
                "topic": "Serverless (Lambda & API Gateway)",
                "sessions": ["Lambda Function Basics", "Event Triggers", "API Gateway REST APIs", "Integrating API Gateway with Lambda", "Cold Starts and Limits"]
            },
            {
                "topic": "Containers (ECS & ECR)",
                "sessions": ["Docker on AWS Overview", "Elastic Container Registry (ECR)", "Elastic Container Service (ECS)", "Fargate vs EC2 Backup", "Task Definitions and Clusters"]
            },
            {
                "topic": "CDN & DNS",
                "sessions": ["Route53 Record Types (A, CNAME, ALIAS)", "Registering Domains", "CloudFront CDN Overview", "Connecting CloudFront to S3", "SSL Certificates (ACM)"]
            },
            {
                "topic": "Infrastructure as Code (IaC)",
                "sessions": ["CloudFormation Basics", "Writing YAML Templates", "AWS CDK (Cloud Development Kit) Overview", "Terraform vs CloudFormation"]
            },
            {
                "topic": "CI/CD & Monitoring",
                "sessions": ["CodeBuild and CodePipeline", "Automating Deployments", "CloudWatch Metrics and Logs", "CloudWatch Alarms", "SNS (Simple Notification Service)"]
            }
        ]
    },
    "W9": {
        "title": "React",
        "days": [
            {
                "topic": "React Fundamentals & JSX",
                "sessions": ["Vite/CRA Setup", "Virtual DOM vs Real DOM", "JSX Syntax Rules", "Components (Functional)", "Props (Passing Data)", "Children Prop"]
            },
            {
                "topic": "State & Events",
                "sessions": ["useState Hook", "Handling Events (onClick, onChange)", "Controlled Components (Forms)", "Lifting State Up", "State as a Snapshot"]
            },
            {
                "topic": "Hooks Deep Dive",
                "sessions": ["useEffect lifecycle mapping", "Dependency Arrays in useEffect", "Fetching Data with useEffect", "useMemo for performance", "useCallback", "Custom Hooks"]
            },
            {
                "topic": "Routing (React Router)",
                "sessions": ["React Router Setup", "BrowserRouter, Routes, Route", "Link and NavLink", "useParams for Dynamic URLs", "useNavigate for Redirects"]
            },
            {
                "topic": "Context API & Advanced Patterns",
                "sessions": ["Prop Drilling Problem", "createContext and Context.Provider", "useContext Hook", "Higher Order Components (HOCs) concepts", "Render Props concepts"]
            }
        ]
    },
    "W10": {
        "title": "Redux",
        "days": [
            {
                "topic": "Redux Architecture",
                "sessions": ["Global State Management needs", "Store, Actions, Reducers", "Immutable Updates", "Data Flow in Redux", "Redux DevTools Setup"]
            },
            {
                "topic": "Redux Toolkit (RTK) Basics",
                "sessions": ["Why RTK?", "configureStore", "createSlice (State, Reducers, Actions)", "useSelector Hook", "useDispatch Hook"]
            },
            {
                "topic": "Async Redux (Thunks)",
                "sessions": ["Async Logic in Redux", "createAsyncThunk", "Pending, Fulfilled, Rejected states", "Handling API Errors in State", "Dispatching Async Actions"]
            },
            {
                "topic": "RTK Query",
                "sessions": ["Introduction to RTK Query", "createApi and fetchBaseQuery", "Defining Endpoints (Queries & Mutations)", "Exporting auto-generated Hooks", "Caching and Invalidating Tags"]
            },
            {
                "topic": "Full Project Integration",
                "sessions": ["Project Planning", "Wiring up RTK Store to React", "Connecting Django/FastAPI backend", "Polishing UI and Performance", "Final Deployment Steps"]
            }
        ]
    }
}

def seed():
    Week.objects.all().delete()
    Day.objects.all().delete()
    Session.objects.all().delete()
    Question.objects.all().delete()

    globalDayId = 1
    
    for week_key, week_info in curriculum_deep.items():
        week_num = int(week_key.replace("W", ""))
        # Only set Week 1 as active to match UI mockup flow
        week_instance = Week.objects.create(week_id=week_key, title=week_info['title'], is_active=(week_key == 'W1'))
        
        for idx, day_info in enumerate(week_info['days']):
            topic = day_info['topic']
            sessions_list = day_info['sessions']
            
            day = Day.objects.create(
                week=week_instance,
                day_number=idx + 1,
                topic=topic,
                category=week_info['title']
            )

            # Map the exact provided session Strings to Session objects
            for t_idx, session_title in enumerate(sessions_list):
                # Generates times starting at 9 AM, adding 1 hour for each
                hour = 9 + t_idx
                am_pm = "AM"
                if hour >= 12:
                    am_pm = "PM"
                if hour > 12:
                    hour -= 12
                time_str = f"{hour}:00 {am_pm}"
                
                Session.objects.create(
                    day=day, 
                    time=time_str, 
                    title=session_title, 
                    description=""
                )

            # Attach 30 questions matching exactly this day topic
            q_objs = []
            for i in range(1, 31):
                options = [
                    'Initialize default sequence', 
                    'Invoke resolution pipeline directly', 
                    f'Iterate logic specific to {topic}', 
                    'Raise parameter exception'
                ]
                q_objs.append(Question(
                    day=day, 
                    text=f"Question {i} evaluating {topic}: Which methodology is the absolute standard for addressing exceptions in this block?", 
                    options=options, 
                    correct_option_index=random.randint(0,3)
                ))
            Question.objects.bulk_create(q_objs)
            
            globalDayId += 1
            
    print("Database seeded completely with highly specific Curriculum!")

if __name__ == '__main__':
    seed()
