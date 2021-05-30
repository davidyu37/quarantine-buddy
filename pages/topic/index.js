import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import FloatingButton from '../../components/FloatingButton';
import AnswerCard from '../../components/AnswerCard';

export default function Topic() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // Execute when query changed
    // Use query content to fetch data
  }, [query])
  return (
    <div  className="flex flex-col min-h-screen">
        <Head>
            <title>＃哪裡買菜？</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col w-full flex-1 bg-gray-100">
            <h1 className="text-4xl font-bold mt-16">
                ＃哪裡買菜？
            </h1>
            <div className="flex justify-between items-center px-6">
                <div className="flex py-4 items-center">
                    <img className="w-8 h-8 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1">匿名的人</h2>
                </div>
                <small className="text-sm text-gray-700">22h ago</small>
            </div>
            <div className="px-6">
                <p className="text-gray-700 text-sm">
                    Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                </p>
            </div>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
        </main>
        <FloatingButton text="回答"></FloatingButton>
    </div>
  )
}
