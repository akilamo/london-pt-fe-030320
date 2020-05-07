const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 * 
 * REQUIREMENTS:
 * 
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
 */


const displayMember = (member) => {
  const li = document.createElement("li");
  li.innerHTML = `   <p class="name">${member.name}</p>
	  <p class="life">${member.born} – ${member.died}</p>
	  <p class="gender"><strong>Gender: </strong>${member.gender}</p>
	  <p class="culture"><strong>Culture: </strong>${member.culture}</p>`;
  resultEl.appendChild(li);
};

const displayAll = async (members) => {
  resultEl.innerHTML = "";
  members.forEach((member) => displayMember(member));
};

const fetchSwornMembers = async () => {
  const getData = await fetch(houseURL).then((response) => response.json());
  getData.swornMembers.forEach(async (memberURL) => {
    const swornMember = await fetch(memberURL).then((response) =>
      response.json()
    );
    members.push(swornMember);
    displayAll(members);
  });
};

searchEl.addEventListener("keyup", () => {
  const filteredMembers = members.filter((member) => {
    let query = searchEl.value;
    if (member.name.toLowerCase().match(query)) {
      return true;
    } else {
      return false;
    }
  });
  displayAll(filteredMembers);
});


fetchSwornMembers();
