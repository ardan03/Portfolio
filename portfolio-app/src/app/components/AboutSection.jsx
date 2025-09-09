"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Навыки",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>MS SQL Server</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>.Net Core</li>
        <li>RestAPI</li>
        <li>WebRTC</li>
        <li>ORM технологии</li>

      </ul>
    ),
  },
  {
    title: "Образование",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FullStack программист</li>
        <li>Разработчик VR и AR</li>
        <li>Трехмерная графика и 3D печать</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/AboutPhoto.jpg" alt="ctf" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">О себе</h2>
          <p className="text-justify lg:text-lg">
            Привет! Меня зовут Ардан, и мне интересно создание сложных и надёжных IT-систем. Мой путь в программирование начался с курсов по программированию в местном ВУЗе,после окончания курсов поступил в колледж по специальности "программист", вследствии этого получен диплом с отличием о среднем професианальном образовании и паралельно был получен диплом о переквалификации на разработчика "VR и AR".

Я считаю своим главным качеством нацеленность на результат: если передо мной стоит задача, я приложу все усилия, чтобы найти решение и сдать работу в срок.

В свободное время я играю в настольный теннис, а также собираю кубики Рубика. Эти увлечения помогают мне подходить к решению задач нестандартно и сохранять концентрацию.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Навыки{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Образование{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
