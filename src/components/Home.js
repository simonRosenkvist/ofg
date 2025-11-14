import img from '../assets/wining.jpg';

function Home () {
    return (
        <div>
            <h1>Örebro Fight Gym</h1>
            <p className="subheader">En klubb med mycket hjärta!</p>
            <p className="text-content">Örebro Fight Gym grundades 2021 och sedan dess har klubben producerat flera skickliga fighters som plockat flera medaljer både nation och internationellt. Intresset för MMA har vuxit snabbt de senaste åren och Örebro Fight Gym är det självklara valet för dig som vill träna MMA, grappling eller striking i Örebro.</p>
            <img className="big-img mb-20" src={img}></img>
        </div>
    )
}

export default Home;