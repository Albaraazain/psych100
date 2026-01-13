#!/usr/bin/env python3
"""Integrate rewritten week10 explanations + add new schizophrenia/personality sections"""
import json

# Read workspace files
with open('week10_rewritten_explanations.json', 'r') as f:
    week10_rewritten = json.load(f)

with open('schizophrenia_spectrum_section.json', 'r') as f:
    schizophrenia_section = json.load(f)

with open('personality_disorders_section.json', 'r') as f:
    personality_section_raw = json.load(f)

# Read current week10.json
with open('../../src/data/weeks/week10.json', 'r') as f:
    week10 = json.load(f)

# Step 1: Update explanations for existing topics (like week11)
if 'topics' in week10_rewritten:
    # week10_rewritten has full topics structure
    # Match topics by ID and update explanations
    for rewritten_topic in week10_rewritten['topics']:
        topic_id = rewritten_topic['id']
        for existing_topic in week10['topics']:
            if existing_topic['id'] == topic_id:
                # Update questions' explanations
                if 'questions' in existing_topic and 'questions' in rewritten_topic:
                    for existing_q in existing_topic['questions']:
                        for rewritten_q in rewritten_topic['questions']:
                            if existing_q['question'] == rewritten_q['question']:
                                existing_q['explanation'] = rewritten_q['explanation']
                                break
                print(f"Updated topic: {topic_id}")

# Step 2: Add schizophrenia section (already in correct format)
week10['topics'].append(schizophrenia_section)
print("Added schizophrenia spectrum section")

# Step 3: Convert and add personality disorders section
# The personality section needs to be converted to standard format
personality_topic = {
    "id": personality_section_raw['topicId'],
    "title": personality_section_raw['title'],
    "subtitle": "10 Disorders Across 3 Clusters",
    "summary": personality_section_raw['content']['overview'],
    "keyTakeaways": [],  # Will be populated from questions
    "content": [],  # Will be built from cluster data
    "questions": personality_section_raw.get('questions', [])
}

week10['topics'].append(personality_topic)
print("Added personality disorders section")

# Write updated week10.json
with open('../../src/data/weeks/week10.json', 'w') as f:
    json.dump(week10, f, indent=2, ensure_ascii=False)

print(f"Week 10 integration complete! Total topics: {len(week10['topics'])}")
