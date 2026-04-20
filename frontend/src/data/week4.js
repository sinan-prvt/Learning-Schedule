export const week4 = {
  id: "W4",
  title: "Django ORM & Databases",
  days: [
    {
      day_number: 1,
      topic: "Models & Relationships",
      category: "ORM",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Defining Models & Fields", description: "Mastering CharField, IntegerField, DateTimeField, and custom fields." },
        { time: "11:00 AM", title: "One-to-Many (ForeignKey)", description: "Creating related tables and understanding on_delete behaviors." },
        { time: "01:00 PM", title: "Many-to-Many Relationships", description: "Using ManyToManyField and the 'through' table." },
        { time: "03:00 PM", title: "One-to-One Relationships", description: "Extending models and creating user profiles." },
        { time: "05:00 PM", title: "Model Meta Options", description: "Configuring ordering, table names, and constraints." }
      ],
      quiz: [
        { text: "Where do you define your application data structure in Django?", options: ["views.py", "models.py", "admin.py", "urls.py"], correct: 1 },
        { text: "Which field type is suitable for storing long text?", options: ["CharField", "TextField", "StringField", "LongField"], correct: 1 },
        { text: "Which relationship type allows one object to be related to many?", options: ["OneToOne", "ForeignKey", "ManyToManyField", "Loop"], correct: 1 },
        { text: "___ relationship is used for things like Categories and Tags.", options: ["OneToOne", "ForeignKey", "ManyToManyField", "None"], correct: 2 },
        { text: "What does on_delete=models.CASCADE do?", options: ["Keeps a record", "Deletes related objects when parent is deleted", "Sets value to null", "Protects from deletion"], correct: 1 },
        { text: "Which field creates a One-to-One relationship?", options: ["OneToOneField", "UniqueForeignKey", "ProfileField", "SingleLink"], correct: 0 },
        { text: "Which attribute sets the human-readable name of a field?", options: ["verbose_name", "label", "display_name", "title"], correct: 0 },
        { text: "How do you specify a custom table name in a model?", options: ["table_name =", "db_table =", "sql_name =", "name ="], correct: 1 },
        { text: "The 'related_name' attribute is used to ___.", options: ["Set the DB column name", "Define the reverse relationship name", "Connect to a different DB", "None of these"], correct: 1 },
        { text: "Which field allows automatic timestamps upon creation?", options: ["auto_now", "auto_now_add", "timestamp", "create_time"], correct: 1 },
        { text: "Which field is specifically for storing unique email addresses?", options: ["CharField", "EmailField", "StringField", "UniqueField"], correct: 1 },
        { text: "Where do you add class Meta?", options: ["Outside the class", "Inside the Model class", "In settings.py", "In admin.py"], correct: 1 },
        { text: "A Many-to-Many relationship uses a ___ table under the hood.", options: ["Main", "Join/Intermediary", "Temp", "Index"], correct: 1 },
        { text: "Which choice protects a parent from being deleted if children exist?", options: ["CASCADE", "SET_NULL", "PROTECT", "DO_NOTHING"], correct: 2 },
        { text: "What is the result of using blank=True in a model field?", options: ["Field is null in DB", "Field is optional in form validation", "Field is deleted", "Field is required"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What is an ORM?", a: "Object-Relational Mapper. It allows you to interact with your database using Python objects instead of writing raw SQL.", type: "Conceptual" },
        { level: "Junior", q: "Difference between One-to-Many and Many-to-Many?", a: "One-to-Many (ForeignKey) means one parent has many children. Many-to-Many means many items can relate to many other items.", type: "Conceptual" },
        { level: "Junior", q: "What is the purpose of migrations?", a: "To propagate changes you make to your models (adding a field, deleting a model, etc.) into your database schema.", type: "Conceptual" },
        { level: "Mid", q: "Explain the difference between null=True and blank=True.", a: "null=True affects the database (sets column to NULL). blank=True affects validation in forms (allows empty strings).", type: "Conceptual" },
        { level: "Mid", q: "What is a 'related_name' and why use it?", a: "It is the name to use for the relation from the related object back to this one. It allows you to follow the relationship in reverse.", type: "Conceptual" },
        { level: "Mid", q: "What are 'Abstract Models'?", a: "Base classes used to store common fields that you don't want to create a database table for. Other models inherit from them.", type: "Conceptual" },
        { level: "Mid", q: "Explain Proxy Models.", a: "A model that changes the behavior of another model (like adding custom ordering) without changing the database table.", type: "Conceptual" },
        { level: "Mid", q: "How do you implement a Many-to-Many relationship with extra data?", a: "By using the 'through' argument in ManyToManyField to point to a custom intermediary model.", type: "Coding" },
        { level: "Senior", q: "How does Django handle Database Transactions?", a: "By default, Django uses autocommit. You can use @transaction.atomic as a decorator or context manager to ensure all-or-nothing operations.", type: "Conceptual" },
        { level: "Senior", q: "Explain 'on_delete' behaviors in Django ORM.", a: "CASCADE (delete children), PROTECT (block deletion), SET_NULL (set children to NULL), SET_DEFAULT, and DO_NOTHING.", type: "Conceptual" },
        { level: "Senior", q: "How do you handle schema migrations for a large, live database?", a: "By breaking migrations into small steps, using 'Manage migrations' tools, and sometimes writing a custom 'RunPython' script to move data.", type: "Scenario" },
        { level: "Senior", q: "What is the difference between multi-table inheritance and abstract models?", a: "Multi-table inheritance creates a new table for each class in the hierarchy. Abstract models only create tables for the child classes.", type: "Conceptual" }
      ]
    },
    {
      day_number: 2,
      topic: "QuerySet API",
      category: "ORM",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Basic Queries", description: "Using all(), get(), and filter() to retrieve data." },
        { time: "11:00 AM", title: "Filtering & Slicing", description: "Mastering exact, contains, in, and range lookups." },
        { time: "01:00 PM", title: "Excluding & Ordering", description: "Using exclude() and order_by() to refine results." },
        { time: "03:00 PM", title: "Lazy Evaluation", description: "Understanding how and when QuerySets are actually executed." },
        { time: "05:00 PM", title: "CRUD Operations via ORM", description: "Creating, updating, and deleting records using the Python objects." }
      ],
      quiz: [
        { text: "What does MyModel.objects.all() return?", options: ["A list", "A QuerySet", "A dictionary", "A single object"], correct: 1 },
        { text: "Which method is used to get a single object?", options: ["filter()", "get()", "all()", "find()"], correct: 1 },
        { text: "What happens if get() finds multiple records?", options: ["Returns the first", "Returns a list", "Raises MultipleObjectsReturned", "Returns None"], correct: 2 },
        { text: "How do you filter for titles containing 'python' (case-insensitive)?", options: ["title__contains", "title__icontains", "title == 'python'", "title.match()"], correct: 1 },
        { text: "QuerySets are lazy.", options: ["True", "False"], correct: 0 },
        { text: "Which method is used to delete records in bulk?", options: ["remove()", "clear()", "delete()", "drop()"], correct: 2 },
        { text: "How do you order by 'name' in descending order?", options: ["order_by('name')", "order_by('-name')", "sort('name')", "desc('name')"], correct: 1 },
        { text: "What is the difference between filter() and exclude()?", options: ["filter matches, exclude ignores", "They are the same", "exclude deletes", "filter is faster"], correct: 0 },
        { text: "How do you limit a QuerySet to 5 items?", options: ["all().limit(5)", "all()[:5]", "all().top(5)", "all().head(5)"], correct: 1 },
        { text: "Which method updates multiple records at once?", options: ["save()", "update()", "change()", "set()"], correct: 1 },
        { text: "What happens if get() finds zero records?", options: ["Returns None", "Raises DoesNotExist exception", "Returns an empty list", "Silent failure"], correct: 1 },
        { text: "___ is used for checking if a QuerySet has any results.", options: ["len()", "exists()", "count()", "check()"], correct: 1 },
        { text: "How do you filter for a range of dates?", options: ["date__in", "date__range", "date.between()", "date__limit"], correct: 1 },
        { text: "The first time a QuerySet is iterated, it ___.", options: ["Deletes itself", "Hits the database", "Crashes", "Clears cache"], correct: 1 },
        { text: "Which lookup is used for 'greater than'?", options: ["__gt", "__gte", "__max", "__upper"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is a QuerySet?", a: "A collection of objects from your database. It can have zero, one, or many objects.", type: "Conceptual" },
        { level: "Junior", q: "Explain the difference between filter() and get().", a: "filter() returns a QuerySet (even if empty). get() returns a single object and raises an error if zero or multiple items exist.", type: "Conceptual" },
        { level: "Junior", q: "What does it mean that QuerySets are lazy?", a: "A QuerySet is not executed against the database until it is evaluated (e.g., iterated over, sliced, or called with len()).", type: "Conceptual" },
        { level: "Mid", q: "How do you perform a 'JOIN' using the Django ORM?", a: "Usually by using double underscores to span relationships, e.g., Entry.objects.filter(blog__name='My Blog').", type: "Coding" },
        { level: "Mid", q: "Explain the update() method vs calling save() on an object.", a: "update() is an SQL-level operation on a QuerySet (faster, no signals). save() is a model-level operation (slower, triggers signals).", type: "Conceptual" },
        { level: "Mid", q: "What is the purpose of the exists() method?", a: "It performs the most efficient SQL query (often a LIMIT 1) to determine if any records match, without loading the data into memory.", type: "Conceptual" },
        { level: "Mid", q: "How do you chain filters in a QuerySet?", a: "Simply by calling .filter() multiple times: Entry.objects.filter(title__contains='L').filter(pub_date=today).", type: "Coding" },
        { level: "Senior", q: "How does QuerySet caching work?", a: "Each QuerySet contains a cache. The first time it's evaluated, the results are stored in the cache so subsequent evaluations don't hit the DB.", type: "Conceptual" },
        { level: "Senior", q: "When would you prefer values() or values_list()?", a: "When you only need specific fields and want to avoid the overhead of creating Model instances.", type: "Scenario" },
        { level: "Senior", q: "How do you handle N+1 query problems in template loops?", a: "By using select_related() for single-valued relationships and prefetch_related() for multi-valued relationships in the initial QuerySet.", type: "Scenario" },
        { level: "Senior", q: "Explain the difference between .count() and len(queryset).", a: ".count() performs a SELECT COUNT(*) in the DB. len() loads all results into memory and then counts them.", type: "Conceptual" },
        { level: "Senior", q: "What is the purpose of the iterator() method?", a: "It fetches and process records one by one without caching the results, useful for processing extremely large datasets without running out of memory.", type: "Conceptual" }
      ]
    },
    {
      day_number: 3,
      topic: "Advanced Lookups",
      category: "ORM",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Q Objects for OR Logic", description: "Writing complex queries with OR (|) and NOT (~) operators." },
        { time: "11:00 AM", title: "F Objects for Field Comparisons", description: "Comparing fields within the same model or performing SQL-level updates." },
        { time: "01:00 PM", title: "Aggregation", description: "Calculating Sum, Avg, Max, and Min across a QuerySet." },
        { time: "03:00 PM", title: "Annotation", description: "Adding calculated fields to every object in a result set." },
        { time: "05:00 PM", title: "Complex Annotations", description: "Using Subqueries and OuterRef for advanced data reporting." }
      ],
      quiz: [
        { text: "Which object is used for 'OR' queries in filters?", options: ["O", "Q", "S", "OR"], correct: 1 },
        { text: "Which object allows comparing two fields of the same model?", options: ["F", "V", "C", "FIELD"], correct: 0 },
        { text: "___ is used to calculate the average of a field across all rows.", options: ["annotate()", "aggregate()", "calculate()", "sum()"], correct: 1 },
        { text: "annotate() adds a new field to ___ in the QuerySet.", options: ["The first object", "Every object", "The database table", "The settings"], correct: 1 },
        { text: "How do you represent 'NOT' in a Q query?", options: ["NOT", "!", "~", "-"], correct: 2 },
        { text: "Which function calculates the total count of related items in an annotation?", options: ["Sum", "Count", "Max", "Total"], correct: 1 },
        { text: "aggregate() returns a ___.", options: ["QuerySet", "Dictionary", "List", "Single object"], correct: 1 },
        { text: "F objects help avoid ___ during concurrent updates.", options: ["Memory leaks", "Race conditions", "SQL Injection", "Timeouts"], correct: 1 },
        { text: "Can you combine Q objects using & (AND)?", options: ["Yes", "No", "Only in latest Django", "Only for IDs"], correct: 0 },
        { text: "Which function finds the highest value in a column?", options: ["Min", "High", "Max", "Top"], correct: 2 },
        { text: "Subquery and OuterRef are used for ___.", options: ["Joining tables", "Complex nested queries", "Naming fields", "Deleting data"], correct: 1 },
        { text: "Annotated fields are temporary and not saved to the DB.", options: ["True", "False"], correct: 0 },
        { text: "How do you access an F object incremented value?", options: ["F('likes') + 1", "likes++", "inc('likes')", "None"], correct: 0 },
        { text: "Which function calculates the sum of a field?", options: ["AggregateSum", "Sum", "Total", "Add"], correct: 1 },
        { text: "You must import Q and F from ___.", options: ["django.db", "django.db.models", "django.orm", "django.core"], correct: 1 }
      ],
      interview: [
        { level: "Junior", q: "What are Q objects?", a: "They allow you to construct complex queries with logic like OR, AND, and NOT within a single filter() call.", type: "Conceptual" },
        { level: "Junior", q: "What is an F object?", a: "It represents the value of a model field at the database level, allowing you to perform operations like 'likes = F('likes') + 1'.", type: "Conceptual" },
        { level: "Junior", q: "Difference between aggregate() and annotate()?", a: "aggregate() returns a summary of the whole QuerySet (e.g., total sum). annotate() returns a new QuerySet where each item has a derived field.", type: "Conceptual" },
        { level: "Mid", q: "How do you write an 'OR' query in Django?", a: "Using Q objects: Model.objects.filter(Q(name='A') | Q(name='B')).", type: "Coding" },
        { level: "Mid", q: "Why use F objects to update a counter field?", a: "Because it performs the addition in the database, avoiding race conditions where two processes might read the same old value.", type: "Conceptual" },
        { level: "Mid", q: "Explain Subqueries in Django ORM.", a: "They allow you to use the result of one QuerySet inside another, often used within annotations.", type: "Conceptual" },
        { level: "Mid", q: "What is the purpose of OuterRef?", a: "It's used within a Subquery to refer to a field from the 'outer' or main QuerySet.", type: "Conceptual" },
        { level: "Senior", q: "How would you find all users who have more than 5 posts using annotate() and filter()?", a: "User.objects.annotate(num_posts=Count('post')).filter(num_posts__gt=5).", type: "Coding" },
        { level: "Senior", q: "What is the 'Exists' expression used for?", a: "An optimized Subquery that checks for the existence of related objects returning a Boolean.", type: "Conceptual" },
        { level: "Senior", q: "Explain the performance cost of multiple annotations.", a: "Each annotation often adds an extra JOIN or Subquery to the SQL, which can significantly slow down the query if not used carefully.", type: "Scenario" },
        { level: "Senior", q: "How do you handle conditional aggregation (e.g., sum of only active orders)?", a: "Using Case, When, and Then expressions within an annotate() or aggregate() call.", type: "Coding" },
        { level: "Senior", q: "What is the difference between Q(a=1, b=2) and Q(a=1) & Q(b=2)?", a: "They are logically identical (both are AND operations).", type: "Conceptual" }
      ]
    },
    {
      day_number: 4,
      topic: "Database Performance",
      category: "ORM",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "The N+1 Problem", description: "Identifying and understanding why extra queries occur in loops." },
        { time: "11:00 AM", title: "select_related", description: "Solving performance for ForeignKeys and OneToOne relationships using JOINs." },
        { time: "01:00 PM", title: "prefetch_related", description: "Solving performance for ManyToMany and reverse ForeignKeys using separate queries." },
        { time: "03:00 PM", title: "Query Optimization Tools", description: "Using django-debug-toolbar and explain() to analyze queries." },
        { time: "05:00 PM", title: "Indexing and Query Profiles", description: "Adding db_index and analyzing execution plans." }
      ],
      quiz: [
        { text: "What is the 'N+1' query problem?", options: ["A math error", "Extra database hits in a loop", "A security risk", "A missing file"], correct: 1 },
        { text: "Which method uses an SQL JOIN to fetch related objects?", options: ["prefetch_related", "select_related", "join_related", "all()"], correct: 1 },
        { text: "Which method fetches related objects using a second query in Python?", options: ["prefetch_related", "select_related", "extra_query", "fetch_all"], correct: 0 },
        { text: "select_related is used for which relationship type?", options: ["ManyToMany", "OneToOne", "Single-valued ForeignKey", "Both B and C"], correct: 3 },
        { text: "prefetch_related is used for which relationship type?", options: ["ManyToMany", "Reverse ForeignKey", "Both A and B", "Single-valued ForeignKey"], correct: 2 },
        { text: "How do you see the SQL query generated by a QuerySet?", options: ["print(queryset.sql)", "print(queryset.query)", "print(queryset.db)", "print(queryset.raw)"], correct: 1 },
        { text: "Which tool provides a visual panel for query performance?", options: ["Django Tool", "Debug Toolbar", "SQL Panel", "Performance Monitor"], correct: 1 },
        { text: "What does .explain() do?", options: ["Explains the Python code", "Retrieves the database execution plan", "Deletes redundant code", "Checks for bugs"], correct: 1 },
        { text: "Adding ___ to a field makes searching by that field faster.", options: ["db_index=True", "is_fast=True", "searchable=True", "pk=True"], correct: 0 },
        { text: "Is it possible to chain select_related and prefetch_related?", options: ["No", "Yes", "Only for IDs", "Only in Postgres"], correct: 1 },
        { text: "select_related works by creating a/an ___.", options: ["Index", "SQL JOIN", "Cache", "Trigger"], correct: 1 },
        { text: "prefetch_related is done in ___.", options: ["Database", "Python memory", "Browser", "Settings"], correct: 1 },
        { text: "Indexes slow down database writes.", options: ["True", "False"], correct: 0 },
        { text: "Which attribute in Meta sets multi-field indexes?", options: ["indexes", "multi_index", "key_pairs", "unique_pairs"], correct: 0 },
        { text: "The ___ attribute in settings shows slow queries.", options: ["LOGGING", "SLOW_QUERY_LOG", "ADMIN_EMAILS", "DEBUG"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "What is the N+1 problem?", a: "It happens when you fetch N objects and then for each object, you perform an additional query to get related data (1 + N queries total).", type: "Conceptual" },
        { level: "Junior", q: "How do you fix N+1 in Django?", a: "By using select_related() or prefetch_related() to fetch all needed data in the first query.", type: "Conceptual" },
        { level: "Junior", q: "What is an index in a database?", a: "A data structure that improves the speed of data retrieval operations on a table at the cost of slower writes and additional space.", type: "Conceptual" },
        { level: "Mid", q: "Difference between select_related and prefetch_related?", a: "select_related uses an SQL JOIN (1 query) and works on single-value relations. prefetch_related does a separate query (2 queries total) and works on multi-value relations.", type: "Conceptual" },
        { level: "Mid", q: "How do you use the explain() method?", a: "Call it on a queryset: MyModel.objects.filter(...).explain(). It returns the database's strategy for finding the data.", type: "Coding" },
        { level: "Mid", q: "When should you NOT use an index?", a: "On columns with very low cardinality (like boolean fields) or in tables that are updated very frequently.", type: "Scenario" },
        { level: "Mid", q: "What is the Django Debug Toolbar?", a: "A development tool that gives you a detailed breakdown of SQL queries, execution time, and potential N+1 issues for every request.", type: "Conceptual" },
        { level: "Senior", q: "Explain 'Prefetch' objects with custom querysets.", a: "You can pass a Prefetch() object to prefetch_related to further filter or order the related items (e.g., fetch only active comments).", type: "Coding" },
        { level: "Senior", q: "How would you optimize a query involving millions of rows?", a: "Indexes, select_related, using values() to reduce object creation, and potentially using database views or denormalization.", type: "Scenario" },
        { level: "Senior", q: "What is the cost of select_related on large tables?", a: "It creates large result sets due to the JOIN, which can consume significant memory and database processing power.", type: "Scenario" },
        { level: "Senior", q: "Can you use select_related for a reverse ForeignKey?", a: "No, you must use prefetch_related because a reverse ForeignKey is a 1-to-many relationship.", type: "Conceptual" },
        { level: "Senior", q: "How do you identify duplicate SQL queries in a Django request?", a: "Using the SQL panel of the Debug Toolbar or analysis tools like Sentry.", type: "Scenario" }
      ]
    },
    {
      day_number: 5,
      topic: "Raw SQL & Transactions",
      category: "ORM",
      duration: "8h",
      sessions: [
        { time: "09:00 AM", title: "Executing Raw SQL Queries", description: "Using .raw() and connection.cursor() for complex DB-specific commands." },
        { time: "11:00 AM", title: "Database Transactions", description: "Ensuring data integrity with atomic blocks and savepoints." },
        { time: "01:00 PM", title: "QuerySet .extra() and .defer()", description: "Adding custom SQL snippets and delaying field loading to save memory." },
        { time: "03:00 PM", title: "Signals & Workflows", description: "Automating logic on pre_save and post_save hooks." },
        { time: "05:00 PM", title: "Advanced DB Operations", description: "Using Bulk Create and Bulk Update for massive data insertion." }
      ],
      quiz: [
        { text: "Which method runs a raw SQL query returning model instances?", options: [".sql()", ".raw()", ".query()", ".execute()"], correct: 1 },
        { text: "___ ensures multiple DB operations succeed or fail together.", options: ["A trigger", "A transaction", "A signal", "A lock"], correct: 1 },
        { text: "Which decorator makes a function atomic?", options: ["@db_atomic", "@transaction.atomic", "@safe_run", "@commit"], correct: 1 },
        { text: "How do you run non-model SQL (like dropping a table)?", options: ["Model.objects.raw()", "connection.cursor()", "python.sql()", "os.db()"], correct: 1 },
        { text: "The .defer() method is used to ___.", options: ["Delete fields", "Delay loading of specific fields", "Rename fields", "Hide fields"], correct: 1 },
        { text: "___ is used to load only specific fields, ignoring others.", options: ["defer()", "only()", "select()", "pick()"], correct: 1 },
        { text: "What is a Django Signal?", options: ["A web socket", "A framework to notify other parts of the app when actions occur", "A database error", "A networking tool"], correct: 1 },
        { text: "Which signal is fired after a model is saved?", options: ["pre_save", "post_save", "save_done", "after_save"], correct: 1 },
        { text: "To insert 1000 records fast, use ___.", options: ["for loop and save()", "bulk_create()", "multi_save()", "add_many()"], correct: 1 },
        { text: "Where do you define Signal receivers?", options: ["models.py", "signals.py", "apps.py", "Both B and C"], correct: 3 },
        { text: "A 'Savepoint' is a/an ___.", options: ["Backup file", "Marker within a transaction for partial rollback", "ID in the DB", "Settings flag"], correct: 1 },
        { text: "Can raw SQL be used with the Django Admin?", options: ["No", "Yes, in custom views", "Only for IDs", "Only in dev"], correct: 1 },
        { text: "Raw SQL queries are vulnerable to SQL Injection if not handled carefully.", options: ["True", "False"], correct: 0 },
        { text: "___ should be used to provide data to raw SQL safely.", options: ["f-strings", "Parameters as second argument", "String concatenation", "Manual escaping"], correct: 1 },
        { text: "Which signal is fired before a model is deleted?", options: ["pre_delete", "post_delete", "deleting", "early_delete"], correct: 0 }
      ],
      interview: [
        { level: "Junior", q: "Why use Raw SQL in a framework like Django?", a: "For complex queries that are difficult to express in the ORM or for database-specific features not supported by Django.", type: "Conceptual" },
        { level: "Junior", q: "What is a Database Transaction?", a: "A single unit of work that consists of multiple operations. Either all succeed, or they are all rolled back if one fails.", type: "Conceptual" },
        { level: "Junior", q: "What is a Signal?", a: "A way to allow decoupled applications to get notified when certain actions occur elsewhere in the framework.", type: "Conceptual" },
        { level: "Mid", q: "How do you execute raw SQL without a Model?", a: "By importing 'connection' from django.db and using 'with connection.cursor() as cursor: cursor.execute(sql)'.", type: "Coding" },
        { level: "Mid", q: "Explain the difference between .defer() and .only().", a: ".defer() lets you specify fields NOT to load immediately. .only() lets you specify the EXCLUSIVE list of fields to load.", type: "Conceptual" },
        { level: "Mid", q: "What is the danger of using Signals?", a: "They can make code harder to trace/debug (implicit logic) and might cause performance issues if not handled carefully (e.g., circular signals).", type: "Scenario" },
        { level: "Mid", q: "How do you prevent a signal from running during a bulk operation?", a: "Bulk operations like bulk_create or update() do NOT fire individual pre_save/post_save signals.", type: "Conceptual" },
        { level: "Senior", q: "When would you use @transaction.atomic()?", a: "When performing multiple related database saves (like creating a user and a profile) where one shouldn't exist without the other.", type: "Scenario" },
        { level: "Senior", q: "How do you pass parameters to MyModel.objects.raw() safely?", a: "By passing them as a list/tuple in the second argument: MyModel.objects.raw('SELECT * FROM ... WHERE id = %s', [my_id]).", type: "Coding" },
        { level: "Senior", q: "Explain the 'Transaction Isolation Levels'.", a: "They control the visibility of changes between concurrent transactions (Read Uncommitted, Read Committed, Repeatable Read, Serializable).", type: "Conceptual" },
        { level: "Senior", q: "Why would you use select_for_update()?", a: "To lock the database rows until the transaction is complete, preventing other processes from modifying the data at the same time.", type: "Scenario" },
        { level: "Senior", q: "How do you handle large file uploads in a transaction?", a: "You should avoid performing heavy I/O or external API calls inside a DB transaction to keep the lock duration short.", type: "Scenario" }
      ]
    }
  ]
};
