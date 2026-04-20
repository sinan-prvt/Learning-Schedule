const STORAGE_KEYS = {
  COMPLETED_SESSIONS: 'roadmap_completed_sessions',
  COMPLETED_DAYS: 'roadmap_completed_days',
  QUIZ_SCORES: 'roadmap_quiz_scores',
  INTERVIEW_PROGRESS: 'roadmap_interview_progress'
};

const ProgressManager = {
  // --- Progress Tracking ---
  
  toggleSession: (weekId, dayNumber, sessionTitle) => {
    const key = `${weekId}_D${dayNumber}_${sessionTitle}`;
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_SESSIONS) || '{}');
    completed[key] = !completed[key];
    localStorage.setItem(STORAGE_KEYS.COMPLETED_SESSIONS, JSON.stringify(completed));
    return completed[key];
  },

  isSessionCompleted: (weekId, dayNumber, sessionTitle) => {
    const key = `${weekId}_D${dayNumber}_${sessionTitle}`;
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_SESSIONS) || '{}');
    return !!completed[key];
  },

  toggleDayStatus: (weekId, dayNumber) => {
    const key = `${weekId}_D${dayNumber}`;
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_DAYS) || '{}');
    completed[key] = !completed[key];
    localStorage.setItem(STORAGE_KEYS.COMPLETED_DAYS, JSON.stringify(completed));
    return completed[key];
  },

  isDayCompleted: (weekId, dayNumber) => {
    const key = `${weekId}_D${dayNumber}`;
    const completed = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_DAYS) || '{}');
    return !!completed[key];
  },

  // --- Quiz Handling ---

  saveQuizScore: (weekId, dayNumber, score, total) => {
    const key = `${weekId}_D${dayNumber}`;
    const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES) || '{}');
    scores[key] = { score, total, date: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(scores));
  },

  getQuizScore: (weekId, dayNumber) => {
    const key = `${weekId}_D${dayNumber}`;
    const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES) || '{}');
    return scores[key];
  },

  // --- Interview Prep ---

  saveInterviewNote: (weekId, dayNumber, index, note) => {
    const key = `${weekId}_D${dayNumber}_I${index}`;
    const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.INTERVIEW_PROGRESS) || '{}');
    progress[key] = note;
    localStorage.setItem(STORAGE_KEYS.INTERVIEW_PROGRESS, JSON.stringify(progress));
  },

  getInterviewNote: (weekId, dayNumber, index) => {
    const key = `${weekId}_D${dayNumber}_I${index}`;
    const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.INTERVIEW_PROGRESS) || '{}');
    return progress[key] || '';
  },

  // --- Reset ---
  resetAllProgress: () => {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  }
};

export default ProgressManager;
