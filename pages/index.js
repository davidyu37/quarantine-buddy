import Head from 'next/head';
import FloatingButton from '../components/FloatingButton';
import TopicCard from '../components/TopicCard';
import { useTopics } from '../lib/swr-hooks';


export default function Home() {
  const { topics, isLoading } = useTopics()

  // TODO: Handle Loading

  console.log(topics);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>如何宅？</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 bg-gray-100">
        <h1 className="text-6xl font-bold text-center mt-16">
         如何宅?
        </h1>

        <FloatingButton text="問問題" link="/question"></FloatingButton>
        {topics.map(topic => {
          return (
            <TopicCard topic={topic} />
          )
        })}
        
      </main>

    </div>
  )
}
