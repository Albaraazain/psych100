# Week 3-4 Quick Reference Summary

## WEEK 3: LEARNING (Oct 13-19)
**File:** `PSYC100 GENERAL PSYCHOLOGY LEARNING.txt`

### Topic ID: `learning-psychology`
### Title: "Learning"
### Subtitle: "Classical Conditioning, Operant Conditioning, and Cognitive Approaches"

### Key Takeaways (3-4 bullet points):
1. Learning is a relatively permanent change in behavior through experience, excluding maturation, fatigue, and temporary states
2. Classical conditioning (Pavlov) involves involuntary learning through association of stimuli (UCS→UCR, CS→CR)
3. Operant conditioning (Thorndike, Skinner) involves voluntary learning shaped by consequences - reinforcement increases behavior, punishment decreases it
4. Cognitive approaches (Tolman, Kohler) demonstrate learning can occur without immediate reinforcement through insight and cognitive maps

### Major Sections for Content Array:
1. **What is Learning?** - Definition, exclusions (maturation/fatigue/temporary states)
2. **Classical Conditioning** - Pavlov's experiments, UCS/UCR/CS/CR, generalization/discrimination/extinction/spontaneous recovery
3. **Applications of Classical Conditioning** - Little Albert (conditioning fear), Little Peter (systematic desensitization), exposure therapy
4. **Operant Conditioning** - Thorndike's Law of Effect, Skinner's experiments, 4 types (positive/negative reinforcement/punishment)
5. **Classical vs Operant Comparison** - Voluntary vs involuntary, timing of reinforcement
6. **Preparedness** - Seligman's concept, evolutionary-relevant fears (snakes/heights/dark)
7. **Cognitive Approaches** - Tolman's latent learning, Kohler's insight learning, Bandura's social learning
8. **Learned Helplessness** - Definition, connections to CC/OC/cognitive learning

### Key Studies to Reference:
- Watson & Rayner (1920) - Little Albert
- Jones (1924) - Little Peter
- Thorndike - Puzzle boxes
- Skinner - Operant conditioning chamber
- Seligman (1970) - Preparedness
- Mineka (1980s) - Monkey snake fears
- Ohman et al. (1975) - Human conditioning to evolutionary stimuli
- Tolman (1930s) - Latent learning
- Kohler (1925) - Insight learning in chimps
- Bandura (1977) - Social learning, Bobo doll

### Sample Questions (15+ needed):
1. What is the definition of learning according to Ormrod (2016)?
2. Which of the following is NOT an example of learning? (maturation/learning to ride bike/fear conditioning/reading)
3. In Pavlov's experiment, what was the unconditioned stimulus (UCS)?
4. What is the conditioned response (CR) in classical conditioning?
5. What does "extinction" mean in classical conditioning?
6. What was the purpose of the Little Albert experiment?
7. Who demonstrated that phobias could be reversed through systematic desensitization?
8. What is Thorndike's Law of Effect?
9. Which type of consequence increases behavior? (reinforcement/punishment)
10. What is positive reinforcement? (Give example)
11. What is negative punishment? (Give example)
12. How does classical conditioning differ from operant conditioning?
13. What is preparedness according to Seligman?
14. What did Tolman demonstrate with his maze experiments?
15. What is latent learning?
16. What is insight learning according to Kohler?
17. What is learned helplessness?

---

## WEEK 4: MOTIVATION (Oct 20-26)
**File:** `PSYC100 GENERAL PSYCHOLOGY MOTIVATION.txt`

### Topic ID: `motivation-psychology`
### Title: "Motivation"
### Subtitle: "Theories of Motivation: Drive, Instinct, Arousal, Expectancy-Value, and Achievement"

### Key Takeaways (3-4 bullet points):
1. Motivation involves processes of initiation, direction, and energization of behavior, with three categories: survival/physiological, competence/cognitive, and social motives
2. Drive theory (Hull) explains behavior through homeostasis disruptions creating internal tensions, while instinct theory focuses on automatic, unlearned patterns
3. Arousal theory suggests people maintain optimal arousal levels, while expectancy-value theory proposes Motivation = Expectancy × Value
4. Intrinsic motivation (performing for enjoyment) differs from extrinsic motivation (performing for external rewards), and achievement motivation involves both success orientation and fear of failure

### Major Sections for Content Array:
1. **What is Motivation?** - Definitions (Geen, Miller, Rubin & McNeil), three categories of motives
2. **Drive Theory** - Hull's homeostasis concept, examples (hunger/thirst), evaluation/limitations
3. **Instinct Theory** - Definition, examples (baby crying, coughing, blinking), evolutionary perspective (Buss), limitations
4. **Arousal Theory** - Optimal arousal concept, examples (high/low arousal activities), learning component
5. **Expectancy-Value Theory** - Formula (Motivation = Expectancy × Value), college student example, limitations
6. **Intrinsic vs Extrinsic Motivation** - Definitions, creative writing course examples, evaluation
7. **Achievement Motivation** - McClelland & Atkinson's concepts, TAT measurement, limitations

### Key Theorists to Reference:
- Clark Hull (1943) - Drive theory
- Buss (1999) - Evolutionary perspective
- Brehm & Self (1989) - Expectancy-value
- McClelland & Atkinson (1953) - Achievement motivation, TAT
- Geen (1995), Miller (1962), Rubin & McNeil (1983) - Motivation definitions

### Sample Questions (15+ needed):
1. According to Geen (1995), what is motivation?
2. What are the three categories of motives identified by Rubin & McNeil?
3. What is homeostasis?
4. What does drive theory propose about physiological disruptions?
5. What is a major limitation of drive theory? (explain dieting example)
6. What are instincts according to instinct theory?
7. Give an example of an instinct in babies.
8. What is a limitation of instinct theory?
9. According to arousal theory, what do people seek to maintain?
10. Give an example of a high arousal activity.
11. What is the formula for expectancy-value theory?
12. In the expectancy-value college student example, why was the student motivated?
13. What is intrinsic motivation?
14. What is extrinsic motivation?
15. Which motivation type involves external rewards?
16. What are the two components of achievement motivation?
17. What is the TAT (Thematic Apperception Test)?
18. What is a limitation of the TAT?

---

## Implementation Notes for JSON Generation Agents:

### Content Structure Requirements:
- Each week needs `week`, `dateRange`, `topics` array
- Each topic needs `id`, `title`, `subtitle`, `summary`, `keyTakeaways` (array), `content` (array), `questions` (array)
- Content types: `heading`, `paragraph`, `list`, `callout`
- Callout types: `Info`, `AlertCircle`
- Questions: Need 15+ MCQs with `question`, `options` (array of 4), `answer`

### Content Writing Guidelines:
- Write in clear, academic but accessible language
- Use present tense for definitions and concepts
- Include specific examples from the source material
- Reference key studies and theorists
- Make questions unambiguous with single correct answer
- Avoid trick questions - test understanding, not memory tricks

### Quality Checks:
✓ All key concepts covered from source material
✓ Learning outcomes addressed
✓ Examples and studies included
✓ Questions test different levels of understanding
✓ No ambiguous or poorly-worded questions
✓ Structure matches existing week1.json format exactly
