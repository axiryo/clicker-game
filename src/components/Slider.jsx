import React, { useState } from 'react'

const Slider = () => {

  // const slider = document.getElementById("slider");
  // const sliderMinSize = slider.min;
  // const sliderMaxSize = slider.max;
  // const sliderValue = slider.value;

  // slider.style.background = `linear-gradient(to right, #C3073F 0%, #C3073F ${(sliderValue-sliderMinSize)/(sliderMaxSize-sliderMinSize)*100}%,
  //                             #4E4E50 ${(sliderValue-sliderMinSize)/(sliderMaxSize-sliderMinSize)*100}%, #4E4E50 100%)`

  // slider.onchange = () => {
  //   this.style.background = `linear-gradient(to right, #C3073F 0%, #C3073F ${(this.sliderValue-this.sliderMinSize)/(this.sliderMaxSize-this.sliderMinSize)*100}%,
  //                             #4E4E50 ${(this.sliderValue-this.sliderMinSize)/(this.sliderMaxSize-this.sliderMinSize)*100}%, #4E4E50 100%)`};

  // const [ isDisabled, setIsDisabled ] = useState(true);
  const [ timer, setTimer ] = useState(1);
  const [ score, setScore ] = useState(0);

  const clickMeHandler = () => {
    setTimeout(() => {
      // setCounter(counter + 1);
      setScore((prevState) => {
        return prevState + 1;
      });
    }, (timer * 1000));
  }

  const setTimerHandler = () => {
    const timerValue = document.getElementById('slider').value;
    setTimer(timerValue);
  }
  return (<>
    <div className='timer-parent'>
      <input id='slider' className='slider' type='range' min={1} max={10} value={timer} onChange={setTimerHandler}/>
      <h1 className='timerDisplay'>{timer}s</h1>
      <button id='clickMe' type='button' className='btn btn-success btn-lg btn3d' onClick={clickMeHandler} ><label className='clickMe'>Click Me</label></button>
      <h1 className='timerDisplay'>Your score is: {score}</h1>
    </div>
  </>);
}

export default Slider