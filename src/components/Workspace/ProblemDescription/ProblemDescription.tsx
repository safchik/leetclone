import React from 'react';

type ProblemDescriptionProps = {

};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {

    return (
        <div className='bg-dark-layer-1'>
            {/* TAB */}
            <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
                <div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
                    Description
                </div>
            </div>

            <div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
                <div className='px-5'>
                    {/* Problem heading */}
                    <div className='w-full'>
                        <div className='flex space-x-4'>
                            <div className='flex-1 mr-2 text-lg text-white font-medium'>Description</div>
                        </div>

                        <div className='flex items-center mt-3'>
                            <div
                                className={` inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
                            >
                                Two Sum
                            </div>

                            <div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>

                            </div>

                            <div
                                className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'

                            >


                                <span className='text-xs'>Likes</span>
                            </div>
                            <div
                                className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'

                            >


                                <span className='text-xs'>Dislikes</span>
                            </div>
                            <div
                                className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '

                            >

                            </div>
                        </div>



                        <div className='mt-3 flex space-x-2'>

                        </div>


                        {/* Problem Statement(paragraphs) */}
                        <div className='text-white text-sm'>
                            <div />
                        </div>

                        {/* Examples */}
                        <div className='mt-4'>

                            <div>


                                <div className='example-card'>
                                    <pre>
                                        <strong className='text-white'>Input: </strong>
                                        <br />
                                        <strong>Output:</strong>

                                        <>
                                            <strong>Explanation:</strong>
                                        </>

                                    </pre>
                                </div>
                            </div>

                        </div>

                        {/* Constraints */}
                        <div className='my-8 pb-4'>
                            <div className='text-white text-sm font-medium'>Constraints:</div>
                            <ul className='text-white ml-5 list-disc '>
                                <div />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProblemDescription;