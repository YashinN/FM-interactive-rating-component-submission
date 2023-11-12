import LayoutMain from "./components/LayoutMain";
import CardLayout from "./components/CardLayout";
import RatingScreen from "./components/RatingScreen";
import MessageScreen from "./components/MessageScreen";

function App() {
  return (
    <LayoutMain>
      <CardLayout>
        {/* <RatingScreen /> */}
        <MessageScreen />
      </CardLayout>
    </LayoutMain>
  );
}

export default App;
