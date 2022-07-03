const renderList = async () => {
  const getData = async () => {
    const response = await fetch("./athletes.json");
    const data = await response.json();
    return data;
  };

  const data = await getData();

  const judoTbody = document.querySelector("#judo_table > tbody");

  data.forEach((player) => {
    const list = `<tr>
        <td>${player.weight_name}</td>
        <td>${player.family_name}</td>
        <td>${player.country_name}</td>
        <td>${player.sum_points}</td>
    </tr>`;

    const wrapper = document.createElement("tbody");
    wrapper.innerHTML = list;

    judoTbody.appendChild(wrapper.firstChild);
    wrapper.remove();
  });
};

renderList();
