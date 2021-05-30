export default function AnswerCard(props) {

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl mt-10 p-4">
            <div className="flex justify-between">
                <div>
                    <div className="flex justify-between items-center">
                        <small className="text-sm text-gray-700">22h ago</small>
                    </div>
                    <div className="flex py-4 items-center">
                        <img className="w-8 h-8 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">匿名的人</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" /></svg>
                    <div>13</div>
                    <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
                </div>
            </div>
            <div>
                <p className="text-gray-700 text-sm">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                </p>
                <div className="mt-4 flex items-center justify-end">
                    <div className="flex mr-2 text-gray-700 text-sm mr-4">
                    <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                    </svg>
                    <span>share</span>
                    </div>
                </div>
            </div>
        </div>
    )

}