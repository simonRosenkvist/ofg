import './findUs.css';
import Map from './Map';

function FindUs() {
    return (
        <div className="findus-container">
            <h1 className="center">Hitta hit</h1>
            <p className="center mb-20 findus-text">
                Vi finns på <strong>Radiatorvägen 7</strong> på Aspholmen. <br />
                Ni hittar oss i samma byggnad som Dance Center och vi ligger på översta planen. <br />
                Lokalen <strong>”Tefatet”</strong> ligger precis utanför. <br />
                <br />
                <strong className='highlight'>Bil:</strong> Parkeringar finns utanför lokalen (P-skiva krävs). <br />
                <strong className='highlight'>Cykel:</strong> Cirka 10 minuter från resecentrum. <br />
                <strong className='highlight'>Buss:</strong> Hållplats precis utanför.
            </p>

            <div className="map-card">
                <Map />
            </div>
        </div>
    );
}

export default FindUs;
