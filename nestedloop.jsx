import React from 'react'
import Courses from './Courses';

function Nestedloop() {
    const uni=[
        {
        UniName:'Agriculyure Univeristy',
        City:'Fasilabad',
        Email:'agri@university.com',
        website: 'www.agriuniversity.com',
        courses:[
            {
               coursesName:'BS(IT)',
               Duration:'4 Years',
               Fee:'50000',

            },
            {
               coursesName:'BS(CS)',
               Duration:'4 Years',
               Fee:'40000',
               
            },
            {
               coursesName:'BS(Data sciences)',
               Duration:'4 Years',
               Fee:'90000',
               
            }
        ]
    },
    
       {
        UniName:'UET Univeristy',
        City:'Lahore',
        Email:'uet@university.com',
        website: 'www.uetuniversity.com',
        courses:[
            {
               coursesName:'BS(CS)',
               Duration:'4 Years',
               Fee:'40000'
            },
              {
               coursesName:'BS(IT)',
               Duration:'4 Years',
               Fee:'80000',
               
            },
            {
               coursesName:'BS(Data sciences)',
               Duration:'4 Years',
               Fee:'90000',
               
            }
        ]
    },
       {
        UniName:'UMT Univeristy',
        City:'Multan',
        Email:'umt@university.com',
        website: 'www.umtuniversity.com',
        courses:[
            {
               coursesName:'BS(engineering)',
               Duration:'4 Years',
               Fee:'70000'
            },
              {
               coursesName:'BS(CS)',
               Duration:'4 Years',
               Fee:'40000',
               
            },
            {
               coursesName:'BS(Data sciences)',
               Duration:'4 Years',
               Fee:'90000',
               
            }
        ]
    },
       {
        UniName:'UCP Univeristy',
        City:'Lahore',
        Email:'ucp@university.com',
        website: 'www.ucpuniversity.com',
        courses:[
            {
               coursesName:'BS(data sciences)',
               Duration:'4 Years',
               Fee:'90000'
            },
              {
               coursesName:'BS(CS)',
               Duration:'4 Years',
               Fee:'40000',
               
            },
            {
               coursesName:'BS(Engeneering)',
               Duration:'4 Years',
               Fee:'90000',
               
            }
        ]
    }
    ];
  return (
    <div>
        <h1>List of univeristy</h1>
        {
            uni.map((uni, index)=>(
                <div key={index} style={{
                    backgroundColor: '#ccc',
                    padding: '20px',
                    margin: '20px',
                    borderBottom : '5px solid black',
                    borderRadius : '10px',
                    width : '450ps'

                }}>
                    <h2>Name : <span style={{color:'brown'}}>{uni.UniName}</span></h2>
                     <h2>City : <span style={{color:'blue'}}>{uni.City}</span></h2>
                      <h2>Email : <span style={{color:'green'}}>{uni.Email}</span></h2>
                       <h2>Website : <span style={{color:'purple'}}>{uni.website}</span></h2>
                       <h2 style={{color:'green'}}>Courses offered:</h2>
                       <Courses  Courses={uni.courses}/>
                </div>
            )
            )
        }
    </div>
  )
}

export default Nestedloop