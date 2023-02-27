import Timer from '@/components/Timer/Timer';

export default function Quiz() {
  return (
    <>
      <h1 style={{ color: 'white' }}>Quiz</h1>
      <Timer numOfSecs={15}></Timer>
    </>
  );
}
