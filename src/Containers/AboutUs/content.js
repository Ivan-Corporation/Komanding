import React from "react";
import { PcScreen } from "./Section/PcScreen";
import { GameIcons } from "./Section/GameIcons";
import { Koma } from './Section/Koma';
import Countdown from 'react-countdown';
import { Egg } from './Section/Egg';

const year = new Date().getFullYear();

export default {
  ru: [
    {
      title: "Koma Corporation",
      content: `Довольно молодая и амбициозная компания, за два года не добилась ничего, но это лишь временные трудности. Любимый девиз - "Давай, давай блин!!!"`,
      small: `Существует с 2020 по ${year}`,
      image: <Koma />
    },
    {
      title: "Самое великое видео (🖯 на монитор) →",
      content: `Это видео было создано еще 5 Мая 2020 года под особым вдохновением навеянным заставками Civilization и отчасти историческими фактами.`,
      small: `Посвящается человечеству`,
      image: <PcScreen />
    },
    {
      title: "Фреймворки",
      content: `Здесь содержатся три фреймворка, Angular, React, VueJS. Не знаю почему они здесь, но так будет лучше видно процесс анимации нескольких картинок в одной секции`,
      small: `JQuery`,
      image: <GameIcons />
    },
    {
      title: <Countdown date={Date.now() + 50000000000} />,
      content: `Что-то внутри яйца... →`,
      small: `Нужно лишь подождать`,
      image: <Egg />
    }
  ],
  en: [
    {
      title: "Koma Corporation",
      content: `A rather young and ambitious company, it has not achieved anything in two years, but these are only temporary difficulties. Favorite motto - "Come on, damn it!!!"`,
      small: `Since 2020 to ${year}`,
      image: <Koma />
    },
    {
      title: "The Greatest Video (🖯 on monitor) →",
      content: `This video was created on May 5, 2020 under special inspiration inspired by Civilization cutscenes and partly historical facts.`,
      small: `Dedicated to humanity`,
      image: <PcScreen />
    },
    {
      title: "Frameworks",
      content: `It contains three frameworks, Angular, React, VueJS. I don't know why they are here, but it will be better to see the process of animating several pictures in one section.`,
      small: `JQuery`,
      image: <GameIcons />
    },
    {
      title: <Countdown date={Date.now() + 50000000000} />,
      content: `Something inside the egg... →`,
      small: `You need only wait`,
      image: <Egg />
    }

  ]
};
