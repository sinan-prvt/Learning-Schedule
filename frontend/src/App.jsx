import React, { useState, useEffect } from 'react';
import { Bell, Check, FileText, ChevronDown, ChevronUp, CheckCircle2, Circle, X } from 'lucide-react';

function App() {
  const [curriculumData, setCurriculumData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/curriculum/')
      .then(res => res.json())
      .then(data => {
        setCurriculumData(data);
        
        const initialCompletedDays = {};
        const initialCompletedSessions = {};
        
        data.days.forEach(day => {
            if (day.is_completed) initialCompletedDays[day.id] = true;
            day.sessions.forEach(s => {
                if (s.is_completed) initialCompletedSessions[s.id] = true;
            });
        });
        
        setCompletedDays(initialCompletedDays);
        setCompletedSessions(initialCompletedSessions);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch curriculum:", err);
        setLoading(false);
      });
  }, []);
  const [activeWeek, setActiveWeek] = useState('W1');
  const [expandedDay, setExpandedDay] = useState(1);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  
  const [completedSessions, setCompletedSessions] = useState({});
  const [completedDays, setCompletedDays] = useState({});
  
  // Quiz State
  const [activeQuizBox, setActiveQuizBox] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const toggleSession = (sessionId) => {
    setCompletedSessions(prev => ({ ...prev, [sessionId]: !prev[sessionId] }));
    fetch(`http://127.0.0.1:8000/api/toggle/session/${sessionId}/`, { method: 'PATCH' })
      .catch(err => console.error("Failed to toggle session:", err));
  };

  const toggleDayComplete = (dayId) => {
    setCompletedDays(prev => ({ ...prev, [dayId]: !prev[dayId] }));
    fetch(`http://127.0.0.1:8000/api/toggle/day/${dayId}/`, { method: 'PATCH' })
      .catch(err => console.error("Failed to toggle day:", err));
  };

  const openQuiz = (day) => {
    setActiveQuizBox(day);
    setQuizAnswers({});
    setShowQuizResult(false);
    setQuizScore(0);
    setCurrentQuestionIndex(0);
  };

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const submitQuiz = () => {
    let score = 0;
    activeQuizBox.questions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        score++;
      }
    });
    setQuizScore(score);
    setShowQuizResult(true);
    if (!completedDays[activeQuizBox.id]) toggleDayComplete(activeQuizBox.id);
  };

  const filteredDays = curriculumData ? curriculumData.days.filter(day => day.weekId === activeWeek) : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] text-gray-200 font-sans p-8 flex items-center justify-center">
        <div className="animate-pulse text-lg font-medium text-gray-400 flex items-center gap-2">
          <span>📚</span> Loading 10-Week Curriculum Database...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 font-sans p-4 md:p-8 selection:bg-indigo-500/30">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>📚</span> 10-Week Learning Roadmap
          </h1>
          <p className="text-[#8c8c8c] text-sm mt-1">
            8 hrs/day • 6 days/week • Intermediate • Python → Django → DRF → ORM → FastAPI → AWS → React → Redux
          </p>
        </div>

        {/* Reminders Button */}
        <div className="mb-6">
          <button 
            onClick={() => setRemindersEnabled(!remindersEnabled)}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded-md border transition-colors ${
              remindersEnabled ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400' : 'bg-transparent border-[#444] hover:bg-[#222] text-[#ccc]'
            }`}
          >
            <Bell size={16} className={remindersEnabled ? 'fill-yellow-500' : ''} />
            {remindersEnabled ? 'Reminders Enabled' : 'Enable Reminders'}
          </button>
        </div>

        {/* Week Pill Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {curriculumData.weeks.map((week) => {
            const isActive = activeWeek === week.id;
            return (
              <button 
                key={week.id}
                onClick={() => { setActiveWeek(week.id); setExpandedDay(null); }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  isActive ? 'bg-[#222] border-[#555] text-white' : 'bg-transparent border-[#333] text-[#888] hover:bg-[#1a1a1a] hover:border-[#444]'
                }`}
              >
                <span className={isActive ? 'text-white' : ''}>{week.id}</span> • {week.title}
              </button>
            )
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredDays.length === 0 && <p className="text-gray-500 italic p-4">No schedule defined for this week yet.</p>}

          {filteredDays.map((day) => {
            const isExpanded = expandedDay === day.id;
            const isDayComplete = completedDays[day.id];
            
            return (
              <div 
                key={day.id} 
                className={`border rounded-xl transition-all duration-200 ${
                  isExpanded ? 'bg-[#151515] border-[#444]' : 'bg-[#151515] border-[#222] hover:border-[#333]'
                }`}
              >
                {/* Accordion Header */}
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer select-none"
                  onClick={() => setExpandedDay(isExpanded ? null : day.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                      isDayComplete ? 'bg-[#00e676] text-black' : 'bg-[#222] text-[#888]'
                    }`}>
                      {isDayComplete ? <Check size={14} strokeWidth={3} /> : day.day}
                    </span>
                    <span className={`font-semibold ${isDayComplete ? 'text-[#00e676]/90' : 'text-white'}`}>Day {day.day}</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#312e81]/40 border border-[#312e81] text-[#a5b4fc] text-xs font-semibold hidden sm:inline-block">
                      {day.category}
                    </span>
                    <span className={`font-medium ${isDayComplete ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                      {day.topic}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[#777] text-xs">
                    <span className="hidden md:inline-block">{day.sessionsCount} sessions • {day.duration}</span>
                    {isExpanded ? <ChevronUp size={16} className="text-[#555]" /> : <ChevronDown size={16} className="text-[#555]" />}
                  </div>
                </div>

                {/* Accordion Content */}
                {isExpanded && day.sessions?.length > 0 && (
                  <div className="border-t border-[#222] p-4 pl-14">
                    <div className="relative border-l-2 border-[#2a2a2a] pl-6 pb-2 space-y-6">
                      {day.sessions.map((session) => {
                        const isCompleted = completedSessions[session.id] || false;
                        return (
                          <div key={session.id} className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#222] pb-4 last:border-0 last:pb-0">
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#151515] transition-colors ${isCompleted ? 'bg-[#00e676]' : 'bg-[#444]'}`}></div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 flex-1 pr-4" onClick={() => toggleSession(session.id)}>
                              <span className={`text-xs font-medium w-20 shrink-0 pt-0.5 cursor-pointer ${isCompleted ? 'text-[#00e676]/70' : 'text-[#777]'}`}>
                                {session.time}
                              </span>
                              <div className="cursor-pointer">
                                <h4 className={`text-sm font-semibold ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                                  {session.title}
                                </h4>
                                <p className={`text-xs mt-1 ${isCompleted ? 'text-[#555]' : 'text-[#666]'}`}>
                                  {session.desc}
                                </p>
                              </div>
                            </div>

                            <button 
                              onClick={() => toggleSession(session.id)}
                              className={`shrink-0 self-start mt-2 sm:mt-0 flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                                isCompleted ? 'text-[#00e676] bg-[#00e676]/10 hover:bg-[#00e676]/20' : 'text-[#555] hover:text-white hover:bg-[#222]'
                              }`}
                            >
                              {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                            </button>
                          </div>
                      )})}
                    </div>

                    {/* Action Buttons */}
                    <div className="ml-6 mt-8 flex flex-wrap gap-3">
                      <button 
                        onClick={() => toggleDayComplete(day.id)}
                        className={`flex items-center gap-2 px-4 py-2 bg-transparent border rounded-lg text-sm font-medium transition-colors ${
                          isDayComplete 
                            ? 'bg-[#00e676]/10 border-[#00e676]/50 text-[#00e676]' 
                            : 'hover:bg-[#444] border-[#444] text-gray-300'
                        }`}
                      >
                        <Check size={16} /> {isDayComplete ? 'Day Completed!' : 'Mark Day Complete'}
                      </button>
                      <button 
                        onClick={() => openQuiz(day)}
                        className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-[#2979ff]/10 border border-[#2979ff]/50 rounded-lg text-[#2979ff] text-sm font-medium transition-colors"
                      >
                        <FileText size={16} /> Take Quiz
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Real Quiz Modal Overlay */}
        {activeQuizBox && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Quiz: {activeQuizBox.topic}</h3>
                <button onClick={() => setActiveQuizBox(null)} className="text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              
              {!showQuizResult ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-400 text-sm">
                      Question <strong className="text-white">{currentQuestionIndex + 1}</strong> of {activeQuizBox.questions?.length}
                    </p>
                    <div className="text-xs text-[#555]">
                      {Math.round(((currentQuestionIndex + 1) / activeQuizBox.questions?.length) * 100)}% Complete
                    </div>
                  </div>
                  
                  <div className="space-y-6 mb-8 min-h-[220px]">
                    {(() => {
                      const q = activeQuizBox.questions[currentQuestionIndex];
                      if (!q) return null;
                      return (
                        <div key={q.id} className="p-5 border border-[#333] rounded-lg bg-[#111]">
                          <p className="text-sm font-medium text-gray-200 mb-4 leading-relaxed">{q.text}</p>
                          <div className="flex flex-col gap-3">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = quizAnswers[q.id] === optIdx;
                              return (
                                <button 
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)} 
                                  className={`text-left px-4 py-3 text-sm border rounded-md transition-colors ${
                                    isSelected 
                                      ? 'border-[#2979ff] bg-[#2979ff]/20 text-[#2979ff]' 
                                      : 'border-[#444] bg-[#222] hover:bg-[#333] hover:border-[#555] text-gray-300'
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )
                    })()}
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2.5 bg-[#222] hover:bg-[#333] border border-[#444] rounded-lg text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    {currentQuestionIndex < (activeQuizBox.questions?.length || 1) - 1 ? (
                      <button 
                        onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                        className={`flex-1 py-2.5 rounded-lg text-white font-medium transition-colors ${
                          quizAnswers[activeQuizBox.questions[currentQuestionIndex].id] !== undefined 
                            ? 'bg-[#2979ff] hover:bg-blue-600' 
                            : 'bg-[#444] text-[#888] cursor-not-allowed'
                        }`}
                        disabled={quizAnswers[activeQuizBox.questions[currentQuestionIndex].id] === undefined}
                      >
                        Next Question
                      </button>
                    ) : (
                      <button 
                        onClick={submitQuiz}
                        className={`flex-1 py-2.5 rounded-lg text-black font-medium transition-colors ${
                          Object.keys(quizAnswers).length === activeQuizBox.questions?.length
                            ? 'bg-[#00e676] hover:bg-[#00c853]'
                            : 'bg-[#444] text-[#888] cursor-not-allowed'
                        }`}
                        disabled={Object.keys(quizAnswers).length !== activeQuizBox.questions?.length}
                      >
                         Submit Answers
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="py-2 space-y-6">
                  <div className="text-center mb-6 pt-4 border-b border-[#333] pb-6 sticky top-0 bg-[#1a1a1a] z-10 shadow-sm">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00e676]/20 text-[#00e676] mb-3">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Quiz Complete!</h3>
                    <p className="text-gray-300">
                      You scored <strong className="text-[#00e676]">{quizScore}</strong> out of {activeQuizBox.questions?.length}!
                    </p>
                  </div>

                  <div className="space-y-6">
                    {activeQuizBox.questions?.map((q, qIndex) => {
                      const selectedOpt = quizAnswers[q.id];
                      return (
                        <div key={q.id} className="p-4 border border-[#333] rounded-lg bg-[#111]">
                          <p className="text-sm font-medium text-gray-200 mb-3">{qIndex + 1}. {q.text}</p>
                          <div className="flex flex-col gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isCorrect = q.correct === optIdx;
                              const isSelected = selectedOpt === optIdx;
                              let style = 'border-[#444] bg-[#222] text-gray-400';
                              if (isCorrect) {
                                style = 'border-[#00e676] bg-[#00e676]/20 text-[#00e676] font-medium';
                              } else if (isSelected && !isCorrect) {
                                style = 'border-[#ff3d00] bg-[#ff3d00]/20 text-[#ff3d00]';
                              }
                              return (
                                <div key={optIdx} className={`px-3 py-2 text-xs border rounded-md ${style}`}>
                                  <span className="flex justify-between w-full">
                                    <span>{opt}</span>
                                    <span>
                                      {isCorrect && isSelected && '✓ Correct'}
                                      {isSelected && !isCorrect && '✗ Your Pick'}
                                      {isCorrect && !isSelected && '✓ Correct Answer'}
                                    </span>
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <button 
                    onClick={() => setActiveQuizBox(null)}
                    className="w-full mt-6 py-3 bg-[#222] hover:bg-[#333] border border-[#444] rounded-lg text-white font-medium sticky bottom-0"
                  >
                    Close & Return to Roadmap
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
