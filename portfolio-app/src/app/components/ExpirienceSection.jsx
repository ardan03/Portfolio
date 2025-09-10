"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const gitHubProjects = [
  {
    id: 1,
    title: "WebRTC",
    description: "Проект создавался для Выпускной квалификационной работы на тему Разработка корпоротивной платформы: Web модуль обмена данными",
    image: "/Achivments/image.png",
    tag: ["Все", "Проект"],
    gitUrl: "https://github.com/ardan03/web_rtc",
    previewUrl: "http://localhost:3000/image.png",
    hoverInfo: "В данном проекте было использована такая технология как WebRTC для общения и передачи данных в релном времени",
  },
  {
    id: 2,
    title: "LAN-Inside",
    description: "Проект расчитывался как подобие NAC сервера для проверки правил на компьюттерах организации находящиеся в одной сети",
    image: "/Achivments/Lan-inside.png",
    tag: ["Все", "Проект"],
    gitUrl: "https://github.com/ardan03/LAN-inside",
    previewUrl: "http://localhost:3000/Lan-inside.png",
    hoverInfo: "Данный проект разрабатывался в рамках хакатана Мы будущее ИТ Бурятии",
  },
  {
    id: 3,
    title: "Car retail",
    description: "Проект был разработан во время учебной парктики и был направлен на изучения нормализации базы данных, а так же углубление в паттерн программирования MVVM",
    image: "/Achivments/MVVM.png",
    tag: ["Все", "Проект"],
    gitUrl: "https://github.com/ardan03/CarRealte",
    previewUrl: "http://localhost:3000/MVVM.png",
    hoverInfo: "К сожалению",
  },
];

const achievementsData = [
    {
    id: 4,
    title: "Сертификат курсов по Трхмерной Графике и 3D печати",
    description: "За курс приобретены ннавыки по 3D моделированию и настройке принтеров для печати модели",
    image: "/Achivments/1.png",
    tag: ["Все", "Достижение"],
    gitUrl: "/",
    previewUrl: "/",
    hoverInfo: "Было проейдено в ДНК им В.А. Котельникова",
  },
  {
    id: 5,
    title: "Сертификат слушателя Основ геймдизайна",
    description: "За время курса было изучены основы построения игр а так же игровой движек Unreal Engine",
    image: "/Achivments/3.png",
    tag: ["Все", "Достижение"],
    gitUrl: "/",
    previewUrl: "/",
    hoverInfo: "Было проведено в ДНК им В.А. Котельникова",
  },
  {
    id: 6,
    title: "Сертификат обучения по программе Введение в Model View ViewModel c обьектно-ориентированным программированием",
    description: "Данный курс был инциирыван студентами моей группы для получения знаний об ООП от действуещего Senior разработчика",
    image: "/Achivments/5.png",
    tag: ["Все", "Достижение"],
    gitUrl: "/",
    previewUrl: "/",
    hoverInfo: "Пары были проведены с участием действуещего Senior разработчика",
  },
  {
    id: 7,
    title: "Диплом 1 степени за лучше решение в области кибербезопасности",
    description: "За время курса было изучены основы построения игр а так же игровой движек Unreal Engine",
    image: "/Achivments/Hacaton.png",
    tag: ["Все", "Достижение"],
    gitUrl: "https://github.com/ardan03/LAN-inside",
    previewUrl: "/",
    hoverInfo: "",
  },
  {
    id: 8, 
    title: "Участник CTF",
    description: "Соревнование по кибербезопасности на нахждение уязвимостей",
    image: "/Achivments/10.png",
    tag: ["Все", "Достижение"],
    gitUrl: "/",
    previewUrl: "/",
    hoverInfo: "",
  },
  {
    id: 9, 
    title: "Благадарственное письмо руководителю команды",
    description: "Выдавалась за подготвку команды к соревнованием по кибербезопасности CTF",
    image: "/Achivments/16.png",
    tag: ["Все", "Достижение"],
    gitUrl: "/",
    previewUrl: "/",
    hoverInfo: "",
  },
];

const combinedData = [...gitHubProjects, ...achievementsData];

const GitHubSection = () => {
  const [tag, setTag] = useState("Все");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredItems = combinedData.filter((item) =>
    item.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Expirience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Мои GitHub Проекты и Достижения
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Все"
          isSelected={tag === "Все"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Проект" 
          isSelected={tag === "Проект"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Достижение" 
          isSelected={tag === "Достижение"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredItems.map((item, index) => (
          <motion.li
            key={item.id} 
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              gitUrl={item.gitUrl}
              previewUrl={item.previewUrl}
              hoverInfo={item.hoverInfo}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default GitHubSection;