import "./index.css";
import Nav from "./components/Nav";
import Students from "./components/Students";
import Scores from "./components/Scores";
import { useState } from "react";
// console.log(Data)

export default function App() {
  // 1. Use the array of "student" data to initialize state as an array of objects within the <App> component:
  // use state hook gives a way to create a reactive value and a way to change it when we want.

  //to change the value of the current state you use the function initialzed by set keyword, when this value is changed react will rerender the component updating it with the new value
  // console.log(studentList + "  LIST  ");


  let studentsAndScoresData = [
    {
      name: "Cait Yomorta",
      bio:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
      scores: [
        {
          date: "2018-02-08",
          score: 77
        },
        {
          date: "2018-04-22",
          score: 92
        },
        {
          date: "2018-09-15",
          score: 68
        }
      ]
    },
    {
      name: "Holly Baird",
      bio:
        "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
      scores: [
        {
          date: "2018-12-14",
          score: 88
        },
        {
          date: "2019-01-09",
          score: 79
        },
        {
          date: "2019-02-23",
          score: 91
        },
        {
          date: "2019-03-01",
          score: 95
        }
      ]
    },
    {
      name: "Wes Mungia",
      bio:
        "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
      scores: [
        {
          date: "2018-10-11",
          score: 62
        },
        {
          date: "2018-11-24",
          score: 74
        },
        {
          date: "2018-12-19",
          score: 85
        }
      ]
    }
  ];

  let [studentList, setStudentList] = useState(studentsAndScoresData); // creating a reactive value by using array destructuring - uuseState([]) will give us the value of the state specified 
 
  //code App component to display a student component for each student in the students array being held in state

   console.log(studentList)
 
  return (

    <div className="App">
      <Nav/>
      {studentList.map((items, index) => {

    return (
      
      
      <div className="container">
        
        <Students key={index} name={items.name} bio={items.bio} />
        <Scores key={index} scores={items.scores} />
        </div>
        
      ) // closing return 2
  
     })}

    </div>
  );

}
// closing function






