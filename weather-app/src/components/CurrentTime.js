import Clock from "react-live-clock";

function CurrentTime() {
  return (
    <div>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Rok"} />
    </div>
  );
}

export default CurrentTime;
