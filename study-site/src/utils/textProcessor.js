export const processContent = (rawText) => {
  if (!rawText) return { title: '', sections: [] };

  // Remove common artifacts
  let cleanText = rawText
    .replace(/GPC 415.*Fall.*Selin Ayas/gi, '') // Remove header repetition
    .replace(/Page \d+ of \d+/g, '') // Remove page numbers
    .replace(/[[\]]/g, '') // Remove brackets
    .trim();

  const lines = cleanText.split('\n').filter(line => line.trim().length > 0);
  const sections = [];
  let currentSection = { title: 'Introduction', content: [] };

  lines.forEach((line) => {
    const trimmed = line.trim();
    
    // Heuristic for headers: Short, often ends with no punctuation or colon, or all caps
    const isHeader = (trimmed.length < 50 && !/[.!?]$/.test(trimmed)) || /^[A-Z\s&]+$/.test(trimmed);
    
    // Heuristic for bullets: Starts with 'u' followed by Uppercase or specific chars, or standard bullets
    const isBullet = /^u(?=[A-Z])/.test(trimmed) || /^[•\-*]/.test(trimmed);

    if (isHeader && !isBullet) {
      if (currentSection.content.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { title: trimmed, content: [] };
    } else {
      let content = trimmed;
      // Fix the 'u' bullet point artifact
      if (content.startsWith('u')) {
        content = content.substring(1); // Remove 'u'
        currentSection.content.push({ type: 'bullet', text: content });
      } else {
        currentSection.content.push({ type: 'paragraph', text: content });
      }
    }
  });

  if (currentSection.content.length > 0) {
    sections.push(currentSection);
  }

  return sections;
};
