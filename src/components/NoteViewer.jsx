import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AlertCircle, Quote, CheckCircle2, Info, ArrowRight } from 'lucide-react';

const IconMap = {
  AlertCircle: AlertCircle,
  CheckCircle2: CheckCircle2,
  Info: Info,
};

const NoteViewer = ({ topic }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!topic) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo('.stagger-item', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          delay: 0.1
        }
      );

      // Line animation for headers
      gsap.fromTo('.header-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'expo.out', delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [topic]);

  if (!topic) return (
    <div className="h-full flex flex-col items-center justify-center text-subtle py-20">
      <p className="font-serif italic text-2xl">Select a chapter to begin</p>
    </div>
  );

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto py-20 px-6 lg:px-12">
      {/* Swiss Style Header */}
      <header className="mb-24 stagger-item">
        <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-accent"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Clinical Psychology</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-ink leading-[0.9] mb-8 -ml-1">
          {topic.title}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:items-start border-t border-black/10 pt-8 header-line origin-left">
            <div className="flex-1">
                <p className="text-xl md:text-2xl text-subtle font-serif italic leading-relaxed">
                {topic.subtitle || topic.summary}
                </p>
            </div>
            {/* Metadata or Stats could go here */}
             <div className="text-xs font-mono text-subtle shrink-0">
                CH. {topic.id || '01'}
            </div>
        </div>
      </header>

      {/* Key Insights - Brutalist Card */}
      {topic.keyTakeaways && (
        <div className="mb-24 stagger-item relative group">
          <div className="absolute inset-0 bg-ink translate-x-2 translate-y-2 rounded-xl" />
          <div className="relative bg-surface p-8 md:p-12 rounded-xl border-2 border-ink">
            <div className="flex items-baseline justify-between mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-ink">Key Insights</h3>
                <span className="text-accent font-serif italic">Read carefully</span>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {topic.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-ink font-medium leading-relaxed">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <div className="space-y-20">
        {topic.content?.map((block, idx) => {
          switch (block.type) {
            case 'heading':
              return (
                <div key={idx} className="stagger-item group">
                   <h2 className="text-4xl font-serif font-bold text-ink mb-6 group-hover:text-accent transition-colors duration-300">
                    {block.text}
                  </h2>
                  <div className="w-full h-px bg-black/10 group-hover:bg-accent/30 transition-colors duration-300" />
                </div>
              );
            
            case 'paragraph':
              return (
                <p key={idx} className="stagger-item text-xl md:text-2xl leading-relaxed text-ink/80 font-sans font-light max-w-2xl">
                  {block.text}
                </p>
              );

            case 'list':
              return (
                <div key={idx} className="stagger-item pl-4 md:pl-0">
                  {block.title && <h4 className="text-sm font-bold text-subtle uppercase tracking-widest mb-6">{block.title}</h4>}
                  <ul className="space-y-4 border-l-2 border-black/5 pl-8 hover:border-accent transition-colors duration-300">
                    {block.items.map((item, i) => (
                      <li key={i} className="text-lg text-ink/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );

            case 'callout': {
              const Icon = IconMap[block.icon] || Info;
              return (
                <div key={idx} className="stagger-item bg-canvas p-8 rounded-none border-l-4 border-accent">
                  <div className="flex gap-6">
                    <Icon className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-ink mb-2 uppercase tracking-wide text-sm">{block.title}</h4>
                        <p className="text-ink/70 leading-relaxed text-lg">{block.text}</p>
                    </div>
                  </div>
                </div>
              );
            }

            case 'quote':
              return (
                <figure key={idx} className="stagger-item my-16">
                  <blockquote className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight text-center relative z-10">
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] text-black/5 font-sans leading-none -z-10">“</span>
                    {block.text}
                    <span className="text-accent">”</span>
                  </blockquote>
                  {block.author && (
                    <figcaption className="text-center mt-6 text-sm font-bold text-subtle uppercase tracking-widest">
                      — {block.author}
                    </figcaption>
                  )}
                </figure>
              );

            default:
              return null;
          }
        })}
      </div>

      <footer className="mt-40 pt-16 border-t border-black/5 flex justify-between items-end stagger-item">
        <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-subtle">Status</span>
            <span className="text-xl font-serif italic text-ink">Chapter Complete</span>
        </div>
        <ArrowRight className="w-8 h-8 text-accent -rotate-45" />
      </footer>
    </div>
  );
};

export default NoteViewer;