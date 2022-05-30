import React from 'react';

const Blog = () => {

    // answer of 5 num question and it is problem solving question
    const phones = [
        {name: 'samsung', price: 45000, ram: 16, camara: 30},
        {name: 'infinex', price: 28000, ram: 16, camara: 30},
        {name: 'nokia', price: 15000, ram: 16, camara: 30},
        {name: 'oppo', price: 19000, ram: 16, camara: 30},
        {name: 'redmi', price: 27000, ram: 16, camara: 30}
    ]
    function searchMobile(phones, searchName) {
        const matched = [];
        for (const phone of phones) {
            const name = phone.name;
            if (name.indexOf(searchName) != -1) {
                matched.push(phone);
            }
        }
        return matched;
    }
    const matched = searchMobile(phones, 'samsung');
    console.log(matched);

    /// end of this answer please check it
    return (
        <div className='lg:w-3/4 mx-auto mt-24'>
            <h2 className='text-2xl my-4 text-primary text-center font-bold'>Question & Answer</h2>
            <div tabIndex="0" className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <ul>
                        <li>1. using immutable data structures</li>
                        <li>2. code splitting in react using dynamic import()</li>
                        <li>3. use react Freagment and avoid html additional element as much as possible</li>
                        <li>4. optimize react rendaring isif that component recive only neccessary props</li>
                        <li>5. adoid using index as key for map ues own key like _id , id etc.</li>
                    </ul>
                </div>
            </div>
            <div tabIndex="0" className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2.What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>unit test is a softwere testing. it is test induvidual unit like it test each function object module method etc, it is test smallest piece of code. unit test is a powerful tool for a software quality.
                    </p>
                    <p>because it growth speed, quality and testability and it is work effectivly with legaey code. it is save time for text minimul unit that why.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3.How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>the prototypical inheritance is a feature is javascript es6, it used  to add methods and propeties in object prototypical inheritance is an object.it we need use same function in a separate place when we use prototypical  isit not repet function when the function go to _proto_ as a object.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p>Answer top of this code. please check problem solving code </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;