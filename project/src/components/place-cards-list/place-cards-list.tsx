import PlaceCard from '../../components/place-card/place-card';

import { Offers } from '../../types/offer';

type PlaceCardsListProps = {
  offers: Offers;
}

function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element {
  return (
    <>
      {
        offers.map((place) => (
          <PlaceCard
            key={place.id}
            offer = {place}
          />
        ))
      }
    </>
  );
}

export default PlaceCardsList;
