  // Fetch JSON data from the file
  fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {

// Update the result
var resultValueElement = document.getElementById('resultValue');
var resultTextElement = document.getElementById('resultText');
var resultDescriptionElement = document.getElementById('resultDescription');

resultValueElement.innerHTML = jsonData[0].score;
resultTextElement.innerHTML = getGrade(jsonData[0].score);
resultDescriptionElement.innerHTML = getDescription(jsonData[0].score);

// Update the subjects
var subjectContainer = document.getElementById('subjectContainer');

jsonData.forEach(item => {
  var subjectDiv = document.createElement('div');
  subjectDiv.classList.add('subjects');
  subjectDiv.style.backgroundColor = `hsla(${getColorHue(item.category)}, 100%, ${getColorLightness(item.score)}%, 10%)`;

  var logoImg = document.createElement('img');
  logoImg.classList.add('logo');
  logoImg.src = item.icon;
  logoImg.alt = `icon-${item.category.toLowerCase()}`;

  var subjectInfoDiv = document.createElement('div');
  subjectInfoDiv.classList.add('subject-info');

  var subjectNameSpan = document.createElement('span');
  subjectNameSpan.classList.add('subject-name');
  subjectNameSpan.style.color = getColor(item.category);
  subjectNameSpan.innerHTML = item.category;

  var subjectPercentSpan = document.createElement('span');
  subjectPercentSpan.classList.add('subject-percent');
  subjectPercentSpan.innerHTML = `<span class="percent">${item.score}</span>/100`;

  subjectInfoDiv.appendChild(subjectNameSpan);
  subjectInfoDiv.appendChild(subjectPercentSpan);

  subjectDiv.appendChild(logoImg);
  subjectDiv.appendChild(subjectInfoDiv);

  subjectContainer.appendChild(subjectDiv);
});


function getGrade(score) {
    // Determine grade based on score
    if (score >= 90) {
      return 'Excellent';
    } else if (score >= 70) {
      return 'Good';
    } else if (score >= 50) {
      return 'Average';
    } else {
      return 'Below Average';
    }
  }
  
function getDescription(score) {
    // Determine description based on score
    if (score >= 90) {
      return 'You have performed exceptionally well.';
    } else if (score >= 70) {
      return 'You have performed above average.';
    } else if (score >= 50) {
      return 'You have performed at an average level.';
    } else {
      return 'You have performed below average.';
    }
  }

  function getColor(category) {
    // Determine color based on category
    switch (category) {
      case 'Reaction':
        return 'var(--light-red)';
      case 'Memory':
        return 'var(--orangey-yellow)';
      case 'Verbal':
        return 'var(--green-teal)';
      case 'Visual':
        return 'var(--cobalt-blue)';
      default:
        return 'black';
    }
  }
    
  function getColorHue(category) {
    // Determine color hue based on category
    switch (category) {
      case 'Reaction':
        return 0;
      case 'Memory':
        return 39;
      case 'Verbal':
        return 166;
      case 'Visual':
        return 234;
      default:
        return 0;
    }
  }
  
  function getColorLightness(score) {
    // Determine color lightness based on score
    if (score >= 90) {
      return 67;
    } else if (score >= 70) {
      return 56;
    } else if (score >= 50) {
      return 37;
    } else {
      return 45;
    }
  }


})
.catch(error => {
  console.log('Error:', error);
});