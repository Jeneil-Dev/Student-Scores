function Scores({scores}){

    return(
    <div className="scores">

     {scores.map((score, index) =>  
     <li className="scores" key={index}> Score {score.date}: {score.score} </li>
     )
     }

    </div>
    )
}
export default Scores;
 
 
 
