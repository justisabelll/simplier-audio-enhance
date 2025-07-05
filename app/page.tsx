'use client';
import Head from 'next/head';
import { AudioFileForm } from '@/components/forms/audio-file-form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Audio Enhance</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Simple Audio Enhance</h1>
        <p className="text-lg text-gray-700">
          Simple tool to simply enhance audio.
        </p>
        <div className="w-full max-w-md mt-8">
          <AudioFileForm />
        </div>
      </div>
    </>
  );
}
