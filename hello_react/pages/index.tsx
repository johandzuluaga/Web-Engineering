import { Button } from '@/components/Button';
import { LeftSidebar } from '@/components/LeftSidebar';
import { LinkLogo } from '@/components/LinkLogo';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import { Header } from '@/components/Header';
import { ProgrammingLogo } from '@/components/svgs/ProgrammingLogo';
import { KnowledgeCard } from '@/components/KnowledgeCard';
import { DatabasesLogo } from '@/components/svgs/DatabasesLogo';
import { StatisticsLogo } from '@/components/svgs/StatisticsLogo';
import { MLLogo } from '@/components/svgs/MLLogo';
import { APILogo } from '@/components/svgs/APILogo';
import { CloudLogo } from '@/components/svgs/CloudLogo';
import { EducationCard } from '@/components/EducationCard';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import HireMeDialog from '@/components/HireMeDialog';

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <div className='bg-gradient-to-t from-zinc-900 to-zinc-800 flex gap-8 text-white text-[15px]'>
      <LeftSidebar />      
      <main className='w-full overflow-y-auto  ml-[335px] mr-[127px]'>
        <section className='bg-black flex flex-row items-center px-16 py-10 gap-8'>
          <Image src='/images/robo.jpg' width={200} height={400} alt='robot picture'/>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <span className='font-bold text-5xl'>I'm Johan Zuluaga</span>
              <span className='font-bold text-5xl text-hv_yellow'>Data Scientist</span>
            </div>
            <span>
              Discover the real value of data and AI. Unleash your organization's full potential with cutting-edge AI solutions and data governance. I can help your company define a clear data path from business intelligence, passing through Data Engineering to Artificial Intelligence.
              </span>
            <div>
              <Button text='HIRE ME!'></Button>
            </div>  
            <HireMeDialog open={dialogOpen} setOpen={setDialogOpen} />
          </div>
        </section>
        <section>
          <Header Title="My Knowledge" Description="Description"/>
        </section>
        <section>
          <div className='grid grid-cols-3 gap-4'>
            <KnowledgeCard Svg={ProgrammingLogo} Title='Programming' Description='Description'/>
            <KnowledgeCard Svg={DatabasesLogo} Title='Databases' Description='Description'/>
            <KnowledgeCard Svg={StatisticsLogo} Title='Statistics' Description='Description'/>
            <KnowledgeCard Svg={MLLogo} Title='Machine Learning' Description='Description'/>
            <KnowledgeCard Svg={APILogo} Title='API Development' Description='Description'/>
            <KnowledgeCard Svg={CloudLogo} Title='Cloud Services' Description='Description'/>
          </div>
        </section>
        <section>
          <Header Title="Education" Description="Description"/>
        </section>
        <section className='flex flex-col bg-black px-9'>
          <EducationCard Institution='University of New Mexico' Period='January - May | 2023' Title='Computer Science Exchange Student' Description='Have taken courses on Machine Learning, Deep Learning, Computational Structural Biology, Declarative Programming, and Sustainability.'/>
          <div className="bg-white w-[905px] h-[1.5px] mx-auto"></div>
          <EducationCard Institution='University of Antioquia' Period='February 2018 - Present' Title='Systems Engineering Bachelor' Description='Have learned and put into practice different software development life cycles and methodologies from the analysis and definition of the architecture to the implementation using best practices to ensure the quality of a product that meets the user’s needs.'/>
        </section>
        <section>
          <Header Title='Portafolio' Description='Description'/>
        </section>
        <section className='flex flex-row gap-16 overflow-x-auto scrollbar'>
          <ProjectCard PicPath='images/fakefaces.jpg' Title='Generative AI for Human Faces' Description='Developed a Convolutional Generative Adversarial Network architecture.' Article='https://docs.google.com/document/d/1L7Egg8S4L8jkffS4zfIxR633RpwBXWN9H8RXXl2dTn0/edit' Code=''/>
          <ProjectCard PicPath='images/regression.png' Title='Customer Attraction Model' Description='Developed regression model to predict how valuable a customer will be.' Article='https://docs.google.com/document/d/15a1fd9Qi5nP1BXmcJd-DCpj3yJaXfBeNzsAGVX3N0WY/edit?usp=sharing' Code='https://colab.research.google.com/drive/1sCcpbnBfeCDt61ddVRTNXkIDEFixA5q-?usp=sharing'/>
          <ProjectCard PicPath='images/timeseries.png' Title='Fuel Consumption Time Series' Description='Developed a Time Series  model to predict in different periods ahead.' Article='https://docs.google.com/document/d/1WiLP6zCKeN4f2OcCqKHekVg3bPrHdxJ4TuZ4X4H5ZMg/edit?usp=sharing' Code='https://colab.research.google.com/drive/1RcuAmj9psQbtFeWMrcpagW_oEnJIwNqq?usp=sharing'/>
          <ProjectCard PicPath='images/forecast.png' Title='Forecast Prediction Model' Description='Developed a classification model predicting rain for the next day.' Article='' Code=''/>
        </section>
        <footer className='flex bg-black p-4 mx-auto text-xs mt-12'>
          <span className='mx-auto'>
            &copy; All rights reserved. Made in 2023 by Johan Zuluaga.
          </span>
        </footer>
      </main>
      <aside className='bg-black w-[97px] h-screen fixed right-0 flex flex-col items-center gap-4'>
        <span className='h-20 flex items-end font-bold'>Links</span>
        <LinkLogo Icon={BiLogoFacebook}/>
        <LinkLogo Icon={AiFillInstagram}/>
        <LinkLogo Icon={AiOutlineTwitter}/>
        <LinkLogo Icon={BiLogoLinkedin}/>
        <LinkLogo Icon={AiFillYoutube}/>
        <LinkLogo Icon={AiFillGithub}/>
      </aside>
    </div>
  );
};

export default Index;