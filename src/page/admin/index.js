import React from 'react';
import { useLocation } from 'react-router';
import SideBarAdmin from '../../components/Layout/SideBarAdmin';

const DashBoardsPage = ({children,url}) => {
    const { pathname } = useLocation();
    url(pathname);
        return (
            <div>
                <SideBarAdmin />
                    <div className="relative md:ml-64 bg-gray-100">
                        <div className="px-4 md:px-10 mx-auto w-full h-full">
                            <div className="flex flex-wrap">
                                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 mt-8">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                        <div className="block w-full overflow-x-auto">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    
}

export default DashBoardsPage
