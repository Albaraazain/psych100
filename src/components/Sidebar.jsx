import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const Sidebar = ({ courseData, activeWeekIndex, activeTopicIndex, onSelect, isOpen, onClose }) => {
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Track mobile/desktop state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only animate on mobile
  useEffect(() => {
    if (!sidebarRef.current) return;

    if (isMobile) {
      if (isOpen) {
        gsap.to(sidebarRef.current, { x: 0, duration: 0.6, ease: 'expo.out' });
      } else {
        gsap.to(sidebarRef.current, { x: '-100%', duration: 0.6, ease: 'expo.in' });
      }
    } else {
      // On desktop, ensure sidebar is always visible (reset any mobile animation)
      gsap.set(sidebarRef.current, { x: 0 });
    }
  }, [isOpen, isMobile]);

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-ink/10 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside
        ref={sidebarRef}
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-canvas border-r border-black/5 overflow-hidden flex flex-col font-sans ${isMobile ? 'transform -translate-x-full' : ''}`}
        style={{ willChange: 'transform' }}
      >
        <div className="p-8 pb-8">
          <h1 className="text-3xl font-serif font-bold text-ink tracking-tight leading-none">
            Study<br/><span className="text-accent">Master</span>.
          </h1>
          <p className="text-[10px] font-bold text-subtle uppercase tracking-[0.2em] mt-4 ml-1">GPC 415 • Fall 2026</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-10 scrollbar-hide">
          {courseData.map((week, wIdx) => (
            <div key={wIdx} className="group">
              <div className="flex items-center gap-3 mb-4 pl-2">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-1 rounded">
                  {week.week}
                </span>
                <div className="h-px bg-black/5 flex-1" />
              </div>
              
              <div className="space-y-1 pl-2 border-l border-black/5 ml-2">
                {week.topics.map((topic, tIdx) => {
                  const isActive = wIdx === activeWeekIndex && tIdx === activeTopicIndex;
                  return (
                    <button
                      key={tIdx}
                      onClick={() => onSelect(wIdx, tIdx)}
                      className={`w-full text-left px-4 py-2 text-sm transition-all duration-300 relative group/item ${
                        isActive 
                          ? 'text-ink font-semibold translate-x-1' 
                          : 'text-subtle hover:text-ink hover:translate-x-1'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{topic.title}</span>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs font-mono text-subtle opacity-60">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERATIONAL</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;