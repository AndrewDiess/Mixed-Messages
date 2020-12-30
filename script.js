const user = ['User', 'Citizen', 'Patriot', 'Civilian', 'Resident'];
const item = ['ID', 'identification', 'passport', 'credentials', 'badge'];
const verb = ['display', 'exhibit', 'manifest', 'present', 'bestow'];

const randomUser = user[Math.floor(Math.random() * user.length)];
const randomItem = item[Math.floor(Math.random() * item.length)];
const randomVerb = verb[Math.floor(Math.random() * verb.length)]

const randomSentence = `${randomUser}, please ${randomVerb} your ${randomItem}.`;

console.log(randomSentence);