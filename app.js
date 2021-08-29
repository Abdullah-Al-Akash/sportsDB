const loadLeague = async () => {
        // fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
        //         .then(res => res.json())
        //         .then(data => console.log(data))

        const api = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        const res = await fetch(api);
        const data = await res.json();
        showLeague(data.leagues)

}
loadLeague()
const leaguesContainer = document.getElementById('league');
const showLeague = (leagues) => {
        // console.log(leagues);
        leagues.forEach(league => {
                // console.log(league);
                const div = document.createElement('div');
                div.innerHTML = `
                        <div class="col">
                                <div class="card h-100 card-bg">
                                        <div class="card-body">
                                        <h5 class="card-title">ID: ${league.idLeague}</h5>
                                        <h4 class="text-danger">${league.strLeague}</h4>
                                        <h6>Sport Type: ${league.strSport}</h6>
                                        <br/><button onclick="loadTeamDetails(${league.idLeague}, '${league.strLeague}')"class="btn btn-danger">Show Details</button>
                                        </div >
                                </div >
                        </div >
        `;
                leaguesContainer.appendChild(div);
        })
}

const loadTeamDetails = (id, name) => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`)
                .then(res => res.json())
                .then(data => showTeamDetails(data, name))
}

const showTeamDetails = (data, name) => {
        window.scrollTo(0, 40);
        console.log(data, name);
        const teams = data.teams;
        // Main Header Bg None:
        const header = document.getElementById('header');
        header.style.display = 'none';

        const teamsContainer = document.getElementById('teams');

        //For Teams Headline
        const mainTeamContainer = document.getElementById('main-team-container');
        const div = document.createElement('div');
        div.innerHTML = `
                <div class="text-end mt-2"><button class="btn btn-dark" onclick="reload()">Back</button></div>
                <h2 class="text-center mb-2">Teams of <span class="text-danger">${name}</span> </h2>
                <h5 class="text-center mb-5">Total Team: <span class="text-danger"> ${teams.length}</span> </h5>
        `
        mainTeamContainer.appendChild(div);

        // ForEach Function For All Teams
        teams.forEach(team => {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="col">
                        <div class="card h-100">
                                <img src="${team.strStadiumThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title text-warning">${team.strAlternate}</h5>
                                        <p class="card-text text-success">Short Name: ${team.strTeamShort}</p>
                                        <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>
                                </div>
                        </div>
                </div>
                `
                leaguesContainer.textContent = '';
                teamsContainer.appendChild(div);
                teamsContainer.scrollTop = 0;
        })
}

// Reload Full Page:
function reload() {
        location.reload();
}

