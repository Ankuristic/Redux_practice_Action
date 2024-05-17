// define action constants here
export const INCREMENT_TIMER ="INCREMENT_TIMER"
export const PAUSE_TIMER= "PAUSE_TIMER"
export const RESET_TIMER ="RESET_TIMER"
export const START_TIMER ="START_TIMER"

// define action creators here

export const incrementTimer = (index) =>({index, type:INCREMENT_TIMER})
export const pauseTimer =(boolean) =>({boolean, type:PAUSE_TIMER})

export const resetTimer =(index) =>({index, type:RESET_TIMER})

export const startTimer =(boolean) =>({boolean,type:START_TIMER})


