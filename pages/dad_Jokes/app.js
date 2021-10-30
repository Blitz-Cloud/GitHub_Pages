const p = document.querySelector("p");
const get_JokeBtn = document.querySelectorAll("#get_JokeBtn");
const previous_Btn = document.querySelector("#previous_Btn");
const share = document.querySelector("#share");
var data;
var ids = [];
// Here is the header for get_Joke
const config = {
  headers: { Accept: "application/json" },
};
// These there functions take care of getting a random joke
const get_Joke = async function () {
  const req = await axios.get("https://icanhazdadjoke.com/", config);
  data = req.data;
  ids.push(req.data.id);
  return data;
};

const add_Joke = async function (func) {
  const joke = await func();
  p.innerText = joke.joke;
};

get_JokeBtn.forEach((button) => {
  button.addEventListener("click", async function () {
    await add_Joke(get_Joke);
  });
});
// Here is the function that take care of Web Share Api
share.addEventListener("click", function () {
  navigator.share({
    title: "Dad_Joke",
    text: "Check out this joke ",
    url: `https://icanhazdadjoke.com/j/${data.id}`,
  });
});
// Here is the function that take care of getting a previous joke
const get_C_Joke = async function () {
  const req = await axios.get(
    `https://icanhazdadjoke.com/j/${ids[ids.length - 2]}`,
    config
  );
  const data_c = req.data;
  console.log(data_c);
  return data_c;
};
previous_Btn.addEventListener("click", async function () {
  add_Joke(get_C_Joke);
});
add_Joke(get_Joke);
