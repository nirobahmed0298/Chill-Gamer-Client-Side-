import React from 'react';
import alienImg from '../../assets/Alien.webp';
import flintImg from '../../assets/Flint.webp';
import onyourTailImg from '../../assets/OnYourTaill.webp';
import fairyTailImg from '../../assets/FairyTail.webp';
import cabinFactoryImg from '../../assets/Cabin Factory.webp';
import stretchyImg from '../../assets/Stretchy.webp';
const NewRelease = () => {
    return (
        <div className="p-2">
            <h1 className="text-3xl font-bold my-4 text-center">New Releases</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-10 gap-4">
                {/* Card 1 */}
                <div className=" bg-base-100 shadow-lg rounded-lg hover:border border-green-500 transition duration-1000 overflow-hidden">
                    <img
                        src={alienImg}
                        alt="Alien: Rogue Incursion"
                        className=" h-52 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Alien: Rogue Incursion</h2>
                        <div className="flex items-center mt-2">
                            <div className="px-2 py-1 text-sm font-medium rounded-full text-white bg-green-500">
                                75
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">Generally Favorable</span>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className=" bg-base-100 shadow-lg rounded-lg hover:border border-green-500 transition duration-1000 overflow-hidden">
                    <img
                        src={flintImg}
                        alt="Flint: Treasure of Oblivion"
                        className=" h-52 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Flint: Treasure of Oblivion</h2>
                        <div className="flex items-center mt-2">
                            <div className="px-2 py-1 text-sm font-medium rounded-full text-white bg-yellow-500">
                                62
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">Mixed or Average</span>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className=" bg-base-100 shadow-lg rounded-lg hover:border border-green-500 transition duration-1000 overflow-hidden">
                    <img
                        src={onyourTailImg}
                        alt="On Your Tail"
                        className=" h-52 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">On Your Tail</h2>
                        <div className="flex items-center mt-2">
                            <div className="px-2 py-1 text-sm font-medium rounded-full text-white bg-green-500">
                                79
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">Generally Favorable</span>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className=" bg-base-100 shadow-lg rounded-lg hover:border border-green-500 transition duration-1000 overflow-hidden">
                    <img
                        src={fairyTailImg}
                        alt="Fairy Tail 2"
                        className=" h-52 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Fairy Tail 2</h2>
                        <div className="flex items-center mt-2">
                            <div className="px-2 py-1 text-sm font-medium rounded-full text-white bg-yellow-500">
                                67
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">Mixed or Average</span>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className=" bg-base-100 shadow-lg rounded-lg hover:border border-green-500 transition duration-1000 overflow-hidden">
                    <img
                        src={cabinFactoryImg}
                        alt="The Cabin Factory"
                        className=" h-52 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">The Cabin Factory</h2>
                        <div className="flex items-center mt-2">
                            <div className="px-2 py-1 text-sm font-medium rounded-full text-white bg-yellow-500">
                                68
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">Mixed or Average</span>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className=" bg-base-100 shadow-lg rounded-lg hover:border border-green-500 transition duration-1000 overflow-hidden">
                    <img
                        src={stretchyImg}
                        alt="Completely Stretchy"
                        className=" h-52 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Completely Stretchy</h2>
                        <div className="flex items-center mt-2">
                            <div className="px-2 py-1 text-sm font-medium rounded-full text-white bg-yellow-500">
                                74
                            </div>
                            <span className="ml-2 text-gray-600 text-sm">Mixed or Average</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRelease;