import CurrencyTable from "../components/CurrentTable";

export default function Page() {
  return (
    <div className="flex flex-col bg-opacity-85 bg-gradient-to-b from-cyan-800 to-cyan-700 place-content-center">
      <CurrencyTable />
    </div>
  );
}