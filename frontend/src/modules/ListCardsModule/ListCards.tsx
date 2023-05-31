import React, { useCallback, useEffect, useState } from "react";
import styles from "./ListCards.module.scss";
import { Card } from "components/Card/Card";
import { useSelector } from "store/store";
import { getCardsDefault, getNextCards } from "pages/api/getCards";
import { useDispatch } from "react-redux";
import { setNextCards, setStateCards } from "store/slices/card/card";
import InfiniteScroll from "react-infinite-scroll-component";

export const ListCards = () => {
  const { cards } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [lengthCards, setLengthCards] = useState<number>(30);

  const getCards = useCallback(async () => {
    try {
      const fetchedCards = await getCardsDefault();
      dispatch(setStateCards(fetchedCards));
      setLengthCards(fetchedCards.length);
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const getNextCard = useCallback(
    async (skip: number, take: number) => {
      try {
        const nextCards = await getNextCards(skip, take);
        dispatch(setNextCards(nextCards));
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getCards();
  }, [getCards]);

  const styleInfinitScroll = {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "14px 16px",
  };

  return (
    <section id="scrollableDiv" className={styles.wrapper}>
      <article className={styles.contentArticle}>
        <span className={styles.label}>Resultados</span>
        <div className={styles.contentCards}>
          <InfiniteScroll
            dataLength={cards.cards.length}
            next={() => getNextCard(lengthCards, 10)}
            hasMore={true}
            loader={"..."}
            style={styleInfinitScroll}
            scrollableTarget="scrollableDiv"
          >
            {cards.cards.map((item, index) => (
              <Card
                key={`${item.id + index}`}
                image={item.id}
                label={item.details.name}
              />
            ))}
          </InfiniteScroll>
        </div>
      </article>
    </section>
  );
};
