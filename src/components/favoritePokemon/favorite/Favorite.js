

export const Favorite = ({pokemon}) => {
    return(
        <div className="show-favorite__pokemon">
            <div className="favorite__pokemon-name">
                <p>{pokemon.name}</p>
            </div>
            <div className="favorite__pokemon-img">
                <img src={pokemon.image || pokemon.imgPoke} alt={pokemon.name}/>
            </div>
        </div>
    );
};