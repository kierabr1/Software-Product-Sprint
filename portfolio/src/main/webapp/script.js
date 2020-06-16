// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomFunFact() {
  const funfacts =
      ['I started dancing at age 3.', 'I have coached a robotics team.', 'I love horror movies.', 'I wanted to be a medical examiner before I decided to pursue tech.'];

  // Pick a random greeting.
  const funfact = funfacts[Math.floor(Math.random() * funfacts.length)];

  // Add it to the page.
  const funfactContainer = document.getElementById('funfact-container');
  funfactContainer.innerText = funfact;
}

// TODO: Use following functions in step 5 to display comment.
function getComment() {
  fetch('/data').then(response => response.json()).then((entries) => {
  console.log(entries);
  const quoteListElement = document.getElementById('entry-container');
  entries.forEach((entry) => {
    quoteListElement.appendChild(
        createQuoteElement('Name: ' + entry.name));
    quoteListElement.appendChild(
        createQuoteElement('Email: ' + entry.email));
    quoteListElement.appendChild(
        createQuoteElement('Comment: ' + entry.comment));
    })
  });
}

 function createQuoteElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
 }
