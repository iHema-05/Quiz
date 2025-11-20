# Dynamic Quiz Application

A responsive web-based quiz application with countdown timer, score calculation, and result analysis.

## Features

- 🎯 **4 Quiz Categories**: General Knowledge, Science, History, Technology
- 🎓 **3 Difficulty Levels**: Easy, Medium, Hard (5 questions each)
- ⏱️ **Countdown Timer**: 60 seconds per question with auto-submit
- 📊 **Result Analysis**: Score breakdown with charts
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile
- 📈 **Performance Charts**: Visual representation of results

## How to Run

1. **Open in Browser**
   - Simply double-click `index.html` or open it in any modern web browser
   - Or copy the path: `file:///C:/Users/ytake/Downloads/frugal/index.html`

2. **Using Local Server** (Optional)
   ```bash
   python -m http.server 8000
   # Then open: http://localhost:8000
   ```

## How to Use

1. **Select Quiz Options**
   - Choose a category (General Knowledge, Science, History, or Technology)
   - Select a difficulty level (Easy, Medium, or Hard)
   - Click "Start Quiz"

2. **Answer Questions**
   - Click on your answer option
   - Use Previous/Next buttons to navigate between questions
   - Questions auto-submit when timer reaches 0

3. **View Results**
   - See your score as a percentage
   - View correct vs incorrect answers
   - Check time spent on each question
   - Click "Take Another Quiz" to restart

## Browser Requirements

Works in all modern browsers:
- Chrome 100+
- Firefox 100+
- Safari 14+
- Edge 100+

## File Structure

```
├── index.html   # Main quiz application UI
├── styles.css   # Responsive CSS styling
├── quiz.js      # Quiz logic and questions database
└── README.md    # This file
```

## Customization

### Add More Questions
Edit `quiz.js` and add to the `questionsBank` object:
```javascript
questionsBank.general.easy.push({
    question: "Your question?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0  // Index of correct answer
});
```

### Change Timer Duration
In `quiz.js`, modify line 37:
```javascript
quizState.timePerQuestion = 120; // Change from 60 to 120 seconds
```

### Change Colors
In `styles.css`, modify the `:root` variables at the top:
```css
:root {
    --primary-color: #6366f1;     /* Change color */
}
```

## Questions Database

- **60 Total Questions**: 4 categories × 3 difficulty levels × 5 questions
- **Categories**: General Knowledge, Science, History, Technology
- **Difficulty**: Easy, Medium, Hard
- All questions and answers stored in `quiz.js`

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Media Queries for responsiveness
- **JavaScript (ES6+)**: Quiz logic, state management, DOM manipulation
- **Chart.js**: Data visualization for results

## Performance

- Page load time: < 1 second
- Quiz navigation: Instant
- Result calculation: < 500ms
- Responsive on all devices

## Tips

- Questions auto-submit when timer reaches 0
- You can navigate between questions freely before submitting
- Selected answers are saved automatically
- Timer resets for each new question
- Results page shows detailed breakdown

---

**Version**: 1.0  
**Last Updated**: November 19, 2024  
**License**: Open Source
