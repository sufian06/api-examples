const loadUserFetch = () => {
  const url = `https://randomuser.me/api/?gender=female`;
  fetch(url)
    .then((ref) => ref.json())
    .then((data) => displayUser(data.results[0]))
    .catch((error) => console.log(error));
};

const loadUserAsync = async () => {
  const url = `https://randomuser.me/api/?gender=female`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayUser = (users) => {
  console.log(users);
};
