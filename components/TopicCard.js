import Link from 'next/link';

export default function TopicCard(props) {

    return (

        <Link href={`/topic?id=123`}>
            <div className="flex flex-col bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mt-10 p-4">
                <div className="flex" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2 className="text-2xl font-bold">
                        #哪裡買菜?
                    </h2>
                    <small className="text-sm text-gray-700">22h ago</small>
                </div>
                <div className="flex py-4 items-center">
                    <img className="w-8 h-8 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1">匿名的人</h2>
                </div>
                <div>
                    <p className="text-gray-700 text-sm">
                        Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                    </p>
                    <div className="mt-4 flex items-center" style={{justifyContent: 'space-between'}}>
                        <div className="flex mr-2 text-gray-700 text-sm mr-8">
                        <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                        </svg>
                        <span>8</span>
                        </div>
                        <div className="flex mr-2 text-gray-700 text-sm mr-4">
                        <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                            </svg>
                        <span>share</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        
    )

}