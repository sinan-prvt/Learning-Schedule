// This file is the fallback data for when the backend is offline.
// The live data is fetched from Django at http://127.0.0.1:8000/api/curriculum/

export const DUMMY_DATA = {
  weeks: [
    { id: 'W1', title: 'Python', active: true },
    { id: 'W2', title: 'Django', active: false },
    { id: 'W3', title: 'DRF', active: false },
    { id: 'W4', title: 'ORM', active: false },
    { id: 'W5', title: 'FastAPI', active: false },
    { id: 'W6', title: 'FastAPI Adv', active: false },
    { id: 'W7', title: 'AWS', active: false },
    { id: 'W8', title: 'AWS Adv', active: false },
    { id: 'W9', title: 'React', active: false },
    { id: 'W10', title: 'Redux', active: false },
  ],
  days: []
};

const curriculum = [
  {
    week: 'W1', cat: 'Python', days: [
      { topic: 'Python Introduction & Basics', sessions: ['Python Introduction', 'Advantages and Disadvantages', 'Working of Python Interpreter', 'Python Syntax', 'Python Variables', 'Python Data Types', 'Operators', 'Python Conditional Statements', 'Python Loops', 'f-strings, raw strings, Input/Output & Casting', 'range(), enumerate()', 'Namespaces & Modules'] },
      { topic: 'Data Structures', sessions: ['Mutability and Immutability', 'List', 'Tuple', 'Python Sets', 'Python Dictionary', 'String', 'Data Structures Extra Topics'] },
      { topic: 'Functions & Iterables', sessions: ['Python Functions', 'Lambda Functions & Functional Programming', 'Recursion', 'Exception Handling', 'Decorators & Related Concepts', 'Iterators', 'Generators', 'Advanced Concepts'] },
      { topic: 'Object Oriented Programming (OOP)', sessions: ['OOP Concepts', 'Methods and Constructors', 'Types of Variables', 'Types of Methods', 'Inheritance', 'Composition', 'Polymorphism', 'Duck Typing', 'Abstraction', 'Encapsulation', 'super(), __str__() and __repr__()'] },
      { topic: 'Advanced & Under the Hood', sessions: ['File Handling', 'Memory Management in Python', 'Parameter Passing', 'Monkey Patching', 'Concurrency & Performance', 'Global Interpreter Lock (GIL)', 'Async Programming'] },
    ]
  },
  {
    week: 'W2', cat: 'Django', days: [
      { topic: 'Django Architecture & Setup', sessions: ['MVT Architecture Overview', 'Virtual Environments & Installation', 'django-admin and manage.py commands', 'Project vs App Structure', 'settings.py Configuration', 'Running the Development Server'] },
      { topic: 'URL Dispatching & Views', sessions: ['urls.py Mapping', 'Function-Based Views (FBV)', 'Request and Response Objects', 'URL Parameters and Path Converters', 'Include() and App-level URLs', 'Class-Based Views (CBV)'] },
      { topic: 'Templates & Static Files', sessions: ['Template Configuration', 'Django Template Language (DTL)', 'Variables and Tags', 'Template Inheritance', 'Serving Static Files', 'Custom Template Filters'] },
      { topic: 'Django Admin & Security', sessions: ['Setting up Django Admin', 'Customizing Admin Models', 'Creating Superusers', 'CSRF Protection', 'XSS Protection', 'Authentication Basics'] },
      { topic: 'Forms & Validation', sessions: ['Django Forms API', 'ModelForms', 'Form Validation and Cleaning', 'Rendering Forms in Templates', 'Handling Form Submission (POST)'] },
    ]
  },
  {
    week: 'W3', cat: 'DRF', days: [
      { topic: 'REST Principles & Setup', sessions: ['Introduction to RESTful APIs', 'DRF Installation & Settings', 'JSON vs XML', 'HTTP Verbs (GET, POST, PUT, DELETE)', 'Status Codes'] },
      { topic: 'Serializers', sessions: ['What is a Serializer?', 'Basic Serializers', 'ModelSerializers', 'Validation in Serializers', 'Nested Serializers', 'SerializerMethodField'] },
      { topic: 'Views in DRF', sessions: ['@api_view Decorator (FBV)', 'APIView Class', 'Generic Views', 'Mixins', 'ViewSets Introduction'] },
      { topic: 'Routers & ViewSets', sessions: ['ViewSets vs Views', 'ModelViewSet', 'ReadOnlyModelViewSet', 'SimpleRouter', 'DefaultRouter', 'Customizing Router Actions'] },
      { topic: 'Authentication & Permissions', sessions: ['BasicAuthentication', 'TokenAuthentication', 'JWT Authentication setup', 'AllowAny vs IsAuthenticated', 'IsAdminUser', 'Custom Permission Classes'] },
    ]
  },
  {
    week: 'W4', cat: 'ORM', days: [
      { topic: 'Models & Schema', sessions: ['Field Types (CharField, IntegerField, etc.)', 'Field Options (null, blank, choices)', 'Meta class definitions', 'Migrations (makemigrations, migrate)', 'Indexes and Constraints'] },
      { topic: 'Model Relationships', sessions: ['ForeignKey (One-to-Many)', 'ManyToManyField', 'OneToOneField', 'Reverse Relations (related_name)', 'on_delete behaviors'] },
      { topic: 'QuerySet API Basics', sessions: ['all(), filter(), exclude()', 'get() vs filter()', 'Chaining Querysets', 'order_by()', 'values() and values_list()', 'count(), exists()'] },
      { topic: 'Advanced Lookups & Q/F Objects', sessions: ['Field Lookups (__exact, __icontains, __in)', 'Spanning Relationships (Joins with __)', 'F() Expressions', 'Q() Objects (Complex Filters & OR logic)'] },
      { topic: 'Performance & Aggregation', sessions: ['select_related()', 'prefetch_related()', 'Database Caching concepts', 'aggregate() vs annotate()', 'Sum, Count, Avg, Min, Max'] },
    ]
  },
  {
    week: 'W5', cat: 'FastAPI', days: [
      { topic: 'FastAPI Introduction', sessions: ['What is FastAPI?', 'ASGI vs WSGI', 'Installation (Uvicorn)', 'Creating the First Endpoint', 'Automatic API Docs (Swagger UI/ReDoc)'] },
      { topic: 'Path & Query Parameters', sessions: ['Path Parameters', 'Query Parameters', 'Type Hints in Python', 'Optional Parameters', 'String Validations', 'Path Validations'] },
      { topic: 'Pydantic Models', sessions: ['Introduction to Pydantic', 'Declaring Request Bodies', 'Nested Models', 'Schema Extra / Examples', 'Field Validations'] },
      { topic: 'Dependency Injection', sessions: ['What is Dependency Injection?', 'Creating a Dependency', 'Using Depends()', 'Classes as Dependencies', 'Global Dependencies'] },
      { topic: 'Middleware & Background Tasks', sessions: ['CORS Middleware', 'Custom Middleware', 'BackgroundTasks', 'Handling Errors (HTTPException)', 'Custom Exception Handlers'] },
    ]
  },
  {
    week: 'W6', cat: 'FastAPI Adv', days: [
      { topic: 'Security & Authentication', sessions: ['OAuth2 with Password (and hashing)', 'JWT Token Generation', 'Verifying JWT Tokens', 'Getting Current User', 'Securing Endpoints'] },
      { topic: 'Relational Databases in FastAPI', sessions: ['SQLAlchemy Integration', 'Databases setup', 'Creating Models', 'CRUD Operations', 'Yielding DB Sessions (Dependency)'] },
      { topic: 'Async Databases', sessions: ['Async SQLModel/SQLAlchemy', 'Alembic Migrations', 'Async CRUD Operations', 'Performance Benefits'] },
      { topic: 'WebSockets', sessions: ['What are WebSockets?', 'WebSocket Endpoints in FastAPI', 'Handling Connections', 'Broadcasting Messages', 'Real-time chat example'] },
      { topic: 'Testing & Deployment', sessions: ['Pytest Setup', 'TestClient', 'Mocking Dependencies', 'Dockerizing a FastAPI App', 'Deploying with Uvicorn & Gunicorn'] },
    ]
  },
  {
    week: 'W7', cat: 'AWS', days: [
      { topic: 'Cloud Computing & IAM', sessions: ['What is Cloud Computing?', 'AWS Regions and Zones', 'IAM Users and Groups', 'IAM Policies and Roles', 'AWS CLI Setup', 'Security Best Practices'] },
      { topic: 'EC2 Compute', sessions: ['EC2 Instance Types', 'AMI (Amazon Machine Image)', 'Security Groups', 'SSH into EC2', 'Elastic IPs', 'EBS Volumes vs Instance Store'] },
      { topic: 'S3 Storage', sessions: ['S3 Buckets and Objects', 'Versioning and Lifecycle Rules', 'Static Website Hosting on S3', 'S3 IAM permissions', 'Pre-signed URLs'] },
      { topic: 'Databases (RDS & DynamoDB)', sessions: ['Managed vs Unmanaged DBs', 'RDS (PostgreSQL setup)', 'Connecting Django/FastAPI to RDS', 'DynamoDB Basics (NoSQL)', 'Partition Keys and Queries'] },
      { topic: 'Networking (VPC Basics)', sessions: ['VPC, Subnets (Public/Private)', 'Internet Gateways', 'Route Tables', 'NAT Gateways', 'Security Groups vs NACLs'] },
    ]
  },
  {
    week: 'W8', cat: 'AWS Adv', days: [
      { topic: 'Serverless (Lambda & API Gateway)', sessions: ['Lambda Function Basics', 'Event Triggers', 'API Gateway REST APIs', 'Integrating API Gateway with Lambda', 'Cold Starts and Limits'] },
      { topic: 'Containers (ECS & ECR)', sessions: ['Docker on AWS Overview', 'Elastic Container Registry (ECR)', 'Elastic Container Service (ECS)', 'Fargate vs EC2 Backup', 'Task Definitions and Clusters'] },
      { topic: 'CDN & DNS', sessions: ['Route53 Record Types (A, CNAME, ALIAS)', 'Registering Domains', 'CloudFront CDN Overview', 'Connecting CloudFront to S3', 'SSL Certificates (ACM)'] },
      { topic: 'Infrastructure as Code (IaC)', sessions: ['CloudFormation Basics', 'Writing YAML Templates', 'AWS CDK Overview', 'Terraform vs CloudFormation'] },
      { topic: 'CI/CD & Monitoring', sessions: ['CodeBuild and CodePipeline', 'Automating Deployments', 'CloudWatch Metrics and Logs', 'CloudWatch Alarms', 'SNS (Simple Notification Service)'] },
    ]
  },
  {
    week: 'W9', cat: 'React', days: [
      { topic: 'React Fundamentals & JSX', sessions: ['Vite/CRA Setup', 'Virtual DOM vs Real DOM', 'JSX Syntax Rules', 'Components (Functional)', 'Props (Passing Data)', 'Children Prop'] },
      { topic: 'State & Events', sessions: ['useState Hook', 'Handling Events (onClick, onChange)', 'Controlled Components (Forms)', 'Lifting State Up', 'State as a Snapshot'] },
      { topic: 'Hooks Deep Dive', sessions: ['useEffect lifecycle mapping', 'Dependency Arrays in useEffect', 'Fetching Data with useEffect', 'useMemo for performance', 'useCallback', 'Custom Hooks'] },
      { topic: 'Routing (React Router)', sessions: ['React Router Setup', 'BrowserRouter, Routes, Route', 'Link and NavLink', 'useParams for Dynamic URLs', 'useNavigate for Redirects'] },
      { topic: 'Context API & Advanced Patterns', sessions: ['Prop Drilling Problem', 'createContext and Context.Provider', 'useContext Hook', 'Higher Order Components (HOCs)', 'Render Props concepts'] },
    ]
  },
  {
    week: 'W10', cat: 'Redux', days: [
      { topic: 'Redux Architecture', sessions: ['Global State Management needs', 'Store, Actions, Reducers', 'Immutable Updates', 'Data Flow in Redux', 'Redux DevTools Setup'] },
      { topic: 'Redux Toolkit (RTK) Basics', sessions: ['Why RTK?', 'configureStore', 'createSlice (State, Reducers, Actions)', 'useSelector Hook', 'useDispatch Hook'] },
      { topic: 'Async Redux (Thunks)', sessions: ['Async Logic in Redux', 'createAsyncThunk', 'Pending, Fulfilled, Rejected states', 'Handling API Errors in State', 'Dispatching Async Actions'] },
      { topic: 'RTK Query', sessions: ['Introduction to RTK Query', 'createApi and fetchBaseQuery', 'Defining Endpoints (Queries & Mutations)', 'Exporting auto-generated Hooks', 'Caching and Invalidating Tags'] },
      { topic: 'Full Project Integration', sessions: ['Project Planning', 'Wiring up RTK Store to React', 'Connecting Django/FastAPI backend', 'Polishing UI and Performance', 'Final Deployment Steps'] },
    ]
  }
];

let globalId = 1;
curriculum.forEach((weekData) => {
  weekData.days.forEach((dayData, idx) => {
    const sessions = dayData.sessions.map((title, sIdx) => {
      const hour = 9 + sIdx;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      return { id: `d${globalId}s${sIdx + 1}`, time: `${displayHour}:00 ${ampm}`, title, desc: '' };
    });
    const questions = Array.from({ length: 30 }, (_, i) => ({
      id: `q${globalId}_${i + 1}`,
      text: `Question ${i + 1} evaluating ${dayData.topic}: Which methodology is the standard for addressing exceptions in this block?`,
      options: ['Initialize default sequence', 'Invoke resolution pipeline directly', `Iterate logic specific to ${dayData.topic}`, 'Raise parameter exception'],
      correct: Math.floor(Math.random() * 4)
    }));

    DUMMY_DATA.days.push({
      id: globalId,
      weekId: weekData.week,
      day: idx + 1,
      topic: dayData.topic,
      category: weekData.cat,
      duration: '8h',
      sessionsCount: sessions.length,
      sessions,
      questions
    });
    globalId++;
  });
});
