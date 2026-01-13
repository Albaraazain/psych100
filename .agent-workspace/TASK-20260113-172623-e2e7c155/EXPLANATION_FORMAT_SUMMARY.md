# Explanation Format Design - Executive Summary

## Quick Reference for Implementation Agents

### Core Format (Copy-Paste Template)

```json
"explanation": {
  "correct": "[1-2 sentences: WHY this answer is correct, cite concepts/researchers, 30-60 words]",
  "incorrect": {
    "[Wrong Option 1]": "[1-2 sentences: WHY this is wrong, 20-40 words]",
    "[Wrong Option 2]": "[1-2 sentences: WHY this is wrong, 20-40 words]",
    "[Wrong Option 3]": "[1-2 sentences: WHY this is wrong, 20-40 words]"
  }
}
```

---

## The 5-Second Rule for Quality

A good explanation passes this test:
1. **CORRECT**: Does it explain WHY, not just WHAT? ✓
2. **CORRECT**: Does it cite specific concepts/researchers? ✓
3. **INCORRECT**: Does each explain that SPECIFIC wrong answer? ✓
4. **INCORRECT**: Does each contrast with correct or clarify misconception? ✓
5. **ALL**: Would a student who got it wrong understand their mistake? ✓

---

## Length Targets

| Type | Target | Max | Too Short | Too Long |
|------|--------|-----|-----------|----------|
| Correct | 30-60 words | 70 | <25 | >80 |
| Each Incorrect | 20-40 words | 50 | <15 | >55 |

---

## Pattern by Difficulty

### LEARNING (Basic Recall)
- **Correct**: State fact + cite source + brief context
- **Incorrect**: State what it actually is + why different

**Example Correct**: "Wilhelm Wundt founded the first experimental psychology laboratory in Leipzig, Germany in 1879, marking psychology's separation from philosophy and emergence as a formal scientific discipline focused on experimentation."

**Example Incorrect**: "Freud founded psychoanalysis in 1886 and focused on clinical practice and unconscious mind theories, but did not establish the first experimental psychology lab."

---

### APPLICATION (Apply to Scenario)
- **Correct**: Explain how scenario demonstrates concept + mechanism
- **Incorrect**: Explain why scenario doesn't fit + key difference

**Example Correct**: "This describes systematic desensitization or counterconditioning, based on classical conditioning principles. A new association is created between dogs (CS) and relaxation (replacing the fear response), demonstrating classical conditioning's therapeutic application."

**Example Incorrect**: "Operant conditioning involves consequences (reinforcement/punishment) for voluntary behaviors, not pairing stimuli to change emotional responses."

---

### TRICKY (Subtle Distinctions)
- **Correct**: Address the nuance + explain subtle distinction + contrast
- **Incorrect**: Explicitly address the misconception + detailed correction

**Example Correct**: "Unfalsifiable means a theory cannot be empirically tested or potentially disproven. Freud's concepts like the unconscious, repression, and defense mechanisms are difficult or impossible to measure objectively, making them unfalsifiable and thus unscientific by Popper's criteria."

**Example Incorrect**: "Unfalsifiable doesn't mean proven false - it means it CANNOT be proven false because it's not testable."

---

## Common Sentence Starters

### For CORRECT Explanations:
- "According to [theory/researcher], [explanation], [significance]."
- "[Answer] involves [mechanism], which [outcome/application]."
- "The key principle is [concept], demonstrated by [evidence/example]."
- "This is correct because [specific reason], as shown by [research/context]."

### For INCORRECT Explanations:
- "[Wrong concept] involves [actual definition], not [what question asks]."
- "This describes [wrong theory], not [correct theory] which [distinction]."
- "While [element might seem related], the key difference is [explanation]."
- "This is a common misconception. [Correct] specifically refers to [distinction]."
- "If this were correct, we would expect [consequence], but [reality]."

---

## Top 10 Writing Rules

1. **ALWAYS** explain WHY, never just state facts
2. **ALWAYS** cite researchers/theories by name
3. **NEVER** use vague language ("this is wrong")
4. **NEVER** repeat the question in the answer
5. **ALWAYS** make each incorrect explanation specific to that option
6. **ALWAYS** use contrast to clarify differences
7. **NEVER** exceed 70 words for correct, 50 for incorrect
8. **ALWAYS** use active voice for clarity
9. **ALWAYS** address common misconceptions
10. **NEVER** leave ambiguity about WHY something is wrong

---

## Red Flags (Fix These Immediately)

❌ **"This is correct because it's the right answer"** → Circular reasoning
❌ **"This is not the right concept"** → Too vague, what IS it?
❌ **5-sentence explanation** → Too long, condense
❌ **"A researcher found..."** → Name the researcher
❌ **Using unexplained jargon** → Define or reference when covered
❌ **Same explanation for multiple incorrect options** → Each must be unique

---

## Quality Checklist (Before Submitting)

- [ ] Correct explanation explains WHY (mechanism/reason)
- [ ] Correct explanation cites specific concept/researcher
- [ ] Correct explanation is 30-60 words
- [ ] Each incorrect is specific to that option
- [ ] Each incorrect is 20-40 words
- [ ] No circular reasoning or vague statements
- [ ] Terminology matches course material
- [ ] No grammatical errors
- [ ] Factually accurate
- [ ] Would help a student understand their error

---

## File Locations

- **Full Guidelines**: `EXPLANATION_FORMAT_GUIDELINES.md` (6000+ words, comprehensive)
- **This Summary**: `EXPLANATION_FORMAT_SUMMARY.md` (Quick reference)
- **Example Weeks**: `study-site/src/data/weeks/week1.json`, `week2.json`, `week3.json`

---

## Need Help? Reference These Examples

| Topic | Question Type | Week | Line # |
|-------|---------------|------|--------|
| Historical figures | Learning | Week 1 | 152-170 |
| Etymology | Learning | Week 1 | 172-189 |
| Scientific methods | Learning | Week 1 | 191-208 |
| Classical conditioning | Application | Week 3 | 379-395 |
| Twin studies | Application | Week 2 | 398-415 |
| Falsifiability | Tricky | Week 2 | 474-491 |
| Maslow vs Rogers | Tricky | Week 2 | 512-529 |

---

## Key Insight: Asymmetric Design

The format is intentionally asymmetric:
- **CORRECT**: Longer (30-60 words), more detailed, provides full context
- **INCORRECT**: Shorter (20-40 words), focused, contrasts or corrects

This is pedagogically sound because:
1. Students need more detail on WHY something is right
2. Brief, focused corrections are more memorable
3. Multiple incorrect explanations provide multiple learning angles
4. Total educational value is HIGH despite brevity

---

**BOTTOM LINE**: Focus on teaching through explanations, not just marking right/wrong. Every explanation is a teaching opportunity.
