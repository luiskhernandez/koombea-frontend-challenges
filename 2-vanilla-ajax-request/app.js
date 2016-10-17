const ready = (fn) => {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const DateDestructuring = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  }
}
const age = (dateString) => {
  let { year: todayYear, month: todayMonth, day: todayDay } = DateDestructuring(new Date())
  let { year: birthYear, month: birthMonth, day: birthDay } = DateDestructuring(new Date(dateString))
  let age_dx = todayYear - birthYear;

  if (todayMonth < birthMonth - 1) age_dx--;

  if (birthMonth - 1 == todayMonth && todayDay < birthDay) age_dx--;

  return age_dx;
}
const personInfoFormatter = (person) => {
  let {
    avatar_url,
    birthdate,
    first_name,
    last_name,
    phone
  } = person;
  return `${first_name} ${last_name} (${age(birthdate)}) - ${phone}`;
}

const createIMG = (elem) => {
  const img = document.createElement('img');
  img.width = 50;
  img.height = 50;
  img.src = elem.avatar_url;
  return img;
}

const createLI = (elem) => {
  const item = document.createElement('li');
  item.appendChild(createIMG(elem))
  item.appendChild(document.createTextNode(personInfoFormatter(elem)))
  return item
}

const addPeopleUL = (array) => {
  const wrapper = document.getElementById('js-contacts');
  wrapper.appendChild(createUL(array))
}
const createUL = (array) => {
  const ul = document.createElement('ul');
  array.forEach((elem) => ul.appendChild(createLI(elem)));
  return ul;
}
const fetchPeople = () => {
  fetch('https://koombea-dummy-api.herokuapp.com/people/')
  .then((data) => data.json().then((json) => addPeopleUL(json.people)))
  .catch((error) => alert(error.message));
}

ready(fetchPeople)
