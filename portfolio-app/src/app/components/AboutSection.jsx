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
           Привет! Меня зовут Ардан, и я увлечен созданием сложных и надежных IT-систем. Мой путь в программировании начался с курсов в местном вузе. После их окончания я поступил в колледж на специальность «Программист», где получил диплом о среднем профессиональном образовании с отличием. Параллельно я прошел переподготовку и получил диплом разработчика VR и AR.
<br></br>Я считаю своим главным качеством нацеленность на результат: если передо мной стоит задача, я прилагаю все усилия, чтобы найти решение и выполнить работу в срок.
<br/>В свободное время я играю в настольный теннис и собираю кубик Рубика. Эти увлечения помогают мне развивать нестандартное мышление и сохранять концентрацию.
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
