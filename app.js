  const users = [
    { name: "Ada", role: "Engineer" },
    { name: "Bola", role: "Designer" },
    { name: "Chidi", role: "PM" }
  ];

  const app = document.getElementById("app");

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${user.name}</h2>
      <p>${user.role}</p>
    `;
    app.appendChild(card);
  });

  function add(a, b) {
    return a + b;
  }

  console.log(add(2, 3));
  console.log(add(10, 20));




