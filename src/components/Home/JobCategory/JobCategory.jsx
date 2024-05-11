import React from 'react';
import accountIcon from '../../../../public/images/home-icon/accounts1.png';

const JobCategory = (Props) => {

    const categories = Props.categories;
    return (
        <div className="container mx-auto md:flex flex-row gap-5">
            {
                categories.map(category => 
                    <div key={category.id} className="basis-1/4 bg-[#f9f8ff] rounded-lg p-10">
                    <div className="icon bg-[#efecff] flex justify-center p-3 rounded-lg w-3/12">
                        <img src={category.logo} alt="" />
                    </div>
                    <div className="mt-8">
                        <h5 className="text-xl font-bold mb-2">{category.category_name}</h5>
                        <p className="text-base">{category.availability}</p>
                    </div>
                </div>
                )
            }
       
        </div>
    );
};

export default JobCategory;