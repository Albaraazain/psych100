import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Menu, X } from 'lucide-react';

// Import all week data
import week1Data from './data/weeks/week1.json';
import week2Data from './data/weeks/week2.json';
import week3Data from './data/weeks/week3.json';
import week4Data from './data/weeks/week4.json';
import week5Data from './data/weeks/week5.json';
import week6Data from './data/weeks/week6.json';
import week7Data from './data/weeks/week7.json';
import week8Data from './data/weeks/week8.json';
import week9Data from './data/weeks/week9.json';
import week10Data from './data/weeks/week10.json';
import week11Data from './data/weeks/week11.json';

import Sidebar from './components/Sidebar';
import NoteViewer from './components/NoteViewer';
import QuizInterface from './components/QuizInterface';

// Build course structure from all week data
const allWeeks = [
  week1Data, week2Data, week3Data, week4Data, week5Data,
  week6Data, week7Data, week8Data, week9Data, week10Data,
  week11Data
];

const courseStructure = allWeeks.map(weekData => ({
  week: weekData.week,
  topics: weekData.topics.map(topic => ({
    title: topic.title,
    id: topic.id,
    data: topic
  }))
}));

function App() {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('notes'); 
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const scrollContainerRef = useRef(null);

  // Ensure sidebar is open on desktop when resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current, // Target the specific container
      content: scrollContainerRef.current.firstElementChild,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const activeTopic = courseStructure[activeWeekIndex]?.topics[activeTopicIndex]?.data;

  const handleTopicSelect = (wIdx, tIdx) => {
    if (!courseStructure[wIdx].topics[tIdx].data) return; // Ignore coming soon
    setActiveWeekIndex(wIdx);
    setActiveTopicIndex(tIdx);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    setActiveTab('notes');
    
    // Reset scroll position on topic change
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-canvas text-ink font-sans selection:bg-accent selection:text-white">
      <Sidebar 
        courseData={courseStructure}
        activeWeekIndex={activeWeekIndex}
        activeTopicIndex={activeTopicIndex}
        onSelect={handleTopicSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-full relative">
        {/* Minimal Header */}
        <header className="flex-shrink-0 px-6 lg:px-12 py-6 flex items-center justify-between z-30 sticky top-0 bg-canvas/90 backdrop-blur-md border-b border-black/5">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 -ml-2 hover:bg-black/5 rounded-lg text-ink lg:hidden">
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="hidden lg:block">
               <p className="text-[10px] font-bold text-subtle uppercase tracking-[0.2em]">
                 Current Module: <span className="text-ink ml-2">{courseStructure[activeWeekIndex]?.week}</span>
               </p>
            </div>
          </div>

          <div className="flex bg-surface rounded-full border border-black/10 p-1">
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-8 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === 'notes' ? 'bg-ink text-white shadow-md' : 'text-subtle hover:text-ink'
              }`}
            >
              Notes
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-8 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === 'quiz' ? 'bg-ink text-white shadow-md' : 'text-subtle hover:text-ink'
              }`}
            >
              Quiz
            </button>
          </div>
          
          <div className="w-10 hidden lg:block"></div> {/* Spacer for balance */}
        </header>

        <main 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide"
        >
           <div className="min-h-full pb-20">
             {activeTab === 'notes' ? (
               <NoteViewer topic={activeTopic} />
             ) : (
               <div className="max-w-4xl mx-auto py-12 px-6 lg:px-12">
                 <QuizInterface topic={activeTopic} key={activeTopic?.id || 'quiz'} />
               </div>
             )}
           </div>
        </main>
      </div>
    </div>
  );
}

export default App;