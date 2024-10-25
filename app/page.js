import Form from "./components/Form";
import Title from "./components/Title";
import Celular from "./components/Celular";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[90vh] place-content-center gap-15 bg-opacity-85 bg-gradient-to-b from-cyan-800 to-cyan-700">
        <Title/>
        <Form/>
      </div>
    </>
  );
}
