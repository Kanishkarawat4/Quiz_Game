const questions=[
    {
        'ques':"Inside which html element do we put the java script? ",
        'a': "<script>",
        'b': "<javascript>",
        'c': "<js>",
        'd': "<scripting>",
        'answer': "a",
    },
    {
          'ques': "What is the capital of France?",
            'a': "Rome",
            'b': "Berlin", 
            'c': "Madrid",
            'd': "Paris",
            'answer': "d",
          },
          {
            'ques': "What is 2 + 2?",
            'a' :"3",
            'b': "4",
            'c': "5",
            'd': "6",
         'answer': "b",
          },
          {
            'ques': "Which programming language is used for web development?",
            'a':"Python",
            'b':"C++",
            'c':    "JavaScript",
            'd':"Java", 
            'answer': "c",
          },
        ]

        let index=0;
        let total =questions.length;
        let right=0, 
        wrong =0;
        const quesBox=document.getElementById("quesBox")        //quesBox for load the question
        const optionInputs=document.querySelectorAll('.option')
        const loadQuestion =() => {              // create the function
            if (index === total)        //complete question
            {
                 return endQuiz()       
            }
           reset();
           
           const data =questions[index]
           
            quesBox.innerText= `${index+1}  ${data.ques}`;
            optionInputs[0].nextElementSibling.innerText=data.a;        // for the option
            optionInputs[1].nextElementSibling.innerText=data.b;
            optionInputs[2].nextElementSibling.innerText=data.c;
            optionInputs[3].nextElementSibling.innerText=data.d; 
        }

        const submitQuiz = () => {                  // submit the answer
            const data =questions[index]
            const ans=getAnswer()
            if (ans == data.answer){
                right++;                // if the option is correct
            }
            else{
                wrong++;
            }
            index++;            // for next question
            loadQuestion();     //calling the function
            return;
        }

        const getAnswer = () => {     
            let answer;
            optionInputs.forEach(
                (input) => {            //checked the answer 
                    if(input.checked){
                       ans = input.value;
                    }
                }
            )
            return ans;      // reture the answer 
        }

        const reset = () =>{              //reset the input for another question
            optionInputs.forEach(
                (input) =>{
                    input.checked = false;

                }
            )

        }
        const endQuiz = () =>{                                    // complete the question
           document.getElementById("box").innerHTML=`              
           <div style ="text-align:center">                     
           <h4> Thank you for playing  the quiz</h4>
           <h3>  ${right} / ${total} are correct</h3>            
           </div>`
        }
        
        loadQuestion();         //intial call