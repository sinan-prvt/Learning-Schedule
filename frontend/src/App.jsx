import React, { useState, useEffect, useMemo } from 'react';
import { Check, FileText, ChevronDown, ChevronUp, CheckCircle2, Circle, X, BookOpen, Briefcase } from 'lucide-react';
import { roadmapData } from './curriculumData';
import ProgressManager from './ProgressManager';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeWeek, setActiveWeek] = useState('W1');
  const [expandedDay, setExpandedDay] = useState(1);
  const [completedSessions, setCompletedSessions] = useState({});
  const [completedDays, setCompletedDays] = useState({});
  
  // Quiz State
  const [activeQuizBox, setActiveQuizBox] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);

  // Interview State
  const [activeInterviewBox, setActiveInterviewBox] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [expandedInterviewQ, setExpandedInterviewQ] = useState(null);

  useEffect(() => {
    // Initialize completion status from LocalStorage
    const initialSessions = {};
    const initialDays = {};
    
    roadmapData.forEach(week => {
      week.days.forEach(day => {
        const dayKey = `${week.id}_D${day.day_number}`;
        if (ProgressManager.isDayCompleted(week.id, day.day_number)) {
          initialDays[dayKey] = true;
        }
        day.sessions.forEach(s => {
          if (ProgressManager.isSessionCompleted(week.id, day.day_number, s.title)) {
            initialSessions[`${dayKey}_${s.title}`] = true;
          }
        });
      });
    });

    setCompletedSessions(initialSessions);
    setCompletedDays(initialDays);
    setLoading(false);
  }, []);

  const toggleSession = (weekId, dayNumber, sessionTitle) => {
    const key = `${weekId}_D${dayNumber}_${sessionTitle}`;
    const newState = ProgressManager.toggleSession(weekId, dayNumber, sessionTitle);
    setCompletedSessions(prev => ({ ...prev, [key]: newState }));
  };

  const toggleDayComplete = (weekId, dayNumber) => {
    const key = `${weekId}_D${dayNumber}`;
    const newState = ProgressManager.toggleDayStatus(weekId, dayNumber);
    setCompletedDays(prev => ({ ...prev, [key]: newState }));
  };

  const openQuiz = (weekId, day) => {
    setActiveQuizBox({ ...day, weekId });
    setQuizAnswers({});
    setShowQuizResult(false);
    setQuizScore(0);
    setCurrentQuestionIndex(0);
    setAnsweredCurrent(false);
  };

  const handleSelectAnswer = (qIdx, optionIdx) => {
    if (answeredCurrent) return;
    const q = activeQuizBox.quiz[qIdx];
    
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optionIdx }));
    setAnsweredCurrent(true);

    setTimeout(() => {
      const total = activeQuizBox.quiz.length;
      if (currentQuestionIndex < total - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setAnsweredCurrent(false);
      } else {
        // Calculate final score
        setQuizAnswers(prev => {
          const finalAnswers = { ...prev, [qIdx]: optionIdx };
          let score = 0;
          activeQuizBox.quiz.forEach((ques, idx) => {
            if (finalAnswers[idx] === ques.correct) score++;
          });
          setQuizScore(score);
          setShowQuizResult(true);
          
          if (score >= total / 2) {
            const dayKey = `${activeQuizBox.weekId}_D${activeQuizBox.day_number}`;
            if (!completedDays[dayKey]) {
              toggleDayComplete(activeQuizBox.weekId, activeQuizBox.day_number);
            }
          }
          ProgressManager.saveQuizScore(activeQuizBox.weekId, activeQuizBox.day_number, score, total);
          return finalAnswers;
        });
      }
    }, 1000);
  };

  const openInterview = (day) => {
    setActiveInterviewBox(day);
    setSelectedLevel('All');
    setExpandedInterviewQ(null);
  };

  const filteredInterviewQuestions = useMemo(() => {
    if (!activeInterviewBox) return [];
    if (selectedLevel === 'All') return activeInterviewBox.interview || [];
    return (activeInterviewBox.interview || []).filter(q => q.level === selectedLevel);
  }, [activeInterviewBox, selectedLevel]);

  const currentWeekData = useMemo(() => {
    return roadmapData.find(w => w.id === activeWeek);
  }, [activeWeek]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans p-8 flex flex-col items-center justify-center">
        <div className="animate-spin mb-4 text-3xl">⚙️</div>
        <div className="animate-pulse text-lg font-medium text-gray-400">
          Syncing High-Performance Offline Database...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans p-4 md:p-8 selection:bg-indigo-500/30">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black text-white tracking-tighter flex items-center justify-center md:justify-start gap-3">
                <span className="bg-gradient-to-tr from-indigo-500 to-purple-500 text-transparent bg-clip-text">ROADMAP</span>
                <span className="text-gray-600 font-thin">X</span>
              </h1>
              <p className="text-[#8c8c8c] text-sm mt-2 max-w-xl">
                 Modern Software Architecture Curriculum.
                 10 Weeks of Intensive Data.
                 <span className="text-amber-500/80 ml-1">Edge Compute Edition.</span>
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end bg-[#111] p-4 rounded-[32px] border border-[#222]">
                <div className="text-center px-4">
                    <div className="text-2xl font-black text-white">{Object.keys(completedDays).length}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Days</div>
                </div>
                <div className="w-px h-8 bg-[#222]"></div>
                <div className="text-center px-4">
                    <div className="text-2xl font-black text-white">{Object.keys(completedSessions).length}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Labs</div>
                </div>
            </div>
          </div>
        </div>

        {/* Week Selector */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {roadmapData.map((week) => {
            const isActive = activeWeek === week.id;
            return (
              <button 
                key={week.id}
                onClick={() => { setActiveWeek(week.id); setExpandedDay(null); }}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all duration-500 ${
                  isActive 
                  ? 'bg-white border-white text-black shadow-xl scale-105' 
                  : 'bg-[#111] border-[#222] text-[#555] hover:border-[#444] hover:text-gray-300'
                }`}
              >
                {week.id}: {week.title}
              </button>
            )
          })}
        </div>

        {/* Days List */}
        <div className="grid gap-4">
          {currentWeekData.days.map((day) => {
            const dayKey = `${activeWeek}_D${day.day_number}`;
            const isExpanded = expandedDay === day.day_number;
            const isDayComplete = completedDays[dayKey];
            
            return (
              <div 
                key={dayKey} 
                className={`group border rounded-[40px] transition-all duration-700 overflow-hidden ${
                  isExpanded ? 'bg-[#111] border-indigo-500/30' : 'bg-[#0a0a0a] border-[#1a1a1a] hover:border-[#333]'
                }`}
              >
                <div 
                  className="flex items-center justify-between p-8 cursor-pointer select-none"
                  onClick={() => setExpandedDay(isExpanded ? null : day.day_number)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-[20px] text-sm font-black transition-all duration-700 ${
                      isDayComplete ? 'bg-[#00e676] text-black rotate-[360deg]' : 'bg-[#151515] text-gray-600'
                    }`}>
                      {isDayComplete ? <Check size={24} strokeWidth={4} /> : day.day_number}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] font-black tracking-widest uppercase ${isDayComplete ? 'text-[#00e676]/60' : 'text-indigo-500'}`}>
                          {day.category}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-[#333]"></div>
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{day.duration}</span>
                      </div>
                      <h3 className={`text-xl font-black uppercase tracking-tighter transition-colors ${isDayComplete ? 'text-gray-500' : 'text-white'}`}>
                        {day.topic}
                      </h3>
                    </div>
                  </div>
                  <div className={`p-3 rounded-2xl bg-[#151515] text-gray-500 transition-all duration-500 ${isExpanded ? 'rotate-180 text-white bg-indigo-500/20' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-8 pt-0 border-t border-[#1a1a1a] animate-in slide-in-from-top-10 duration-700">
                    <div className="space-y-2 mt-8">
                      {day.sessions.map((session, sIdx) => {
                        const sKey = `${dayKey}_${session.title}`;
                        const isCompleted = completedSessions[sKey] || false;
                        return (
                          <div 
                            key={sIdx} 
                            onClick={() => toggleSession(activeWeek, day.day_number, session.title)}
                            className={`group/item flex items-center justify-between p-6 rounded-[32px] cursor-pointer transition-all duration-300 ${
                                isCompleted ? 'bg-[#00e676]/5 opacity-50' : 'hover:bg-[#1a1a1a] border border-transparent hover:border-[#222]'
                            }`}
                          >
                            <div className="flex items-start gap-6">
                              <div className={`mt-2 w-2 h-2 rounded-full shrink-0 transition-all ${isCompleted ? 'bg-[#00e676]' : 'bg-[#333]'}`}></div>
                              <div>
                                <div className="text-[10px] font-black text-gray-600 mb-2 uppercase tracking-widest">{session.time}</div>
                                <h4 className={`text-base font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-100'}`}>
                                  {session.title}
                                </h4>
                                <p className={`text-xs mt-2 leading-relaxed max-w-xl ${isCompleted ? 'text-gray-600' : 'text-gray-500'}`}>
                                  {session.description}
                                </p>
                              </div>
                            </div>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                                isCompleted ? 'bg-[#00e676]/20 text-[#00e676]' : 'bg-[#151515] text-gray-700'
                            }`}>
                                {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                            </div>
                          </div>
                      )})}
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-[#1a1a1a]">
                      <button 
                        onClick={() => toggleDayComplete(activeWeek, day.day_number)}
                        className={`flex items-center justify-center gap-3 py-5 rounded-[24px] text-xs font-black uppercase tracking-widest transition-all ${
                          isDayComplete 
                            ? 'bg-[#00e676] text-black' 
                            : 'bg-[#111] border border-[#222] text-[#555] hover:text-white'
                        }`}
                      >
                        <Check size={20} strokeWidth={4} /> {isDayComplete ? 'Finished' : 'Complete Day'}
                      </button>
                      <button 
                        onClick={() => openQuiz(activeWeek, day)}
                        className="flex items-center justify-center gap-3 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[24px] text-xs font-black uppercase tracking-widest transition-all"
                      >
                        <FileText size={20} /> Quiz ({day.quiz?.length})
                      </button>
                      <button 
                        onClick={() => openInterview(day)}
                        className="flex items-center justify-center gap-3 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-[24px] text-xs font-black uppercase tracking-widest transition-all"
                      >
                        <Briefcase size={20} /> Prep ({day.interview?.length})
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Overlay Logic (Simplified for briefness) */}
        {activeQuizBox && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 backdrop-blur-2xl">
            <div className="bg-[#0a0a0a] border border-[#222] rounded-[48px] shadow-2xl max-w-2xl w-full p-10 animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{activeQuizBox.topic}</h3>
                <button onClick={() => setActiveQuizBox(null)} className="p-3 bg-[#111] rounded-2xl text-gray-500 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              {!showQuizResult ? (
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="mb-10">
                    <div className="flex justify-between text-[10px] font-black text-gray-600 uppercase tracking-widest mb-4">
                      <span>Question <span className="text-white">{currentQuestionIndex + 1}</span> of {activeQuizBox.quiz.length}</span>
                    </div>
                    <div className="w-full bg-[#111] rounded-full h-1">
                      <div className="bg-indigo-500 h-full rounded-full transition-all duration-700" style={{ width: `${((currentQuestionIndex+1)/activeQuizBox.quiz.length)*100}%` }} />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="animate-in slide-in-from-right-10 duration-500">
                          <p className="text-2xl font-bold text-gray-100 mb-10 leading-tight">{activeQuizBox.quiz[currentQuestionIndex].text}</p>
                          <div className="grid gap-3">
                            {activeQuizBox.quiz[currentQuestionIndex].options.map((opt, optIdx) => {
                              const selectedIdx = quizAnswers[currentQuestionIndex];
                              const isCorrect = activeQuizBox.quiz[currentQuestionIndex].correct === optIdx;
                              let cls = 'bg-[#0f0f0f] border-[#222] hover:border-[#444] text-[#888]';
                              if (answeredCurrent) {
                                if (isCorrect) cls = 'bg-[#00e676]/10 border-[#00e676] text-[#00e676]';
                                else if (selectedIdx === optIdx) cls = 'bg-red-500/10 border-red-500 text-red-500 opacity-50';
                                else cls = 'opacity-20 border-[#111]';
                              }
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(currentQuestionIndex, optIdx)}
                                  disabled={answeredCurrent}
                                  className={`text-left px-8 py-6 rounded-[28px] border text-sm font-bold transition-all duration-300 flex justify-between items-center ${cls}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-center">
                    <div className="py-12 bg-[#111] rounded-[40px] border border-[#222] mb-10">
                        <div className="text-7xl mb-6">🎯</div>
                        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-2">Score</h2>
                        <div className="text-2xl font-black text-indigo-500">{quizScore} / {activeQuizBox.quiz.length}</div>
                    </div>
                    <button 
                        onClick={() => setActiveQuizBox(null)}
                        className="w-full py-6 bg-white text-black rounded-[32px] font-black uppercase tracking-widest text-xs"
                    >
                        Great Job!
                    </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Interview Modal (Simplified) */}
        {activeInterviewBox && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 backdrop-blur-2xl">
            <div className="bg-[#0a0a0a] border border-[#222] rounded-[48px] shadow-2xl max-w-4xl w-full p-0 animate-in fade-in zoom-in-95 duration-500 max-h-[90vh] flex flex-col overflow-hidden">
               <div className="p-10 pb-6 flex justify-between items-start">
                    <div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{activeInterviewBox.topic}</h3>
                        <div className="flex gap-2 mt-6">
                            {['All', 'Junior', 'Mid', 'Senior'].map(lvl => (
                                <button key={lvl} onClick={() => setSelectedLevel(lvl)} className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedLevel === lvl ? 'bg-amber-500 text-black' : 'bg-[#111] text-[#555]'}`}>
                                    {lvl}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => setActiveInterviewBox(null)} className="p-3 bg-[#111] rounded-2xl text-gray-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
               </div>
               <div className="flex-1 overflow-y-auto p-10 pt-4 space-y-4 custom-scrollbar">
                    {filteredInterviewQuestions.map((q, idx) => (
                        <div key={idx} className={`border rounded-[40px] transition-all duration-500 ${expandedInterviewQ === idx ? 'bg-[#111] border-amber-500/20' : 'bg-[#0f0f0f] border-transparent'}`}>
                             <button onClick={() => setExpandedInterviewQ(expandedInterviewQ === idx ? null : idx)} className="w-full text-left p-8">
                                <div className="text-[9px] font-black text-amber-500/50 uppercase tracking-widest mb-3">{q.level} • {q.type}</div>
                                <h4 className="text-lg font-bold text-gray-100 uppercase tracking-tighter">{q.q}</h4>
                             </button>
                             {expandedInterviewQ === idx && (
                                <div className="p-8 pt-0 animate-in slide-in-from-top-4 duration-500">
                                    <div className="p-8 bg-[#0a0a0a] rounded-[32px] border border-[#222] text-sm text-gray-400 font-medium leading-relaxed">
                                        {q.a}
                                    </div>
                                </div>
                             )}
                        </div>
                    ))}
               </div>
               <div className="p-10 border-t border-[#111]">
                    <button onClick={() => setActiveInterviewBox(null)} className="w-full py-6 bg-[#111] text-[#666] hover:text-white rounded-[32px] font-black uppercase tracking-widest text-xs transition-all">Done Reviewed</button>
               </div>
            </div>
          </div>
        )}

      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
      `}</style>
    </div>
  );
}

export default App;
