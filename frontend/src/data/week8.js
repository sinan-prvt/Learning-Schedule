export const week8 = {
  id: "W8",
  title: "AWS Advanced",
  days: [
    {
      day_number: 1,
      topic: "Serverless (Lambda & API Gateway)",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Intro to AWS Lambda", description: "Function-as-a-Service (FaaS): running code without provisioning servers." },
        { time: "11:00 AM", title: "Lambda Triggers & Events", description: "Connecting Lambda to S3, SNS, and DynamoDB events." },
        { time: "01:00 PM", title: "API Gateway Foundations", description: "Creating REST and HTTP APIs to expose Lambdas to the web." },
        { time: "03:00 PM", title: "Lambda Layers & Runtimes", description: "Sharing code and libraries across multiple functions." },
        { time: "05:00 PM", title: "Serverless Security & Cost", description: "IAM roles for Lambda and understanding the pay-per-execution model." }
      ],
      quiz: [
        { text: "What is AWS Lambda?", options: ["A database", "A serverless compute service", "A storage bucket", "A firewall"], correct: 1 },
        { text: "With Serverless, you manage the underlying OS.", options: ["True", "False"], correct: 1 },
        { text: "Lambda functions are triggered by ___.", options: ["Passwords", "Events", "Emails", "Manual console clicks only"], correct: 1 },
        { text: "Which service acts as the 'front door' for Lambda APIs?", options: ["Route 53", "S3", "API Gateway", "CloudWatch"], correct: 2 },
        { text: "The maximum execution time for a Lambda function is ___.", options: ["30 seconds", "5 minutes", "15 minutes", "1 hour"], correct: 2 },
        { text: "What is a 'Cold Start'?", options: ["Server freezing", "Latency when a Lambda function is invoked for the first time or after a lull", "CPU fan failing", "None"], correct: 1 },
        { text: "How is AWS Lambda billed?", options: ["Hourly", "Per GB of storage", "Per request and duration (compute time)", "Monthly fixed fee"], correct: 2 },
        { text: "Which feature allows sharing code between multiple Lambda functions?", options: ["Versions", "Layers", "Buckets", "Groups"], correct: 1 },
        { text: "API Gateway supports which types of APIs?", options: ["REST only", "HTTP and REST", "WebSocket only", "All of the above"], correct: 3 },
        { text: "Which environment variable stores the Lambda function name?", options: ["AWS_LAMBDA_FUNCTION_NAME", "FUNC_NAME", "LAMBDA_ID", "None"], correct: 0 },
        { text: "Can you run a Docker container as a Lambda function?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "Which IAM entity is attached to a Lambda for permissions?", options: ["User", "Group", "Execution Role", "Secret"], correct: 2 },
        { text: "Serverless applications are highly scalable.", options: ["True", "False"], correct: 0 },
        { text: "Lambda can be written in which languages?", options: ["Python and Node.js", "Java and C#", "Ruby and Go", "All of the above"], correct: 3 },
        { text: "What is Amazon EventBridge?", options: ["A file system", "A serverless event bus", "A type of EC2", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What does 'Serverless' mean?", a: "It doesn't mean there are no servers, but that the developer doesn't have to manage them (provisioning, patching, scaling).", type: "Conceptual" },
        { level: "Junior", q: "What is AWS Lambda?", a: "A compute service that lets you run code without provisioning or managing servers, triggered by events.", type: "Conceptual" },
        { level: "Junior", q: "What is an API Gateway?", a: "A fully managed service that allows developers to create, publish, maintain, and secure APIs at any scale.", type: "Conceptual" },
        { level: "Mid", q: "Explain the 'Cold Start' problem.", a: "When a Lambda function is invoked for the first time or after being idle, AWS must spin up a new container, causing a delay in execution.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle Lambda timeouts?", a: "By optimizing code performance, increasing memory (which scales CPU), or moving to an asynchronous architecture.", type: "Scenario" },
        { level: "Mid", q: "What are Lambda Layers?", a: "A distribution mechanism for libraries, custom runtimes, and other function dependencies to keep function packages small.", type: "Conceptual" },
        { level: "Mid", q: "Explain the difference between Synchronous and Asynchronous Lambda invocation.", a: "Synchronous waits for the result (e.g., API Gateway). Asynchronous triggers the function and moves on (e.g., S3 event).", type: "Conceptual" },
        { level: "Senior", q: "How would you secure a Serverless API?", a: "Using API Gateway Authorizers (Lambda or Cognito), IAM permissions for the backend, and throttling to prevent DOS attacks.", type: "Scenario" },
        { level: "Senior", q: "What is Provisioned Concurrency?", a: "A feature that keeps a specified number of Lambda functions initialized and ready to respond immediately, eliminating cold starts.", type: "Conceptual" },
        { level: "Senior", q: "Explain the Scaling behavior of AWS Lambda.", a: "Lambda scales horizontally by creating new instances of the function to handle concurrent requests up to the account limit.", type: "Conceptual" },
        { level: "Senior", q: "Why use Step Functions with Lambda?", a: "To coordinate multiple Lambda functions into serverless workflows (state machine), handling retries and complex logic.", type: "Scenario" },
        { level: "Senior", q: "How do you monitor Lambda performance?", a: "Using AWS CloudWatch for logs/metrics and AWS X-Ray for tracing requests through the serverless stack.", type: "Scenario" }
      ]
    },
    {
      day_number: 2,
      topic: "Containers (ECS, EKS, ECR)",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Docker in AWS", description: "Recap of containerization and why it's the standard for cloud apps." },
        { time: "11:00 AM", title: "Amazon ECR", description: "Elastic Container Registry: storing and managing your Docker images." },
        { time: "01:00 PM", title: "Amazon ECS (Elastic Container Service)", description: "AWS's native container orchestration service (EC2 vs Fargate)." },
        { time: "03:00 PM", title: "AWS Fargate (Serverless Containers)", description: "Running containers without managing the underlying EC2 instances." },
        { time: "05:00 PM", title: "Amazon EKS Overview", description: "Managed Kubernetes on AWS: when to choose it over ECS." }
      ],
      quiz: [
        { text: "What does ECS stand for?", options: ["Elastic Container Service", "Easy Control System", "External Cloud Server", "None"], correct: 0 },
        { text: "Where do you store Docker images in AWS?", options: ["S3", "ECR", "IAM", "VPC"], correct: 1 },
        { text: "Which ECS launch type is serverless?", options: ["EC2", "Fargate", "Lambda", "Spot"], correct: 1 },
        { text: "What is EKS?", options: ["Elastic Kubernetes Service", "External Key System", "Easy Kinetic Solution", "None"], correct: 0 },
        { text: "Which launch type provides more control over the hardware?", options: ["EC2", "Fargate", "S3", "None"], correct: 0 },
        { text: "A 'Task Definition' in ECS is like a ___.", options: ["Database", "Docker Compose file / Blueprint", "Security rule", "None"], correct: 1 },
        { text: "Containers are more lightweight than Virtual Machines.", options: ["True", "False"], correct: 0 },
        { text: "Multi-container deployments in ECS use ___.", options: ["Clusters", "Tasks", "Nodes", "Buckets"], correct: 1 },
        { text: "Which service scans images for vulnerabilities?", options: ["S3", "ECR", "VPC", "Inspector"], correct: 1 },
        { text: "___ is the container orchestration engine for EKS.", options: ["Docker", "Kubernetes", "Apache", "Java"], correct: 1 },
        { text: "How do you run a web app privately in ECS?", options: ["Public IP", "Load Balancer and VPC", "Direct Connect", "None"], correct: 1 },
        { text: "Fargate scales based on ___.", options: ["Disk space", "CPU and Memory usage", "Number of files", "None"], correct: 1 },
        { text: "Can EKS run on Fargate?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 },
        { text: "In ECS, multiple tasks run inside a ___.", options: ["Bucket", "Service", "VPC", "Pool"], correct: 1 },
        { text: "What is an 'Image Tag' in ECR?", options: ["A price label", "A version identifier (e.g., latest, v1.0)", "A security key", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is a Container?", a: "A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one environment to another.", type: "Conceptual" },
        { level: "Junior", q: "What is Amazon ECR?", a: "A fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.", type: "Conceptual" },
        { level: "Junior", q: "ECS vs EKS?", a: "ECS is AWS native and simpler to use. EKS is managed Kubernetes, which is more complex but follows industry standards for portability.", type: "Conceptual" },
        { level: "Mid", q: "ECS EC2 vs ECS Fargate?", a: "EC2 launch type gives you control over the servers. Fargate is serverless, you just pay for the vCPU and memory used by your container.", type: "Conceptual" },
        { level: "Mid", q: "What is a Task Definition?", a: "A text file (JSON) that describes one or more containers that form your application. It includes parameters like image, CPU/Memory, and ports.", type: "Conceptual" },
        { level: "Mid", q: "How do you handle secrets in ECS?", a: "By referencing AWS Secrets Manager or Parameter Store values in the Task Definition environment variables.", type: "Scenario" },
        { level: "Mid", q: "What is an ECS Service?", a: "It allows you to run and maintain a specified number of instances of a task definition simultaneously in an ECS cluster.", type: "Conceptual" },
        { level: "Senior", q: "How would you implement auto-scaling in ECS?", a: "Using AWS Application Auto Scaling to adjust the desired count of tasks based on CloudWatch metrics like CPU utilization or Request Count.", type: "Scenario" },
        { level: "Senior", q: "Explain the 'Blue/Green' deployment strategy in ECS.", a: "Using AWS CodeDeploy to launch a new set of tasks ('Green') and gradually shifting traffic from the old tasks ('Blue') using a Load Balancer.", type: "Scenario" },
        { level: "Senior", q: "Why use a Private ECR registry?", a: "To ensure that your proprietary application images are only accessible within your AWS account or organization.", type: "Conceptual" },
        { level: "Senior", q: "What is the role of a Load Balancer in a containerized app?", a: "It acts as a single point of contact for clients and distributes incoming traffic across multiple running container tasks.", type: "Conceptual" },
        { level: "Senior", q: "How does EKS handle worker nodes?", a: "EKS can manage 'Managed Node Groups', which automates the provisioning and lifecycle of the EC2 instances that run your Kubernetes pods.", type: "Conceptual" }
      ]
    },
    {
      day_number: 3,
      topic: "CDN & DNS (CloudFront & Route 53)",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Amazon Route 53", description: "Scalable Domain Name System (DNS) and domain registration." },
        { time: "11:00 AM", title: "DNS Routing Policies", description: "Weighted, Latency-based, Failover, and Geolocation routing." },
        { time: "01:00 PM", title: "Amazon CloudFront (CDN)", description: "Speeding up distribution of content using a global network of edge locations." },
        { time: "03:00 PM", title: "CloudFront Origins & Caching", description: "Connecting S3 or Load Balancers to the CDN and managing TTLs." },
        { time: "05:00 PM", title: "Security at the Edge (WAF & Shield)", description: "Blocking attacks (SQLi, XSS, DDoS) before they reach your servers." }
      ],
      quiz: [
        { text: "Route 53 is an AWS ___ service.", options: ["Storage", "DNS", "Compute", "Database"], correct: 1 },
        { text: "What is the purpose of a CDN?", options: ["To store large files only", "To cache content closer to users at edge locations", "To run Python code", "None"], correct: 1 },
        { text: "Which routing policy sends traffic to the region with lowest delay?", options: ["Weighted", "Latency-based", "Failover", "Multivalue"], correct: 1 },
        { text: "CloudFront 'Edge Locations' are the same as 'Regions'.", options: ["True", "False"], correct: 1 },
        { text: "What is a 'TTL' in caching?", options: ["Total Time Lost", "Time To Live", "Text To Link", "None"], correct: 1 },
        { text: "Which service protects against DDoS attacks?", options: ["Shield", "Route 53", "S3", "Inspector"], correct: 0 },
        { text: "WAF stands for ___.", options: ["Web Application Firewall", "World Axis Framework", "Wide Area File", "None"], correct: 0 },
        { text: "Where can CloudFront get its data (Origins)?", options: ["S3 Buckets", "Elastic Load Balancers", "Custom HTTP servers", "All of the above"], correct: 3 },
        { text: "Which Route 53 policy is used for Disaster Recovery?", options: ["Weighted", "Failover", "Simple", "Geolocation"], correct: 1 },
        { text: "CloudFront supports HTTPS for secure delivery.", options: ["True", "False"], correct: 0 },
        { text: "What is an 'A Record' in DNS?", options: ["Maps a domain to an IP address", "Maps an Alias", "Stores text", "None"], correct: 0 },
        { text: "What is a 'CNAME' record?", options: ["Maps a name to another name", "Points to an IP", "Primary record", "None"], correct: 0 },
        { text: "___ allows you to clear the cache in CloudFront immediately.", options: ["Deletion", "Invalidation", "Refresh", "None"], correct: 1 },
        { text: "Does Route 53 support health checks?", options: ["Yes", "No", "Only for S3", "None"], correct: 0 },
        { text: "CloudFront can be used to serve static and dynamic content.", options: ["True", "False"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is Amazon Route 53?", a: "A highly available and scalable cloud DNS web service.", type: "Conceptual" },
        { level: "Junior", q: "What is a CDN?", a: "Content Delivery Network. A system of distributed servers that deliver web content to users based on their geographic location.", type: "Conceptual" },
        { level: "Junior", q: "What is an Edge Location?", a: "A site that CloudFront uses to cache copies of your content closer to your users for lower latency.", type: "Conceptual" },
        { level: "Mid", q: "Explain Latency-based vs Geolocation routing.", a: "Latency-based routes to the region with the best connection speed. Geolocation routes based on the user's actual physical location (e.g., country).", type: "Conceptual" },
        { level: "Mid", q: "How do you protect your S3 bucket from direct access when using CloudFront?", a: "By using Origin Access Control (OAC) to ensure that users can ONLY access files through the CDN.", type: "Scenario" },
        { level: "Mid", q: "What is an Alias Record in Route 53?", a: "A special AWS-specific record type that points a domain to an AWS resource (like a Load Balancer) without a performance penalty.", type: "Conceptual" },
        { level: "Mid", q: "What is AWS WAF?", a: "A web application firewall that helps protect your web applications or APIs against common web exploits like SQL injection and XSS.", type: "Conceptual" },
        { level: "Senior", q: "How would you implement a global multi-region failover strategy?", a: "By using Route 53 Failover routing combined with Health Checks that monitor your primary region's availability.", type: "Scenario" },
        { level: "Senior", q: "What is the benefit of 'Signed URLs' in CloudFront?", a: "They allow you to provide controlled, time-limited access to private content to specific users (e.g., paid video streaming).", type: "Scenario" },
        { level: "Senior", q: "Explain the difference between CloudFront Standard and Advanced DDoS protection.", a: "Standard (Shield Standard) is free and protects against common attacks. Advanced (Shield Advanced) provides 24/7 access to an expert team and financial protection.", type: "Conceptual" },
        { level: "Senior", q: "What happens when a 'Cache Miss' occurs in CloudFront?", a: "CloudFront requests the content from the 'Origin' (like S3), caches it at the edge location, and then serves it to the user.", type: "Conceptual" },
        { level: "Senior", q: "How do you handle SSL/TLS certificates for your domains on AWS?", a: "Using AWS Certificate Manager (ACM) to provision and manage free SSL certificates that integrate with CloudFront and Load Balancers.", type: "Scenario" }
      ]
    },
    {
      day_number: 4,
      topic: "Infrastructure as Code (IaC)",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Intro to IaC", description: "Why treating infrastructure as code is essential for DevOps." },
        { time: "11:00 AM", title: "AWS CloudFormation", description: "Native IaC: writing templates in YAML or JSON to deploy stacks." },
        { time: "01:00 PM", title: "AWS Cloud Development Kit (CDK)", description: "Creating infrastructure using familiar languages like Python, TS, or Java." },
        { time: "03:00 PM", title: "Introduction to Terraform", description: "The industry standard cross-cloud IaC tool by HashiCorp." },
        { time: "05:00 PM", title: "Managing State & Drifts", description: "How IaC tools track what's actually deployed vs what's in the code." }
      ],
      quiz: [
        { text: "IaC stands for ___.", options: ["Infrastructure as Code", "Instance as Computer", "Internal access Control", "None"], correct: 0 },
        { text: "Which service is the native AWS IaC tool?", options: ["CloudFormation", "Terraform", "S3", "EC2"], correct: 0 },
        { text: "CloudFormation templates are written in ___.", options: ["Java or C#", "YAML or JSON", "Python or Ruby", "None"], correct: 1 },
        { text: "A 'Stack' in CloudFormation is a ___.", options: ["Physical server", "Collection of AWS resources managed as a single unit", "Logging system", "None"], correct: 1 },
        { text: "Which tool allows using Python to define AWS resources?", options: ["Terraform", "CDK", "SDK", "CLI"], correct: 1 },
        { text: "Terraform uses which language?", options: ["SQL", "HCL (HashiCorp Configuration Language)", "C++", "None"], correct: 1 },
        { text: "What is an 'Infrastructure Drift'?", options: ["Servers getting old", "The difference between code definition and actual cloud state", "Scaling issues", "None"], correct: 1 },
        { text: "IaC enables ___ of your infrastructure.", options: ["Manual clicks", "Repeatable and automated deployments", "Deletion", "None"], correct: 1 },
        { text: "Terraform is 'Cloud Agnostic'. What does this mean?", options: ["It works with many clouds (AWS, Azure, GCP)", "It doesn't use clouds", "It is free", "None"], correct: 0 },
        { text: "Which file tracks Terraform's current knowledge of the infrastructure?", options: ["readme.md", "terraform.tfstate", "index.html", "None"], correct: 1 },
        { text: "In CloudFormation, which section defines the resources to create?", options: ["Parameters", "Resources", "Outputs", "Metadata"], correct: 1 },
        { text: "Is CloudFormation free to use?", options: ["No", "Yes (you only pay for the resources it creates)", "Only in dev", "None"], correct: 1 },
        { text: "Terraform 'Plan' shows ___ before you apply.", options: ["Price", "The changes that will be made", "Error logs", "None"], correct: 1 },
        { text: "What is the AWS CDK?", options: ["A coding game", "Cloud Development Kit", "A type of storage", "None"], correct: 1 },
        { text: "Can you import existing resources into an IaC stack?", options: ["Yes", "No", "Only for IDs", "None"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is Infrastructure as Code?", a: "The managing and provisioning of infrastructure through code instead of manual processes.", type: "Conceptual" },
        { level: "Junior", q: "What is AWS CloudFormation?", a: "An AWS service that helps you model and set up your AWS resources so that you can spend less time managing them.", type: "Conceptual" },
        { level: "Junior", q: "CloudFormation vs Manual Console?", a: "CloudFormation is faster, repeatable, searchable (in version control), and less prone to human error.", type: "Conceptual" },
        { level: "Mid", q: "What is the AWS CDK?", a: "The Cloud Development Kit. It allows you to define infrastructure using high-level programming languages like Python or TypeScript.", type: "Conceptual" },
        { level: "Mid", q: "Terraform vs CloudFormation?", a: "CloudFormation is AWS native. Terraform is cloud-agnostic (works on AWS, Azure, GCP, etc.) and uses HCL syntax.", type: "Conceptual" },
        { level: "Mid", q: "What is a 'State file' in Terraform?", a: "A file that maps your code to the real-world resources in the cloud, helping Terraform understand what to create, update, or delete.", type: "Conceptual" },
        { level: "Mid", q: "Explain 'Change Sets' in CloudFormation.", a: "A way to preview how proposed changes to a stack might impact your running resources before you execute them.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle sensitive data (passwords) in IaC?", a: "By using Parameters and referencing AWS Secrets Manager or Systems Manager Parameter Store instead of hardcoding values.", type: "Scenario" },
        { level: "Senior", q: "Explain the 'Immutable Infrastructure' pattern.", a: "Instead of updating existing servers, you always deploy new ones from code and destroy the old ones, leading to more predictable environments.", type: "Conceptual" },
        { level: "Senior", q: "How does Terraform handle dependency management?", a: "Terraform automatically builds a dependency graph between resources to ensure they are created in the correct order.", type: "Conceptual" },
        { level: "Senior", q: "What are the common pitfalls of IaC?", a: "Deleting a state file by accident, manual changes causing 'drift', and complex dependency cycles in large stacks.", type: "Scenario" },
        { level: "Senior", q: "How do you test your IaC code?", a: "Using linters (like tflint), security scanners (like Checkov), and running 'Plan' or 'Dry-run' before any deployment.", type: "Scenario" }
      ]
    },
    {
      day_number: 5,
      topic: "CI/CD & Monitoring",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "AWS CodePipeline", description: "Automating the software release process from source to production." },
        { time: "11:00 AM", title: "AWS CodeBuild & CodeDeploy", description: "Compiling code, running tests, and managing deployment strategies." },
        { time: "01:00 PM", title: "Amazon CloudWatch", description: "Monitoring resources with metrics, alarms, and logs." },
        { time: "03:00 PM", title: "CloudWatch Logs Insights", description: "Querying and analyzing massive log data to find errors." },
        { time: "05:00 PM", title: "AWS X-Ray & Health Dashboard", description: "Tracing requests through distributed systems and checking AWS service health." }
      ],
      quiz: [
        { text: "Which service is used for continuous delivery on AWS?", options: ["S3", "CodePipeline", "IAM", "VPC"], correct: 1 },
        { text: "___ is used for monitoring metrics and logs.", options: ["CloudWatch", "CloudTrail", "Inspector", "GuardDuty"], correct: 0 },
        { text: "What service audits AWS API calls (who did what)?", options: ["CloudWatch", "CloudTrail", "X-Ray", "None"], correct: 1 },
        { text: "What is a CloudWatch 'Alarm'?", options: ["A loud noise", "A trigger that performs an action when a metric crosses a threshold", "A support ticket", "None"], correct: 1 },
        { text: "Which service helps you compile and test your code?", options: ["CodeBuild", "CodeDeploy", "CodeCommit", "None"], correct: 0 },
        { text: "X-Ray is used for ___.", options: ["Security", "Tracing and debugging distributed applications", "Storage", "None"], correct: 1 },
        { text: "CodeDeploy handles which deployment type?", options: ["In-place", "Blue/Green", "Both", "None"], correct: 2 },
        { text: "CloudWatch Logs Insights uses which language for queries?", options: ["SQL", "A specific query language for logs", "Python", "None"], correct: 1 },
        { text: "What is an 'Artifact' in a pipeline?", options: ["An old file", "The output material (like a ZIP or Image) passed between stages", "A database record", "None"], correct: 1 },
        { text: "Can CloudWatch monitor non-AWS resources?", options: ["Yes (using the agent)", "No", "Only for IDs", "None"], correct: 0 },
        { text: "A 'Dashboard' in CloudWatch helps to ___.", options: ["Write code", "Visualize metrics globally", "Delete servers", "None"], correct: 1 },
        { text: "Which service is a managed Git repository?", options: ["CodeCommit", "S3", "GitHub", "VPC"], correct: 0 },
        { text: "What is the 'Buildspec' file?", options: ["A design doc", "A YAML file with build instructions for CodeBuild", "A database schema", "None"], correct: 1 },
        { text: "CI/CD helps to ___.", options: ["Slow down work", "Reduce manual errors and release software faster", "Hide bugs", "None"], correct: 1 },
        { text: "CloudWatch Metrics are kept forever by default.", options: ["True", "False (Retention is limited unless changed)", "Only for free", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is CI/CD?", a: "Continuous Integration (merging code) and Continuous Delivery/Deployment (automating the release).", type: "Conceptual" },
        { level: "Junior", q: "What is Amazon CloudWatch?", a: "A monitoring and observability service that provides data and insights for AWS resources and applications.", type: "Conceptual" },
        { level: "Junior", q: "CloudWatch vs CloudTrail?", a: "CloudWatch is for performance/logs. CloudTrail is for auditing activity (API calls, logs of 'who did what').", type: "Conceptual" },
        { level: "Mid", q: "Explain AWS CodePipeline.", a: "A fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable updates.", type: "Conceptual" },
        { level: "Mid", q: "What is a CloudWatch Alarm?", a: "It watches a metric and performs one or more actions (like sending an SNS notification) if the metric exceeds a threshold for a set period.", type: "Conceptual" },
        { level: "Mid", q: "What is AWS CodeBuild?", a: "A managed build service that compiles source code, runs tests, and produces software packages that are ready to deploy.", type: "Conceptual" },
        { level: "Mid", q: "How do you visualize logs for a Lambda function?", a: "By navigating to CloudWatch Logs where a Log Group is automatically created for each function.", type: "Scenario" },
        { level: "Senior", q: "How would you handle a failed deployment in a pipeline?", a: "By configuring CodePipeline to stop on failure or using CodeDeploy auto-rollback to revert to the last healthy state.", type: "Scenario" },
        { level: "Senior", q: "Explain Distributed Tracing with AWS X-Ray.", a: "It follows a request as it travels through various components (API Gateway -> Lambda -> DynamoDB) to help identify performance bottlenecks or errors.", type: "Conceptual" },
        { level: "Senior", q: "How do you monitor application errors using CloudWatch Logs?", a: "By creating 'Metric Filters' that search for specific patterns (like 'ERROR') in logs and create a metric that can trigger an alarm.", type: "Scenario" },
        { level: "Senior", q: "What is the Service Health Dashboard?", a: "A site that shows the status of all AWS services across all regions, used to check if there's a global AWS outage.", type: "Conceptual" },
        { level: "Senior", q: "How do you optimize cost for CloudWatch Logs?", a: "By setting appropriate retention periods for log groups and using Logs Insights for analysis instead of full ingestion where possible.", type: "Scenario" }
      ]
    }
  ]
};
