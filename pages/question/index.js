import Head from 'next/head';
import { useState } from 'react';



export default function Question() {
  
  const [ state, setState ] = useState({});

  const bindInput = (e) => {
      const { target: { value, id }} = e;
      setState({
          ...state,
          [id]: value
      });
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    const { title, content } = state;
    console.log('submitting this', title, content);
    e.preventDefault()
    try {
        const res = await fetch('/api/topics/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            content,
            author: "Tester",
            avatarUrl: "https://i.pravatar.cc/150?img=3"
        }),
        })
        // setSubmitting(false)
        const json = await res.json()
        if (!res.ok) throw Error(json.message)
        console.log('Result', json);
        // Router.push('/')
    } catch (e) {
        throw Error(e.message)
    }
  }

  return (
    <div  className="flex flex-col min-h-screen">
        <Head>
            <title>問問題</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col w-full flex-1 bg-gray-100 px-6">
            <h1 className="text-4xl font-bold mt-16 pb-2" style={{borderBottom: '2px solid black'}}>
                問問題
            </h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        標題
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="問題標題" onChange={bindInput}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        描述
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" type="text" placeholder="稍微描述一下問題原因" onChange={bindInput}/>
                </div>
            </form>
        </main>
        <div style={{position: 'fixed', bottom: '20px'}} className="w-full flex items-center justify-center">
            <button style={{width: '90%'}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={submitHandler}>送出</button>
        </div>
    </div>
  )
}
