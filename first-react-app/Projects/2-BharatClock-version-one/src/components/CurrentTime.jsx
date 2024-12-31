function CurrentTime(){

  let time = new Date();

  return <h1>This is current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h1>
}

export default CurrentTime;