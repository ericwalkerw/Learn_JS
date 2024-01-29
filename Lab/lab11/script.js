'use strict';

const button = document.getElementById('poll');

const poll = {
  question: 'What is your favourite programming language? ',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  anwserPoll() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\nYour answer is: `)
    );

    if (answer < 0 || answer > this.options.length || isNaN(answer)) {
      alert('Wrong answer!');
      return;
    }

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.clear();
    poll.displayAnswer('string');
    poll.displayAnswer('array');
  },

  displayAnswer(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Answer: ${this.answers.join(',')}`);
    }
  },
};

button.addEventListener('click', poll.anwserPoll.bind(poll));
