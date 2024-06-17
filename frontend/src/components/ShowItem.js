function ShowItem({name,description,dailyRate,id}){
    return(
                <div>
                    <div>
                        <h1>{name}</h1>
                        <h2>Rs {dailyRate} per day</h2>
                        <h3>{description}</h3>
                        <h4>{id}</h4>
                        </div>
                        <div>
                        <a href="/details"><button>See More</button></a>
                        </div>
                    </div>
    )
}
export default ShowItem;