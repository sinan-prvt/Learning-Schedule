export const week7 = {
  id: "W7",
  title: "AWS Fundamentals",
  days: [
    {
      day_number: 1,
      topic: "Cloud Computing & IAM",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Intro to Cloud & AWS", description: "Understanding IaaS, PaaS, SaaS, and the AWS Global Infrastructure." },
        { time: "11:00 AM", title: "IAM Users & Groups", description: "The foundation of security: managing identity and access." },
        { time: "01:00 PM", title: "IAM Policies & Permissions", description: "Writing JSON policies to grant fine-grained resource access." },
        { time: "03:00 PM", title: "IAM Roles & Trust", description: "Granting permissions to services and external entities." },
        { time: "05:00 PM", title: "Security Best Practices", description: "MFA, Least Privilege, and using AWS Organizations." }
      ],
      quiz: [
        { text: "What does AWS stand for?", options: ["Amazon Web Services", "Amazon World System", "Advanced Web Solutions", "All Web Software"], correct: 0 },
        { text: "Which cloud model provides the highest level of control over hardware?", options: ["SaaS", "PaaS", "IaaS", "Serverless"], correct: 2 },
        { text: "What is an Availability Zone (AZ)?", options: ["A whole country", "One or more discrete data centers with redundant power", "A single hard drive", "An edge location"], correct: 1 },
        { text: "IAM stands for ___.", options: ["Identity and Asset Management", "Identity and Access Management", "Integration and Access Monitor", "Internal Area Management"], correct: 1 },
        { text: "An IAM policy is written in which format?", options: ["XML", "YAML", "JSON", "CSV"], correct: 2 },
        { text: "Which IAM entity is intended for short-term access for services?", options: ["User", "Group", "Role", "Key"], correct: 2 },
        { text: "The security principle of providing only the necessary level of access is called ___.", options: ["Max Access", "Least Privilege", "Open Permissions", "Strict Auth"], correct: 1 },
        { text: "Which AWS service is used to manage root account protection?", options: ["EC2", "S3", "IAM (with MFA)", "RDS"], correct: 2 },
        { text: "What is an AWS Region?", options: ["A single server", "A collection of edge locations", "A physical location with multiple AZs", "A continent"], correct: 2 },
        { text: "How do you log in to the AWS Console if MFA is enabled?", options: ["Password only", "Password and OTP/Security Key", "Username only", "Biometrics only"], correct: 1 },
        { text: "___ policies are attached to a user, group, or role.", options: ["Attribute-based", "Identity-based", "Resource-based", "None"], correct: 1 },
        { text: "IAM is a ___ service.", options: ["Regional", "Global", "Availability Zone specific", "None"], correct: 1 },
        { text: "The AWS Root account should be used for daily tasks.", options: ["True", "False"], correct: 1 },
        { text: "Which IAM feature allows cross-account access?", options: ["Users", "Groups", "Roles", "Passwords"], correct: 2 },
        { text: "Which AWS service acts as a 'directory' for your cloud resources?", options: ["Route53", "Resource Groups", "IAM", "VPC"], correct: 2 }
      ],
      interview: [
        { level: "Junior", q: "What is Cloud Computing?", a: "The on-demand delivery of IT resources over the internet with pay-as-you-go pricing.", type: "Conceptual" },
        { level: "Junior", q: "What is the Shared Responsibility Model?", a: "AWS is responsible for 'Security OF the Cloud' (hardware/infrastructure), and the customer is responsible for 'Security IN the Cloud' (data/apps/OS).", type: "Conceptual" },
        { level: "Junior", q: "What is IAM?", a: "Identity and Access Management. It allows you to securely control access to AWS services and resources.", type: "Conceptual" },
        { level: "Mid", q: "Difference between an IAM User and an IAM Role?", a: "A User is an identity with long-term credentials for a specific person. A Role is an identity with short-term, temporary credentials for services or external users.", type: "Conceptual" },
        { level: "Mid", q: "How do you implement 'Least Privilege'?", a: "By starting with a blank policy and adding only the specific permissions (actions, resources) required for a task, instead of using wide-reaching managed policies.", type: "Scenario" },
        { level: "Mid", q: "Explain IAM Policies.", a: "JSON documents that define permissions. They contain Statements with Effect (Allow/Deny), Action, Resource, and sometimes Conditions.", type: "Conceptual" },
        { level: "Mid", q: "What are AWS Regions and Availability Zones?", a: "A Region is a geographic area. An AZ is one or more data centers within that Region, isolated for fault tolerance.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle cross-account access in AWS?", a: "By creating an IAM role in the target account with a trust policy that allows the source account to assume it.", type: "Scenario" },
        { level: "Senior", q: "What is the difference between Identity-based and Resource-based policies?", a: "Identity-based are attached to users/roles. Resource-based (like S3 Bucket Policies) are attached directly to the resource itself.", type: "Conceptual" },
        { level: "Senior", q: "Explain the role of AWS Organizations in security.", a: "It allows you to centrally manage and govern multiple AWS accounts, including using Service Control Policies (SCPs) to set permission boundaries.", type: "Conceptual" },
        { level: "Senior", q: "How do you recover from a lost Root account MFA device?", a: "Usually via email/phone verification or by contacting AWS support, which is why root access should be heavily guarded.", type: "Scenario" },
        { level: "Senior", q: "What is Policy Evaluation Logic?", a: "AWS checks all policies. An explicit DENY always wins. If there is no explicit ALLOW, access is denied by default.", type: "Conceptual" }
      ]
    },
    {
      day_number: 2,
      topic: "EC2 Compute",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to EC2", description: "Learning about Elastic Compute Cloud and virtual server lifecycle." },
        { time: "11:00 AM", title: "Instance Types & Sizing", description: "Choosing between General Purpose, Compute Optimized, and Memory Optimized." },
        { time: "01:00 PM", title: "Security Groups & Key Pairs", description: "Managing firewall rules and secure SSH access." },
        { time: "03:00 PM", title: "Storage for EC2 (EBS)", description: "Adding block storage volumes, snapshots, and performance levels." },
        { time: "05:00 PM", title: "Pricing Models (Standard vs Spot)", description: "How to save up to 90% using Spot instances or Reserved capacity." }
      ],
      quiz: [
        { text: "What does EC2 stand for?", options: ["Elastic Compute Cloud", "External Compute Center", "Easy Control Center", "None"], correct: 0 },
        { text: "Which instance type is best for heavy data processing?", options: ["T2/T3", "C (Compute Optimized)", "M (General)", "R (Memory Optimized)"], correct: 1 },
        { text: "Security Groups act as a ___ for your instance.", options: ["Database", "Virtual Firewall", "Storage Volume", "None"], correct: 1 },
        { text: "To log into a Linux EC2 instance, you need a/an ___.", options: ["Password", "Key Pair (Private Key)", "ID Card", "MFA"], correct: 1 },
        { text: "What is EBS?", options: ["Elastic Block Store", "External Backup System", "Easy Bolt Storage", "None"], correct: 0 },
        { text: "Which pricing model is the most expensive but flexible?", options: ["Spot", "Reserved", "On-Demand", "Dedicated"], correct: 2 },
        { text: "Spot instances can be interrupted by AWS.", options: ["True", "False"], correct: 0 },
        { text: "EBS snapshots are stored in ___.", options: ["EC2", "S3", "RDS", "None"], correct: 1 },
        { text: "Which EC2 feature allows running a script upon startup?", options: ["User Data", "Init Script", "Boot Image", "None"], correct: 0 },
        { text: "What is an AMI?", options: ["Amazon Machine Image", "Advanced Media Interface", "Amazon Main Icon", "None"], correct: 0 },
        { text: "Vertical scaling an EC2 instance means ___.", options: ["Adding more servers", "Changing the instance size/type", "Moving to a new region", "None"], correct: 1 },
        { text: "Security Groups are stateless.", options: ["True", "False (They are stateful)", "Only for outbound", "None"], correct: 1 },
        { text: "A 'Public IP' on a standard instance changes after a restart.", options: ["True", "False"], correct: 0 },
        { text: "How do you keep a fixed public IP for an EC2 instance?", options: ["Elastic IP", "Static IP", "Fixed DNS", "None"], correct: 0 },
        { text: "Which storage type is temporary and lost if instance is stopped?", options: ["EBS", "Instance Store", "S3", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is Amazon EC2?", a: "A service that provides resizable compute capacity (virtual servers) in the cloud.", type: "Conceptual" },
        { level: "Junior", q: "What is an Instance Type?", a: "A specific configuration of CPU, memory, storage, and networking capacity (e.g., t2.micro, c5.large).", type: "Conceptual" },
        { level: "Junior", q: "What is a Security Group?", a: "A virtual firewall that controls inbound and outbound traffic for your EC2 instances.", type: "Conceptual" },
        { level: "Mid", q: "Difference between EBS and Instance Store?", a: "EBS is persistent, network-attached block storage. Instance Store is ephemeral, physically attached directly to the host machine (faster but lost on stop).", type: "Conceptual" },
        { level: "Mid", q: "When would you use Spot Instances?", a: "For workloads that are fault-tolerant, flexible, and can be interrupted (e.g., batch processing, data analysis, testing).", type: "Scenario" },
        { level: "Mid", q: "Explain EC2 Auto Scaling.", a: "A service that automatically adjusts the number of EC2 instances in a group based on demand or health checks.", type: "Conceptual" },
        { level: "Mid", q: "How do you secure SSH access to an EC2 instance?", a: "By using Key Pairs, limiting the Security Group to specific IP ranges (CIDR), and ideally using AWS Systems Manager (SSM) instead of open SSH ports.", type: "Scenario" },
        { level: "Senior", q: "Explain the difference between Horizontal and Vertical Scaling in EC2.", a: "Horizontal (Scaling Out/In) is adding/removing more instances. Vertical (Scaling Up/Down) is increasing/decreasing the hardware specs of a single instance.", type: "Conceptual" },
        { level: "Senior", q: "What are the different EBS Volume types?", a: "General Purpose (SSD), Provisioned IOPS (High performance), Throughput Optimized (HDD), Cold HDD, and Magnetic.", type: "Conceptual" },
        { level: "Senior", q: "How would you migrate an EC2 instance from one Region to another?", a: "Create an AMI of the instance, copy the AMI to the target region, and launch a new instance from that copy.", type: "Scenario" },
        { level: "Senior", q: "What is the 'Placement Group' in EC2?", a: "A configuration where you place instances together for low-latency networking (Cluster), high-availability (Spread), or distinct hardware racks (Partition).", type: "Conceptual" },
        { level: "Senior", q: "How does EC2 billing work for fractional hours?", a: "Most instances (Linux/Windows) are now billed per-second with a 1-minute minimum.", type: "Conceptual" }
      ]
    },
    {
      day_number: 3,
      topic: "S3 Storage",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to S3", description: "Understanding Object Storage vs Block Storage and Bucket creation." },
        { time: "11:00 AM", title: "S3 Storage Classes", description: "Standard, Intelligent-Tiering, IA, and Glacier/Archive." },
        { time: "01:00 PM", title: "Versioning & Lifecycle Rules", description: "Protecting data from deletion and automating migrations to cheaper storage." },
        { time: "03:00 PM", title: "Security: Bucket Policies & ACLs", description: "Controlling public vs private access at the bucket and object level." },
        { time: "05:00 PM", title: "Static Website Hosting", description: "Converting an S3 bucket into a globally available web server." }
      ],
      quiz: [
        { text: "What does S3 stand for?", options: ["Simple Storage Service", "System Storage Solution", "Smart Storage Segment", "None"], correct: 0 },
        { text: "S3 stores data in ___.", options: ["Tables", "Directories", "Buckets", "Databases"], correct: 2 },
        { text: "The maximum object size in S3 is ___.", options: ["1 GB", "1 TB", "5 TB", "Unlimited"], correct: 2 },
        { text: "Which storage class is best for long-term data backup (rarely accessed)?", options: ["Standard", "Infrequent Access", "Glacier", "Intelligent Tiering"], correct: 2 },
        { text: "S3 is a/an ___ storage service.", options: ["Block", "Object", "File", "Database"], correct: 1 },
        { text: "What is the S3 durability guarantee (number of 9s)?", options: ["99.9%", "99.99%", "99.999999999% (11 9s)", "100%"], correct: 2 },
        { text: "___ allows you to recover previous versions of an object.", options: ["Replication", "Versioning", "Locking", "Logging"], correct: 1 },
        { text: "How do you make an S3 object public?", options: ["Open a ticket", "Change bucket permissions and object ACL", "It's public by default", "None"], correct: 1 },
        { text: "Lifecycle rules help to ___.", options: ["Delete old logs", "Move data to cheaper storage classes", "Both A and B", "Speed up downloads"], correct: 2 },
        { text: "Bucket names must be globally unique.", options: ["True", "False"], correct: 0 },
        { text: "Can you host a static HTML site on S3?", options: ["No", "Yes", "Only with CloudFront", "None"], correct: 1 },
        { text: "What is S3 Transfer Acceleration?", options: ["Faster uploads using Edge Locations", "Moving data by truck", "Compressing files", "None"], correct: 0 },
        { text: "Which feature protects against accidental deletion?", options: ["MFA Delete", "Shield", "GuardDuty", "WAF"], correct: 0 },
        { text: "S3 objects are accessed via a/an ___.", options: ["IP Address", "URL", "Folder Path", "None"], correct: 1 },
        { text: "What is Cross-Region Replication?", options: ["Copying objects to a different region automatically", "Backing up to local drive", "Moving to different cloud", "None"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is Amazon S3?", a: "A secure, durable, and highly-scalable object storage service.", type: "Conceptual" },
        { level: "Junior", q: "What is an S3 Bucket?", a: "A container for objects stored in Amazon S3. Think of it like a top-level folder.", type: "Conceptual" },
        { level: "Junior", q: "What can you store in S3?", a: "Any type of digital data (objects), such as images, videos, logs, backups, or static website files.", type: "Conceptual" },
        { level: "Mid", q: "Explain S3 Storage Classes.", a: "Standard (general), Standard-IA (rare access), One Zone-IA (cheaper, less durable), Intelligent-Tiering (auto-opt), Glacier (archival).", type: "Conceptual" },
        { level: "Mid", q: "What is Object Versioning?", a: "Keeping multiple variants of an object in the same bucket. It protects against unintended overwrites or deletions.", type: "Conceptual" },
        { level: "Mid", q: "How do you secure data in S3?", a: "Server-Side Encryption (SSE), Bucket Policies, IAM Policies, and Blocking Public Access (BPA).", type: "Scenario" },
        { level: "Mid", q: "What are S3 Lifecycle Policies?", a: "Rules that automatically transition objects to different storage classes or expire them after a set period.", type: "Conceptual" },
        { level: "Senior", q: "Difference between S3 and EBS?", a: "S3 is object data (accessible via web API/URL), durably stored across multiple AZs. EBS is block storage (virtual hard drive), attached to a single EC2 instance in one AZ.", type: "Conceptual" },
        { level: "Senior", q: "What is 'S3 Select'?", a: "A feature that allows searching and retrieving only a subset of data from an object using simple SQL expressions, saving time and costs.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a sudden massive spike in S3 read traffic?", a: "By putting Amazon CloudFront (CDN) in front of the S3 bucket to cache data globally at edge locations.", type: "Scenario" },
        { level: "Senior", q: "Explain 'Strong Consistency' in S3.", a: "Unlike the old 'eventual consistency' model, S3 now provides strong read-after-write consistency for all operations.", type: "Conceptual" },
        { level: "Senior", q: "What is a 'Pre-signed URL'?", a: "A URL that grants temporary, time-limited access to a private object without requiring AWS credentials from the user.", type: "Conceptual" }
      ]
    },
    {
      day_number: 4,
      topic: "Databases (RDS & DynamoDB)",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to RDS", description: "Relational Database Service for MySQL, Postgres, and SQL Server." },
        { time: "11:00 AM", title: "RDS High Availability (Multi-AZ)", description: "Setting up synchronous standby replicas for failover protection." },
        { time: "01:00 PM", title: "RDS Read Replicas", description: "Offloading read traffic and scaling read performance globally." },
        { time: "03:00 PM", title: "Amazon DynamoDB (NoSQL)", description: "Fast and flexible non-relational database for any scale." },
        { time: "05:00 PM", title: "DynamoDB Performance & Scaling", description: "Understanding Read/Write Capacity Units and DAX caching." }
      ],
      quiz: [
        { text: "Which service is used for Relational Databases on AWS?", options: ["DynamoDB", "Redshift", "RDS", "ElastiCache"], correct: 2 },
        { text: "RDS supports which database engines?", options: ["MySQL and Postgres", "Oracle and SQL Server", "MariaDB and Aurora", "All of the above"], correct: 3 },
        { text: "___ provides a synchronous standby in a different AZ.", options: ["Read Replica", "Multi-AZ Deployment", "Backup", "None"], correct: 1 },
        { text: "___ is used specifically to scale read performance.", options: ["Read Replica", "Multi-AZ", "Snapshot", "None"], correct: 0 },
        { text: "DynamoDB is which type of database?", options: ["Relational (SQL)", "Non-relational (NoSQL)", "Graph", "None"], correct: 1 },
        { text: "DynamoDB scales ___.", options: ["Vertically only", "Automatically (Infinitely)", "Manually", "None"], correct: 1 },
        { text: "Which DB service is 'Serverless' by nature?", options: ["RDS", "DynamoDB", "SQL Server", "None"], correct: 1 },
        { text: "What is Amazon Aurora?", options: ["A SQL database compatible with MySQL/Postgres but built for the cloud", "An IAM feature", "A storage class", "None"], correct: 0 },
        { text: "In DynamoDB, data is stored in ___.", options: ["Sheets", "Tables", "Buckets", "Nodes"], correct: 1 },
        { text: "The primary key in DynamoDB consists of ___.", options: ["ID only", "Partition Key and Sort Key (Optional)", "Random string", "None"], correct: 1 },
        { text: "Which service provides an in-memory cache for DynamoDB?", options: ["RDS", "DAX", "CloudFront", "None"], correct: 1 },
        { text: "RDS allows you to manage the underlying OS.", options: ["True", "False"], correct: 1 },
        { text: "Who handles patching and backups for RDS?", options: ["Customer", "AWS (Automated)", "Third party", "None"], correct: 1 },
        { text: "DynamoDB latency is typically ___.", options: ["Seconds", "Single-digit milliseconds", "Minutes", "None"], correct: 1 },
        { text: "Which service is best for OLAP (Data Warehousing)?", options: ["RDS", "Redshift", "DynamoDB", "None"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is Amazon RDS?", a: "A managed service that makes it easy to set up, operate, and scale relational databases in the cloud.", type: "Conceptual" },
        { level: "Junior", q: "What is DynamoDB?", a: "A fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.", type: "Conceptual" },
        { level: "Junior", q: "Difference between SQL and NoSQL?", a: "SQL (RDS) is structured and relational. NoSQL (DynamoDB) is flexible (schema-less) and highly scalable for high-velocity data.", type: "Conceptual" },
        { level: "Mid", q: "Explain Multi-AZ in RDS.", a: "It provides high availability by synchronously replicating data to a standby instance in a different AZ. AWS automatically fails over if the primary fails.", type: "Conceptual" },
        { level: "Mid", q: "When would you use a Read Replica?", a: "When your application has high read-to-write ratios and you need to scale the read load to improve performance.", type: "Scenario" },
        { level: "Mid", q: "Performance difference between RDS and DynamoDB?", a: "RDS is better for complex queries/JOINs. DynamoDB is better for high-throughput, simple lookups (key-value) at massive scale.", type: "Conceptual" },
        { level: "Mid", q: "What is the purpose of a DynamoDB Partition Key?", a: "It's used by DynamoDB's internal hash function to distribute data across multiple physical partitions for scalability.", type: "Conceptual" },
        { level: "Senior", q: "Explain Amazon Aurora performance benefits.", a: "Aurora is up to 5x faster than standard MySQL and 3x faster than Postgres because of its cloud-optimized storage engine.", type: "Conceptual" },
        { level: "Senior", q: "How would you handle a database migration to RDS?", a: "Using tools like AWS Database Migration Service (DMS) and Schema Conversion Tool (SCT) to move data with minimal downtime.", type: "Scenario" },
        { level: "Senior", q: "Explain DynamoDB TTL (Time To Live).", a: "A feature that automatically deletes items from your table after a specified timestamp expires, which helps manage storage costs.", type: "Conceptual" },
        { level: "Senior", q: "RDS vs EC2 with self-installed Database?", a: "RDS handles patching, backups, and failover automatically (managed). EC2 gives you full control but you handle all administration (unmanaged).", type: "Scenario" },
        { level: "Senior", q: "What is DAX?", a: "DynamoDB Accelerator. A fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement.", type: "Conceptual" }
      ]
    },
    {
      day_number: 5,
      topic: "Networking (VPC Basics)",
      category: "AWS",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Introduction to VPC", description: "Virtual Private Cloud: your private isolated network in AWS." },
        { time: "11:00 AM", title: "Subnets: Public & Private", description: "Dividing your network to control internet reachability." },
        { time: "01:00 PM", title: "Internet Gateway & Route Tables", description: "The exit/entry point for internet traffic and how packets find their way." },
        { time: "03:00 PM", title: "NAT Gateways & Bastion Hosts", description: "Providing internet access to private instances without exposing them." },
        { time: "05:00 PM", title: "VPC Endpoints & Peering", description: "Securely connecting your VPC to other AWS services and other VPCs." }
      ],
      quiz: [
        { text: "What does VPC stand for?", options: ["Virtual Private Cloud", "Verified Private Connection", "Variable Power Center", "None"], correct: 0 },
        { text: "A VPC is defined at the ___ level.", options: ["Global", "Region", "Availability Zone", "None"], correct: 1 },
        { text: "___ allows a VPC to connect to the internet.", options: ["Internet Gateway (IGW)", "NAT Gateway", "S3", "None"], correct: 0 },
        { text: "Which subnet type is accessible from the internet?", options: ["Private Subnet", "Public Subnet", "Both", "None"], correct: 1 },
        { text: "___ allows private instances to download updates from the internet.", options: ["Internet Gateway", "NAT Gateway", "Peering", "None"], correct: 1 },
        { text: "A 'Bastion Host' is used for ___.", options: ["Database storage", "Secure SSH access to private instances", "Scaling", "None"], correct: 1 },
        { text: "___ controls traffic at the subnet level.", options: ["Security Groups (SG)", "Network ACL (NACL)", "IAM", "None"], correct: 1 },
        { text: "Connecting two VPCs directly is called ___.", options: ["Bridging", "Peering", "Routing", "None"], correct: 1 },
        { text: "VPCs use ___ for internal IP address management.", options: ["MAC", "CIDR blocks", "DNS only", "None"], correct: 1 },
        { text: "Which service connects your on-premise network to AWS via the internet?", options: ["VPC Peering", "Site-to-Site VPN", "Direct Connect", "None"], correct: 1 },
        { text: "Which service is a dedicated physical fibre connection to AWS?", options: ["VPN", "Direct Connect", "Transit Gateway", "None"], correct: 1 },
        { text: "A VPC can span multiple regions.", options: ["True", "False"], correct: 1 },
        { text: "How do you connect a VPC to S3 without using a public internet path?", options: ["NAT Gateway", "VPC Endpoint", "Peering", "None"], correct: 1 },
        { text: "Network ACLs are stateful.", options: ["True", "False (They are stateless)", "Random", "None"], correct: 1 },
        { text: "Every VPC has a default Route Table.", options: ["True", "False"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is a VPC?", a: "A logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.", type: "Conceptual" },
        { level: "Junior", q: "What is the difference between an Internet Gateway and a NAT Gateway?", a: "An Internet Gateway allows two-way traffic for public subnets. A NAT Gateway allows one-way outbound traffic for private subnets (updates etc).", type: "Conceptual" },
        { level: "Junior", q: "Public vs Private Subnet?", a: "A Public subnet has a route to an Internet Gateway. A Private subnet does not.", type: "Conceptual" },
        { level: "Mid", q: "Explain Security Groups vs Network ACLs.", a: "SG are stateful and operate at the instance level. NACL are stateless and operate at the subnet level.", type: "Conceptual" },
        { level: "Mid", q: "What is VPC Peering?", a: "A networking connection between two VPCs that enables you to route traffic between them using private IPv4/IPv6 addresses.", type: "Conceptual" },
        { level: "Mid", q: "What is a Bastion Host?", a: "A specially configured server in a public subnet used to provide secure access to instances in a private subnet, usually via SSH.", type: "Conceptual" },
        { level: "Mid", q: "How do you connect your VPC to S3 privately?", a: "By using a VPC Endpoint (Interface or Gateway type), which avoids routing traffic over the public internet.", type: "Scenario" },
        { level: "Senior", q: "Explain CIDR notation.", a: "Classless Inter-Domain Routing. A method for allocating IP addresses and IP routing (e.g., 10.0.0.0/16 specifies a range of 65,536 addresses).", type: "Conceptual" },
        { level: "Senior", q: "What is a VPC Flow Log?", a: "A feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.", type: "Conceptual" },
        { level: "Senior", q: "How would you design a highly available VPC architecture?", a: "By spanning multiple AZs, placing redundant NAT Gateways in each AZ, and using an ELB (Elastic Load Balancer) to distribute traffic.", type: "Scenario" },
        { level: "Senior", q: "What is the Transit Gateway?", a: "A hub that connects multiple VPCs and on-premises networks together, simplifying complex network architectures.", type: "Conceptual" },
        { level: "Senior", q: "Explain the difference between Site-to-Site VPN and AWS Direct Connect.", a: "VPN is inexpensive but uses the public internet (higher latency). Direct Connect is a physical cable (lower latency, high cost, more secure).", type: "Scenario" }
      ]
    }
  ]
};
