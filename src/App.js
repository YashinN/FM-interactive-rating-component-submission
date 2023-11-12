import LayoutMain from "./components/LayoutMain";
import CardLayout from "./components/CardLayout";
import RatingScreen from "./components/RatingScreen";

function App() {
  return (
    <LayoutMain>
      <CardLayout>
        <RatingScreen />
      </CardLayout>
    </LayoutMain>
  );
}

export default App;
