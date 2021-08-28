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
const showLeague = (leagues) => {
        // console.log(leagues);
        const leaguesContainer = document.getElementById('league');
        leagues.forEach(league => {
                console.log(league);
                const div = document.createElement('div');
                div.innerHTML = `
                        <div class="col">
                                <div class="card h-100 bg-info">
                                        <div class="card-body">
                                        <h5 class="card-title">ID: ${league.idLeague}</h5>
                                        <h3 class="text-danger">${league.strLeague}</h3>
                                        <h4>Sport Type: ${league.strSport}</h4>
                                        </div>
                                </div>
                        </div>
                `;
                leaguesContainer.appendChild(div);
        })
}