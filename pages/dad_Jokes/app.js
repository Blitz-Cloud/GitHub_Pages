const p = document.querySelector("p");
const get_JokeBtn = document.querySelectorAll("#get_JokeBtn");
const share = document.querySelector("#share");
var data;
const config = {
  headers: { Accept: "application/json" },
};
const get_Joke = async function () {
  const req = await axios.get(" https://icanhazdadjoke.com/", config);
  data = req.data;
  return data;
};

const add_Joke = async function () {
  const joke = await get_Joke();
  p.innerText = joke.joke;
};

get_JokeBtn.forEach((button) => {
  button.addEventListener("click", async function () {
    await add_Joke();
  });
});
share.addEventListener("click", async function () {
  navigator.share({
    title: "Dad_Joke",
    text: "Check out this joke ",
    url: `https://icanhazdadjoke.com/j/${data.id}`,
  });
});
add_Joke();
