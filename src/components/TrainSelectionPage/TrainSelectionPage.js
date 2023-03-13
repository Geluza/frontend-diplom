import TrainSelectionHeader from './TrainSelectionHeader';
import TrainsInfoBar from './TrainsInfoBar';
import DetailsSelectionPage from './DetailsSelectionTrain';
import LastTickets from './LastTickets';
import Footer from '../FirstPage/Footer';

export default function TrainSelectionPage(){
  return (
  <div className="train_selection_page">
    <TrainSelectionHeader></TrainSelectionHeader>
    <TrainsInfoBar></TrainsInfoBar>
    <DetailsSelectionPage></DetailsSelectionPage>
    <LastTickets></LastTickets>
    <Footer></Footer>
  </div>)
}

