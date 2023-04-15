import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircle } from 'react-icons/fa';
import Image from 'next/legacy/image';
import { libre_caslon_text } from '@/utils';

type props = {
    events: Litevent[];
};

const Timline = ({events}:props) => {
  return (
    <div className="mt-10">
        <h1 className={"m-auto text-4xl text-center pb-10 " + libre_caslon_text.className}>Timeline</h1>
        <VerticalTimeline className="w-full">
            {events?.map(function(item:any,index:number){
                return(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work p-0"
                        contentStyle={{ background: '#FFE1BC', color: '#000' ,borderRadius:'1rem'}}
                        contentArrowStyle={{ borderRight: '7px solid  #DA8E63' }}
                        date={item.date}
                        dateClassName="relative w-full text-center xl:text-left dark:bg-[#2C1810] dark:text-white rounded-2xl"
                        key ={index}
                        iconStyle={{ background: '#DA8E63', color: '#fff' }}
                        icon={<FaCircle />}
                    >
                        <div id={`${item.title}`} className="flex-col m-0 gap-y-11 cursor-pointer transition transform duration-300 ease-oute w-full rounded-xl">
                            <div className="relative h-80 w-full flex-shrink-0 m-auto">
                                <Image src={item.img} layout="fill" alt="" className="rounded-xl"/>
                            </div>
                            <div className={"flex flex-col pl-2 md:pl-5 " + libre_caslon_text.className}>
                                <h3 className="text-lg mt-1 mx-auto">{item.title}</h3>
                                <p className="text-sm text-gray-500 mt-4 mb-4">{item.description}</p>
                                {item.link && <a href={item.link} className="text-center px-4 mx-auto my-2 py-2 rounded-md bg-[#F8F3ED] dark:bg-[#603726] dark:text-white hover:shadow-lg active:scale-90 transition-transform duration ease-out">Register here</a>}
                            </div>
                        </div>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    </div>
  );
};

export default Timline;
  