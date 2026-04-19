import React, { useState, useEffect, useMemo } from 'react';
import { Bell, Check, FileText, ChevronDown, ChevronUp, CheckCircle2, Circle, X, BookOpen, Briefcase, Award, GraduationCap } from 'lucide-react';
import { DUMMY_DATA } from './data';

function App() {
  const [curriculumData, setCurriculumData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using localhost instead of 127.0.0.1 to avoid common hostname resolution issues
    fetch('http://localhost:8000/api/curriculum/')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("✅ Backend curriculum loaded successfully.");
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
        console.warn("Backend offline, using local fallback data.", err);
        setCurriculumData(DUMMY_DATA);
        setLoading(false);
      });
  }, []);
  const [activeWeek, setActiveWeek] = useState('W1');
  const [expandedDay, setExpandedDay] = useState(1);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [remindersLoading, setRemindersLoading] = useState(false);

  const VAPID_PUBLIC_KEY = "BJhROTASgjO38jCsCYToHXNdrJiedDiVPypo21NZfqUC4fLbD_Xe5ev182PrAkBdkOsgvRwwghBY5BTonxG7CA0";

  const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
  };

  const enableReminders = async () => {
    if (remindersEnabled) return;
    setRemindersLoading(true);
    try {
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        alert('Push notifications are not supported in this browser.');
        return;
      }
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        alert('Please allow notifications to enable reminders.');
        return;
      }
      const reg = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });
      await fetch('http://127.0.0.1:8000/api/notifications/subscribe/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sub.toJSON())
      });
      setRemindersEnabled(true);
      alert('✅ Reminders enabled! You will get notified when it\'s time to study.');
    } catch (err) {
      console.error('Failed to enable reminders:', err);
      alert('Could not enable reminders. Make sure the backend is running.');
    } finally {
      setRemindersLoading(false);
    }
  };
  
  const [completedSessions, setCompletedSessions] = useState({});
  const [completedDays, setCompletedDays] = useState({});
  
  // Quiz State
  const [activeQuizBox, setActiveQuizBox] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Interview State
  const [activeInterviewBox, setActiveInterviewBox] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [expandedInterviewQ, setExpandedInterviewQ] = useState(null);

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

  const [answeredCurrent, setAnsweredCurrent] = useState(false);

  const openQuiz = (day) => {
    setActiveQuizBox(day);
    setQuizAnswers({});
    setShowQuizResult(false);
    setQuizScore(0);
    setCurrentQuestionIndex(0);
    setAnsweredCurrent(false);
  };

  const handleSelectAnswer = (q, optionIdx) => {
    if (answeredCurrent) return; // prevent changing answer
    const isCorrect = optionIdx === q.correct;
    setQuizAnswers(prev => ({ ...prev, [q.id]: optionIdx }));
    setAnsweredCurrent(true);
    // auto-advance after 1.2s
    setTimeout(() => {
      const total = activeQuizBox.questions.length;
      if (currentQuestionIndex < total - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setAnsweredCurrent(false);
      } else {
        // Last question: calculate score and show results
        setQuizAnswers(prev => {
          const finalAnswers = { ...prev, [q.id]: optionIdx };
          let score = 0;
          activeQuizBox.questions.forEach(ques => {
            if (finalAnswers[ques.id] === ques.correct) score++;
          });
          setQuizScore(score);
          setShowQuizResult(true);
          if (!completedDays[activeQuizBox.id]) toggleDayComplete(activeQuizBox.id);
          return finalAnswers;
        });
      }
    }, 1200);
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

  const openInterview = (day) => {
    setActiveInterviewBox(day);
    setSelectedLevel('All');
    setExpandedInterviewQ(null);
  };

  const filteredInterviewQuestions = useMemo(() => {
    if (!activeInterviewBox) return [];
    if (selectedLevel === 'All') return activeInterviewBox.interview_questions || [];
    return (activeInterviewBox.interview_questions || []).filter(q => q.level === selectedLevel);
  }, [activeInterviewBox, selectedLevel]);

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
            onClick={enableReminders}
            disabled={remindersEnabled || remindersLoading}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm rounded-md border transition-colors ${
              remindersEnabled ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400 cursor-default' 
              : remindersLoading ? 'bg-[#222] border-[#444] text-[#888] cursor-wait'
              : 'bg-transparent border-[#444] hover:bg-[#222] text-[#ccc]'
            }`}
          >
            <Bell size={16} className={remindersEnabled ? 'fill-yellow-500' : ''} />
            {remindersLoading ? 'Setting up...' : remindersEnabled ? 'Reminders Enabled ✓' : 'Enable Reminders'}
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
                      <button 
                        onClick={() => openInterview(day)}
                        className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-orange-500/10 border border-orange-500/50 rounded-lg text-orange-500 text-sm font-medium transition-colors"
                      >
                        <Briefcase size={16} /> Interview Prep
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
                  {/* Progress bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs text-[#666] mb-2">
                      <span>Question <strong className="text-white">{currentQuestionIndex + 1}</strong> of {activeQuizBox.questions?.length}</span>
                      <span>{Math.round(((currentQuestionIndex) / activeQuizBox.questions?.length) * 100)}% done</span>
                    </div>
                    <div className="w-full bg-[#222] rounded-full h-1.5">
                      <div 
                        className="bg-[#2979ff] h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${(currentQuestionIndex / activeQuizBox.questions?.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="min-h-[240px]">
                    {(() => {
                      const q = activeQuizBox.questions[currentQuestionIndex];
                      if (!q) return null;
                      const selectedIdx = quizAnswers[q.id];
                      return (
                        <div className="p-5 border border-[#333] rounded-lg bg-[#111]">
                          <p className="text-sm font-medium text-gray-200 mb-5 leading-relaxed">{q.text}</p>
                          <div className="flex flex-col gap-3">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedIdx === optIdx;
                              const isCorrect = q.correct === optIdx;
                              let cls = 'border-[#444] bg-[#222] hover:bg-[#333] hover:border-[#555] text-gray-300 cursor-pointer';
                              if (answeredCurrent) {
                                if (isCorrect) cls = 'border-[#00e676] bg-[#00e676]/20 text-[#00e676] font-semibold cursor-default';
                                else if (isSelected) cls = 'border-[#ff3d00] bg-[#ff3d00]/20 text-[#ff3d00] cursor-default';
                                else cls = 'border-[#333] bg-[#1a1a1a] text-[#555] cursor-default';
                              }
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q, optIdx)}
                                  disabled={answeredCurrent}
                                  className={`text-left px-4 py-3 text-sm border rounded-md transition-all duration-300 flex justify-between items-center ${cls}`}
                                >
                                  <span>{opt}</span>
                                  {answeredCurrent && isCorrect && <span className="text-xs font-bold">✓ Correct</span>}
                                  {answeredCurrent && isSelected && !isCorrect && <span className="text-xs font-bold">✗ Wrong</span>}
                                </button>
                              );
                            })}
                          </div>
                          {answeredCurrent && (
                            <p className="text-center text-xs text-[#666] mt-4 animate-pulse">Moving to next question...</p>
                          )}
                        </div>
                      );
                    })()}
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

        {/* Interview Prep Modal */}
        {activeInterviewBox && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl shadow-2xl max-w-2xl w-full p-0 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-6 border-b border-[#333] flex justify-between items-center bg-[#1e1e1e] rounded-t-2xl">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="text-orange-500" size={24} /> Interview Preparation
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{activeInterviewBox.topic}</p>
                </div>
                <button 
                  onClick={() => setActiveInterviewBox(null)} 
                  className="p-2 rounded-full hover:bg-[#333] text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* level Tabs */}
              <div className="flex border-b border-[#333] bg-[#1a1a1a]">
                {['All', 'Junior', 'Mid', 'Senior'].map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`flex-1 py-3 text-xs font-semibold transition-all relative ${
                      selectedLevel === level ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {level}
                    {selectedLevel === level && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Questions List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {filteredInterviewQuestions.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen size={48} className="mx-auto text-[#333] mb-4" />
                    <p className="text-gray-500">No interview questions found for this level yet.</p>
                  </div>
                ) : (
                  filteredInterviewQuestions.map((q, idx) => (
                    <div 
                      key={q.id || idx} 
                      className="border border-[#222] rounded-xl bg-[#111] overflow-hidden transition-all hover:border-[#333]"
                    >
                      <button 
                        onClick={() => setExpandedInterviewQ(expandedInterviewQ === q.id ? null : q.id)}
                        className="w-full text-left p-4 flex items-start justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                              q.level === 'Junior' ? 'bg-green-500/10 text-green-500' :
                              q.level === 'Mid' ? 'bg-blue-500/10 text-blue-500' :
                              'bg-purple-500/10 text-purple-500'
                            }`}>
                              {q.level}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider bg-orange-500/10 text-orange-500">
                              {q.type}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-gray-200 leading-snug">
                            {q.question}
                          </h4>
                        </div>
                        <div className={`mt-1 shrink-0 text-gray-600 transition-transform duration-200 ${expandedInterviewQ === q.id ? 'rotate-180' : ''}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>
                      
                      {expandedInterviewQ === q.id && (
                        <div className="p-4 pt-0 border-t border-[#222] animate-in slide-in-from-top-2 duration-200">
                          <div className="flex gap-3 mt-4">
                            <div className="mt-1 shrink-0">
                              <CheckCircle2 size={16} className="text-[#00e676]" />
                            </div>
                            <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-wrap">
                              {q.answer}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* footer */}
              <div className="p-6 border-t border-[#333] bg-[#1e1e1e] rounded-b-2xl">
                <button 
                  onClick={() => setActiveInterviewBox(null)}
                  className="w-full py-3 bg-[#333] hover:bg-[#444] text-white rounded-xl text-sm font-bold transition-all"
                >
                  Done Reviewing
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
