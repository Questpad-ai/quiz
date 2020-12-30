import { render } from 'react-dom';
import React, { useState } from 'react';

function backtoQuestion(){
	var root=document.querySelector(".card");
	root.classList.toggle("is-flipped");
}



export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const answers=["Paris","Elon Musk","Apple","7"]

	const [i,setindex]=useState(0)
	const [score,setscore]=useState(0)

	let handleclick=(isCorrect)=>{
	console.log(isCorrect)
		if (isCorrect===true)
		{setscore(score+1);

		}
		setindex(i+1)

		var root=document.querySelector(".card");
		root.classList.toggle("is-flipped");
	
	

	}
	


	return (<>
		<div class="card__face card__face--front">
		<div className='app'>
			
			{i>=questions.length ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					
					<div className='question-section'>
						<div className='question-count'>
							<span>{i+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[i].questionText}</div>
					</div>
					
					<div className='answer-section'>
						<button onClick={()=>handleclick(questions[i].answerOptions[0].isCorrect)}>{questions[i].answerOptions[0].answerText}</button>
						<button onClick={()=>handleclick(questions[i].answerOptions[1].isCorrect)}>{questions[i].answerOptions[1].answerText}</button>
						<button onClick={()=>handleclick(questions[i].answerOptions[2].isCorrect)}>{questions[i].answerOptions[2].answerText}</button>
						<button onClick={()=>handleclick(questions[i].answerOptions[3].isCorrect)}>{questions[i].answerOptions[3].answerText}</button>
					</div>
					
					
					
					</>)
					}
				
				</div>
			</div>
			<div class="card__face card__face--back">
			<row>
				<div class="main-answer">{answers[i-1]}</div>
			</row>
			
			
			<row>
				<div class="answer-description"></div>
				<button onClick={()=>backtoQuestion()}>OK</button>


				<div>
				</div>
			</row>
			</div>
			</>
	)
}
