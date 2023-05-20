/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from '../Home/components/ToyCard';

const Category = () => {

    const [category, setCategory] = useState([])
    const [tab, setTab] = useState('car')


    useEffect(() => {
        fetch(`http://localhost:5000/all/${tab}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })

    }, [tab])

    const handleTab = (subCategory) => {
        setTab(subCategory)
    }

    // console.log("category", category);
    // console.log("tab", tab);
    return (
        <div className='bg-gradient-to-r from-[#805858] to-[#5b9f76] p-4'>
            <h2 className='text-center text-3xl mt-2 mb-2'> Categorywise Toys</h2>
            <Tabs>
                <TabList className='text-center mb-3 text-red-900'>
                    <Tab onClick={() => handleTab('car')}>Car</Tab>
                    <Tab onClick={() => handleTab('bike')}>Bike</Tab>
                    <Tab onClick={() => handleTab('truck')}>Truck</Tab>
                </TabList>

                <TabPanel>

                    <div className='grid grid-cols-2 gap-6 w-full mx-auto mb-4' >
                        {
                            category.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className='grid grid-cols-2 gap-6 w-full mx-auto mb-4' >
                        {
                            category.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>

                    <div className='grid grid-cols-2 gap-6 w-full mx-auto mb-4' >
                        {
                            category.map(toy => <ToyCard
                                key={toy._id}
                                toy={toy}
                            ></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;