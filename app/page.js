import Form from "./components/Form";
import Title from "./components/Title";
import Celular from "./components/Celular";

export default function Home() {
  return (
    <>
      <div className="flex flex-col place-content-center gap-15">
        <Title/>
        <Form/>
        <Celular/>
      </div>
    </>
  );
}
