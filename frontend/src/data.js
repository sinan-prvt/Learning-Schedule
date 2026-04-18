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

// Helper generator
const curriculum = [
  { week: 'W1', cat: 'Python', topics: ['Basics & Data Types', 'Data Structures', 'Control Flow', 'OOP Deep Dive', 'Advanced Python', 'Python Project'] },
  { week: 'W2', cat: 'Django', topics: ['Django Setup & Arch', 'Models & Admin', 'Views & URLs', 'Templates & Forms', 'Authentication', 'Django Project'] },
  { week: 'W3', cat: 'DRF', topics: ['REST Principles & Setup', 'Serializers Base', 'ViewSets & Routers', 'Authentication & Permissions', 'Filtering & Pagination', 'DRF Project'] },
  { week: 'W4', cat: 'ORM', topics: ['Querysets Basics', 'Filtering & Lookups', 'Q & F Objects', 'Aggregations', 'Advanced ORM joins', 'Performance Opt'] },
  { week: 'W5', cat: 'FastAPI', topics: ['FastAPI Intro', 'Path & Query Params', 'Pydantic Models', 'Dependency Injection', 'Background Tasks', 'Security Basics'] },
  { week: 'W6', cat: 'FastAPI Adv', topics: ['WebSockets', 'Testing FastAPI', 'Dockerizing FastAPI', 'Advanced Dependencies', 'Async Databases', 'FastAPI Project'] },
  { week: 'W7', cat: 'AWS', topics: ['Cloud Fundamentals & IAM', 'EC2 Basics', 'S3 & Static Hosting', 'RDS Databases', 'Route53 & Domains', 'VPC Networking'] },
  { week: 'W8', cat: 'AWS Adv', topics: ['Lambda Serverless', 'API Gateway', 'ECS & Containers', 'CloudFront', 'CloudFormation', 'AWS CI/CD'] },
  { week: 'W9', cat: 'React', topics: ['React Components & JSX', 'State & Props', 'Hooks (useState, useEffect)', 'Routing (React Router)', 'Context API', 'React Hooks Adv'] },
  { week: 'W10', cat: 'Redux', topics: ['Redux Intro', 'Actions & Reducers', 'Redux Toolkit', 'Async Thunks', 'RTK Query', 'Final Fullstack Project'] },
];

let globalDayId = 1;

curriculum.forEach((weekData) => {
  weekData.topics.forEach((topic, index) => {
    
    let sessions = [
      { id: `d${globalDayId}s1`, time: '9:00 AM', title: `Introduction to ${topic}`, desc: 'Core concepts and theoretical background.' },
      { id: `d${globalDayId}s2`, time: '11:00 AM', title: 'Deep Dive & Examples', desc: 'Practical examples, syntax details, and edge cases.' },
      { id: `d${globalDayId}s3`, time: '2:00 PM', title: 'Hands-on Exercise', desc: 'Implementing what was learned in a mini isolated problem.' },
      { id: `d${globalDayId}s4`, time: '4:00 PM', title: 'Review & Quiz', desc: 'Self-evaluation and debugging practice.' },
    ];

    let questions = [];
    
    // Custom initial questions for Day 1
    if (globalDayId === 1) {
      questions.push(
        { id: `q${globalDayId}_1`, text: 'How do you check the memory address of an object in Python?', options: ['id(obj)', 'type(obj)', '&obj', 'memory(obj)'], correct: 0 },
        { id: `q${globalDayId}_2`, text: 'Which of the following is a mutable data type?', options: ['Tuple', 'String', 'List', 'Integer'], correct: 2 },
        { id: `q${globalDayId}_3`, text: 'What is the correct way to declare a boolean?', options: ['true', 'True', 'TRUE', 'boolean(1)'], correct: 1 }
      );
    } else if (globalDayId === 2) {
      questions.push(
        { id: `q${globalDayId}_1`, text: 'Which data structure stores key-value pairs?', options: ['List', 'Tuple', 'Set', 'Dictionary'], correct: 3 },
        { id: `q${globalDayId}_2`, text: 'What method is used to add an item to the end of a List?', options: ['.add()', '.insert()', '.append()', '.push()'], correct: 2 },
        { id: `q${globalDayId}_3`, text: 'Sets in Python allow duplicate values. True or False?', options: ['True', 'False'], correct: 1 }
      );
    }
    
    // Fill the rest up to 35 questions to satisfy exactly what the user wants!
    const qCountStart = questions.length + 1;
    for (let i = qCountStart; i <= 35; i++) {
        questions.push({
            id: `q${globalDayId}_${i}`,
            text: `Deep dive assessment ${i} for ${topic}: Which action correctly evaluates the primary context?`,
            options: ['Initialize default class constructor', 'Invoke async resolution pipeline', `Iterate parsing logic for ${topic}`, 'Raise NullReference exception'],
            correct: Math.floor(Math.random() * 4) // Picks random correct option
        });
    }

    DUMMY_DATA.days.push({
      id: globalDayId,
      weekId: weekData.week,
      day: index + 1,
      topic: topic,
      category: weekData.cat,
      duration: '8h',
      sessionsCount: sessions.length,
      sessions: sessions,
      questions: questions
    });
    
    globalDayId++;
  });
});
