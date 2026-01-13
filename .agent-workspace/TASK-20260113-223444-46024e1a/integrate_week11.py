#!/usr/bin/env python3
"""Integrate rewritten week11 explanations into actual week11.json"""
import json

# Read workspace file with rewritten explanations
with open('week11_rewritten_explanations.json', 'r') as f:
    workspace = json.load(f)

# Read current week11.json
with open('../../src/data/weeks/week11.json', 'r') as f:
    week11 = json.load(f)

# Extract rewritten explanations
rewritten = workspace['rewritten_explanations']

# Find questions in week11.json and update their explanations
questions_updated = 0
for topic in week11['topics']:
    if 'questions' in topic:
        for question in topic['questions']:
            # Find matching rewritten explanation by question text
            q_text = question['question']
            for rewrite in rewritten:
                if rewrite['question'] == q_text:
                    # Replace explanation
                    question['explanation'] = rewrite['explanation']
                    questions_updated += 1
                    break

print(f"Updated {questions_updated} question explanations")

# Write updated week11.json
with open('../../src/data/weeks/week11.json', 'w') as f:
    json.dump(week11, f, indent=2, ensure_ascii=False)

print("Week 11 integration complete!")
