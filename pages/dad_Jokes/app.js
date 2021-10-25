const p = document.querySelector("p");
const buttons = document.querySelectorAll("button");

const config = {
  headers: { Accept: "application/json" },
};
const get_Joke = async function () {
  const req = await axios.get(" https://icanhazdadjoke.com/", config);
  const data = req.data.joke;
  console.log(req);
  return data;
};

const add_Joke = async function () {
  const joke = await get_Joke();
  p.innerText = joke;
};

for (const button in buttons) {
}

buttons.forEach((button) => {
  button.addEventListener("click", async function () {
    await add_Joke();
  });
});
add_Joke();
