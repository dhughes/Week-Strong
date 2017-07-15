import { normalize } from 'normalizr';
import { user as userSchema } from '../schemas';

test('Should be able to normalize API-provided user data', () => {
  let normalizedData = normalize(data, userSchema);
  expect(Object.keys(normalizedData.entities.goal).length).toEqual(4);
});

let data = {
  id: 16,
  name: 'Doug Hughes',
  email: 'doug@doughughes.net',
  program: {
    id: 2,
    selectedDays: [1, 3, 5],
    weeks: 8,
    goals: [
      {
        exercise: {
          id: 3,
          name: 'Pullups',
          image: '/img/pullups.jpg',
          defaultGoal: 20,
          minimum: 4,
          step: 2,
          description:
            "<p>Not my text! A pullup is an exercise involving raising oneself with one's arms by pulling up against a horizontal bar fixed above one's head.</p> <h3>Proper Form</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p> <h3>Scaling Options</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p>"
        },
        goal: 10
      },
      {
        exercise: {
          id: 4,
          name: 'Pushups',
          image: '/img/pushups.jpg',
          defaultGoal: 100,
          minimum: 20,
          step: 10,
          description:
            '<p>Not my text! A push-up (or press-up) is a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms.</p> <h3>Proper Form</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p> <h3>Scaling Options</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p>'
        },
        goal: 50
      },
      {
        exercise: {
          id: 5,
          name: 'Situps',
          image: '/img/situps.jpg',
          defaultGoal: 200,
          minimum: 40,
          step: 10,
          description:
            '<p>Not my text! A situp is an a physical exercise designed to strengthen the abdominal muscles, in which a person sits up from a supine position without using the arms for leverage.</p> <h3>Proper Form</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p> <h3>Scaling Options</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p>'
        },
        goal: 100
      },
      {
        exercise: {
          id: 6,
          name: 'Squats',
          image: '/img/squats.jpg',
          defaultGoal: 200,
          minimum: 40,
          step: 10,
          description:
            '<p>Not my text! In strength training and fitness, the squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quadriceps femoris muscle (vastus lateralis, vastus medialis, vastus intermedius and rectus femoris), hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body. </p> <h3>Proper Form</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p> <h3>Scaling Options</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin posuere nibh. Fusce tortor enim, dictum at accumsan ac, laoreet eu orci.</p>'
        },
        goal: 100
      }
    ]
  }
};
