import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Answer() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // Execute when query changed
    // Use query content to fetch data
  }, [query]);

  return (
    <div  className="flex flex-col min-h-screen">
        <Head>
            <title>回答</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col w-full flex-1 bg-gray-100 px-6">
            <h1 className="text-4xl font-bold mt-16 pb-2" style={{borderBottom: '2px solid black'}}>
                #哪裡買菜
            </h1>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        回答
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="稍微描述一下問題原因" />
                </div>
            </form>
        </main>
        <div style={{position: 'fixed', bottom: '20px'}} className="w-full flex items-center justify-center">
            <button style={{width: '90%'}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">送出</button>
        </div>
    </div>
  )
}
